const generateToken = require('../auth/token');

const { getEmailAndPassword } = require('../services/loginService');

const isBodyValid = (email, password) => email && password;

module.exports = async (req, res) => {
  try {
    console.log('email and password controller', req.body);
    const { email, password } = req.body;

    if (!isBodyValid(email, password)) {
      return res.status(400).json({ message: 'Some required fields are missing' });
    }

    const user = await getEmailAndPassword(email, password);

    if (!user || user.dataValues.password !== password) {
      return res.status(400).json({ message: 'Invalid fields' });
    }

    const { passsword: _password, ...userWhithoutPassword } = user.dataValues;

    const token = generateToken(userWhithoutPassword);

    return res.status(200).json({ token });
  } catch (error) {
    return res.status(500).json({ message: 'internal error', error: error.message });
  }
};