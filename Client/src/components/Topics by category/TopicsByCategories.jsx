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
    <div>
        <div className='Title'> Featuerd topics by category </div>
           <div className="categories-container">
      {data.map((category, index) => (
        <div key={index} className="category">
          <h3>{category.category}</h3>
          {category.topics.map((topic, idx) => (
            <div key={idx} className="topic">
              <span>{topic.name}</span>
              <span>{topic.learners} learners</span>
            </div>
          ))}
        </div>
      ))}
    </div>
    </div>
 
  );
}

export default TopicsByCategory;
