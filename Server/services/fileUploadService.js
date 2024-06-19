const multer = require("multer");
const path = require("path");

// Set storage engine for general uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Specify the destination directory for uploaded files
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    // Specify the filename for the uploaded files
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

// Set storage engine for avatar uploads
const avatarStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Specify the destination directory for avatar uploads
    cb(null, "uploads/avatars/");
  },
  filename: function (req, file, cb) {
    // Specify the filename for avatar uploads
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, `avatar-${uniqueSuffix}${path.extname(file.originalname)}`);
  },
});

// Initialize upload variable for general uploads
const upload = multer({
  storage: storage,
  limits: { fileSize: 100000000 }, // Limit file size to 100MB
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  },
}).fields([
  { name: "video", maxCount: 1 },
  { name: "pdf", maxCount: 1 },
]);

// Initialize upload variable for avatar uploads
const uploadAvatar = multer({
  storage: avatarStorage,
  limits: { fileSize: 10485760 }, // Limit file size to 10MB for avatars
  fileFilter: function (req, file, cb) {
    checkImageFileType(file, cb);
  },
}).single("avatar"); // Specify the field name for single avatar file upload

// Check file type for general uploads
function checkFileType(file, cb) {
  const filetypes = /mp4|pdf|mov/; // Allowed file extensions
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());

  // Add correct MIME types for .mov files
  const mimetypes = /video\/mp4|application\/pdf|video\/quicktime/;
  const mimetype = mimetypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb("Error: Videos (MP4, MOV) and PDFs Only!");
  }
}

// Check file type for avatar uploads
function checkImageFileType(file, cb) {
  // Allowed image extensions
  const filetypes = /jpeg|jpg|png/;
  // Check extension
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  // Check MIME type
  const mimetype = filetypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb("Error: Images Only! (JPEG, JPG, PNG)");
  }
}

module.exports = { upload, uploadAvatar };
