const generateToken = require('../auth/token');

const { getEmailAndPassword } = require('../services/loginService');

module.exports = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await getEmailAndPassword(email, password);
    
    const { passsword: _password, ...userWhithoutPassword } = user.dataValues;
    const token = generateToken(userWhithoutPassword);

    return res.status(200).json({ token });
  } catch (error) {
    return res.status(500).json({ message: 'internal error', error: error.message });
  }
};