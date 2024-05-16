import React from 'react';
import './TopicsByCategories.css';

const data = [
  {
    category: 'Development',
    topics: [
      { name: 'Python', learners: '36,354,994' },
      { name: 'Web Development', learners: '11,415,615' },
      { name: 'Machine Learning', learners: '7,070,015' }
    ]
  },
  {
    category: 'Business',
    topics: [
      { name: 'Financial Analysis', learners: '1,195,282' },
      { name: 'SQL', learners: '5,977,561' },
      { name: 'PMP', learners: '1,733,398' }
    ]
  },
  {
    category: 'IT and Software',
    topics: [
      { name: 'Amazon AWS', learners: '6,123,456' },
      { name: 'Ethical Hacking', learners: '10,931,066' },
      { name: 'Cyber Security', learners: '3,998,037' }
    ]
  },
  {
    category: 'Design',
    topics: [
      { name: 'Photoshop', learners: '10,909,736' },
      { name: 'Graphic Design', learners: '3,381,052' },
      { name: 'Drawing', learners: '2,410,849' }
    ]
  }
];

const TopicsByCategory = () => {
  return ( 
    <div className='category-box'>
        <div className='Title'> Featuerd topics by category </div>
           <div className="categories-container">
      {data.map((category, index) => (
        <div key={index} className="category">
          <h3>{category.category}</h3>
          {category.topics.map((topic, idx) => (
            <div key={idx} className="topic">
              <p>{topic.name}</p>
              <span>{topic.learners} learners</span> 
              
            </div>
          ))}
        </div>
      ))}
    </div>
  <button className='px-4 py-2 ml-4 mb-7 border border-black text-base font-bold text-black-900 hover:bg-gray-200'>Explore more topics</button>
    </div>
 
  );
}

export default TopicsByCategory;
