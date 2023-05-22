const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userController = {
  createAccount: async (req, res) => {
    try {
      const { email, username, password } = req.body;
      
      const user = await User.findOne({ username });
      if (user) {
        return res.status(409).json({ message: 'Username already exists' });
      }

      bcrypt.hash(password, 10,(err,hash)=>{
        if(err) {
          return res.status(500).json({ message: 'Internal server error'+err.message });
        }else{
          const newUser = new User({ email, username, password: hash });
           newUser.save();
        }
      });

      // const newUser = new User({ email, username, password: hashedPassword });
      // await newUser.save();

      res.status(201).json({ message: 'User account created successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  login: async (req, res) => {
    try {
      const { username, password } = req.body;

      const user = await User.findOne({ username });
      if (!user) {
        return res.status(401).json({ message: 'Invalid username or password' });
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({ message: 'Invalid username or password' });
      }

      const token = jwt.sign({ userId: user._id }, 'your-secret-key', { expiresIn: '1h' });
      res.status(200).json({ message: 'Login successful', token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }
};

module.exports = userController;
