# 🎥 Zenzy Movie Ticket Booking App

Welcome to **Zenzy**, the ultimate movie ticket booking platform! Built using the **MERN stack** and styled with **Tailwind CSS**, this app provides a seamless experience for users and admins alike, featuring robust authentication and user-friendly interfaces.

![Zenzy Banner](https://res.cloudinary.com/derlbfbjz/image/upload/v1735633525/zen-pro1_vmp83b.png) <!-- Replace with the actual link to your project banner image -->

---

## 🚀 Features

### User Features
- **Browse Movies:** View a list of available movies with detailed information.
- **Book Tickets:** Select your preferred seats and book tickets with ease.
- **Secure Authentication:** Sign up and log in with a secure authentication system.
- **Responsive Design:** Enjoy a smooth experience across devices.

### Admin Features
- **Movie Management:** Add, update, or remove movies from the catalog.
- **Booking Insights:** Monitor ticket bookings and manage user data.
- **Dashboard:** Access a powerful admin panel for complete control.

---

## 🛠️ Technologies Used

### Frontend
- **React.js**
- **Tailwind CSS**
- **Material UI** (for additional design elements)

### Backend
- **Node.js**
- **Express.js**
- **MongoDB**

### Authentication
- **JWT (JSON Web Tokens)** for secure user sessions

---

## 📂 Folder Structure

```plaintext
zenzy-movie-ticket-app/
├── client/        # Frontend code
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── styles/
│   │   └── utils/
│
├── server/        # Backend code
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middlewares/
│   └── utils/
│
└── README.md      # Project documentation
```

---

## 🖥️ Installation and Setup

### Prerequisites
- **Node.js** and **npm/yarn** installed
- **MongoDB** set up locally or on the cloud

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/zenzy-movie-ticket-app.git
   ```

2. Navigate to the project directory:
   ```bash
   cd zenzy-movie-ticket-app
   ```

3. Install dependencies for both frontend and backend:
   ```bash
   # Install frontend dependencies
   cd client
   npm install

   # Install backend dependencies
   cd ../server
   npm install
   ```

4. Set up environment variables:
   - Create a `.env` file in the `server` directory and add:
     ```env
     MONGO_URI=your-mongodb-uri
     JWT_SECRET=your-jwt-secret
     ```

5. Run the app:
   ```bash
   # Start the backend server
   cd server
   npm start

   # Start the frontend server
   cd ../client
   npm start
   ```

6. Open the app in your browser at `http://localhost:3000`.

---

## 📸 Screenshots

### Home Page
![Home Page](https://your-image-link-here.com/home.png)

### Booking Page
![Booking Page](https://your-image-link-here.com/booking.png)

### Admin Dashboard
![Admin Dashboard](https://your-image-link-here.com/admin.png)

---

## 🤝 Contributions

We welcome contributions to make Zenzy even better! Feel free to fork the repository and submit a pull request.

---

## 📝 License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

---

## 🌟 Acknowledgements
- Special thanks to the MERN community for their fantastic resources.
- Tailwind CSS for their excellent utility-first framework.

---

**Happy Booking! 🎬**
