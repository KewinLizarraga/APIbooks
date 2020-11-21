const jwt = require('jsonwebtoken');

const { User } = require('../models');
const { JWT_SECRET } = require('../config');

module.exports = {
  signup: async (req, res) => {
    try {
      if (Object.keys(req.body).length === 0) {
        return res.status(200).json({ message: 'No data.' });
      }
      const oldUser = await User.findOne({ email: req.body.email });
      if (oldUser) {
        return res.status(200).json({ message: 'Email is duplicated, enter another.' });
      }
      const user = new User(req.body);
      user.save();
      res.status(201).json({ status: 201, message: 'Registered user.' });
    } catch (error) {
      console.log('ERROR', error);
      res.status(500).json({ message: 'Internal Server Error.' });
    }
  },
  login: async (req, res) => {
    try {
      const user = await User.findOne({ email: req.body.email });
      if (!user) {
        return res.status(400).json({ message: 'Email not registered.' });
      }
      const validatePassword = user.comparePassword(req.body.password);
      if (!validatePassword) {
        return res.status(400).json({ message: 'Wrong password.' });
      }
      const token = jwt.sign({ id: user._id, email: user.email }, JWT_SECRET, {
        expiresIn: '1h'
      });
      res
        .status(200)
        .json({ auth: true, message: 'User login', token: 'bearer ' + token });
    } catch (error) {
      console.log('ERROR', error);
      res.status(500).json({ message: 'Internal Server Error.' });
    }
  },
  // logout: (req, res) => {},
  profile: async (req, res) => {
    try {
      listAll: async (req, res) => {
        try {
          const users = await User.find();
          res.status(200).json(users);
        } catch (error) {
          console.log('ERROR', error);
          res.status(500).json({ message: 'Internal Server Error.' });
        }
      }
      let token = req.headers.authorization;
      if (!token) {
        return res.status(401).json({ auth: false, message: 'No token provided' });
      } else {
        token = token.slice(7);
      }
      const decoded = jwt.decode(token, JWT_SECRET);
      const user = await User.findById({ _id: decoded.id }, { password: 0 });
      if (!user) {
        return res.status(401).json({ message: 'User not found' });
      }
      res.status(200).json(user);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }
};
