const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

app.use('/api', require('./routes/api'));

app.get('/api/hello', (req, res) => {
  res.json({ express: 'Hello From Express' });
});

app.listen(port, () => console.log(`Listening on port ${port}`));