const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Hello from the CI/CD lab!', status: 'ok' });
});

app.get('/health', (req, res) => {
  res.json({ status: 'healthy', uptime: process.uptime() });
});

app.get('/items', (req, res) => {
  res.json([
    { id: 1, name: 'Widget A' },
    { id: 2, name: 'Widget B' },
  ]);
});

module.exports = app;

// Start server only when run directly
if (require.main === module) {
  app.listen(3000, () => console.log('Listening on port 3000'));
}