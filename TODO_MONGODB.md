# Traveloop MongoDB Integration - Implementation Plan

## Overview
Transform Traveloop from a frontend-only application to a full-stack MERN (MongoDB, Express, React, Node.js) application with persistent database storage.

## Implementation Steps

### Phase 1: Backend Setup
- [ ] Create backend directory structure
- [ ] Create package.json with required dependencies
- [ ] Create MongoDB connection configuration
- [ ] Create environment variables file (.env)

### Phase 2: MongoDB Models
- [ ] Create User model with schema validation
- [ ] Create Destination model with all travel data
- [ ] Create Trip model for trip planning
- [ ] Create Contact model for form submissions

### Phase 3: Authentication System
- [ ] Create JWT authentication middleware
- [ ] Implement password hashing utilities
- [ ] Create auth routes (register, login, logout)

### Phase 4: API Routes
- [ ] Create user routes (profile, favorites, settings)
- [ ] Create destination routes (CRUD operations)
- [ ] Create trip routes (trip planning)
- [ ] Create contact routes (form submissions)

### Phase 5: Main Server
- [ ] Create Express server with CORS
- [ ] Connect all routes to server
- [ ] Add error handling middleware

### Phase 6: Frontend Integration
- [ ] Update script.js to use API calls instead of localStorage
- [ ] Implement JWT token management
- [ ] Update login/signup to use backend API
- [ ] Update profile page to fetch data from server

### Phase 7: Testing & Documentation
- [ ] Test all API endpoints
- [ ] Create setup documentation
- [ ] Verify all features work correctly

## File Structure
```
Traveloop/
├── backend/
│   ├── config/
│   │   └── db.js           # MongoDB connection
│   ├── models/
│   │   ├── User.js         # User schema
│   │   ├── Destination.js  # Destination schema
│   │   ├── Trip.js         # Trip schema
│   │   └── Contact.js      # Contact schema
│   ├── middleware/
│   │   └── auth.js         # JWT authentication
│   ├── routes/
│   │   ├── auth.js         # Authentication routes
│   │   ├── users.js        # User routes
│   │   ├── destinations.js # Destination routes
│   │   ├── trips.js        # Trip routes
│   │   └── contacts.js     # Contact routes
│   ├── utils/
│   │   └── helpers.js      # Utility functions
│   ├── server.js           # Main server file
│   └── .env.example        # Environment variables template
├── package.json
└── README.md               # Setup instructions
```

## Dependencies
- express - Web framework
- mongoose - MongoDB ODM
- dotenv - Environment variables
- cors - Cross-origin resource sharing
- bcryptjs - Password hashing
- jsonwebtoken - JWT tokens
- express-validator - Input validation
- helmet - Security headers
- morgan - HTTP request logging

## API Endpoints

### Authentication
- POST /api/auth/register - Register new user
- POST /api/auth/login - Login user
- POST /api/auth/logout - Logout user
- GET /api/auth/me - Get current user

### Users
- GET /api/users/profile - Get user profile
- PUT /api/users/profile - Update profile
- GET /api/users/favorites - Get favorites
- POST /api/users/favorites/:destinationId - Add favorite
- DELETE /api/users/favorites/:destinationId - Remove favorite
- PUT /api/users/settings - Update settings

### Destinations
- GET /api/destinations - Get all destinations
- GET /api/destinations/:id - Get single destination
- GET /api/destinations/category/:category - Get by category
- GET /api/destinations/search - Search destinations

### Trips
- GET /api/trips - Get user's trips
- POST /api/trips - Create new trip
- GET /api/trips/:id - Get single trip
- PUT /api/trips/:id - Update trip
- DELETE /api/trips/:id - Delete trip

### Contacts
- POST /api/contacts - Submit contact form
- GET /api/contacts - Get all contacts (admin)


