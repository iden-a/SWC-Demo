const express = require('express');
const router = express.Router();
const Student = require('../models/student')

//get a list of all the students from the database
router.get('/student', function(req,res, next) {
    res.send({type:'GET'});
})

//add a new student to the database
router.post('/student', function(req,res, next) {
    // var student = new Student(req.body);
    // student.save();
    Student.create(req.body).then(function(student){
        res.send(student);
    }).catch(next)

})

//update a student in the database
router.put('/student/:id', function(req,res, next) {
    res.send({type:'PUT'});
})

//delete a student from the database
router.delete('/student/:id', function(req,res, next) {
    console.log(req.params.id);
    res.send({type:'DELETE'});
})

module.exports = router;