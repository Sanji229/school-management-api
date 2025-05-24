# 🏫 School Management API

A Node.js and Express.js-based REST API to manage school data, with functionality to add new schools and retrieve a list of schools sorted by proximity. Uses MySQL as the database.

## 🔗 GitHub Repository

[https://github.com/Sanji229/school-management-api.git](https://github.com/Sanji229/school-management-api.git)

---

## 📦 Features

- ➕ Add new schools with name, address, latitude, and longitude.
- 📍 List schools sorted by proximity to a given location.
- 📘 Input validation to ensure data quality.
- 🐬 MySQL database integration.
- 🌐 RESTful API architecture.

---

## 🧱 Project Structure


```school-management-api/
├── app.js
├── db.js
├── .env
├── routes/
│ └── schoolRoutes.js
├── controllers/
│ └── schoolController.js


```
---

## ⚙️ Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/Sanji229/school-management-api.git
cd school-management-api
```

2. Install dependencies
```bash
npm install
```
3. Configure environment variables
Create a .env file in the root:

env
```
DB_HOST=your-db-host
DB_USER=your-db-user
DB_PASSWORD=your-db-password
DB_NAME=your-db-name
PORT=3000
```
4. Run the app
```bash
node app.js
```

