const validateUser = async (req, res, next) => {
  const regex = /\S+@\S+\.\S+/;
  const { displayName, email, password } = req.body;

  if (displayName.length < 8) {
    return res.status(400)
    .json({ message: '"displayName" length must be at least 8 characters long' });
  }

  if (regex.test(email)) {
    return res.status(400)
    .json({ message: '"email" must be a valid email' });
  }

  if (password.length < 6) {
    return res.status(400)
    .json({ message: 'User already registered' });
  }
  next();
};

module.exports = {
  validateUser,
};