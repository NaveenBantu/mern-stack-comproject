// const { query } = require('express');
/* eslint linebreak-style: ["error", "windows"] */

const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');

const connectDB = require('./config/db');

const projects = require('./routes/api/projects');
const oscounts = require('./routes/api/analyze');

// Load Config
dotenv.config({ path: './config/config.env' });

// connecting to MongoDB
connectDB();

const app = express();

// Logging
// using Morgan middleware in the app
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Use Routes (anything that points to the projects link should refer to the projects api js file)
app.use('/api/projects', projects);
app.use('/api/oscounts', oscounts);

// firing up the backend on the specified port
const port = process.env.PORT || 5000;

app.listen(port, '0.0.0.0', () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`);
});
