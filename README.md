# 🚀 REST API Demo

![Node.js](https://img.shields.io/badge/Node.js-runtime-green)
![Express.js](https://img.shields.io/badge/Express.js-framework-black)

A **minimal REST API** built with Node.js and Express.js using **in-memory dummy data**.

> ⚡ No database required — perfect for learning and demonstrating all REST API operations.

---

## 📌 Features

* ✅ Full CRUD operations (GET, POST, PUT, PATCH, DELETE)
* ✅ Query filtering (e.g., filter users by role)
* ✅ Proper HTTP status codes
* ✅ Clean and beginner-friendly structure
* ✅ Ready-to-test with `curl` or Postman

---

## ⚙️ Installation & Setup

## ⚡ Quick Setup

```bash
git clone https://github.com/your-username/rest-api-demo.git
cd rest-api-demo
npm install
npm run dev
```

---

## 🛠️ Manual Setup (Step-by-Step)

### 1️⃣ Install Node.js

Make sure Node.js is installed:

```bash
node -v
npm -v
```

👉 If not installed: https://nodejs.org

---

### 2️⃣ Create Project

```bash
mkdir rest-api-demo
cd rest-api-demo
npm init -y
```

---

### 3️⃣ Install Dependencies

Using Express.js:

```bash
npm install express
```

For development (auto-reload):

```bash
npm install --save-dev nodemon
```

---

### 4️⃣ Create Files

```bash
server.js
```

Paste your API code inside `server.js`

---

### 5️⃣ Update package.json

Add scripts:

```json
"scripts": {
  "start": "node server.js",
  "dev": "nodemon server.js"
}
```

---

### 6️⃣ Run the Server

#### 🔹 Development mode (recommended)

```bash
npm run dev
```

#### 🔹 Production mode

```bash
npm start
```

---

## 🌐 Server URL

```
http://localhost:5000
```


## 📂 Project Structure

```
rest-api-demo/
├── server.js                  # Entry point
├── data/
│   └── users.js               # In-memory dummy data
├── controllers/
│   └── userController.js      # Business logic
├── routes/
│   └── userRoutes.js          # API routes
└── middleware/
    └── errorHandler.js        # Error handling
```

---

## 📡 API Endpoints

### 🔹 GET — Fetch all users

```bash
curl http://localhost:5000/api/users
```

---

### 🔹 GET — Filter users by role

```bash
curl http://localhost:5000/api/users?role=admin
```

---

### 🔹 GET — Fetch single user

```bash
curl http://localhost:5000/api/users/1
```

---

### 🔹 POST — Create a new user

```bash
curl -X POST http://localhost:5000/api/users \
  -H "Content-Type: application/json" \
  -d '{"name":"David Lee","email":"david@example.com","role":"user"}'
```

---

### 🔹 PUT — Full update (replace all fields)

```bash
curl -X PUT http://localhost:5000/api/users/1 \
  -H "Content-Type: application/json" \
  -d '{"name":"Alice Updated","email":"alice@new.com","role":"superadmin"}'
```

---

### 🔹 PATCH — Partial update

```bash
curl -X PATCH http://localhost:5000/api/users/2 \
  -H "Content-Type: application/json" \
  -d '{"role":"admin"}'
```

---

### 🔹 DELETE — Remove one user

```bash
curl -X DELETE http://localhost:5000/api/users/3
```

---

### 🔹 DELETE — Remove all users

```bash
curl -X DELETE http://localhost:5000/api/users
```

---

## 📊 HTTP Status Codes

| Code | Meaning               |
| ---- | --------------------- |
| 200  | OK                    |
| 201  | Created               |
| 400  | Bad Request           |
| 404  | Not Found             |
| 409  | Conflict              |
| 500  | Internal Server Error |

---

## 🧠 REST API Concepts Covered

| Method | Purpose         | Body Required |
| ------ | --------------- | ------------- |
| GET    | Read data       | ❌ No          |
| POST   | Create resource | ✅ Yes         |
| PUT    | Full replace    | ✅ Yes (all)   |
| PATCH  | Partial update  | ✅ Yes (some)  |
| DELETE | Remove resource | ❌ No          |

---

## ⚠️ Notes

* This project uses **in-memory storage** → data resets when server restarts
* Designed for **learning and demonstration purposes only**
* Not intended for production use

---

## 🚀 Future Improvements

* 🔐 Add authentication (JWT)
* 🗄️ Connect database (MongoDB / MySQL)
* 📘 Add Swagger API documentation
* 🧪 Add unit tests

---

## 👨‍💻 Author

Made with ❤️ for learning REST APIs
