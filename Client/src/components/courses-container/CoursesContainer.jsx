import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Card from '../card/Card';
import styles from './CoursesContainer.module.css';

const CoursesContainer = ({ courses }) => {
	const [searchParam, setSearchParam] = useSearchParams();
	const searchTerm = searchParam.get('filter')
		? searchParam.get('filter').toLowerCase()
		: '';

	useEffect(() => {
		const coursesSection = document.querySelector('#courses-section');
		if (searchParam.get('filter'))
			coursesSection.scrollIntoView({
				behavior: 'smooth',
				block: 'start',
			});
	}, [searchParam]);

	// Add guard clause to check if courses array is undefined
	if (!courses) {
		return <p>Loading...</p>; // or any other fallback UI
	}

	// Filter and map over courses only if courses array exists
	const coursesCards = courses
		.filter((course) => course.title.toLowerCase().includes(searchTerm))
		.map((course) => {
			return (
				<Card
					key={course.id}
					course={course}
				></Card>
			);
		});

	return (
		<>
			<section className={styles.container}>
				{coursesCards.length ? (
					coursesCards
				) : (
					<p className={styles.emptyCoursesList}>
						There're no courses to show
					</p>
				)}
			</section>
		</>
	);
};

export default CoursesContainer;
