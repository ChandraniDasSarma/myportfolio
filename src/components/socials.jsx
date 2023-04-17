import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaYoutube,
  FaFacebook,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import "./socials.css";

export default function Socials() {
  return (
    <div name='socials' className="social-container">
      <h3 className='lo'>My Social Handles</h3>
      <a
        href="https://www.facebook.com/chandrani.dassarma.1?mibextid=ZbWKwL"
        className="facebook social"
      >
        <FaFacebook size={30} />
      </a>
      <a href="https://github.com/ChandraniDasSarma" className="twitter social">
      <FaGithub size={30} />
      </a>
      <p className='mail'>Email Me At : dassarmachandrani@gmail.com</p>
    </div>
  );
}