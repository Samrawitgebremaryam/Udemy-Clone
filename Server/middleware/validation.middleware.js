const { body, validationResult } = require('express-validator');

function validateRegistration () {
  return [
    body('firstName')
      .trim()
      .notEmpty().withMessage('First name is required').bail()
      .isLength({ min: 2 }).withMessage('First name must be at least 2 characters long').bail()
      .matches(/^[a-zA-Z]+$/).withMessage('First name can only contain letters'),

    body('lastName')
      .trim()
      .notEmpty().withMessage('Last name is required').bail()
      .isLength({ min: 2 }).withMessage('Last name must be at least 2 characters long').bail()
      .matches(/^[a-zA-Z]+$/).withMessage('Last name can only contain letters'),


    body('username')
      .trim()
      .notEmpty().withMessage('Username is required').bail()
      .isLength({ min: 3 }).withMessage('Username must be at least 3 characters long').bail()
      .matches(/^[a-zA-Z0-9_]+$/).withMessage('Username can only contain letters, numbers, and underscores'),

    body('email')
      .trim()
      .isEmail().withMessage('Invalid email').bail()
      .normalizeEmail(),

    body('password')
      .trim()
      .isLength({ min: 8 }).withMessage('Password must be at least 8 characters long').bail()
      .matches(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/)
      .withMessage('Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character'),

    (req, res, next) => {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        const extractedErrors = [];
        errors.array().forEach(error => {
          extractedErrors.push({ [error.param]: error.msg });
        });
        return res.status(400).json({ errors: extractedErrors });
      }

      next();
    }
  ];
}

module.exports = validateRegistration;
