import React, { useState } from "react";
import "./navbar.css";
import "./nav.css";
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from '../assets/Logo.png';
import { Link } from 'react-scroll';


function Navbarr() {
  const [nav, setNav] = useState(false);
  const [slide, setSlide] = useState(false)
  const handleNav = () => {
    setNav(!nav)
    setSlide(!slide)
}

const handleClose = () => {
    setNav(!nav)
}
  
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  return (
    <nav className="nav">
      <div>
        <img src={Logo} alt='Logo' style={{ width: '70px' }} />
      </div>
      <div className="nav__brand">
        My Portfolio
      </div>
      
      
      
        <ul className={active}>
        
        <li className="nav__item">
        <a href="/">
        <Link onClick={handleClose} activeClass="active" to="home" spy={true} smooth={true} duration={500}>Home</Link></a>
        </li>
        <li className="nav__item">
        <a href="/">
        <Link onClick={handleClose} activeClass="active" to="about" spy={true} smooth={true} duration={500}>About</Link></a>
        </li>
        <li className="nav__item">
        <a href="/">
        <Link onClick={handleClose} activeClass="active" to="skills" spy={true} smooth={true} duration={500}>Skills</Link></a>
        </li>
        <li className="nav__item">
        <a href="/">
        <Link onClick={handleClose} activeClass="active" to="socials" spy={true} smooth={true} duration={500}>Contact</Link></a>
        </li>
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
      
  </nav>
   );
  }

export default Navbarr;
