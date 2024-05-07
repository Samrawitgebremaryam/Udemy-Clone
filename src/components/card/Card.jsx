import React from 'react';
import styles from './Card.module.css';
import { useNavigate } from 'react-router-dom';

const Card = ({ course }) => {
	const { title, visible_instructors, image_304x171: image, id } = course;
	const instructors = visible_instructors
		.map((instructor) => instructor.title)
		.join(', ');

	const navigate = useNavigate();

	const handleClick = () => {
		navigate(`/Udemy-Clone-ReactJS/courses/${id}`);
	};

	return (
		<div className={styles.courseWrapper} onClick={handleClick}>
			<article className={styles.card}>
				<figure className={styles.wrapper}>
					<img
						src={image}
						alt=''
					/>
				</figure>
				<section className={styles.body}>
					<p className={styles.title}>{title}</p>
					<p className={styles.instructors}>{instructors}</p>
					<p className={styles.price}>$15</p>
				</section>
			</article>
		</div>
	);
};

export default Card;
