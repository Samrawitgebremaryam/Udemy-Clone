const multer = require('multer');
const path = require('path');

// Set storage engine
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // Specify the destination directory for uploaded files
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        // Specify the filename for the uploaded files
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

// Initialize upload variable
const upload = multer({
    storage: storage,
    limits: { fileSize: 100000000 }, // Limit file size to 100MB
    fileFilter: function (req, file, cb) {
        checkFileType(file, cb);
    }
}).fields([{ name: 'video', maxCount: 1 }, { name: 'pdf', maxCount: 1 }]);

// Check file type
function checkFileType(file, cb) {
    const filetypes = /mp4|pdf|mov/; // Allowed file extensions
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());

    // Add correct MIME types for .mov files
    const mimetypes = /video\/mp4|application\/pdf|video\/quicktime/;
    const mimetype = mimetypes.test(file.mimetype);

    if (mimetype && extname) {
        return cb(null, true);
    } else {
        cb('Error: Videos (MP4, MOV) and PDFs Only!');
    }
}

module.exports = upload;
