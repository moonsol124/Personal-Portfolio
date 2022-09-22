import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";
import './css/nav.css';
import menu from './imgs/list.png';
import logo from './imgs/logo.png';

function Nav(props) {
    const navigate = useNavigate();

    return (       
        <> 
            <p className="home-btn" onClick={()=>{navigate('/')}}> NAME </p>
            <img src={menu} alt="menu" className="menu-btn" onClick={props.handlesMenuBtn}></img>
        </>
    )
}

export default Nav;