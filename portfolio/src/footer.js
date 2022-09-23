import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();

  function handlesPackman(e) {
    const packman = document.getElementById('contact-packman');
    packman.classList.add('animatePackman');
    const letters = Array.from(e.target.children);
    letters.forEach((letter) => {
      letter.classList.add('hideLetter');
    })
    setTimeout(() => {
      navigate('./contact');
      packman.classList.remove('animatePackman');
      const letters = Array.from(e.target.children);
      letters.forEach((letter) => {
        letter.classList.remove('hideLetter');
      })
    }, 1000);
    setTimeout(() => {
      packman.classList.remove('animatePackman');
      const letters = Array.from(e.target.children);
      letters.forEach((letter) => {
        letter.classList.remove('hideLetter');
      })
    }, 2000);
  }

  return (
        <div className="contact">
          <div className="contact-container">
            <div className="contact-title">
                <h4> Want to get in touch? </h4>
                <p> ☛ lucas@gmail.com</p>
            </div>
            <div>
                <p> Lucas Sanchez </p>
                <p> Mexico City, Mexico</p>
                <p> copyright 2022 </p>
            </div>
          </div>
          <div className="packMan-div-about">
            <div className="packMan-line-about"></div>
            <div className="packMan" id='contact-packman'></div>
              <div className='packMan-btn-container'>
                  <button className='packMan-btn' onClick={handlesPackman}> 
                  <span className='packMan-letter' style={{animationDelay: '.05s', transform: 'rotateZ(15deg)'}}>C</span>
                  <span className='packMan-letter' style={{animationDelay: '.1s'}}>O</span>
                  <span className='packMan-letter' style={{animationDelay: '.15s'}}>N</span>
                  <span className='packMan-letter' style={{animationDelay: '.20s', transform: 'rotateZ(-15deg)'}}>T</span>
                  <span className='packMan-letter' style={{animationDelay: '.25s'}}>A</span>
                  <span className='packMan-letter' style={{animationDelay: '.30s', transform: 'rotateZ(15deg)'}}>C</span>
                  <span className='packMan-letter' style={{animationDelay: '.35s'}}>T</span>
                  </button>
              </div>
          </div>
        </div>
    ) 
}

export default Footer;