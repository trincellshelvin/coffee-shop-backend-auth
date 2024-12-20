const express = require('express');
const Product = require('../models/products');
const upload = require('../middleware/upload');
const role = require('./middleware/roles');
const { validateProduct} = require('../middleware/validate');
const router = express.Router();

// Create a new product
router.post('/', auth, role('admin'), upload, async (req, res) => {
    try {
        const { name, description, price, category, stock } = req.body;
        const imageUrl = req.file ? `/uploads/${req.file.filename}` : '';
        const product = new Product({
            name,
            description,
            price,
            category,
            stock,
            imageUrl,
        });
        await product.save();
        res.status(201).json(product);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const {
            page = 1,
            limit = 10,
            category,
            sortBy = 'createdAt',
            sortOrder = 'asc'
        } = req.query;
        
        // Build the filter object based on query parameters
        const filter = {};
        if (category) {
            filter.category = category;
        }

        // Define sorting order
        const sort = {};
        if (sortBy) {
            sort[sortBy] = sortOrder === 'asc' ? 1 : -1;
        }

        // Find products with filtering, sorting, and pagination
        const products = await Product.find(filter)
            .sort(sort)
            .limit(parseInt(limit))
            .skip((parseInt(page) - 1) * limit);

        // Count total documents for pagination
        const total = await Product.countDocuments(filter);

        // Send response
        res.json({ total, products });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


// Get a single product by ID
router.get('/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Update a product by ID
router.put('/:id', upload, async (req, res) => {
    try {
        const { name, description, price, category, stock } = req.body;
        const imageUrl = req.file
            ? `/uploads/${req.file.filename}`
            : req.body.imageUrl;
        const product = await Product.findByIdAndUpdate(
            req.params.id,
            { name, description, price, category, stock, imageUrl },
            { new: true, runValidators: true }
        );
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }
        res.json(product);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Delete a product by ID
router.delete('/:id', async (req, res) => {
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.id);
        if (!deletedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
