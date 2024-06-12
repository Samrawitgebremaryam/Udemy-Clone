import React from "react";
import { useParams } from "react-router-dom";
import sectionData from "../../courses";
import SingleCourseHeader from "../../components/single-course-header/SingleCourseHeader";
import CourseObjectives from "../../components/course-objectives/CourseObjectives";
import ThisCourseIncludes from "../../components/this-course-includes/ThisCourseIncludes";
import styles from "./CourseDetailsPage.module.css";
import PaymentForm from "../../components/Payment/PaymentForm";
const CourseDetails = () => {
  const { id } = useParams();

  let courseData;
  Object.values(sectionData).forEach((section) => {
    section.courses.forEach((course) => {
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
      <div className={styles.body}>
        <CourseObjectives courseDetails={courseData} />
        <div className={styles.includesSection}>
          <ThisCourseIncludes details={courseData} />
        </div>
        <PaymentForm />
      </div>
    </div>
  );
};

export default CourseDetails;
