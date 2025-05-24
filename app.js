// app.js
const express = require('express');
require('dotenv').config(); // Load .env variables
const app = express();
const db = require('./db'); // MySQL connection
const schoolRoutes = require('./routes/schoolRoutes'); // API routes

// Middleware to parse JSON body
app.use(express.json());
app.use('/',schoolRoutes);

// Test DB connection
db.query('SELECT 1')
  .then(() => console.log('✅ MySQL Connected Successfully'))
  .catch((err) => console.error('❌ MySQL Connection Failed', err));

// Mount school routes under /api
app.use('/api', schoolRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

  