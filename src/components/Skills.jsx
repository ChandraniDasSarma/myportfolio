import React from 'react';
import "./skills.css"

import Ubuntu from '../assets/ubuntu.jpg'
import Reactlogo from '../assets/react.png'
import Linux from '../assets/linux.png'
import C from '../assets/c.png'
import Python from '../assets/python.png'
import Node from '../assets/node.png'
import HTML from '../assets/html.png'
import Tailwind from '../assets/tailwind.png'
import Javascript from '../assets/javascript.png'
import Git from '../assets/github.png'

const Skills = () => {
    return (
      <div name='skills' className='ki'>
        {/* Container */}
        <div className='ki1'>
            <div>
                <p className='ki11 '>Skills</p>
                <p className='ki12'> These are the technologies I've worked with</p>
            </div>
  
            <div className='ki2'>
                <div className='ki21'>
                    <img className='ki22' src={Ubuntu} alt="HTML icon" />
                    <p className='my-4'>Ubuntu</p>
                </div>
                <div className='ki21'>
                    <img className='ki22' src={Reactlogo} alt="HTML icon" />
                    <p className='my-4'>Reactjs</p>
                </div>
                <div className='ki21'>
                    <img className='ki22' src={Linux} alt="HTML icon" />
                    <p className='my-4'>Linux</p>
                </div>
                <div className='ki21'>
                    <img className='ki22' src={Python} alt="HTML icon" />
                    <p className='my-4'>Python</p>
                </div>
                <div className='ki21'>
                    <img className='ki22' src={C} alt="HTML icon" />
                    <p className='my-4'>C Language</p>
                </div>
                <div className='ki21'>
                    <img className='ki22' src={Node} alt="HTML icon" />
                    <p className='my-4'>NODE JS</p>
                </div>
                <div className='ki21'>
                    <img className='ki22' src={HTML} alt="HTML icon" />
                    <p className='my-4'>HTML</p>
                </div>
                <div className='ki21'>
                    <img className='ki22' src={Javascript} alt="HTML icon" />
                    <p className='my-4'>Javascript</p>
                </div>
            </div>
        </div>
      </div>
    );
  };
  
  export default Skills;
