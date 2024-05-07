import React from 'react';
import styles from './CoursesBox.module.css';
import CoursesContainer from '../courses-container/CoursesContainer';
const CoursesBox = ({ sectionData }) => {
	const {
		 title,
		description,
		courses,
	} = sectionData;
	return (
		<section
			className={styles.wrapper}>
			<h2 className={styles.title}>{title}</h2>
			<p className={styles.description}> {description} </p>
			<button className={styles.exploreButton}>
				Explore {title}
			</button>
			<CoursesContainer courses={courses}></CoursesContainer>
		</section>
	);
};

export default CoursesBox;
