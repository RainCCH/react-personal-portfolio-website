import React, {useState, useEffect} from 'react';
import '../styles/About.css'; // Import the CSS file
import profileImage from '../assets/rainchoi.jpg';
import { LinearGradient } from 'react-text-gradients';
import { Transition } from 'react-transition-group';

const duration = 1500;
const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
};

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};

const Fade = ({ in: inProp, children }) => (
  <Transition in={inProp} timeout={duration}>
    {(state) => (
      <div style={{
        ...defaultStyle,
        ...transitionStyles[state]
      }}>
        {children}
      </div>
    )}
  </Transition>
);

const About = () => {
  const [FadeIn, setFadeIn] = React.useState(false);
  useEffect(() => {
    setFadeIn(true);
  }, []);
  return (
    <div className="about-container">
      <Fade in={FadeIn} >
      <h1 className="about-header">
        <LinearGradient gradient={['to left', '#17acff ,#ff68f0']}>
            About Me
        </LinearGradient>
      </h1>
      </Fade>
      <Fade in={FadeIn} >
      <img src={profileImage} alt="Rain Choi" className="about-photo" />
      </Fade>
      <Fade in={FadeIn} >
      <p className="about-text">
        Hi there, My name is <span className="text-highlight">Chong Hou(Rain) Choi</span>. <br />
        I'm currently a master's student at the <a href="https://uwaterloo.ca/" target="_blank" rel="noopener noreferrer" className="school-link">University of Waterloo</a>, majoring in Electrical and Computer Engineering. 
        Before coming to Canada, I received my bachelor's degree from <a href="https://www.tsinghua.edu.cn/en/" target="_blank" rel="noopener noreferrer" className="school-link">Tsinghua University</a>, majoring in Automation Engineering.<br />
        I am currently seeking software development internship opportunities in Canada. Here is my <a href={`${process.env.PUBLIC_URL}/resume.jpg`} target="_blank" className='school-link'>resume</a>. Should you find my skills and experiences align with your needs, please do not hesitate to contact me! <br />
      </p>
      </Fade>
    </div>
  );
};

export default About;
