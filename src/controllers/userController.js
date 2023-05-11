const { creatUser } = require('../services/userService');
const generateToken = require('../auth/token');

module.exports = async (req, res) => {
  try {
    console.log('email and password controller', req.body);
    const { displayName, email, password, image } = req.body;

    const newUser = await creatUser(displayName, email, password, image);
    const { passsword: _password, ...userWhithoutPassword } = newUser.dataValues;

    const token = generateToken(userWhithoutPassword);
    return res.status(201).json({ token });
  } catch (error) {
    return res.status(500).json({ message: 'internal error', error: error.message });
  }
};