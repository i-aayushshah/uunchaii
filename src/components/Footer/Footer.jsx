import React from 'react';
import './Footer.css';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';
import logo from '../../assets/Uunchai Logo.jpg';

const Footer = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const navbarHeight = document.querySelector('.footer').offsetHeight;
      window.scrollTo({
        top: section.offsetTop - navbarHeight,
        behavior: 'smooth'
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className='footers'>
      <footer className="footer">
        <div className="col">
          <div className="logo" onClick={scrollToTop}>
            <img src={logo} alt="logo" />
          </div>
          <h4 className='uunchai'>Uunchai</h4>
          <div className="description">
            <p>Connecting the brightest young minds in Nepal to</p>
            <p>create and explore.</p>
          </div>
        </div>

        <div className="col">
          <h4>Quick Links</h4>
          <p className='links' onClick={() => scrollToSection('about')}>About us</p>
          <p className='links' onClick={() => scrollToSection('project')}>Projects</p>
          <p className='links' onClick={() => scrollToSection('faq')}>FAQ</p>
          <p className='links' onClick={() => scrollToSection('team')}>Team</p>
        </div>

        <div className="col">
          <h4>Contact Us</h4>
          <div className="contact-det">
            <img src={mail_icon} alt="" /><a href={`mailto:'uunchai@gmail.com'`}><p>uunchai@gmail.com</p></a>
          </div>
          <div className="contact-det">
            <img src={call_icon} alt="" /> <p>+1 567890123</p>
          </div>
          <div className="contact-det">
            <img src={location_icon} alt="" /> <p>PA, United States</p>
          </div>
          <div className="follow">
            <h4>Follow us</h4>
            <div className="icon">
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>

      <div className="copyright">
        <p>&#169; <a>Uunchai </a>- 2024 - All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
