import React from 'react';
import './InstructorSection.css';
import instructorImage from './instructor.jpg'; 
const InstructorSection = () => {
  return (
    <div className="instructor-section">
      <div className="image-Container">
        <img src={instructorImage} alt="Instructor talking" />
      </div>
      <div className="text-Container">
        <h1>Become an instructor</h1>
        <p>Instructors from around the world teach <br /> millions of learners on Udemy. We provide the <br /> tools and skills to teach what you love.</p>
        <button className="start-teaching-button">Start teaching today</button>
      </div>
    </div>
  );
}

export default InstructorSection;
