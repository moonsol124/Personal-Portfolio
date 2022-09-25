import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './css/menu.css';

function Menu(props) {
    const headerTitle = {'string': 'Chocolate', 'count': 0};

    useEffect(() => {
        animateMenu();
        animateLetters();
    }, [])

    function animateMenu() {
        const menu = document.querySelector('.menu');
        menu.className = 'menu animateMenu';
        const menuContainer = document.querySelector('.menu-container');
        setTimeout(() => {
            menuContainer.classList.add('showMenu');
        }, 1000)
    }

    function animateLetters() {
        const divs = document.querySelectorAll('.letters');
        divs.forEach((div) => {
            const children = Array.from((div.children));
            setInterval(() => {
                const randomInt = Math.floor(Math.random() * children.length);
                children[randomInt].classList.add('shakeLetter');
                setTimeout(() => {
                    children[randomInt].classList.remove('shakeLetter');
                }, 500)
            }, 2000)
        })
    }

    return (
        <div className="menu">
            <div className='menu-container'>
                <p className='super-big-letters-menu'> MENU </p>
                <ul className='menu-ul'>
                    <li className="menu-list">
                        <Link to='/'>
                            <p onClick={props.closesMenu} className="letters" style={{whiteSpace:'pre'}}>
                                <span className='menu-letter'>H </span>
                                <span className='menu-letter'>O </span>
                                <span className='menu-letter'>M </span>
                                <span className='menu-letter'>E </span>
                            </p>
                        </Link>
                    </li>
                    <li className="menu-list">
                        <Link to='/about'>
                            <p onClick={props.closesMenu} className="letters" style={{whiteSpace:'pre'}}>
                                <span className='menu-letter'>A </span>
                                <span className='menu-letter'>B </span>
                                <span className='menu-letter'>O </span>
                                <span className='menu-letter'>U </span>
                                <span className='menu-letter'>T </span>
                            </p>
                        </Link>
                    </li>
                    <li className="menu-list">
                        <Link to='/projects'>
                            <p onClick={props.closesMenu} className="letters" style={{whiteSpace:'pre'}}>
                                <span className='menu-letter'>P </span>
                                <span className='menu-letter'>R </span>
                                <span className='menu-letter'>O </span>
                                <span className='menu-letter'>J </span>
                                <span className='menu-letter'>E </span>
                                <span className='menu-letter'>C </span>
                                <span className='menu-letter'>T </span>
                                <span className='menu-letter'>S </span>
                            </p>
                        </Link>
                    </li>
                    <li className="menu-list">
                        <Link to='/contact'>
                            <p onClick={props.closesMenu} className="letters" style={{whiteSpace:'pre'}}>
                                <span className='menu-letter'>C </span>
                                <span className='menu-letter'>O </span>
                                <span className='menu-letter'>N </span>
                                <span className='menu-letter'>T </span>
                                <span className='menu-letter'>A </span>
                                <span className='menu-letter'>C </span>
                                <span className='menu-letter'>T </span>
                            </p>
                        </Link>
                    </li>
                </ul>
            </div>   
                        {/* <ul className='menu-ul'>
                <li className='menu-list'><Link to='/' onClick={props.closesMenu}>home</Link></li>
                <li className='menu-list'><Link to='/about' onClick={props.closesMenu}>about</Link></li>
                <li className='menu-list'><Link to='/projects' onClick={props.closesMenu}>projects</Link></li>
                <li className='menu-list'><Link to='/contact' onClick={props.closesMenu}>contact</Link></li>
            </ul> */}
        </div>
    )
}

export default Menu;