# 🏛️ SmartAlloc — Institutional Intelligence Engine

A full-stack institutional room allocation and timetable management engine built with **React 19**, **Node.js**, **Express 5**, and **MongoDB**. Designed to eliminate scheduling clashes, maximize campus facility utilization, and streamline academic resource planning.

---

## ✨ Key Features

- **⚡ Automated Allocation Engine:** Algorithmic scheduler matching course requirements, room capacities, preferred types, and non-overlapping time slots.
- **🛡️ Clash & Conflict Detection:** Real-time query engine detecting overlapping bookings with instant visual alerts and one-click resolution.
- **📅 Interactive Timetable Grid:** Color-coded weekly calendar view (Monday through Friday, 08:00 – 18:00) with course and room chips.
- **📊 Facility Utilization Analytics:** Departmental occupancy rates, efficiency scores, and faculty workload distributions powered by Recharts.
- **🏢 Multi-Building Resource Registry:** Dynamic catalog for Lecture Halls, Computer Labs, Auditoriums, and Seminar Rooms across campus blocks.
- **🔒 Role-Based Access Control (RBAC):** Three distinct access tiers (Administrator, Faculty, Student) protected by JWT authentication and secure bcrypt hashing.

---

## 🛠️ Tech Stack

| Layer | Technologies |
| :--- | :--- |
| **Frontend** | React 19, React Router v7, Tailwind CSS, Recharts, Lucide React, Axios, React Hot Toast |
| **Backend** | Node.js, Express.js (v5), Mongoose, JSON Web Tokens (`jsonwebtoken`), `bcryptjs`, CORS, `dotenv` |
| **Database** | MongoDB (Document Store) |

---

## 📁 Project Architecture

```
smart-room-allocator/
├── backend/
│   ├── middleware/
│   │   └── auth.js         # JWT auth & admin-only middleware
│   ├── models/
│   │   ├── Allocation.js   # Timetable allocation schema
│   │   ├── Course.js       # Academic course schema
│   │   ├── Room.js         # Campus room registry schema
│   │   └── User.js         # User identity & role schema
│   ├── routes/
│   │   ├── allocations.js  # Manual & auto-allocation APIs
│   │   ├── auth.js         # Authentication endpoints
│   │   ├── courses.js      # Course management endpoints
│   │   ├── dashboard.js    # Metric aggregations & event logs
│   │   ├── rooms.js        # Room registry endpoints
│   │   └── users.js        # User administration endpoints
│   ├── .env.example        # Backend environment template
│   ├── package.json
│   ├── seed.js             # Institutional demo data seeder
│   └── server.js           # Server entry point
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/     # Header, Sidebar, Layout, ProtectedRoute
│   │   ├── context/        # AuthContext global session state
│   │   ├── pages/          # Dashboard, Rooms, Courses, Allocation,
│   │   │                   # Conflicts, Timetable, Reports, Users, Settings
│   │   ├── services/       # Axios API client with interceptors
│   │   ├── App.js          # Routing hierarchy
│   │   └── index.js
│   ├── .env.example        # Frontend environment template
│   ├── package.json
│   └── tailwind.config.js  # Custom institutional styling tokens
├── .gitignore
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18.0.0 or higher recommended)
- MongoDB instance running locally (`mongodb://localhost:27017`) or a MongoDB Atlas URI

### 1. Clone the repository
```bash
git clone https://github.com/JAIII12/smart-room-allocator.git
cd smart-room-allocator
```

### 2. Configure & Run Backend
```bash
cd backend
npm install
cp .env.example .env
# Start the server (auto-seeds demo data on first start)
npm start # or node server.js
```
The backend server runs on `http://localhost:5001`.

### 3. Configure & Run Frontend
```bash
cd ../frontend
npm install
cp .env.example .env
npm start
```
The application opens in your browser at `http://localhost:3000`.

---

## 🔑 Demo Credentials

| Role | Username | Password |
| :--- | :--- | :--- |
| **Administrator** | `admin_demo` | `smart_alloc_2024` |
| **Faculty** | `faculty_demo` | `faculty_2024` |

---

## 📄 License

This project is open-source under the [MIT License](LICENSE).
