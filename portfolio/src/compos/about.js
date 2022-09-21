import React, { useState, useEffect } from 'react';
import uniqid from 'uniqid';
import QuestionBox from './questionBox';

import './css/about.css';

function About() {
    const [qaToggled, setQaToggled] = useState(false);

    useEffect(() => {
        animateAboutHeader();
    })
    function handlesPackman(e) {
        const packman = document.getElementById('packman-menu-about');
        packman.classList.add('animatePackman');
        const letters = Array.from(e.target.children);
        letters.forEach((letter) => {
          letter.classList.add('hideLetter');
        })
        setTimeout(()=>{
            setQaToggled(true);
        }, 1000)
    }

    function animateAboutHeader() {
        const about = document.querySelector('.about-menu-header');
        about.classList.add('header-appears');
    }

    return (
        <div className="about-menu">
            <div className="about-menu-header">
                <div className="big-letters-container">
                    <p className='super-big-letters-about' style={{color: 'rgba(255, 164, 0, 0.5)'}}> ABOUT </p>
                    <p className="big-letters" style={{zIndex: '1'}}>
                        ABOUT
                    </p>
                </div>
                <div className="photo"></div>
                <div className='text-box-1'>
                    <h2 style={{textAlign: 'end'}} className="about-header-title" id="about">
                        I was an icecream but now I'm a cookie.
                    </h2>
                    <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                        <div className="line-right"></div>
                    </div>
                </div>
                <div className='text-box-2'>
                    <div style={{display: 'flex', justifyContent: 'flex-start'}}>
                        <div className="line-right"></div>
                    </div>
                    <p>
                        How did I end up here? I thought that we were going to Germany. 
                        But somehow the train stopped working and we had to get off.
                        We walked through the forest, rivers and mountains and we survived!
                    </p>
                </div>
            </div>
            <div className="packMan-div-menu-about">
                <div className="packMan-line-menu-about"></div>
                <div className="packMan" id='packman-menu-about'></div>
                <div className='packMan-btn-container'>
                    <button className='packMan-btn' onClick={handlesPackman}> 
                        <span className='packMan-letter' style={{backgroundColor: 'orange', animationDelay: '.05s', transform: 'rotateZ(15deg)'}}>C</span>
                        <span className='packMan-letter' style={{backgroundColor: 'orange', animationDelay: '.1s'}}>L</span>
                        <span className='packMan-letter' style={{backgroundColor: 'orange', animationDelay: '.15s', transform: 'rotateZ(-15deg)'}}>I</span>
                        <span className='packMan-letter' style={{backgroundColor: 'orange', animationDelay: '.20s'}}>C</span>
                        <span className='packMan-letter' style={{backgroundColor: 'orange', animationDelay: '.25s'}}>K</span>
                        <span>&nbsp;</span>
                        <span className='packMan-letter' style={{backgroundColor: 'orange', animationDelay: '.30s', transform: 'rotateZ(15deg)'}}>M</span>
                        <span className='packMan-letter' style={{backgroundColor: 'orange', animationDelay: '.35s'}}>E</span>
                        <span className='packMan-letter' style={{backgroundColor: 'orange', animationDelay: '.40s'}}>!</span>
                    </button>
                </div>
            </div>
            {(qaToggled)? <QuestionBox />:null}
        </div>
    )
}

export default About;