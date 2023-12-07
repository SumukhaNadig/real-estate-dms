# Real Estate Data Management

This repository contains the backend and frontend code for the Real Estate App, built with Node.js, Express, React and MongoDB.

## Getting Started with Backend

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js
- npm
- MongoDB

### Installing

1. Clone the repo:
   ```bash
   git clone https://github.com/SumukhaNadig/real-estate-dms.git
   cd real-estate-dms/backend

2. Install npm packages:
   ```bash
   npm install

3. Setup your environment variables in .env file and start the server
   ```bash
   node src/app.js

4. Add the URI to your MongoDB DB as well as the secret key that will be used for auth in .env file

### API Endpoints
1. GET /properties - Retrieve all properties.
2. GET /properties/:id - Retrieve a single property by ID.
3. POST /properties - Add a new property (requires authentication).
4. POST /users/register - Register a new admin user.
5. POST /users/login - Login for admin users.

### Getting Started with Frontend

### Installing

1. Once the above repo is cloned, cd into frontend directory and install the packages
   ```bash
   cd real-estate-dms/frontend
   npm install

2. Start the frontend with
   ```bash
   npm start
