import React, { useState, useEffect } from 'react';
import './Team.css';
import team_data from '../../assets/team_data';


const Team = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectedMember && !event.target.closest('.dialog-content')) {
        closeDialog();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [selectedMember]);

  const openDialog = (member) => {
    setSelectedMember(member);
  };

  const closeDialog = () => {
    setSelectedMember(null);
  };

  return (
    <div className='team' id='team'>
      <div className="team-title">
        <h1 className="about-heading">Our Team</h1>
      </div>
      <div className='team-container'>
        {team_data.map((team, index) => {
          return (
            <div key={index} className="team-member" onClick={() => openDialog(team)}>
              <img src={team.t_img} alt="" />
              <h2>{team.t_name}</h2>
              <p>{team.t_role}</p>
              <div className="social-links">
                <a href={team.t_linkden} target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                <a href={team.t_insta} target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"> </i></a>
                <a href={`mailto:${team.t_email}`}><i className="fas fa-envelope"></i></a>
              </div>
            </div>
          );
        })}
      </div>


      {selectedMember && (
        <div className="dialog">
          <div className="dialog-content">
            <div className="close-dialog" onClick={closeDialog}>
              <i className="fas fa-times"></i>
            </div>
            <img src={selectedMember.t_img} alt="" />
            <h2>{selectedMember.t_name}</h2>
            <h3>{selectedMember.t_role}</h3>
            <p>{selectedMember.s_desc}</p>
            <div className="social-link">
              <a href={selectedMember.t_linkden} target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
              <a href={selectedMember.t_insta} target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"> </i></a>
              <a href={`mailto:${selectedMember.t_email}`}><i className="fas fa-envelope"></i></a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Team;
