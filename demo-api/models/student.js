const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create the student schema & model 
const StudentSchema = new Schema({
    firstName: {
        type:String,
        required:[true, "First Name field is required!"]
    },
    lastName: {
        type:String,
        required:[true, "Last Name field is required!"]
    },
    collegeUniversity: {
        type:String,
        required:[true, "College/University field is required!"]
    },
    collegeMajor: {
        type:String,
        required:[true, "College Major field is required!"]
    },
    funFact: {
        type:String,
    }
});

const Student = mongoose.model('Student', StudentSchema);

module.exports = Student;