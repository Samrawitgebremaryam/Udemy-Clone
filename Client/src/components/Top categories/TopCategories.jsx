import React from 'react' 
import './TopCatagories.css' 
import softwareImage from '../Top categories/Images/software.jpg' 
import designImage from '../Top categories/Images/design.jpg'
import developmentImage from '../Top categories/Images/development.jpg'
import marketingImage from '../Top categories/Images/marketing.jpg'
import personalImage from '../Top categories/Images/personal-development.jpg'
import photographyImage from '../Top categories/Images/photography.jpg'
import businessImage from '../Top categories/Images/business.jpg'
import musicImage from '../Top categories/Images/music.jpg'

const categories = [
    { id: 1, name: 'Design', image: designImage },
    { id: 2, name: 'Development', image: developmentImage },
    { id: 3, name: 'Marketing', image: marketingImage },
    { id: 4, name: 'IT and Software', image: softwareImage },
    { id: 5, name: 'Personal development', image: personalImage },
    { id: 6, name: 'Business', image: businessImage },
    { id: 7, name: ' Photography', image: photographyImage },
    { id: 8, name: 'Music', image: musicImage }

  ];

export const TopCategories = () => {
   return ( 
   <div>
    <div className='ml-9 mt-5 font-bold ' >
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

