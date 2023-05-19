require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');

// Import routes
const userRouter = require('./src/routes/UserRouter')
const folderRouter = require('./src/routes/FolderRouter');
const fileRouter = require('./src/routes/FileRouter');

// Create the Express app
const app = express();

// Set up middleware
app.use(bodyParser.json());
app.use(fileUpload());
app.use(express.json())
// Set up database connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log(err));

app.use('/user', userRouter)
app.use('/file', fileRouter)
app.use('/folder', folderRouter)

  // Set up error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Internal Server Error');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
