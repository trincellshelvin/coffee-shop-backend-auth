const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const dotenv = require('dotenv');
const productRoutes = require('./routes/products');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users');
const auth = require('./middleware/auth');
const role = require('./middleware/roles'); 
const errorHandler = require('./middleware/errorHandler');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

const mongoURL = process.env.MONGO_URL;

// Serve static files
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

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
app.use('/users', auth, role('admin'), userRoutes);

// Protect product routes
app.use('/products', auth, role('admin'), productRoutes);
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});