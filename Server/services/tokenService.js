const jwt = require('jsonwebtoken');


function generateAccessToken(email) {
    const token = jwt.sign({ email }, process.env.ACCESS_TOKEN, { expiresIn: '1d' });
    return token;
  }

function verifyAccessToken(token) {
    try {
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN);
        return decoded.email;
    } catch (error) {
        return null;
    }
}

module.exports = {generateAccessToken, verifyAccessToken};
