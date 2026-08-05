# 💬 ChatApp - Socket.IO

A modern real-time chat application built using the **MERN Stack** and **Socket.IO**. The application enables users to communicate instantly through a secure and responsive interface with JWT-based authentication and live online user status.

---

## 🚀 Live Demo

**Frontend:**
https://chat-app-socket-io-six.vercel.app

**Backend API:**
https://chatapp-socket-io-mpwv.onrender.com

---

## ✨ Features

* 🔐 Secure User Authentication using JWT
* 🍪 HTTP-Only Cookie Based Authentication
* 💬 Real-Time Messaging with Socket.IO
* 🟢 Online/Offline User Status
* 📱 Responsive UI
* ⚡ Fast React + Vite Frontend
* 🌐 RESTful API with Express.js
* 🗄️ MongoDB Atlas Database
* 🔒 Protected Routes
* 🎨 Modern UI built with Tailwind CSS
* 🚀 Production Deployment with Vercel & Render

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Vite
* Tailwind CSS
* Axios
* React Hot Toast
* React Hook Form
* Zustand
* Socket.IO Client

### Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* Socket.IO
* JWT Authentication
* Cookie Parser
* CORS
* Bcrypt

### Deployment

* Vercel (Frontend)
* Render (Backend)
* MongoDB Atlas (Database)

---

## 📁 Project Structure

```
ChatApp
│
├── Backend
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── SocketIO
│   ├── utils
│   ├── index.js
│   └── package.json
│
├── Frontend
│   ├── src
│   ├── public
│   ├── vercel.json
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

---

## ⚙️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/Mohitbisht123/ChatApp-Socket.IO.git
cd ChatApp-Socket.IO
```

---

### 2. Backend Setup

```bash
cd Backend
npm install
```

Create a `.env` file:

```env
PORT=4002
MONGODB_URI=YOUR_MONGODB_URI
JWT_TOKEN=YOUR_SECRET_KEY
CLIENT_URL=http://localhost:5173
```

Run the backend:

```bash
npm run dev
```

---

### 3. Frontend Setup

```bash
cd Frontend
npm install
```

Create a `.env` file:

```env
VITE_API_URL=http://localhost:4002
```

Run the frontend:

```bash
npm run dev
```

---

## 🌍 Production

### Frontend

Hosted on **Vercel**

### Backend

Hosted on **Render**

### Database

Hosted on **MongoDB Atlas**

---

## 📸 Screenshots

> Add screenshots inside a folder named `screenshots`.

Example:

```
screenshots/
├── login.png
├── signup.png
├── chat.png
```

---

## 🔐 Authentication

* JWT Based Authentication
* HTTP-Only Cookies
* Protected API Routes
* Secure Password Hashing using Bcrypt

---

## 🚀 Future Improvements

* Image & File Sharing
* Typing Indicators
* Read Receipts
* Group Chats
* Voice & Video Calling
* Push Notifications
* Emoji & GIF Support
* Message Search
* User Profile Customization
* Dark/Light Theme Toggle

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a new feature branch
3. Commit your changes
4. Push the branch
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**Mohit Bisht**

GitHub: https://github.com/Mohitbisht123

---

⭐ If you found this project useful, consider giving it a **Star** on GitHub!
