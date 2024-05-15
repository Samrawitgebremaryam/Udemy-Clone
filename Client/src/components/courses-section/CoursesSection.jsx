import React, { useState, useContext } from 'react';
import styles from './CoursesSection.module.css'
import CoursesBox from '../../components/courses-box/CoursesBox';
import sectionData from '../../courses';
function CoursesSection() {
    const categories = [
        "Python",
        "Excel",
        "WebDevelopment",
        "JavaScript",
        "DataScience",
        "AWSCertification",
        "Drawing"
    ];
 	const [currentTab, setCurrentTab] = useState('Python');
    return (
        <div id='courses-section' className={styles.coursesSection}>
            <h2 className={styles.coursesSectionTitle}>
                A broad selection of courses
            </h2>
            <p>
                Choose from 185,000 online video courses with new additions published every month
            </p>
            <div className={styles.categoriesContainer}>
                {categories.map((category, index) => (
                    <span key={index} className={styles.category} onClick={() => setCurrentTab(category)}>
                        {category}
                    </span>
                ))}
            </div>
						<CoursesBox sectionData={sectionData[currentTab]} />
        </div>
    );
}

export default CoursesSection;
