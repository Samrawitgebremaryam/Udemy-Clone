import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './ReviewSection.module.css';

function ReviewSection() {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`https://random-data-api.com/api/v3/projects/e657498e-1ee1-4ec6-a8ed-ecfef7f0cc48?api_key=HF9K2pVV3eyFg790PkXc0w`)
      .then(response => response.json())
      .then(data => setReviews(data.json_array));
  }, [id]);

  const Review = ({ review, userName }) => (
    <div className={styles.reviewSection}>
      <p className={styles.reviewText}>{review}</p>
      <p className={styles.username}>{userName}</p>
      {/* You can include additional elements for displaying rating, etc. */}
    </div>
  );

  return (
    <div className={styles.container}>
      <div className="mt-20 ">
        <h2 className=" text-2xl font-ubuntu font-bold mb-4">How learners like you are achieving their goals</h2>
        <div className={styles.reviewSectionWrapper}>
          {reviews.map((review, index) => (
            <Review
              key={index}
              review={review.review}
              userName={review.userName}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ReviewSection;
