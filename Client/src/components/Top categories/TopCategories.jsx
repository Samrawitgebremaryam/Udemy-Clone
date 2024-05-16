import React from 'react';
import './TopCatagories.css';
import softwareImage from './Images/software.jpg';
import designImage from './Images/design.jpg';
import developmentImage from './Images/development.jpg';
import marketingImage from './Images/marketing.jpg';
import personalImage from './Images/personal-development.jpg';
import photographyImage from './Images/photography.jpg';
import businessImage from './Images/business.jpg';
import musicImage from './Images/music.jpg';

const categories = [
  { id: 1, name: 'Design', image: designImage },
  { id: 2, name: 'Development', image: developmentImage },
  { id: 3, name: 'Marketing', image: marketingImage },
  { id: 4, name: 'IT and Software', image: softwareImage },
  { id: 5, name: 'Personal Development', image: personalImage },
  { id: 6, name: 'Business', image: businessImage },
  { id: 7, name: 'Photography', image: photographyImage },
  { id: 8, name: 'Music', image: musicImage }
];

const TopCategories = () => {
  return (
    <div>
      <div className="title">
        <h2>Top Categories</h2>
      </div>
      <div className="category-grid">
        {categories.map(category => (
          <div key={category.id} className="category-item">
            <img src={category.image} alt={category.name} />
            <p>{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopCategories;
