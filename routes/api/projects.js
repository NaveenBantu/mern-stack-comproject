/* eslint linebreak-style: ["error", "windows"] */
const express = require('express');

// configuring the routes to the API
const projectRouter = express.Router();

// Bringing in the project model
const Project = require('../../models/projModel');

// @route GET api/projects
// @description Get all projects
// @access Public

projectRouter.get('/', (req, res) => {
  const { query } = req;
  // http://localhost:4000/projects?System%20Name=ADANABM1 gives me all adana system infos
  Project.find(query, (err, projects) => {
    if (err) {
      return res.send(err);
    }
    // res.header('Content-Range', 'projects 0-131/131');
    // return res.send(projects);
    return res.json(projects);
  });
});

// app.use(projectRouter);

// this is how we route in the server js file
// app.get('/', (req, res) => {
//   res.send('welcome to my Nodemon api');
// });

module.exports = projectRouter;
