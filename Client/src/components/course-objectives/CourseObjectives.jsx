import React, { useState } from 'react';
import styles from './CourseObjectives.module.css';

function CourseObjectives({ courseDetails }) {
    const objectives = courseDetails.objectives_summary || [];
    const [showAll, setShowAll] = useState(false);

    const displayedObjectives = showAll ? objectives : objectives.slice(0, 6);

    return (
        <div className={styles.objectivesContainer}>
            <p className={styles.header}>What you'll learn</p>
            <section className={styles.objectives}>
                {displayedObjectives.map((objective, idx) => (
                    <p
                        key={idx}
                        className={`${styles.objective} ${objective.completed ? styles.completed : ''}`}
                    >
                        <i
                            style={{ marginRight: '10px', color: objective.completed ? 'lightgrey' : 'grey' }}
                            className='fa-solid fa-check'
                        ></i>
                        {objective.text}
                    </p>
                ))}
            </section>
            {objectives.length > 6 && (
                <p className={styles.showMore} onClick={() => setShowAll(!showAll)}>
                    {showAll ? 'Show less' : 'Show more'} <i className={`fa-solid fa-chevron-${showAll ? 'up' : 'down'}`}></i>
                </p>
            )}
        </div>
    );
}

export default CourseObjectives;
