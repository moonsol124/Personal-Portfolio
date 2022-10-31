import React, { useState, useEffect } from 'react';
import './css/home.css';
import Carousel from './carousel';
import { useNavigate, Link } from "react-router-dom";
import uniqid from 'uniqid';
import ProjectsHome from './projects';
import Project from './project';

function Home(props) {
  const navigate = useNavigate();
  const aboutText = {'string': '"Less is more"', 'count': 0};
  const projectText = {'string': "See what I'm capable of", 'count': 0};
  const headerTitle = {'string': "Sol Moon", 'count': 0};
  // const [projects, setProjects] = useState([]);

  useEffect(()=>{
    manageAnimation();
  }, [])

  function increaseCount(obj) {
    return obj.count+.1;
  }

  function generateRandInt(word) {
    return Math.floor(Math.random() * word.length);
  }

  function manageAnimation() {
    const headerTitle = Array.from((document.getElementById('header-title')).children);
    const randomLetter = headerTitle[generateRandInt(headerTitle)];
  }

  function handlesPackman(e) {
    const packman = document.querySelector('.packMan');
    packman.classList.add('animatePackman');
    const letters = Array.from(e.target.children);
    letters.forEach((letter) => {
      letter.classList.add('hideLetter');
    })
    setTimeout(() => {
      props.toTop();
      navigate('/about');
    }, 1000);
  }

  function handleProjectsButton() {
    props.toTop();
    props.resetProjectsPropsInitialSetting();
  }

  return (
    // home main
    <div className="home">
      <div className="header">
        <div className='header-title'>
          {/* <div className="big-letters-container-home">
            <ul className="big-letters-container-home-ul">
              <li><p className="neon">Welcome</p></li>
              <li><p className="neon">Bienvenido</p></li>
              <li><p className="neon">Welkom</p></li>
              <li><p className="neon">ANNYEONG</p></li>
            </ul>
          </div> */}
          <div>
            <h3 className="header-h2" id="header-title"> 
              S o l 
              <span> &nbsp; </span>
              M o o n
            </h3>
          </div>
          <div className="thin-hr-container">
            <div className="thin-hr"></div>
          </div>
          <div className='text-center-container'>
            <p className="typing-erase">
              <p className="super-big-texts">
                P
              </p>
              <p className="medium-texts">
                ersonal 
              </p>
              <p> &nbsp; </p>
              <p className="super-big-texts">
                P
              </p>
              <p className="medium-texts">ortfolio
              </p>
            </p>
          </div>
        </div>
      </div>
      <hr></hr>
      {/* about page */}
      <div className="about">
        <div className="about-container">
          <div className='about-title'>
            <div>
              <h2 className="medium-texts">
                A B O U T
              </h2>
            </div>
            <div className="thin-hr-container">
              <div className="thin-hr"></div>
            </div>
            <div>
              <p className="medium-texts scroll" id="about">
                {(Array.from(aboutText.string)).map((letter)=>{
                  if (letter === ' ') {
                    return <span key={uniqid()} className="hide-span-to-animate"> &nbsp; </span>
                  } 
                  else {
                    aboutText.count = increaseCount(aboutText);
                    return <span key={uniqid()} style={{ visibility: "hidden", animationDelay: `${aboutText.count}s`}}> {letter} </span>  
                  }
                })}  
              </p>
            </div>
            <div className="text-end-container">
              <p className="font-style-italic extra-small-texts"> - Mies van der Rohe</p>
            </div>
            <div>
              <div className='container-for-gap-between-texts small-texts scroll' data-animation='clipPath'>
                <p className="text-center">My mother always told me when I was young, </p>
                <p className="text-center font-style-italic">"Simpler, Better"</p>
                <p className="text-center">With that mindset in mind, I try to deliever the simplest but yet the prettiest outcome possible. </p>
                <p className="text-center">My name is Sol Moon and this is my personal portfolio.</p>
              </div>
            </div>
          </div>
          <div className="packMan-div">
              <div className="packMan-line"></div>
              <div className="packMan"></div>
              <div className='packMan-btn-container'>
                <p className="packMan-small-text small-text"> Want to get to know more about me? then, </p>
                <button className='packMan-btn' onClick={handlesPackman}> 
                  <span className='packMan-letter' style={{animationDelay: '.05s', transform: 'rotateZ(15deg)'}}>C</span>
                  <span className='packMan-letter' style={{animationDelay: '.1s'}}>L</span>
                  <span className='packMan-letter' style={{animationDelay: '.15s', transform: 'rotateZ(-15deg)'}}>I</span>
                  {/* <span>&nbsp;</span> */}
                  <span className='packMan-letter' style={{animationDelay: '.20s'}}>C</span>
                  <span className='packMan-letter' style={{animationDelay: '.25s'}}>K</span>
                  <span className='packMan-letter' style={{animationDelay: '.30s', transform: 'rotateZ(15deg)'}}>M</span>
                  <span className='packMan-letter' style={{animationDelay: '.35s'}}>E</span>
                  <span className='packMan-letter' style={{animationDelay: '.35s'}}>!</span>
                </button>
              </div>
            </div>
        </div>
      </div> 
      <hr></hr>
      {/* projects page */}
      <div className="projects">
        <div className="projects-container">
          <div className="projects-title">
            <h2 className="medium-texts">
              P R O J E C T S
            </h2>
            <div className="thin-hr-container">
              <div className="thin-hr"></div>
            </div>
            <div>
              <p className="medium-texts scroll" id="projects">
                {(Array.from(projectText.string)).map((letter)=>{
                  if (letter === ' ') {
                    return <span key={uniqid()} style={{ visibility: 'hidden'}}> &nbsp; </span>
                  } 
                  else {
                    projectText.count = increaseCount(projectText);
                    return <span key={uniqid()} style={{ visibility: 'hidden', animationDelay: `${projectText.count}s`}}> {letter} </span>
                  }
                })}   
              </p>
            </div>
              <div className="project-container">
                {props.projects.map((project) => {
                  return <Project key={project.id} id={project.id} description={project.description} tools={project.tools} img={project.img} title={project.title} live={project.live} code={project.code}  translateValue={project.translateValue}/>
                })}
              </div>
            </div>
          </div>
          <hr></hr>
        </div>
    </div>
  )
}

export default Home;
