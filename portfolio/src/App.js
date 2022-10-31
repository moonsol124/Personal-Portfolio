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
import newRestaurant from './compos/imgs/new_restaurant_page.gif';
import blog from './compos/imgs/blog.gif';

function App() {
  const [projectsProps, setProjectsProps] = useState([
    {'img': newRestaurant, 'title': 'Italian Restaurant Page', 'description': "A beautiful italian theme restaurant webpage made as part of a school project. It's a fully responsive restaurant page with some added functionalities such as register, login and order systems using Flask as backend and MongoDB as database. The backend server is hosted by Render.", 'tools': 'ReactJs, Flask, MongoDb', 'live': 'https://moonsol124.github.io/School-restaurant-page', 'code': 'https://github.com/moonsol124/School-restaurant-page/tree/gh-pages', 'id': 0, 'translateValue': -12, 'elementTop': 600},
    {'img': blog, 'title': 'Personal Blog Page', 'description': "A simple and fully responsive blog page where visitors can leave comments and view the existing contents. The contents are dynamically loaded via API from a backend served by node express. For database, Mongodb was choosed for its simplicity in use and the backend server is currently hosted by Render. Made for The Odin Project.", 'tools': 'ReactJs, Nodejs, express, MongoDb', 'live': 'https://moonsol124.github.io/blog-app/', 'code': 'https://github.com/moonsol124/blog-app', 'id': 1, 'translateValue': -12, 'elementTop': 600},
    {'img': memoryCard, 'title': 'Memory Card Game', 'description': "A simple memory game made for The Odin Project. The game consists in 12 cards with different animals as backgrounds. The goal is simple; The user has to pick up a card that hasn't been choosed in the previous rounds. If that's the case, the user gains one score. Otherwise, they loses the current score and the game resets.", 'tools': 'Javascript','live': 'https://moonsol124.github.io/memory-game-TOP/', 'code': 'https://github.com/moonsol124/memory-game-TOP/tree/gh-pages', 'id': 2, 'translateValue': -12, 'elementTop': 600},
    {'img': sketch, 'title': 'Sketch Book', 'live': 'https://moonsol124.github.io/ETCH-A-SKETCH-TOP-PROJECT-/', 'code': 'https://github.com/moonsol124/ETCH-A-SKETCH-TOP-PROJECT-', 'description': 'An Etch a Sketch where you can make all your wildest dreams come true. Be it an animal, person, landscape or even a fairy! With all different kinds of colors that you can choose from the pallete, turn your imaginations into a reality on a simple Sketch Book. Also made for The Odin Project. Have fun!', 'tools': 'Javascript', 'id': 3, 'translateValue': -12, 'elementTop': 600}
  ])
// {'img': resumeBuilder, 'title': 'Resume Builder App', 'live': 'https://moonsol124.github.io/CV-application-TOP/', 'code': 'https://github.com/moonsol124/CV-application-TOP/tree/gh-pages', 'description': 'A resume builder created in the following of The Odin Project. The builder consists in three different sections: personal information, education and work experiences. The user can simply add/delete information clicking a button. If the user click the "save" button, the program will save all previously stored inputs and display them to the user.', 'tools': 'Html, Css, Javascript, ReactJs', 'id': 3, 'translateValue': -12, 'elementTop': 600},
// {'img': shoppingCart, 'title': 'Shopping Cart Page', 'live': 'https://moonsol124.github.io/shopping-cart-TOP/', 'code': 'https://github.com/moonsol124/shopping-cart-TOP/tree/gh-pages', 'description': 'A shopping cart web page made for The Odin Project. The website consists in three different parts: home, products and cart. Some dummy products are presented in the products section. The user can adjust the amount of product with add/remove button. Upon clicking the "Buy" button, the webpage automatically put the product in the cart and calculate the final price for all products. ', 'tools': 'Html, Css, Javascript, ReactJs', 'id': 4, 'translateValue': -12, 'elementTop': 600},
// {'img': battleShip, 'title': 'Battle Ship Game', 'live': 'https://moonsol124.github.io/Project-Battleship-TOP/', 'code': 'https://github.com/moonsol124/Project-Battleship-TOP/tree/gh-pages', 'description': 'A simple BattleShip game made in the following of The Odin Project. The user plays against a rudiment AI which randomly attacks the user on grid. On each side of the game board, the player can see how many ships they have left. The ships are randomly generated in each round.', 'tools': 'Html, Css, Javascript', 'id': 5, 'translateValue': -12, 'elementTop': 600},
// {'img': weatherApp, 'title': 'Weather App', 'live': 'https://moonsol124.github.io/weather-app-TOP/', 'code': 'https://github.com/moonsol124/weather-app-TOP', 'description': 'An weather app made also for The Odin Project. The app fetches the API from a weather source and display them to the user on screen. The app provides a general information such as temperature, humidity, rain, wind and etc. The user can change the location.', 'tools': 'Html, Css, Javascript, ReactJs', 'id': 6, 'translateValue': -12, 'elementTop': 600},
// {'img': restaurantPage, 'title': 'Restaurant Page', 'live': 'https://moonsol124.github.io/Restaurante-Page-TOP/', 'code': 'https://github.com/moonsol124/Restaurante-Page-TOP', 'description': 'A simple webpage made for an imaginary restaurant. Made for The Odin Project. It was to practice grid/flexbox and some events such as click and hovering.', 'tools': 'Html, Css, Javascript', 'id': 7, 'translateValue': -12, 'elementTop': 600}])

  const [menuToggled, setMenuToggled] = useState(false);

  useEffect(() => {
    resetProjectsPropsInitialSetting();
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
    handleProjectContainerAnimation();
  }

  function handleProjectContainerAnimation() {
    if (document.querySelector('.project-container')) {
      const container = document.querySelector('.project-container');
      const elementTop = container.getBoundingClientRect().y;
      if (elementTop < 300) {
        container.classList.add('toBlack');
      }
      else {
        container.classList.remove('toBlack');
      }
    }
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
        if ((elementTop < arry[index].elementTop)) {
          arry[index].elementTop = elementTop;
          arry[index].translateValue = arry[index].translateValue - .1;
          // console.log (des.id, "scrolling down", projects[index].translateValue);
          setProjectsProps(arry);
          des.style.transform = `translateY(${projectsProps[index].translateValue}vmin)`
        }
        // user scroll up
        else if (elementTop > arry[index].elementTop) {
          arry[index].elementTop = elementTop;
          arry[index].translateValue = arry[index].translateValue + .1;
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

  function resetProjectsPropsInitialSetting() {
    const copy = projectsProps;
    copy.forEach((project) => {
      project.translateValue = -12;
    })
    setProjectsProps(copy);
  }

  return (
        <BrowserRouter>
          <div className="app" onScroll={onScroll}>
            {(menuToggled)?<Menu menuToggled={menuToggled} resetProjectsPropsInitialSetting={resetProjectsPropsInitialSetting} closesMenu={closesMenu}/>:null}
            <Nav handlesMenuBtn={handlesMenuBtn} toTop={toTop}/>
              <Routes>
                  <Route path='/' element={<Home projects={projectsProps} resetProjectsPropsInitialSetting={resetProjectsPropsInitialSetting} projectsProps={projectsProps}/>}></Route>
                  <Route path='/about' element={<About/>}></Route>
                  <Route path='/contact' element={<Contact/>}></Route>
                  <Route path='/projects' element={<Projects projects={projectsProps}/>}></Route>
              </Routes>
              {/* <Footer toTop={toTop}/> */}
          </div>
        </BrowserRouter>
  )
}

export default App;
