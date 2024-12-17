const express = require('express');
const Product = require('../models/products'); 
const router = express.Router();


router.post('/', async (req, res) => { 
    try { 
        const { name, description, price, category, stock, imageUrl } = req.body; 
        const newProduct = new Product({ 
            name, 
            description, 
            price, 
            category, 
            stock, 
            imageUrl, 
        }); 
        const savedProduct = await newProduct.save(); 
        res.status(201).json(savedProduct); 
    } catch (error) { 
        res.status(400).json({ error: error.message }); 
    } 
}); 

router.get('/', async (req, res) => { 
    try { 
        const products = await Product.find(); 
        res.status(200).json(products); 
    } catch (error) { 
        res.status(400).json({ error: error.message }); 
    } 
}); 

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

router.put('/:id', async (req, res) => { 
    try { 
        const { name, description, price, category, stock, imageUrl } = req.body; 
        const updatedProduct = await Product.findByIdAndUpdate( 
            req.params.id, 
            { name, description, price, category, stock, imageUrl }, 
            { new: true, runValidators: true } 
        ); 
        if (!updatedProduct) { 
            return res.status(404).json({ message: 'Product not found' }); 
        } res.status(200).json(updatedProduct); 
    } catch (error) { 
        res.status(400).json({ error: error.message }); 
    } 
}); 

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