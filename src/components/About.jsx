import React from 'react';
import "./about.css";
import { HiArrowNarrowRight } from 'react-icons/hi';
import mypdf from '../assets/Resume.jpg';
  const About = () => {
    return (
      <div name='about' className='content'>
        <div className='bepar'>
          <div className='bepar1'>
            <div className='bepar2'>
              <p className='bepar3'>
                About
              </p>
            </div>
            </div>
            <div className='faka'>
              <div className='lekhas'>
                <p>Hi, nice to meet you. Please take a look around.
                </p>
              </div>
              <div>
                <p> I am an amateur programmer and am currently trying to gradually 
          master the art of computer programming and better myself everyday. Here is my CV.</p>  
          </div>
          <div>
          <button className='kaj'>
            <a href  = {mypdf} download="Resume.jpg">
            Download CV
            </a>
            <span className='kaj2'>
              <HiArrowNarrowRight className='kaj3 ' />
            </span>
          </button>
        </div>
            
            </div>

        </div>
      </div>
    );
  };

export default About;