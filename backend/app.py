from flask import Flask, request, jsonify
from flask_cors import CORS
import pg8000
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app)

DATABASE_URL = os.getenv('DATABASE_URL')

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
        
        return jsonify({'message': 'Message sent successfully!'}), 200
        
    except Exception as e:
        print(f"Error: {str(e)}")
        return jsonify({'error': 'Failed to send message'}), 500

@app.route('/api/health', methods=['GET'])
def health_check():
    return jsonify({'status': 'healthy'}), 200

if __name__ == '__main__':
    init_db()
    app.run(debug=True, port=5000)
