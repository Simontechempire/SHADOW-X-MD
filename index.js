const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Import routes
const dashboardRoutes = require('./routes/dashboard');
const botRoutes = require('./routes/bot');
const apiRoutes = require('./routes/api');

// Use routes
app.use('/dashboard', dashboardRoutes);
app.use('/bot', botRoutes);
app.use('/api', apiRoutes);

// Root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Health check endpoint for deployment services
app.get('/health', (req, res) => {
  res.json({ 
    status: 'active', 
    service: 'SHADOW-X-MD',
    timestamp: new Date().toISOString()
  });
});

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error', message: err.message });
});

// 404 Handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Start server
app.listen(PORT, () => {
  console.log(`SHADOW-X-MD Bot is running on port ${PORT}`);
  console.log(`Dashboard available at http://localhost:${PORT}/dashboard`);
  console.log(`Owner: Simon Tech Inc.`);
  console.log(`Timestamp: ${new Date().toISOString()}`);
});

module.exports = app;
