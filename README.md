# 🎓 EduCore LMS  
### Full Stack Learning Management System (React + Laravel)

EduCore LMS is a full-stack Learning Management System built using React.js (Frontend) and Laravel (Backend API).  
It provides a complete platform for managing courses, students, instructors, and authentication.

---

## 🚀 Tech Stack

### Frontend
- React.js
- Axios
- React Router
- Bootstrap / Tailwind CSS

### Backend
- Laravel
- REST API
- MySQL
- Laravel Authentication
- Eloquent ORM

---

## ✨ Features

- 🔐 User Authentication (Login/Register)
- 👨‍🏫 Role-Based Access (Admin / Instructor / Student)
- 📚 Course Management (Create, Update, Delete)
- 🎥 Video Lectures
- 📝 Quizzes & Assignments
- 📊 Dashboard
- 💳 Payment Integration
- 🔗 API Integration (React ↔ Laravel)

---

## 📁 Project Structure

educore-lms/
│
├── backend   (Laravel API)
└── frontend  (React Application)

---

## ⚙️ Installation Guide

### 1️⃣ Clone Repository

git clone https://github.com/your-username/educore-lms.git  
cd educore-lms

---

### 2️⃣ Backend Setup (Laravel)

cd backend  
composer install  
cp .env.example .env  
php artisan key:generate  

Update the `.env` file with your database credentials.

php artisan migrate  
php artisan serve  

Backend will run on:  
http://127.0.0.1:8000  

---

### 3️⃣ Frontend Setup (React)

Open new terminal:

cd frontend  
npm install  
npm start  

Frontend will run on:  
http://localhost:3000  

---

## 🔗 API Integration

Frontend communicates with Laravel backend using REST APIs via Axios.

---

## 📸 Screenshots

(Add project screenshots here)

---

## 👨‍💻 Author

Mahendra Mahawar  
Full Stack Developer  
React | Laravel | REST API  

---

## 📌 Future Improvements

- Email verification
- Certificate generation
- Live classes integration
- Admin analytics dashboard

---

⭐ If you like this project, give it a star!