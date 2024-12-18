const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const productRoutes = require('./routes/products');
const authRoutes = require('./routes/auth');
const auth = require('./middleware/auth');

dotenv.config();

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

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


// Use the product and auth routes
//app.use('/products', productRoutes);
app.use('/auth', authRoutes);

// Protect product routes
app.use('/products', auth, productRoutes);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});