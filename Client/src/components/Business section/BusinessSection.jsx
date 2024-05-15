import React from 'react';
import './BusinessSection.css'; // Import the CSS for styling
import teamImage from './businessteam.jpg'
import logo from './logo-ub.svg'
import { BriefcaseIcon } from '@heroicons/react/16/solid';
const BusinessSection = () => {
  return (
    <div className="business-section">
      <div className="content"> 
      <img className= 'w-44 mb-4 ' src={logo} alt="Team talking business" />
        <div className='business-description'>
        <h1>Upskill your team with <br/> Udemy Business</h1>
        <ul>
          <li>Unlimited access to 25,000+ top Udemy courses <br /> anytime, anywhere</li>
          <li>International course collection in 14 languages</li>
          <li>Top certifications in tech and business</li>
        </ul>
        </div>
        <div className="buttons">
          <button className="button1">Get Udemy Business</button>
          <button className="button2">Learn more</button>
        </div>
      </div>
      <div className="image-container">
        <img src={teamImage} alt="Team talking business" />
      </div>
    </div>
  );
}

export default BusinessSection;
