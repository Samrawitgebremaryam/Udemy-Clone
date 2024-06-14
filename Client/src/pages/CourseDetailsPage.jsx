import React from 'react';
import { useParams } from 'react-router-dom';
import sectionData from '../../courses'; 
import SingleCourseHeader from '../../components/single-course-header/SingleCourseHeader'; 
const CourseDetails = () => {
    const { id } = useParams();

    let courseData;
    Object.keys(sectionData).forEach(section => {
        sectionData[section].courses.forEach(course => {
            if (course.id === parseInt(id)) {
                courseData = course;
            }
        });
    });

    if (!courseData) {
        return <p>Course not found</p>;
    }

    return (
        <div>
            <SingleCourseHeader course={courseData} />
            {/* Other details can be displayed here */}
        </div>
    );
};

export default CourseDetails;
