var express = require('express');
var router = express.Router();
var course = require('../models/course').course;

router.post('/add',  [ensureAuthenticated, isAdmin, createAccessControl], async (req, res) => {
    // Get our form values. These rely on the "name" attributes
        var dname = req.body.departmentName;
        var cname=req.body.courseName;
        var duration = req.body.courseDuration;
        var start = req.body.startDate;
        var end = req.body.endDate;
        var fee=req.body.courseFee;
        var seats = req.body.intake;
        console.log(req.body);
    // Submit to the DB
    course.create({    
            "dname" :dname,    
            "cname" : cname,
            "duration" : duration,
            "start" : start,
            "end" : end,
            "fee" :fee,
            "seats" : seats
    
        }, function (err, doc) {
            if (err) {
                console.log('error');
                // If it failed, return error
                res.send("There was a problem in adding items.");
            }
            else {
                // And forward to success page
                console.log('item added successfully');
                res.redirect('/student_course');
            }
        });
    });
    
    module.exports = router;