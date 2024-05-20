import React from 'react';
import styles from './Card.module.css';
import { useNavigate } from 'react-router-dom';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';

const Card = ({ course }) => {
    const { title, instructors, rating, image, id, price } = course;
    const instructorNames = instructors.map((instructor) => instructor.name).join(', ');

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/Udemy-Clone/courses/${id}`);
    };

    return (
        <div className={styles.courseWrapper} onClick={handleClick}>
            <article className={styles.card}>
                <figure className={styles.wrapper}>
                    <img src={image} alt='' />
                </figure>
                <section className={styles.body}>
                    <p className={styles.title}>{title}</p>
                    <p className={styles.instructors}>{instructorNames}</p>
                    <div className={styles.ratingDiv}>
                        <span className={styles.rating}>{rating}</span>
                        <span className={styles.stars}>
                            {[...Array(Math.floor(rating))].map((_, index) => (
                                <StarIcon key={index} />
                            ))}
                            {rating % 1 !== 0 && <StarHalfIcon />}
                        </span>
                    </div>
                    <p className={styles.price}>${price}</p>
                </section>
            </article>
        </div>
    );
};

export default Card;
