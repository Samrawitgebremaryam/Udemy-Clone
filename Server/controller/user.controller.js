const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../model/user.mongo');
const { sendEmailWithTemplate, sendLogin } = require('../services/emailService');
const {generateAccessToken, verifyAccessToken} = require('../services/tokenService');



async function registerUser(req, res) {
  const { firstName, lastName, username, email, password } = req.body;

  try {

    const user = new User({ firstName, lastName, username, email, password });

    // Hash password
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    await user.save();

    const token = await generateAccessToken(email);

    const API_VERSION = '/v1';

    const verificationUrl = `http://localhost:3000${API_VERSION}/users/verify-email?token=${token}`;

    const payload = { 
      "firstName": firstName,
      "email": email,
      "verificationUrl": verificationUrl
    };

    await sendEmailWithTemplate(email, payload);


    return res.status(201).json({ msg: 'User registered successfully' });
  } catch (err) {
    console.error(err);
    return res.status(500).send('Server Error trying to register user');
  }
}


async function loginUser(req, res) {
  const { email, password, loginDetails } = req.body;
  console.log(req);

  try {

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    const payload = {
      user: {
        id: user.id
      }
    };

    
    const sendgridPayload = {
      "firstName": user.firstName,

    };
    
    sendLogin(user.email, sendgridPayload);

    jwt.sign(payload, process.env.REFRESH_TOKEN, { expiresIn: 3600 }, (err, token) => {
      if (err) throw err;
      res.json({ token });
    });


  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  } 
}


async function verifyEmail(req, res) {
  const token = req.query.token;
  console.log(token);
  if (!token) {
      return res.status(400).json({ error: 'Token is missing' });
  }

  try {
      const email = verifyAccessToken(token);
      
      await User.findOneAndUpdate({ email: email }, { emailVerified: true });

      res.status(200).json({ message: 'Email verified successfully' });
  } catch (error) {
      console.error('Error verifying email:', error.message);
      res.status(400).json({ error: error.message });
  }
}

module.exports = { registerUser, loginUser , verifyEmail};
