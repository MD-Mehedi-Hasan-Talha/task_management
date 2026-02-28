# 🚀 Task Management Dashboard

A modern single-page React dashboard application built as part of a Frontend Intern assignment.
The project includes authentication, protected routes, API integration, and a responsive dashboard UI based on the provided design.

---

## 🔗 Live Demo

👉 Live URL: (Add your deployed link here)
👉 GitHub Repository: (Add your repo link here)

---

## 📌 Features

### 🔐 Authentication

* Login using REST API (`/api/login`)
* JWT token handling
* Persistent authentication
* Protected Dashboard route
* Logout functionality

### 📊 Dashboard

* Overview statistics cards
* Analytics section (animated bars)
* User list with status badges
* Product performance section
* Derived metrics (calculated from API data)
* Responsive layout

### 🎨 UI & UX

* Design inspired by provided Dribbble reference
* Clean and modern layout
* Smooth animations using Framer Motion
* Fully responsive (Mobile / Tablet / Desktop)

---

## 🛠 Tech Stack

* React (Vite)
* TailwindCSS
* Framer Motion
* React Router
* REST API integration

---

## 📡 API Integration

Base API:

```
https://task-api-eight-flax.vercel.app/
```

### Login Endpoint

```
POST /api/login
```

Response returns JWT token which is stored and used for authentication.

### Dashboard Data

Data is fetched from API and mapped into UI-friendly structure using a dedicated data mapping layer.

---

## 🧠 Data Mapping Strategy

The API structure does not directly match the dashboard UI.
Therefore:

* Raw API data is transformed into UI-ready format.
* Derived values (e.g., inactive users, growth rate, calculated revenue) are computed on the frontend.
* Components receive clean, structured data.

This ensures:

* Clean separation of concerns
* Better maintainability
* Scalable architecture

---

## 📂 Project Structure

```
src/
 ├── components/
 ├── layouts/
 ├── pages/
 ├── routes/
 ├── hooks/
 ├── utils/
 ├── services/
 └── App.jsx
```

---

## 🔒 Authentication Flow

1. User logs in via Login Page.
2. JWT token is stored (localStorage).
3. Protected route checks authentication state.
4. If not authenticated → redirect to Login.
5. Logout clears token and redirects to Login.

---

## 📱 Responsiveness

* Mobile-first layout
* Flexible grid system
* Adaptive sidebar
* Optimized spacing & typography

---

## 🎁 Bonus Implementations

* Persistent authentication
* Animated page transitions
* Staggered card animations
* Derived analytics metrics
* Clean reusable components

---

## 🧪 How to Run Locally

```bash
git clone <your-repo-link>
cd project-folder
npm install
npm run dev
```

---

## 📦 Build

```bash
npm run build
```

---

## 📌 Notes

* The UI closely follows the provided design reference.
* Some dashboard metrics are derived from API data to match design requirements.
* The application is structured for scalability and production-readiness.

---

## 👤 Author

MD. Mehedi Hasan Talha
Frontend Developer