const multer = require('multer');

const Course = require('../model/courses.mongo')
const upload = require('../services/fileUploadService'); // Path to the multer configuration


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


// async function addCourse(req, res){
//     try{
//         const course = new Course(req.body);
//         await course.save();
//         res.status(201).json(course);
//     }catch(err){
//         console.log(err);
//         res.stauts(500).send("Server Error trying to add Course");
//     }
// }




async function addCourse (req, res) {
    upload(req, res, (err) => {
        if (err) {
            return res.status(400).json({ message: err });
        } else {
            const { title, instructor, price, thumbnails, originalPrice, duration, lectures, description, level, tags, category } = req.body;

            // Get file paths
            const videoUrl = req.files['video'] ? req.files['video'][0].path : '';
            const pdfUrl = req.files['pdf'] ? req.files['pdf'][0].path : '';

            // Create new course
            const newCourse = new Course({
                title,
                instructor,
                price,
                thumbnails,
                originalPrice,
                duration,
                lectures,
                description,
                level,
                videoUrl,
                pdfUrl,
                tags,
                category
            });

            newCourse.save()
                .then(course => res.status(201).json(course))
                .catch(err => res.status(500).json({ message: err.message }));
        }
    });
};





module.exports = {getAllCourses, getCourseById, addCourse}