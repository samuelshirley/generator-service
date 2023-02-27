const express = require('express');
import dotenv from 'dotenv';
const cors = require('cors');
const app = express();

app.use(express.json({ extends: false }));
app.use(cors());

dotenv.config();

app.use('/api/user', require('./src/routes/user'));

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
