from flask import Flask, request, jsonify
from flask_cors import CORS
import pg8000
import os
from dotenv import load_dotenv
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import traceback

load_dotenv()

app = Flask(__name__)
CORS(app)

DATABASE_URL = os.getenv('DATABASE_URL')
SMTP_SERVER = os.getenv('SMTP_SERVER', 'smtp.gmail.com')
SMTP_PORT = int(os.getenv('SMTP_PORT', 587))
SMTP_USERNAME = os.getenv('SMTP_USERNAME')
SMTP_PASSWORD = os.getenv('SMTP_PASSWORD')
RECIPIENT_EMAIL = os.getenv('RECIPIENT_EMAIL', 'kuldeeppraj2002@gmail.com')

def get_db_connection():
    from urllib.parse import urlparse
    result = urlparse(DATABASE_URL)
    conn = pg8000.connect(
        user=result.username,
        password=result.password,
        host=result.hostname,
        port=result.port or 5432,
        database=result.path[1:],
        ssl_context=True
    )
    return conn

def send_email(name, email, subject, message):
    try:
        if not SMTP_USERNAME or not SMTP_PASSWORD:
            print("Warning: SMTP credentials not configured. Email not sent.")
            return False, "Email service not configured"
        
        print(f"\n{'='*60}")
        print(f"📧 Attempting to send email...")
        print(f"From: {SMTP_USERNAME}")
        print(f"To: {RECIPIENT_EMAIL}")
        print(f"Subject: UrbanBeat Contact Form: {subject}")
        print(f"{'='*60}\n")
        
        msg = MIMEMultipart('alternative')
        msg['From'] = SMTP_USERNAME
        msg['To'] = RECIPIENT_EMAIL
        msg['Subject'] = f"UrbanBeat Contact Form: {subject}"
        
        html_body = f"""
        <html>
            <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
                <div style="max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9; border-radius: 10px;">
                    <h2 style="color: #00ff88; border-bottom: 2px solid #00ff88; padding-bottom: 10px;">
                        New Contact Form Submission
                    </h2>
                    
                    <div style="background-color: white; padding: 20px; border-radius: 8px; margin-top: 20px;">
                        <p><strong style="color: #555;">Name:</strong> {name}</p>
                        <p><strong style="color: #555;">Email:</strong> {email}</p>
                        <p><strong style="color: #555;">Subject:</strong> {subject}</p>
                        
                        <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #eee;">
                            <p><strong style="color: #555;">Message:</strong></p>
                            <p style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; white-space: pre-wrap;">
                                {message}
                            </p>
                        </div>
                    </div>
                    
                    <div style="margin-top: 20px; padding: 15px; background-color: #e8f5e9; border-radius: 5px;">
                        <p style="margin: 0; font-size: 12px; color: #666;">
                            This email was sent from the UrbanBeat contact form.
                        </p>
                    </div>
                </div>
            </body>
        </html>
        """
        
        text_body = f"""
        New Contact Form Submission
        
        Name: {name}
        Email: {email}
        Subject: {subject}
        
        Message:
        {message}
        
        ---
        This email was sent from the UrbanBeat contact form.
        """
        
        part1 = MIMEText(text_body, 'plain')
        part2 = MIMEText(html_body, 'html')
        msg.attach(part1)
        msg.attach(part2)
        
        print(f"🔌 Connecting to {SMTP_SERVER}:{SMTP_PORT}...")
        with smtplib.SMTP(SMTP_SERVER, SMTP_PORT) as server:
            print(f"🔒 Starting TLS encryption...")
            server.starttls()
            print(f"🔑 Logging in as {SMTP_USERNAME}...")
            server.login(SMTP_USERNAME, SMTP_PASSWORD)
            print(f"📤 Sending email...")
            server.send_message(msg)
        
        print(f"\n{'='*60}")
        print(f"✅ EMAIL SENT SUCCESSFULLY!")
        print(f"📬 Check your Gmail inbox: {RECIPIENT_EMAIL}")
        print(f"📁 Also check: Spam, All Mail, Sent folders")
        print(f"{'='*60}\n")
        return True, "Email sent successfully"
        
    except Exception as e:
        error_msg = f"Email sending failed: {str(e)}"
        print(f"\n{'='*60}")
        print(f"❌ EMAIL SENDING FAILED!")
        print(error_msg)
        print(f"{'='*60}\n")
        traceback.print_exc()
        return False, error_msg

def init_db():
    conn = get_db_connection()
    cur = conn.cursor()
    cur.execute('''
        CREATE TABLE IF NOT EXISTS contact_messages (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL,
            subject VARCHAR(255) NOT NULL,
            message TEXT NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    ''')
    conn.commit()
    cur.close()
    conn.close()
    print("Database initialized successfully!")

@app.route('/api/contact', methods=['POST'])
def submit_contact():
    try:
        data = request.get_json()
        
        name = data.get('name')
        email = data.get('email')
        subject = data.get('subject')
        message = data.get('message')
        
        if not all([name, email, subject, message]):
            return jsonify({'error': 'All fields are required'}), 400
        
        conn = get_db_connection()
        cur = conn.cursor()
        
        cur.execute(
            'INSERT INTO contact_messages (name, email, subject, message) VALUES (%s, %s, %s, %s)',
            (name, email, subject, message)
        )
        
        conn.commit()
        cur.close()
        conn.close()
        
        print(f"Message saved to database from {name} ({email})")
        
        email_sent, email_message = send_email(name, email, subject, message)
        
        if email_sent:
            return jsonify({
                'message': 'Message sent successfully!',
                'email_sent': True
            }), 200
        else:
            return jsonify({
                'message': 'Message saved but email notification failed',
                'email_sent': False,
                'email_error': email_message
            }), 200
        
    except Exception as e:
        error_msg = f"Error: {str(e)}"
        print(error_msg)
        traceback.print_exc()
        return jsonify({'error': 'Failed to send message', 'details': str(e)}), 500

@app.route('/api/health', methods=['GET'])
def health_check():
    return jsonify({'status': 'healthy'}), 200

if __name__ == '__main__':
    init_db()
    app.run(debug=True, port=5000)
