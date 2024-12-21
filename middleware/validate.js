// middleware/validate.js
module.exports.validateProduct = (req, res, next) => {
    if (!req.body.name || !req.body.price) {
        console.log(req.body);
        return res.status(400).json({ error: 'Missing required fields' });
    }
    next();
};
