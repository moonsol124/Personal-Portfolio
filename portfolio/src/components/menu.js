import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './home';
import Main from './main';

function Menu() {

  return (
    <>
        <div className='container'>
            <div className="main"> 
                <header>
                <div className="overlay"> 
                    <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/main" element={<Main />}></Route>
                    </Routes>
                    </BrowserRouter>
                </div>
                </header>
            </div>
            <div className="shadow"> menu 2
            </div>
            <div className="shadow"> menu 3
            </div>
        </div>
    </>
  );
}

export default Menu;
