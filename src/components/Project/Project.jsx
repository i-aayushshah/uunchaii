import React, { useState, useEffect, useRef } from 'react';
import './Project.css';
import project_data from '../../assets/project_data';
import arrow_icon from '../../assets/arrow_icon.svg';

const Project = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const dialogRef = useRef(null);

  const openProjectDetails = (work) => {
    setSelectedProject(work);
  };

  const closeProjectDetails = () => {
    setSelectedProject(null);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dialogRef.current && !dialogRef.current.contains(event.target)) {
        closeProjectDetails();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className='project'>
      <div className="project-title">
        <h1 className="about-heading">Highlighted Project</h1>
      </div>
      <div className='project-container'>
        {project_data.map((work, index) => (
          <img key={index} src={work.w_img} alt="" onClick={() => openProjectDetails(work)} />
        ))}
      </div>
      <div className="project-showmore">
        <p>Show More</p>
        <img src={arrow_icon} alt="" />
      </div>
      {selectedProject && (
  <div className="project-dialog" ref={dialogRef}>
    <div className="close-button-container">
      <button className="close-button" onClick={closeProjectDetails}>×</button>
    </div>
    <div className="project-details">
      <img src={selectedProject.w_img} alt={selectedProject.w_name} />
      <h2 className="project-name">{selectedProject.w_name}</h2>
      <p><strong>Batch: </strong> {selectedProject.w_batch}</p>
      <p><strong>Mentor: </strong>{selectedProject.w_mentor}</p>
      <p><strong>Students: </strong>{selectedProject.w_students}</p>
      <p>{selectedProject.w_des}</p>
    </div>
  </div>
)}
    </div>
  );
};

export default Project;
