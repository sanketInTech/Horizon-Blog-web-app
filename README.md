# Horizon Blog - Modern Blogging Platform

## 📸 Screenshots

### Homepage
![Horizon Blog Homepage](/client/public/images/screenshots/homepage.png)
*The main landing page of Horizon Blog*

### Blog Post View
![Blog Post View](/client/public/images/screenshots/blog-post.png)
*Detailed view of a blog post with comments*

### Dashboard
![Dashboard](/client/public/images/screenshots/dashboard.png)
*User dashboard for managing posts and settings*

### Editor
![Editor](/client/public/images/screenshots/editor.png)
*Rich text editor for creating and editing posts*

## 🌟 Overview

Horizon Blog is a modern, feature-rich blogging platform built with the MERN stack (MongoDB, Express.js, React.js, Node.js). It provides a seamless experience for both bloggers and readers, with a clean and intuitive interface that makes content creation and consumption a pleasure.

## ✨ Features

### For Readers
- 📱 Responsive design that works on all devices
- 🔍 Advanced search functionality
- 📑 Category-based content organization
- 💬 Interactive comment system
- 🔖 Bookmark favorite articles
- 📧 Newsletter subscription
- 🌙 Dark/Light mode support

### For Bloggers
- ✍️ Rich text editor with markdown support
- 🖼️ Image upload and management
- 📊 Analytics dashboard
- 🔒 Secure authentication system
- 📝 Draft saving and auto-save
- 🏷️ Tag and category management
- 📱 Mobile-friendly content creation

## 🛠️ Technologies Used

### Frontend
- React.js
- Redux for state management
- React Router for navigation
- Styled Components for styling
- Axios for API requests
- React Quill for rich text editing
- React Icons for beautiful icons

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for authentication
- Bcrypt for password hashing
- Multer for file uploads
- Nodemailer for email functionality

### DevOps & Tools
- Git for version control
- GitHub for code hosting
- Render for deployment
- MongoDB Atlas for database hosting
- Postman for API testing

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- npm or yarn
- Git

### Installation

1. Clone the repository
```bash
git clone https://github.com/sanketInTech/Horizon-Blog-web-app.git
cd Horizon-Blog-web-app
```

2. Install dependencies
```bash
# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install
```

3. Environment Setup
Create a `.env` file in the server directory with the following variables:
```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
```

4. Start the development servers
```bash
# Start backend server (from server directory)
npm start

# Start frontend server (from client directory)
npm start
```

## 📱 API Documentation

### Authentication Endpoints
- POST `/api/auth/register` - Register a new user
- POST `/api/auth/login` - Login user
- GET `/api/auth/profile` - Get user profile

### Blog Endpoints
- GET `/api/posts` - Get all posts
- POST `/api/posts` - Create a new post
- GET `/api/posts/:id` - Get a specific post
- PUT `/api/posts/:id` - Update a post
- DELETE `/api/posts/:id` - Delete a post

### Comment Endpoints
- GET `/api/comments/:postId` - Get comments for a post
- POST `/api/comments` - Add a comment
- DELETE `/api/comments/:id` - Delete a comment

## 🎨 Project Structure
```
horizon-blog/
├── client/                 # Frontend React application
│   ├── public/            # Static files
│   └── src/               # React source files
│       ├── components/    # Reusable components
│       ├── pages/        # Page components
│       ├── context/      # Context API files
│       ├── hooks/        # Custom hooks
│       └── utils/        # Utility functions
│
└── server/                # Backend Node.js application
    ├── config/           # Configuration files
    ├── controllers/      # Route controllers
    ├── middleware/       # Custom middleware
    ├── models/          # Mongoose models
    ├── routes/          # API routes
    └── utils/           # Utility functions
```

## 🤝 Contributing

We welcome contributions to Horizon Blog! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- **Sanket** - *Initial work* - [sanketInTech](https://github.com/sanketInTech)

## 🙏 Acknowledgments

- Thanks to all contributors who have helped shape this project
- Inspired by modern blogging platforms
- Built with ❤️ using the MERN stack

## 📞 Contact & Social Media

- GitHub: [@sanketInTech](https://github.com/sanketInTech)
- LinkedIn: [Your LinkedIn Profile]
- Twitter: [@YourTwitterHandle]
- Email: [Your Email Address]

## 🔮 Future Enhancements

- [ ] Real-time notifications
- [ ] Social media sharing integration
- [ ] Advanced analytics dashboard
- [ ] Multi-language support
- [ ] Podcast integration
- [ ] Video content support
- [ ] AI-powered content suggestions
- [ ] Newsletter customization
- [ ] Advanced search filters
- [ ] User roles and permissions

## 🐛 Known Issues

Please report any bugs or issues in the [Issues](https://github.com/sanketInTech/Horizon-Blog-web-app/issues) section of the repository.

## 📊 Project Statistics

- Lines of Code: [Add your stats]
- Contributors: [Number of contributors]
- Stars: [GitHub stars]
- Forks: [GitHub forks]

---

⭐ Star this repository if you find it helpful!

*Last updated: [Current Date]* 