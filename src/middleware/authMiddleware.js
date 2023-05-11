const jwt = require('jsonwebtoken');

const validateToken = (req, res, next) => {
    try {
      const { authorization: token } = req.headers;
    if (!token) return res.status(401).json({ message: 'Token not found' });

    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.payload = payload;
    next();
    } catch (error) {
      return res.status(401).json({ message: 'Expired or invalid token' });
    }
};

module.exports = {
  validateToken,
};