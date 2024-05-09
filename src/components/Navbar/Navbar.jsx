import React, { useEffect, useState, useRef } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'
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


    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const navbarHeight = document.querySelector('.navbar').offsetHeight;
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

  const scrollToConnect = () => {
    const connectSection = document.getElementById('contact');
    if (connectSection) {
      const navbarHeight = document.querySelector('.navbar').offsetHeight;
      window.scrollTo({
        top: connectSection.offsetTop - navbarHeight,
        behavior: 'smooth'
      });
    }
  };
  const menuRef = useRef();
  const openMenu = () => {
    menuRef.current.style.right='0'

  }
  const closeMenu = () => {
    menuRef.current.style.right='-350px'

  }

  return (
    <div className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <img src={logo} alt="logo" height="120px" onClick={scrollToTop} className="logo"/>
      <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open'/>
      <ul ref={menuRef} className="nav-menu">
        <img src= {menu_close} onClick={closeMenu}alt="" className='nav-mob-close'/>
        <li onClick={() => scrollToSection('home')}>Home</li>
        <li onClick={() => scrollToSection('about')}>About us</li>
        <li onClick={() => scrollToSection('project')}>Projects</li>
        <li onClick={() => scrollToSection('team')}>Team</li>
        <li onClick={() => scrollToSection('faq')}>FAQ</li>
      </ul>

      <div className="nav-connect" onClick={scrollToConnect}>Connect with us</div>
    </div>
  );
}

export default Navbar;
