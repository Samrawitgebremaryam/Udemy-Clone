import React from 'react';
import styles from './ReviewSection.module.css';

function Review({ review , userName }) {
  return (
    <div className={styles.reviewSection}>
      <p className={styles.reviewText}>{review}</p>
      <p className={styles.username}>{userName}</p>
      {/* You can include additional elements for displaying rating, etc. */}
    </div>
  );
}

export default Review;
