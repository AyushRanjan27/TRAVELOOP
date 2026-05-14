# Traveloop - Full Stack Travel Planning Application

A modern travel planning web application built with Node.js, Express, MongoDB, and vanilla JavaScript.

## 🚀 Quick Deploy

### Deploy Frontend Only (Static) - Works Without Backend!

The frontend includes complete fallback data - no server needed!

1. **Netlify**: https://app.netlify.com → Drag & drop project folder
2. **Vercel**: https://vercel.com → Connect GitHub repo → Deploy as static site
3. **GitHub Pages**: Repository Settings → Pages → Enable

### Deploy Full Stack (Backend + Frontend)

**Render.com (Recommended - Free Tier):**
1. Push to GitHub: `git add . && git commit -m "Traveloop" && git push`
2. Create account at [render.com](https://render.com)
3. Create Web Service:
   - Build Command: `cd backend && npm install`
   - Start Command: `cd backend && node server.js`
4. Add Environment Variables in Render dashboard:
   - `MONGODB_URI`: MongoDB Atlas connection string
   - `JWT_SECRET`: Any 32+ character secret
   - `JWT_EXPIRE`: `7d`
   - `NODE_ENV`: `production`
5. Create free [MongoDB Atlas](https://mongodb.com/atlas) database
6. Whitelist IP `0.0.0.0/0` in MongoDB Atlas

**Railway.app (Easiest):**
```bash
npm install -g @railway-cli
railway login
railway init
railway add mongodb
railway up
```

See [DEPLOYMENT.md](./DEPLOYMENT.md) for more platforms.

## Features

- **Destinations browsing** - Browse popular Indian destinations with detailed information
- **Trip planning** - Plan trips with cost estimation and itinerary suggestions
- **User authentication** - Register and login with JWT-based authentication
- **Favorites** - Save favorite destinations to your account
- **Contact form** - Get in touch with the Traveloop team
- **MongoDB backend** - Full REST API with proper data modeling
- **Offline fallback** - Works without backend using static data

## Tech Stack

### Backend
- Node.js & Express.js
- MongoDB with Mongoose ODM
- JWT for authentication
- bcryptjs for password hashing
- Helmet & CORS for security
- Morgan for request logging

### Frontend
- Vanilla JavaScript (ES6+)
- CSS3 with custom properties
- HTML5
- LocalStorage for fallback data

## Project Structure

```
Traveloop/
├── backend/
│   ├── config/
│   │   └── db.js          # MongoDB connection
│   ├── middleware/
│   │   └── auth.js        # JWT authentication middleware
│   ├── models/
│   │   ├── User.js        # User model
│   │   ├── Destination.js # Destination model
│   │   ├── Trip.js        # Trip model
│   │   └── Contact.js     # Contact model
│   ├── routes/
│   │   ├── auth.js        # Authentication routes
│   │   ├── users.js       # User profile routes
│   │   ├── destinations.js# Destinations routes
│   │   ├── trips.js       # Trips routes
│   │   └── contacts.js    # Contact routes
│   ├── utils/
│   │   └── seed.js        # Database seeding script
│   ├── server.js          # Main server file
│   └── package.json
├── css/
│   ├── style.css          # Main stylesheet
│   └── js/
│       └── script.js      # Frontend JavaScript
├── index.html             # Home page
├── destinations.html      # Destinations listing
├── details.html           # Destination details
├── profile.html           # User profile
├── login.html             # Login page
├── signup.html            # Signup page
├── contact.html           # Contact page
├── .env.example           # Environment variables template
├── README.md
└── DEPLOYMENT.md          # Hosting guide
```

## Local Development

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Installation

1. Install dependencies:
```bash
cd backend
npm install
```

2. Create environment file:
```bash
cp backend/.env.example backend/.env
```

3. Start MongoDB (if local):
```bash
mongod
```

4. Seed database:
```bash
npm run seed
```

5. Start development server:
```bash
npm run dev
```

6. Open frontend: `index.html` in browser or use Live Server

### Environment Variables

```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/Traveloop
JWT_SECRET=your-secret-key-min-32-chars
JWT_EXPIRE=7d
FRONTEND_URL=http://localhost:5500
NODE_ENV=development
```

## API Endpoints

### Authentication
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register new user |
| POST | `/api/auth/login` | Login user |
| GET | `/api/auth/me` | Get current user |
| POST | `/api/auth/logout` | Logout user |

### Users
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/users/profile` | Get user profile |
| PUT | `/api/users/profile` | Update profile |
| GET | `/api/users/favorites` | Get favorites |
| POST | `/api/users/favorites/:id` | Add favorite |
| DELETE | `/api/users/favorites/:id` | Remove favorite |
| GET | `/api/users/trips` | Get user trips |

### Destinations
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/destinations` | Get all destinations |
| GET | `/api/destinations/featured` | Get featured |
| GET | `/api/destinations/:id` | Get single destination |

### Trips
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/trips` | Get user trips |
| POST | `/api/trips` | Create trip |
| DELETE | `/api/trips/:id` | Delete trip |

### Contacts
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/contacts` | Submit contact form |

## Frontend Pages

| Page | Description |
|------|-------------|
| `index.html` | Home page with featured destinations |
| `destinations.html` | Browse all with search & filters |
| `details.html` | Destination details & trip planner |
| `login.html` | User login |
| `signup.html` | New user registration |
| `profile.html` | User profile & settings |
| `contact.html` | Contact form |

## Fallback Mode

The frontend works completely standalone:

- **Static destinations** - All 8 destinations built-in
- **LocalStorage** - Favorites, trips, contacts stored locally
- **No API calls** - All features work without backend
- **Seamless upgrade** - Connects to backend when available

## License

MIT License - Ayush Ranjan

