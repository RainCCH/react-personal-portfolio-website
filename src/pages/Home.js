import React, { useState, useEffect } from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import ResumeIcon from "@material-ui/icons/Description";
import { LinearGradient } from 'react-text-gradients';
import { Transition } from 'react-transition-group';
import "../styles/Home.css";

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

function Home() {
  const [FadeIn, setFadeIn] = useState(false);
  useEffect(() => {
    setFadeIn(true);
  }, []);
  return (
    <div className="home">
      <div className="about">
        <Fade in={FadeIn} >
          <h2>
            <LinearGradient gradient={['to left', '#17acff ,#ff68f0']}>
              Welcome to Rain Choi's Personal Portfolio!
            </LinearGradient>
          </h2>
        </Fade>
        <div className="prompt">
          <Fade in={FadeIn} >
            <p>
              <LinearGradient gradient={['to left', '#17acff ,#ff68f0']}>
                A software developer with a passion for learning and creating.
              </LinearGradient>
            </p>
            <a href="https://www.linkedin.com/in/rain-choi" target="_blank" rel="noopener noreferrer">
              <LinkedInIcon />
            </a>
            <a href="chchoi@uwaterloo.ca">
              <EmailIcon />
            </a>
            <a href="https://github.com/RainCCH" target="_blank" rel="noopener noreferrer">
              <GithubIcon />
            </a>
            <a href="https://www.instagram.com/rainchoi.c.h/" target="_blank" rel="noopener noreferrer">
              <InstagramIcon />
            </a>
            <a href={`${process.env.PUBLIC_URL}/resume.jpg`}f target="_blank" rel="noopener noreferrer">
              <ResumeIcon />
            </a>
          </Fade>
        </div>
      </div>
      {/* <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, Angular, Redux, HTML, CSS, React Native, Flutter, NPM,
              Ionic, BootStrap, MaterialUI, Yarn, TailwindCSS, StyledComponents
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, Java Spring, .NET, ExpressJS, GraphQL, ApolloServer,
              MySQL, MongoDB, DynamoDB, DigitalOcean, AWS S3, MS SQL
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Java, Python, C#, C, C++, TypeScript, Go</span>
          </li>
        </ol>
      </div> */}
    </div>
  );
}

export default Home;
