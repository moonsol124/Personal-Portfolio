import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './css/nav.css';
import menu from './imgs/list.png';
import logo from './imgs/logo.png';

function Nav(props) {
    return (        
        <img src={menu} alt="menu" className="menu-btn" onClick={props.handlesMenuBtn}></img>
    )
}

export default Nav;