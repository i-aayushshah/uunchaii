import React, { useState } from 'react';
import './faq.css';
import faq_data from '../../assets/faq_data';

const Faq = () => {
  const [expanded, setExpanded] = useState({});

  const toggleAnswer = (f_no) => {
    setExpanded((prevExpanded) => ({
      ...prevExpanded,
      [f_no]: !prevExpanded[f_no],
    }));
  };

  return (
    <div className="FAQ">
      <h1 className="about-heading">FAQ</h1>

      {/* Eligibility Section */}
      <div className="faq-section">
        <h2>Eligibility</h2>
        {faq_data.slice(0, 2).map((item) => (
          <div key={item.f_no} className={`faq-item ${expanded[item.f_no] ? 'expanded' : ''}`} onClick={() => toggleAnswer(item.f_no)}>
            <h3>{item.f_ques}</h3>
            {/* Conditional rendering for chevron icon */}
            {expanded[item.f_no] ? <i className="fa fa-chevron-up" aria-hidden="true"></i> : <i className="fa fa-chevron-down" aria-hidden="true"></i>}
            {expanded[item.f_no] && <p>{item.f_answr}</p>}
          </div>
        ))}
      </div>

      {/* Program Overview Section */}
      <div className="faq-section">
        <h2>Program Overview</h2>
        {faq_data.slice(2, 4).map((item) => (
          <div key={item.f_no} className={`faq-item ${expanded[item.f_no] ? 'expanded' : ''}`} onClick={() => toggleAnswer(item.f_no)}>
            <h3>{item.f_ques}</h3>
            {/* Conditional rendering for chevron icon */}
            {expanded[item.f_no] ? <i className="fa fa-chevron-up" aria-hidden="true"></i> : <i className="fa fa-chevron-down" aria-hidden="true"></i>}
            {expanded[item.f_no] && <p>{item.f_answr}</p>}
          </div>
        ))}
      </div>

      {/* Selection Procedure Section */}
      <div className="faq-section">
        <h2>Selection Procedure</h2>
        {faq_data.slice(4, 6).map((item) => (
          <div key={item.f_no} className={`faq-item ${expanded[item.f_no] ? 'expanded' : ''}`} onClick={() => toggleAnswer(item.f_no)}>
            <h3>{item.f_ques}</h3>
            {/* Conditional rendering for chevron icon */}
            {expanded[item.f_no] ? <i className="fa fa-chevron-up" aria-hidden="true"></i> : <i className="fa fa-chevron-down" aria-hidden="true"></i>}
            {expanded[item.f_no] && <p>{item.f_answr}</p>}
          </div>
        ))}
      </div>

      {/* Project Section */}
      <div className="faq-section">
        <h2>Project</h2>
        {faq_data.slice(6, 8).map((item) => (
          <div key={item.f_no} className={`faq-item ${expanded[item.f_no] ? 'expanded' : ''}`} onClick={() => toggleAnswer(item.f_no)}>
            <h3>{item.f_ques}</h3>
            {/* Conditional rendering for chevron icon */}
            {expanded[item.f_no] ? <i className="fa fa-chevron-up" aria-hidden="true"></i> : <i className="fa fa-chevron-down" aria-hidden="true"></i>}
            {expanded[item.f_no] && <p>{item.f_answr}</p>}
          </div>
        ))}
      </div>

      {/* Further Queries Section */}
      <div className="faq-section">
        <h2>Further Queries</h2>
        {faq_data.slice(8, 10).map((item) => (
          <div key={item.f_no} className={`faq-item ${expanded[item.f_no] ? 'expanded' : ''}`} onClick={() => toggleAnswer(item.f_no)}>
            <h3>{item.f_ques}</h3>
            {/* Conditional rendering for chevron icon */}
            {expanded[item.f_no] ? <i className="fa fa-chevron-up" aria-hidden="true"></i> : <i className="fa fa-chevron-down" aria-hidden="true"></i>}
            {expanded[item.f_no] && <p>{item.f_answr}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
