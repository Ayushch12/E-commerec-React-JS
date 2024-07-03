// server/index.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.post('/api/authenticate', (req, res) => {
  const { nfcId } = req.body;
  // Perform authentication logic here
  if (nfcId === 'valid-nfc-id') {
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
