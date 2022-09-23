import React, { useState, useEffect } from 'react';
import './css/home.css';
import Project from './project';
import bg1 from './imgs/background.gif'
import bg2 from './imgs/bg2.gif'
import bg3 from './imgs/bg3.gif'
import bg4 from './imgs/bg4.gif'
import Carousel from './carousel';
import Text from './text';
import { useNavigate } from "react-router-dom";

function Home(props) {
  const navigate = useNavigate();
  const aboutHeader = {'string': 'ABOUT', 'count': 0};
  const aboutText = {'string': 'some text', 'count': 0};
  const projectText = {'string': 'some text', 'count': 0};
  const projectsHeader = {'string': 'PROJECTS', 'count': 0};
  const headerTitle = {'string': 'Chocolate', 'count': 0};

  useEffect(()=>{
    animateHeader();
  }, [])

  function increaseCount(obj) {
    return obj.count+.1;
  }

  function animateHeader() {
    const headerTitle = Array.from((document.getElementById('header-title')).children);
    setInterval(() => {
      for (let i = 0; i < 3; i++) {
        const randomInt = Math.floor(Math.random() * headerTitle.length);
        const span = headerTitle[randomInt];
        span.classList.add('shakeLetter');
        setTimeout(() => {
          headerTitle[randomInt].classList.remove('shakeLetter');
        }, 300)
      }
    }, 3000)
  }

  function handlesPackman(e) {
    const packman = document.querySelector('.packMan');
    packman.classList.add('animatePackman');
    const letters = Array.from(e.target.children);
    letters.forEach((letter) => {
      letter.classList.add('hideLetter');
    })
    setTimeout(() => {
      navigate('/about');
    }, 1000);
  }

  return (
    <div className="home">
      <div className="header">
        <div className='header-title'>
          <div className="big-letters-container-home">
            <ul className="big-letters-container-home-ul">
              <li> <p className="neon">HI</p></li>
              <li> <p className="neon">HOLA</p></li>
              <li> <p className="neon">HOI</p></li>
              <li> <p className="neon">ANNYEONG</p></li>
            </ul>
          </div>
          <div>
            <h2 style={{width: '100%', whiteSpace:'pre', display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-end'}} id="header-title"> 
            {(Array.from(headerTitle.string)).map((letter)=>{
                  if (letter === ' ') {
                    return <span> &nbsp; </span>
                  } 
                  else {
                    headerTitle.count = increaseCount(headerTitle);
                    return <span> {letter} </span>  
                  }
              })}  
            </h2>
          </div>
          <div className='text-box-2'>
            <div style={{display: 'flex', justifyContent: 'flex-start'}}>
              <div className="line-right"></div>
            </div>
            <p>
              Hi, My name is Lucas. I'm a full-stack web developer.
            </p>
          </div>
        </div>
        <div className="header-img-1"></div>
        <div className="header-img-2"></div>
      </div>
      <hr></hr>
      <div className="about">
        <div className="about-container">
          <div className='about-title'>
          <div className="big-letters-container">
            <p className='super-big-letters-about'> ABOUT </p>
            <p className="big-letters scroll">
              {(Array.from(aboutHeader.string)).map((letter)=>{
                  if (letter === ' ') {
                    return <span style={{ visibility: 'hidden'}}> &nbsp; </span>
                  } 
                  else {
                    aboutHeader.count = increaseCount(aboutHeader);
                    return <span style={{ visibility: 'hidden', animationDelay: `${aboutHeader.count}s`}}> {letter} </span>  
                  }
              })}  
            </p>
          </div>
            <div className='text-box-1'>
              <h2 style={{textAlign: 'end'}} className="about-header-title scroll" id="about">
                {(Array.from(aboutText.string)).map((letter)=>{
                  if (letter === ' ') {
                    return <span style={{ visibility: 'hidden'}}> &nbsp; </span>
                  } 
                  else {
                    aboutText.count = increaseCount(aboutText);
                    return <span style={{ visibility: 'hidden', animationDelay: `${aboutText.count}s`}}> {letter} </span>  
                  }
                })}  
              </h2>
              <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                <div className="line-right"></div>
              </div>
            </div>
            <div className='text-box-2'>
              <div style={{display: 'flex', justifyContent: 'flex-start'}}>
                <div className="line-right"></div>
              </div>
              <p className='about-main-text scroll' data-animation='clipPath'>
                How did I end up here? I thought that we were going to Germany. 
                But somehow the train stopped working and we had to get off.
                We walked through the forest, rivers and mountains and we survived!
              </p>
            </div>
          </div>
          <div className="packMan-div">
              <div className="packMan-line"></div>
              <div className="packMan"></div>
              <div className='packMan-btn-container'>
                <button className='packMan-btn' onClick={handlesPackman}> 
                  <span className='packMan-letter' style={{animationDelay: '.05s', transform: 'rotateZ(15deg)'}}>S</span>
                  <span className='packMan-letter' style={{animationDelay: '.1s'}}>E</span>
                  <span className='packMan-letter' style={{animationDelay: '.15s'}}>E</span>
                  {/* <span>&nbsp;</span> */}
                  <span className='packMan-letter' style={{animationDelay: '.20s', transform: 'rotateZ(-15deg)'}}>M</span>
                  <span className='packMan-letter' style={{animationDelay: '.25s'}}>O</span>
                  <span className='packMan-letter' style={{animationDelay: '.30s', transform: 'rotateZ(15deg)'}}>R</span>
                  <span className='packMan-letter' style={{animationDelay: '.35s'}}>E</span>
                </button>
              </div>
            </div>
        </div>
      </div> 
      <hr></hr>
      <div className="projects">
        <div className="projects-container">
          <div className="projects-title">
            <div className="big-letters-container">
                <p className="big-letters scroll">
                  {(Array.from(projectsHeader.string)).map((letter)=>{
                    if (letter === ' ') {
                      return <span style={{ visibility: 'hidden'}}> &nbsp; </span>
                    } 
                    else {
                      projectsHeader.count = increaseCount(projectsHeader);
                      return <span style={{ visibility: 'hidden', animationDelay: `${projectsHeader.count}s`}}> {letter} </span>  
                    }
                  })}  
                </p>
                <p className='super-big-letters-projects'> PROJECTS </p>
            </div>
            <div className='text-box-1'>
              <h2 style={{textAlign: 'end'}} className="about-header-title scroll" id="projects">
                {(Array.from(projectText.string)).map((letter)=>{
                  if (letter === ' ') {
                    return <span style={{ visibility: 'hidden'}}> &nbsp; </span>
                  } 
                  else {
                    projectText.count = increaseCount(projectText);
                    return <span style={{ visibility: 'hidden', animationDelay: `${projectText.count}s`}}> {letter} </span>
                  }
                })}   
              </h2>
              <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                <div className="line-right"></div>
              </div>
            </div>
            </div>
            <div>
              <Carousel />
            </div>
            <div className="projects-btn-group">
              <button className='button'> VIEW ALL PROJECTS </button>
            </div>
            <div className="projects-img-2"></div>
          </div>
          <hr></hr>
        </div>
        {/* <Footer /> */}
    </div>
  )
}

export default Home;
