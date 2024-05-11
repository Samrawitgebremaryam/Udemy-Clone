import React from "react";
import "./Recommendations.css";
import sectionData from '../../courses';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
function Recommendations() {
  const allCourses = [];
  Object.values(sectionData).forEach((section) => {
    // Concatenate the courses from each section into allCourses array
    allCourses.push(...section.courses);
  });
  return (
    <div >
      <div className=" text-left">
        <h3 className="text-3xl text-black font-bold  mb-4 ml-8">Learners are viewing</h3>
        <div className="videoCardContainer">
       {allCourses.map((course) => (
        <div className='videoCard ' key={course.id}>
          <img className='courseImg' src={course.image} alt='courseImg'></img>
          <h3>{course.title}</h3>
          <p>{course.instructors[0].name}</p>
          <div className='ratingDiv'>
            <span className='rating'>{course.rating}</span>
            <span className='stars'>
              {[...Array(Math.floor(course.rating))].map((_, index) => (
                <StarIcon key={index} />
              ))}
              {course.rating % 1 !== 0 && <StarHalfIcon />}
            </span>
            
          </div>
          <h3 className='price'>${course.price}</h3>
          {course.bestseller && (
            <div className='bestsellerBadge'>Bestseller</div>
          )}
        </div>
      ))}
      </div>
      </div>
    </div>
  );
}

export default Recommendations;
