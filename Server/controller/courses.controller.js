const Course = require('../model/courses.mongo')



async function getAllCourses(req, res){
    try{const Courses = await Course.find();
        res.status(200).json(Courses);
    }
    catch(err){
        console.log(err);
        res.status(500).send().json("Server Error getting Courses");
    }
}


async function getCourseById(req, res){
    try{
        const course = await Course.findOne({CourseId: req.params.CourseId});
        res.status(200).json(course);
    }catch(err){
        console.log(err);
        res.status(500).send("Server Error trying to get Course by ID");
    }
}


async function addCourse(req, res){
    try{
        const course = new Course(req.body);
        await course.save();
        res.status(201).json(course);
    }catch(err){
        console.log(err);
        res.stauts(500).send("Server Error trying to add Course");
    }
}



module.exports = {getAllCourses, getCourseById, addCourse}