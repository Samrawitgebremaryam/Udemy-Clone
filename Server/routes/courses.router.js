const express = require('express');

const {getAllCourses, getCourseById, addCourse} = require('../controller/courses.controller')


const coursesRouter = express.Router();



coursesRouter.get('/', getAllCourses);
coursesRouter.get('/:CourseId', getCourseById);
coursesRouter.post('/', addCourse);





module.exports = coursesRouter;