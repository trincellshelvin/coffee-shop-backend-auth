const multer = require('multer');
const path = require('path');

// Define storage for the images
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

// Define file filter to only accept certain file types
const fileFilter = (req, file, cb) => {
    const filetypes = /jpeg|jpg|png|webp/;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);

    if (mimetype && extname) {
        return cb(null, true);
    } else {
        cb('Error: Images Only!');
    }
};

// Initialize upload variable with multer
const upload = multer({
    storage: storage,
    limits: { fileSize: 1024 * 1024 * 5 }, // 5 MB file size limit
    fileFilter: fileFilter
});

module.exports = upload;
