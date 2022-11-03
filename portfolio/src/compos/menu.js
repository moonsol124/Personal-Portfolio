import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './css/menu.css';

function Menu(props) {
    const headerTitle = {'string': 'Chocolate', 'count': 0};

    useEffect(() => {
    }, [])

    function handleProjectsBtn() {
        props.closesMenu();
        props.resetProjectsPropsInitialSetting();
    }

    return (
        <div className="menu">
            <div className='menu-container'>
                <ul className='menu-ul'>
                    <li className="menu-list">
                        <Link to='/'>
                            <p onClick={props.closesMenu} className="letters">
                                HOME
                            </p>
                        </Link>
                    </li>
                    <li className="menu-list">
                        <Link to='/about'>
                            <p onClick={props.closesMenu} className="letters">
                                ABOUT
                            </p>
                        </Link>
                    </li>
                    <li className="menu-list">
                        <Link to='/projects'>
                            <p onClick={handleProjectsBtn} className="letters">
                                PROJECTS
                            </p>
                        </Link>
                    </li>
                    <li className="menu-list">
                        <Link to='/contact'>
                            <p onClick={props.closesMenu} className="letters">
                                CONTACT
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