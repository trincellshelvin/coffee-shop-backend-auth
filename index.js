const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
const port = 3000;
const productRoutes = require('./routes/products');

// Middleware to parse JSON bodies
app.use(express.json());
app.use('/products', productRoutes);

const mongoURL = process.env.MONGO_URL;

// Connect to MongoDB
mongoose
    .connect(mongoURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
