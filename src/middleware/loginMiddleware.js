const { getEmailAndPassword } = require('../services/loginService');

const validateLogin = async (req, res, next) => {
  const isBodyValid = (email, password) => email && password;

  const { email, password } = req.body;

  if (!isBodyValid(email, password)) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  const user = await getEmailAndPassword(email, password);

  if (!user || user.dataValues.password !== password) {
    return res.status(400).json({ message: 'Invalid fields' });
  }

  next();
};

module.exports = {
  validateLogin,
};