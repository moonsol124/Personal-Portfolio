import './index.css';
import React, { useState, useEffect, useCallback } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from './compos/nav';
import Home from './compos/home';
import About from './compos/about';
import Contact from './compos/contact';
import Projects from './compos/projects';
import Menu from './compos/menu';
import Footer from './footer';
import memoryCard from './compos/imgs/memoryCard.gif';
import sketch from './compos/imgs/sketch.gif';
import shoppingCart from './compos/imgs/shoppingCart.gif';
import restaurantPage from './compos/imgs/restaurantPage.gif';
import resumeBuilder from './compos/imgs/resumeBuilder.gif';
import weatherApp from './compos/imgs/weatherApp.gif';
import battleShip from './compos/imgs/battleShip.gif';

function App() {
  const [projectsProps, setProjectsProps] = useState([{'img': memoryCard, 'title': 'Memory Card Game', 'description': "A simple memory game made for The Odin Project. The game consists in 12 cards with different animals as backgrounds. The goal is simple; The user picks up a card that hasn't been choosed in the previous rounds. If that's the case, the user gains one score. Otherwise, they loses the current score and the game resets.", 'tools': 'Html, Css, Javascript, ReactJs','live': 'https://moonsol124.github.io/memory-game-TOP/', 'code': 'https://github.com/moonsol124/memory-game-TOP/tree/gh-pages', 'id': 1, 'translateValue': -12, 'elementTop': 600},
{'img': sketch, 'title': 'Sketch Book', 'live': 'https://moonsol124.github.io/ETCH-A-SKETCH-TOP-PROJECT-/', 'code': 'https://github.com/moonsol124/ETCH-A-SKETCH-TOP-PROJECT-', 'description': 'An Etch a Sketch where you can make rea', 'tools': '', 'id': 2, 'translateValue': -12, 'elementTop': 600},
{'img': resumeBuilder, 'title': 'Resume Builder App', 'live': 'https://moonsol124.github.io/CV-application-TOP/', 'code': 'https://github.com/moonsol124/CV-application-TOP/tree/gh-pages', 'description': '', 'tools': '', 'id': 3, 'translateValue': -12, 'elementTop': 600},
{'img': shoppingCart, 'title': 'Shopping Cart Page', 'live': 'https://moonsol124.github.io/shopping-cart-TOP/', 'code': 'https://github.com/moonsol124/shopping-cart-TOP/tree/gh-pages', 'description': '', 'tools': '', 'id': 4, 'translateValue': -12, 'elementTop': 600},
{'img': battleShip, 'title': 'Battle Ship Game', 'live': 'https://moonsol124.github.io/Project-Battleship-TOP/', 'code': 'https://github.com/moonsol124/Project-Battleship-TOP/tree/gh-pages', 'description': '', 'tools': '', 'id': 5, 'translateValue': -12, 'elementTop': 600},
{'img': weatherApp, 'title': 'Weather App', 'live': 'https://moonsol124.github.io/weather-app-TOP/', 'code': 'https://github.com/moonsol124/weather-app-TOP', 'description': '', 'tools': '', 'id': 6, 'translateValue': -12, 'elementTop': 600},
{'img': restaurantPage, 'title': 'Restaurant Page', 'live': 'https://moonsol124.github.io/Restaurante-Page-TOP/', 'code': 'https://github.com/moonsol124/Restaurante-Page-TOP', 'description': '', 'tools': '', 'id': 7, 'translateValue': -12, 'elementTop': 600}])

  const [menuToggled, setMenuToggled] = useState(false);

  useEffect(() => {
  }, [])

  const handlesMenuBtn = () => {
    if (!menuToggled) {
      setMenuToggled(true);
    }
    else {
      setMenuToggled(false);
    }
  }

  const closesMenu = (e) => {
    setMenuToggled(false);
    toTop();
  }

  function toTop() {
    const app = document.querySelector('.app');
    app.scrollTo(0, 0);
  }

  function onScroll(e) {
    handleProjectsAnimation();
    handleTextanimations();
  }

  function handleProjectsAnimation() {
    const descriptions = Array.from(document.querySelectorAll('.project-description'));
    descriptions.forEach((des) => {
      const index = projectsProps.findIndex((project) => {
        if (project.id === parseInt(des.id)) {
          return true;
        }
        else {
          return false;
        }
      })

      const elementTop = des.getBoundingClientRect().y;

      const arry = projectsProps;
      if (elementTop < 600 && elementTop > 0) {
        // user scroll down
        if (elementTop < arry[index].elementTop) {
          arry[index].elementTop = elementTop;
          arry[index].translateValue = arry[index].translateValue - .2;
          // console.log (des.id, "scrolling down", projects[index].translateValue);
          setProjectsProps(arry);
          des.style.transform = `translateY(${projectsProps[index].translateValue}vmin)`
        }
        // user scroll up
        else if (elementTop > arry[index].elementTop) {
          arry[index].elementTop = elementTop;
          arry[index].translateValue = arry[index].translateValue + .2;
          // console.log (des.id, "scrolling up...", projects[index].translateValue);
          setProjectsProps(arry);
          des.style.transform = `translateY(${projectsProps[index].translateValue}vmin)`
        }
      }
    })
  }

  function handleTextanimations() {
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
                  <Route path='/' element={<Home toTop={toTop} projectsProps={projectsProps}/>}></Route>
                  <Route path='/about' element={<About/>}></Route>
                  <Route path='/contact' element={<Contact/>}></Route>
                  <Route path='/projects' element={<Projects projects={projectsProps}/>}></Route>
              </Routes>
              <Footer toTop={toTop}/>
          </div>
        </BrowserRouter>
  )
}

export default App;
