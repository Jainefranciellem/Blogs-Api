const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const generateToken = (data) => {
  const JWT_CONFIG = {
    algorithm: 'HS256',
    expiresIn: '5d',
  };

  const token = jwt.sign({ data }, secret, JWT_CONFIG);
  return token;
};

module.exports = generateToken;