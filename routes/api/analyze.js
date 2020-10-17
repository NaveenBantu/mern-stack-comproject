/* eslint linebreak-style: ["error", "windows"] */
const express = require('express');

// configuring the routes to the API
const analyzeRouter = express.Router();

// Bringing in the project model
const Analyze = require('../../models/analyzeModel');

// @route GET api/projects
// @description Get all projects
// @access Public

analyzeRouter.get('/', async (req, res) => {
    console.log("in analyze call ")
    const { query } = req;
    // http://localhost:4000/projects?System%20Name=ADANABM1 gives me all adana system infos

    const osAnalysis = await Analyze.aggregate([
        { $match: {} },
        {
            $group: {
                _id: "$Operating System",
                count: { "$sum": 1 }
            }
        },
        { $sort: { count: -1 } }]);
    console.log("awaiting os analysis ", osAnalysis)
    res.header('Content-Range', 'counts 0-6/6');
    res.header('X-Total-Count', '2');
    // osAnlaysis = {"oscounts":osAnlaysis}
    return res.send(osAnalysis)
    // return res.send([{id:1,value:1},{id:2,value:3}])
}
);

// app.use(projectRouter);

// this is how we route in the server js file
// app.get('/', (req, res) => {
//   res.send('welcome to my Nodemon api');
// });

module.exports = analyzeRouter;