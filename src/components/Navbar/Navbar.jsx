import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <img src={logo} alt="logo" height="120px"/>
      <ul className="nav-menu">
        <li>Home</li>
        <li>About us</li>
        <li>Projects</li>
        <li>FAQ</li>
        <li>Team</li>
      </ul>
      <div className="nav-connect">Connect with us</div>
    </div>
  );
}

export default Navbar;
