const { config: configDotenv } = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');

configDotenv({ path: '../.env' }); 

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log('Connected to MongoDB!');
  })
  .catch(err => console.log(err));

const app = express();
const port = 3000;
app.listen(port, () => {
  console.log(`Connected to port ${port}`);
});
