import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import uniqid from 'uniqid';
import QuestionBox from './questionBox';
import './css/about.css';
import foto from './imgs/foto.jpg';

function About(props) {
    const [qaToggled, setQaToggled] = useState(false);

    useEffect(() => {
    }, [])

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
    
    return (
        <div className="about-menu">
            <div className="big-letters-container about-menu-title-container">
                <p className='super-big-letters-about' style={{color: 'rgba(255, 164, 0, 0.5)'}}> ABOUT </p>
                <p className="big-letters">
                    ABOUT
                </p>
            </div>
            <div className="about-menu-header">
                <div className="photo-container">
                    <img className="photo" src={foto} alt='foto'></img>
                </div>
                <div className='text-box-1 about-menu-text-box-width'>
                    <h3 className="about-header-title text-at-the-end" id="about">
                        I am Sol Moon
                    </h3>
                    <div className="left-line-container">
                        <div className="line-right"></div>
                    </div>
                </div>
                <div className='text-box-2 about-menu-text-box-width'>
                    <div className="right-line-container">
                        <div className="line-right"></div>
                    </div>
                    <div className="about-description-texts-container">
                        <p>
                            And Yes, that's my real name. If you thought that it's actually cool because 'Sol' means 'Sun' in Spanish, you are not totally wrong!
                        </p>
                        <p> &nbsp; </p>
                        <p> But I'll tell you a little secret. That's not actaully what my name means! In the Korean language, it means a pine tree.</p>
                        <p> &nbsp; </p>
                        <p> So, How did I go from a pine tree to a sun? Well, that's a long story to tell!</p>
                        <p> &nbsp; </p>
                        <p>  But anyway, here I am, Just having a lovely day with my boyfriend Mattijs and his little little doggy Ullie,</p>
                        <p> Somewhere in a small town in the country that is famous for windmills, tulips and stroofwafels...</p>
                        <p> &nbsp; </p>
                        <p> So if you want a cup of delicious chocolate milk and a stroofwafel, please be my guest! And we can have a chat together.</p>
                    </div>
                </div>
            </div>
            <div className="packMan-div-menu-about">
                <div className="packMan-line-menu-about"></div>
                <div className="packMan" id='packman-menu-about'></div>
                <div className='packMan-btn-container'>
                    <p className="small-text"> Do you want more information about my backgrounds? then, </p>
                    <button className='packMan-btn' onClick={handlesPackman}> 
                        <span className='packMan-letter' style={{backgroundColor: 'orange', animationDelay: '.05s', transform: 'rotateZ(15deg)'}}>C</span>
                        <span className='packMan-letter' style={{backgroundColor: 'orange', animationDelay: '.1s'}}>L</span>
                        <span className='packMan-letter' style={{backgroundColor: 'orange', animationDelay: '.15s', transform: 'rotateZ(-15deg)'}}>I</span>
                        <span className='packMan-letter' style={{backgroundColor: 'orange', animationDelay: '.20s'}}>C</span>
                        <span className='packMan-letter' style={{backgroundColor: 'orange', animationDelay: '.25s'}}>K</span>
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