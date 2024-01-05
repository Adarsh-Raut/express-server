require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const productRoute = require('./routes/productRoutes');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/products', productRoute);

const MONGO_URL = process.env.MONGO_URL;
const PORT = process.env.PORT;

mongoose
  .connect(MONGO_URL)
  .then(() => {
    app.listen(PORT, console.log(`Server is running on port ${PORT}`));
    console.log('Connected to MongoDB Atlas');
  })
  .catch((err) => console.log(err));
