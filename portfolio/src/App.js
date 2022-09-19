import './index.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Nav from './compos/nav';
import Home from './compos/home';
import About from './compos/about';
import Contact from './compos/contact';
import Projects from './compos/projects';
import Menu from './compos/menu';
import Canvas from './compos/canvas';

function App() {
  const [menuToggled, setMenuToggled] = useState(false);

  const handlesMenuBtn = () => {
    if (!menuToggled) {
      setMenuToggled(true);
    }
    else {
      setMenuToggled(false);
    }
  }

  const closesMenu = (e) => {
    console.log (e.target);
    setMenuToggled(false);
  }

  function handlesPackman(e) {
    const packman = document.getElementById('contact-packman');
    packman.classList.add('animatePackman');
    const letters = Array.from(e.target.children);
    letters.forEach((letter) => {
      letter.classList.add('hideLetter');
    })
  }

  function onScroll(e) {
    const titles = Array.from(document.querySelectorAll('.scroll'));
    titles.forEach((title)=>{
      const elementTop = title.getBoundingClientRect().y;
      if (((title.getAttribute(['data-animation'])) === 'clipPath')) {
        if (elementTop < 600) {
          title.classList.add('animateClipPath');
        }
        else if (elementTop > 700) {
          title.classList.remove('animateClipPath');
        }
      }
      else {
      const array = (Array.from(title.children));
        if ((elementTop < 600)) {
          array.forEach(letter => {
            if (array.indexOf(letter) === array.length-1) {
              letter.classList.add('translateX-last');
            }
            else {
              letter.classList.add('translateX'); 
            }
          })
        }
        else if (elementTop > 700) {
          array.forEach(letter => {
            letter.className = '';
          })
        } 
      }
    })
  }

  return (
        <BrowserRouter>
          <div className="app" onScroll={onScroll}>
            {(menuToggled)?<Menu menuToggled={menuToggled} closesMenu={closesMenu}/>:null}
            <Nav handlesMenuBtn={handlesMenuBtn} />
              <Routes>
                  <Route path='/' element={<Home />}></Route>
                  <Route path='/about' element={<About/>}></Route>
                  <Route path='/contact' element={<Contact/>}></Route>
                  <Route path='/projects' element={<Projects/>}></Route>
                  <Route path='/canvas' element={<Canvas/>}></Route>
              </Routes>
              <div className="contact">
                <div className="contact-title">
                    <h2 className="titleId"> Contact </h2>
                    <h2> Want to get in touch? </h2>
                    <p> lucas@gmail.com</p>
                </div>
                <div>
                  <p> Lucas Sanchez </p>
                  <p> Mexico City, Mexico</p>
                  <p> copyright 2022 </p>
                </div>
                <div className="packMan-div">
                <div className="packMan-line"></div>
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
          </div>
        </BrowserRouter>
  )
}

export default App;

// blMelody,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif;
// }