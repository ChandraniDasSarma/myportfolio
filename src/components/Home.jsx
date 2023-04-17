import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import "./home.css"
import Lottie from 'react-lottie';
import data from './data.json';

const Home = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: data,
    rendererSettings: {
      preserveAspectRatio: 'xMaxYMax slice'
    }
  };
  return (
    <div name='home' className='loom'>
      {/* Container */}
      <div className='loo1'>
        <p className='kotha'>Hi, my name is</p>
        <h1 className='nam'>
          CHANDRANI  DAS  SARMA
        </h1>
        <h2 className='jinis'>
          I'm a Student ...
          <div>
          <Lottie options={defaultOptions}
              height={95}
              width={122}/>
        </div>
        </h2>
        
        <p className='tutu'>
          I am currently pursuing btech from St. Thomas College of Engineering and 
          Technology, Kolkata. My stream is specialization in Artificial Intelligence And Machine
           Learning and am currently in 2nd year.
        </p>
        
      </div>
    </div>
  );
};
export default Home;