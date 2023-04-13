const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
    JobTitle:{
        type:String,
        required:true,
    },
    JobDescription:{
        type:String,
        required:true,
    },
    CompanyName:{
        type:String,
        required:true
    },
    Requirements:{
        type:String,
        required:true
    },
    Stipend:{
        type:Number
    },
    applicants:[String]
})


module.exports = mongoose.model("Jobs", JobSchema);
