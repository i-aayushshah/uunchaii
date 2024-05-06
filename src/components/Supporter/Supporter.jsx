import React, { useState } from 'react';
import './Supporter.css';
import SupporterData from '../../assets/supporter_data';

const Supporter = () => {
  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    setStartIndex((prevIndex) => prevIndex + 4);
  };

  const handlePrev = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - 4, 0));
  };

  return (
    <div className='support'>
      <div className="support-title">
        <h1 className="about-heading">We are Supported by</h1>
      </div>
      <div className="supporters-container">
        {SupporterData.slice(startIndex, startIndex + 4).map((support, index) => (
          <div className="supporter" key={index}>
            <img src={support.s_img} alt={support.s_name} />
            <p>{support.s_name}</p>
          </div>
        ))}
      </div>
      <div className="controls">
        <button onClick={handlePrev} disabled={startIndex === 0} className="animated-button">Prev</button>
        <button onClick={handleNext} disabled={startIndex + 4 >= SupporterData.length} className="animated-button">Next</button>
      </div>
    </div>
  );
};

export default Supporter;
