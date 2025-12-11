# Flask Backend for UrbanBeat Contact Form

## Setup Instructions

### 1. Install Python Dependencies
```bash
cd backend
pip install -r requirements.txt
```

### 2. Run the Flask Server
```bash
python app.py
```

The server will:
- Start on http://localhost:5000
- Initialize the database table automatically
- Enable CORS for frontend requests

### 3. Test the API
Health check endpoint:
```bash
curl http://localhost:5000/api/health
```

## API Endpoints

### POST /api/contact
Submit a contact form message

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "General Inquiry",
  "message": "Hello, I have a question..."
}
```

**Response (Success):**
```json
{
  "message": "Message sent successfully!"
}
```

**Response (Error):**
```json
{
  "error": "All fields are required"
}
```

### GET /api/health
Check if the server is running

**Response:**
```json
{
  "status": "healthy"
}
```

## Database Schema

Table: `contact_messages`

| Column | Type | Description |
|--------|------|-------------|
| id | SERIAL | Primary key |
| name | VARCHAR(255) | Sender's name |
| email | VARCHAR(255) | Sender's email |
| subject | VARCHAR(255) | Message subject |
| message | TEXT | Message content |
| created_at | TIMESTAMP | Submission time |

## Environment Variables

Create a `.env` file in the backend directory:

```
DATABASE_URL=postgresql://your-neon-database-url
PORT=5000
```
