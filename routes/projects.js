const express = require('express');
const router = express.Router();
const Project = require('../models/project');




// --- GET all projects --- //
router.get('/all', (req, res, next) => {
    Project.find({}, (err, projects) => {
        if (err) {
            return next(err);
        }
        res.json(projects);
    });
});




module.exports = router;
