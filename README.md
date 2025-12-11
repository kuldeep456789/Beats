# UrbanBeat - Youth Event Collective 🏙️

A modern, full-stack web application for a youth event collective featuring AI-powered event generation, real-time contact form submissions, and a stunning dark-themed UI.

![UrbanBeat Banner](https://picsum.photos/1200/400?random=1)

## 🌟 Overview

UrbanBeat is a comprehensive event management platform designed to connect the next generation through immersive music, art, and culture experiences. The platform features a sleek, modern interface with gradient accents, smooth animations, and a fully functional contact system backed by a PostgreSQL database.

## 🎯 Features

- **Dynamic Landing Page** - Eye-catching hero section with gradient text and smooth animations
- **Event Showcase** - Display upcoming events with images, tags, and detailed information
- **Interactive Gallery** - Bento-style grid layout showcasing event moments
- **Contact Form** - Full-stack contact system with database persistence
- **AI Integration** - Gemini AI for generating fresh event ideas (optional)
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Dark Theme** - Modern dark UI with vibrant accent colors (#00ff88, #00d4ff, #ff0080)

## 🛠️ Tech Stack

### Frontend

#### **React 19.2.1**
- **Why**: Latest version with improved performance and concurrent features
- **Usage**: Component-based UI architecture for reusable, maintainable code

#### **TypeScript 5.8.2**
- **Why**: Type safety prevents runtime errors and improves developer experience
- **Usage**: Strongly typed components, props, and state management

#### **Vite 6.2.0**
- **Why**: Lightning-fast HMR (Hot Module Replacement) and optimized builds
- **Usage**: Development server and build tool, significantly faster than Create React App

#### **Tailwind CSS (CDN)**
- **Why**: Utility-first CSS framework for rapid UI development
- **Usage**: Styling all components with custom color palette and responsive design

#### **Lucide React 0.559.0**
- **Why**: Modern, customizable icon library with tree-shaking support
- **Usage**: Icons throughout the UI (Mail, Phone, Send, Menu, etc.)

#### **Google Fonts**
- **Fonts**: Inter (body text), Space Grotesk (headings)
- **Why**: Professional typography that enhances readability and brand identity

### Backend

#### **Flask 3.0.0**
- **Why**: Lightweight Python web framework, perfect for REST APIs
- **Usage**: API server handling contact form submissions

#### **pg8000 1.30.3**
- **Why**: Pure Python PostgreSQL driver, no compilation needed (Windows-compatible)
- **Usage**: Database connection to Neon PostgreSQL

#### **Flask-CORS 4.0.0**
- **Why**: Enable Cross-Origin Resource Sharing for frontend-backend communication
- **Usage**: Allow requests from Vite dev server to Flask API

#### **python-dotenv 1.0.0**
- **Why**: Load environment variables from .env files
- **Usage**: Secure database credentials and configuration

### Database

#### **Neon PostgreSQL**
- **Why**: Serverless PostgreSQL with automatic scaling and branching
- **Usage**: Store contact form submissions with full ACID compliance

### Optional AI Integration

#### **Google Gemini AI 1.33.0**
- **Why**: Advanced AI for generating creative event ideas
- **Usage**: Generate fresh event content dynamically (requires API key)

## 📁 Project Structure

```
URBAEWKQETJ-main/
├── components/              # React components
│   ├── About.tsx           # About section with features
│   ├── Contact.tsx         # Contact form with backend integration
│   ├── Events.tsx          # Event cards display
│   ├── Footer.tsx          # Footer with social links
│   ├── Gallery.tsx         # Bento-grid image gallery
│   ├── Hero.tsx            # Landing hero section
│   └── Navbar.tsx          # Navigation bar
├── services/               # Service layer
│   └── geminiService.ts    # AI event generation (optional)
├── backend/                # Flask backend
│   ├── app.py             # Flask server & API endpoints
│   ├── requirements.txt   # Python dependencies
│   ├── .env              # Environment variables
│   └── README.md         # Backend documentation
├── App.tsx                # Main app component
├── index.tsx             # React entry point
├── index.html            # HTML template
├── types.ts              # TypeScript type definitions
├── vite.config.ts        # Vite configuration + proxy
├── tsconfig.json         # TypeScript configuration
├── package.json          # Node dependencies
└── .env                  # Frontend environment variables
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher)
- **Python** (v3.8 or higher)
- **pip** (Python package manager)
- **Neon Database** account (or any PostgreSQL database)

### Installation

#### 1. Clone the Repository

```bash
git clone <repository-url>
cd URBAEWKQETJ-main
```

#### 2. Frontend Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Frontend will run on: **http://localhost:3000**

#### 3. Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install Python dependencies
pip install -r requirements.txt

# Start Flask server
python app.py
```

Backend will run on: **http://localhost:5000**

### Environment Variables

#### Frontend `.env`
```env
DATABASE_URL=your-neon-database-url
GEMINI_API_KEY=your-gemini-api-key-here  # Optional
```

#### Backend `backend/.env`
```env
DATABASE_URL=your-neon-database-url
PORT=5000
```

## 🗄️ Database Schema

### `contact_messages` Table

| Column | Type | Description |
|--------|------|-------------|
| `id` | SERIAL | Primary key (auto-increment) |
| `name` | VARCHAR(255) | Sender's name |
| `email` | VARCHAR(255) | Sender's email address |
| `subject` | VARCHAR(255) | Message subject/category |
| `message` | TEXT | Full message content |
| `created_at` | TIMESTAMP | Submission timestamp |

The table is automatically created when the Flask server starts.

## 🔌 API Endpoints

### POST `/api/contact`
Submit a contact form message.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "General Inquiry",
  "message": "Hello, I have a question..."
}
```

**Response (200):**
```json
{
  "message": "Message sent successfully!"
}
```

### GET `/api/health`
Health check endpoint.

**Response (200):**
```json
{
  "status": "healthy"
}
```

## 🎨 Design System

### Color Palette

- **Primary Green**: `#00ff88` - CTAs, highlights, success states
- **Cyan**: `#00d4ff` - Gradients, secondary accents
- **Pink**: `#ff0080` - Accent color, hover states
- **Dark Background**: `#0a0a0a`, `#0f0f0f`, `#1a1a2e`
- **Text**: `#f1f5f9` (white), `#94a3b8` (slate-400)

### Typography

- **Headings**: Space Grotesk (bold, modern)
- **Body**: Inter (clean, readable)

### Components

- **Glassmorphism**: Backdrop blur effects with semi-transparent backgrounds
- **Gradients**: Multi-color gradients for visual interest
- **Rounded Corners**: Consistent border-radius for modern feel
- **Hover Effects**: Scale transforms and color transitions

## 🔧 Development

### Running Both Servers

You need **two terminals** running simultaneously:

**Terminal 1 - Frontend:**
```bash
npm run dev
```

**Terminal 2 - Backend:**
```bash
cd backend
python app.py
```

### Build for Production

```bash
# Frontend build
npm run build

# Preview production build
npm run preview
```

## 🐛 Troubleshooting

### Issue: psycopg2-binary installation fails on Windows

**Solution**: The project uses `pg8000` instead, which is a pure Python driver that doesn't require compilation.

### Issue: Contact form shows "Failed to send message"

**Check:**
1. Flask server is running on port 5000
2. Database URL is correct in `backend/.env`
3. No CORS errors in browser console

### Issue: Vite proxy not working

**Solution**: Ensure both servers are running and restart Vite dev server after changing `vite.config.ts`.

## 📝 Why This Tech Stack?

### Frontend Choices

1. **React + TypeScript**: Industry standard for type-safe, component-based UIs
2. **Vite**: 10x faster than webpack-based tools, better DX
3. **Tailwind CSS**: Rapid prototyping without writing custom CSS
4. **Lucide Icons**: Modern, tree-shakeable, consistent icon set

### Backend Choices

1. **Flask**: Lightweight, easy to set up, perfect for small APIs
2. **pg8000**: Pure Python, no compilation, Windows-compatible
3. **Neon PostgreSQL**: Serverless, auto-scaling, modern PostgreSQL

### Architecture Benefits

- **Separation of Concerns**: Frontend and backend are independent
- **Scalability**: Can deploy frontend (Vercel) and backend (Railway) separately
- **Type Safety**: TypeScript prevents bugs before runtime
- **Developer Experience**: Fast HMR, auto-reload, clear error messages

## 🚀 Deployment

### Frontend (Vercel/Netlify)

```bash
npm run build
# Deploy dist/ folder
```

### Backend (Railway/Render/Heroku)

```bash
# Ensure requirements.txt is up to date
pip freeze > requirements.txt

# Deploy with Procfile:
web: python backend/app.py
```

## 📄 License

This project is open source and available under the MIT License.

## 👥 Contact

- **Email**: kuldeeppraj2002@gmail.com
- **Phone**: +91 8235494985

## 🙏 Acknowledgments

- **Tailwind CSS** for the utility-first CSS framework
- **Lucide** for the beautiful icon set
- **Neon** for serverless PostgreSQL
- **Google Fonts** for typography
- **Picsum** for placeholder images

---

**Built with ❤️ by the UrbanBeat Team**

*Unleash the Rhythm of the City* 🎵
