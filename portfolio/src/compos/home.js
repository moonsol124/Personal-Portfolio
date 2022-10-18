import React, { useState, useEffect } from 'react';
import './css/home.css';
import Carousel from './carousel';
import { useNavigate, Link } from "react-router-dom";
import uniqid from 'uniqid';

function Home(props) {
  const navigate = useNavigate();
  const aboutHeader = {'string': 'ABOUT', 'count': 0};
  const aboutText = {'string': 'Kimchi Cheese Burrito.. oh Yeah.', 'count': 0};
  const projectText = {'string': "Here we go!", 'count': 0};
  const projectsHeader = {'string': 'PROJECTS', 'count': 0};
  const headerTitle = {'string': "Sol Moon", 'count': 0};

  useEffect(()=>{
    animateHeader();
  }, [])

  function increaseCount(obj) {
    return obj.count+.1;
  }

  function animateHeader() {
    const headerTitle = Array.from((document.getElementById('header-title')).children);
    setInterval(() => {
      for (let i = 0; i < 1; i++) {
        const randomInt = Math.floor(Math.random() * headerTitle.length);
        const span = headerTitle[randomInt];
        span.classList.add('shakeLetter');
        setTimeout(() => {
          headerTitle[randomInt].classList.remove('shakeLetter');
        }, 300)
      }
    }, 1000)
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
    <div className="home">
      <div className="header">
        <div className='header-title'>
          <div className="big-letters-container-home">
            <ul className="big-letters-container-home-ul">
              <li> <p className="neon">Welcome</p></li>
              <li> <p className="neon">Bienvenido</p></li>
              <li> <p className="neon">Welkom</p></li>
              <li> <p className="neon">ANNYEONG</p></li>
            </ul>
          </div>
          <div>
            <h2 className="header-h2" id="header-title"> 
            {(Array.from(headerTitle.string)).map((letter)=>{
                  if (letter === ' ') {
                    return <span key={uniqid()}> &nbsp; </span>
                  } 
                  else {
                    headerTitle.count = increaseCount(headerTitle);
                    return <span key={uniqid()}> {letter} </span>  
                  }
              })}  
            </h2>
          </div>
          <div className='text-box-2'>
            <div className='right-line-container'>
              <div className="line-right"></div>
            </div>
            <p>
              Yup, that's me! Welcome to my personal portfolio.
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
                    return <span key={uniqid()} className="hide-span-to-animate"> &nbsp; </span>
                  } 
                  else {
                    aboutHeader.count = increaseCount(aboutHeader);
                    return <span key={uniqid()} style={{ visibility: "hidden", animationDelay: `${aboutHeader.count}s`}}> {letter} </span>  
                  }
              })}  
            </p>
          </div>
            <div className='text-box-1'>
              <h3 className="text-at-the-end about-header-title scroll" id="about">
                {(Array.from(aboutText.string)).map((letter)=>{
                  if (letter === ' ') {
                    return <span key={uniqid()} className="hide-span-to-animate"> &nbsp; </span>
                  } 
                  else {
                    aboutText.count = increaseCount(aboutText);
                    return <span key={uniqid()} style={{ visibility: "hidden", animationDelay: `${aboutText.count}s`}}> {letter} </span>  
                  }
                })}  
              </h3>
              <div className='left-line-container'>
                <div className="line-right"></div>
              </div>
            </div>
            <div className='text-box-2'>
              <div className="right-line-container">
                <div className="line-right"></div>
              </div>
              <div className='about-main-text scroll' data-animation='clipPath'>
                <p>Have you ever tried a Korean Kimchi and wondered what it'd be like to have a fantastic Kimchi BBQ Burrito combo? </p>
                <p> &nbsp;</p>
                <p>The two totally different but delightful flavors combined together to turn themselves beautifully into an art...</p>
                <p> &nbsp;</p>
                <p>...and Yes. I'm talking about me. And if you want to make it even better, I can put some Gouda cheese on it!</p>
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
      <div className="projects">
        <div className="projects-container">
          <div className="projects-title">
            <div className="big-letters-container">
                <p className="big-letters scroll">
                  {(Array.from(projectsHeader.string)).map((letter)=>{
                    if (letter === ' ') {
                      return <span key={uniqid()} style={{ visibility: 'hidden'}}> &nbsp; </span>
                    } 
                    else {
                      projectsHeader.count = increaseCount(projectsHeader);
                      return <span key={uniqid()} style={{ visibility: 'hidden', animationDelay: `${projectsHeader.count}s`}}> {letter} </span>  
                    }
                  })}  
                </p>
                <p className='super-big-letters-projects'> PROJECTS </p>
            </div>
            <div className='text-box-1'>
              <h3 style={{textAlign: 'end'}} className="about-header-title scroll" id="projects">
                {(Array.from(projectText.string)).map((letter)=>{
                  if (letter === ' ') {
                    return <span key={uniqid()} style={{ visibility: 'hidden'}}> &nbsp; </span>
                  } 
                  else {
                    projectText.count = increaseCount(projectText);
                    return <span key={uniqid()} style={{ visibility: 'hidden', animationDelay: `${projectText.count}s`}}> {letter} </span>
                  }
                })}   
              </h3>
              <div className='left-line-container'>
                <div className="line-right"></div>
              </div>
            </div>
            </div>
          </div>
          <div className="carousel-outer-container">
            <Carousel projectsProps={props.projectsProps}/>
            <div className="projects-btn-group">
              <Link to='/projects'><button className='button' onClick={handleProjectsButton}> VIEW ALL PROJECTS </button></Link>
            </div>
          </div>
          <hr></hr>
        </div>
    </div>
  )
}

export default Home;
