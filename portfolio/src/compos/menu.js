import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './css/menu.css';

function Menu(props) {
    return (
        <div className="menu">
            <ul>
                <li><Link to='/' onClick={props.closesMenu}>home</Link></li>
                <li><Link to='/about' onClick={props.closesMenu}>about</Link></li>
                <li><Link to='/projects' onClick={props.closesMenu}>projects</Link></li>
                <li><Link to='/contact' onClick={props.closesMenu}>contact</Link></li>
                <li><Link to='/canvas' onClick={props.closesMenu}>canvas</Link></li>
            </ul>
        </div>
    )
}

export default Menu;