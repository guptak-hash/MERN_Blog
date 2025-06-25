📝 MERN Blog App
A full-stack blog application with user authentication, CRUD operations, and image uploads.

🔥 Features
- User Auth: Signup, Login, Logout with JWT & cookies.
- Blog Management: Create, Read, Update, and Delete posts.
- Rich Text Editor: Supports formatted content (React Quill).
- Image Uploads: Multer for handling blog cover images.
- Responsive UI: Clean, user-friendly interface.

🛠 Tech Stack
Frontend
- React.js (Vite)
- React Router v7
- React Quill (Rich Text Editor)
- date-fns (Date formatting)
- CSS3

Backend
- Node.js + Express
- MongoDB (Mongoose)
- JWT (Authentication)
- Multer (File uploads)
- Bcrypt (Password hashing)

🚀 Installation
1. Backend Setup
  cd blog-backend
  npm install

Create a .env file:
PORT=4000
MONGODB_URI=your_mongodb_connection_string
SECRET_KEY=your_jwt_secret_key

Start the server:
node server.js

2. Frontend Setup
 cd blog-frontend
 npm install

 Start the dev server:
 npm run dev


🌐 API Endpoints

Method	Endpoint	  Description
POST	/api/signup	  Register a new user
POST	/api/login	   Login with credentials
GET	   /api/profile	   Fetch user profile (JWT protected)
POST	/api/post	  Create a new blog post (with image upload)
GET	    /api/post	      Fetch all blog posts
GET	  /api/post/:id	  Fetch a single post by ID
PUT	   /api/post	      Update a post (JWT protected)


🔐 Environment Variables
Backend requires:

MONGODB_URI: MongoDB connection string.

SECRET_KEY: JWT secret key.

PORT: Server port (default: 4000).