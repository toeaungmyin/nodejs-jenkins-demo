const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'Hello from CI/CD pipeline' });
});

app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'UP',
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  });
});

module.exports = app;