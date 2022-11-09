import Project from './project';
import './css/projects.css';
import React, { useState, useEffect } from 'react';
import Timeline from './timeline';
import uniqid from 'uniqid';
import project1 from './imgs/2/project1.png';
import project2 from './imgs/2/project2.png';
import project3 from './imgs/2/project3.png';
import project4 from './imgs/2/project4.png';
import project5 from './imgs/2/project5.png';
import project6 from './imgs/2/project6.png';
import project7 from './imgs/2/project7.png';
import project8 from './imgs/2/project8.png';
import project9 from './imgs/2/project9.png';
import project10 from './imgs/2/project10.png';
import project53 from './imgs/2/project5-3.png';
import project11 from './imgs/2/project11.png';
import project12 from './imgs/2/project12.png';
import project13 from './imgs/2/project13.png';
import project14 from './imgs/2/project14.png';
import project15 from './imgs/2/project15.png';
import project16 from './imgs/2/project16.png';


function Projects(props) {
    const description = {string: "I started my coding journey with The Odin Project back in April, 2022. It has been a very long journey and I wanted to keep track of each project that I completed in the course. When I look at my previous projects, I can see how much I've progressed in my journey. Below this section, you'll able to see all my previous works. There is still so much to learn and study. But right now in this moment, I'd like to celebrate with you all my hard work.", count: 4};
    const [date, setDate] = useState();
    const [projects, setProjects] = useState([
        {date: '05.05.2022', id: uniqid(), img: project1, description: "A basic html blog page for Korean food recipes."},
        {date: '11.05.2022', id: uniqid(), img: project2, description: "A basic sign up page made for flexbox practice."},
        {date: '30.05.2022', id: uniqid(), img: project3, description: "A simple javascript game: Rock, Paper, and Sissors."},
        {date: '03.06.2022', id: uniqid(), img: project4, description: "E-sketch made with javascript."},
        {date: '15.06.2022', id: uniqid(), img: project5, description: "A basic calculator made with javascript."},

        {date: '01.07.2022', id: uniqid(), img: project6, description: "A basic form with client-side validation."},
        {date: '03.07.2022', id: uniqid(), img: project7, description: "A basic dashboard template made with css grid."},
        {date: '14.07.2022', id: uniqid(), img: project9, description: "A basic TicTacToe game made with javascript."},
        {date: '25.07.2022', id: uniqid(), img: project10, description: "An imaginary online library."},

        {date: '01.08.2022', id: uniqid(), img: project8, description: "A basic weather app with API."},
        {date: '09.08.2022', id: uniqid(), img: project53, description: "Battleship game made with javascript."},
        {date: '19.08.2022', id: uniqid(), img: project11, description: "A memory card game."},
        {date: '21.08.2022', id: uniqid(), img: project12, description: "A shopping cart page."},
        {date: '23.08.2022', id: uniqid(), img: project13, description: "Where is Waldo?"},
        {date: '10.09.2022', id: uniqid(), img: project14, description: "Basic blog with nodejs as backend."},
        {date: '14.10.2022', id: uniqid(), img: project15, description: "Basic restaurant page with flask as backend."},
        {date: '24.10.2022', id: uniqid(), img: project16, description: "Personal Portfolio"},
    ])

    function onScroll() {
        // getProjectDate();
        // manageScrollAnimation();
    }

    function getProjectDate() {
        const items = Array.from(document.querySelectorAll('.date-scroll'));
        items.forEach(item => {
            const elementTop = item.getBoundingClientRect().y;
            if (elementTop < window.innerHeight-300 && elementTop > -100) {
                const date = item.getAttribute('data-date'); 
                setDate(date);
            }
        })    
    }

    function manageScrollAnimation() {
        const boxes = Array.from(document.querySelectorAll('.scroll-timeline'));
        boxes.forEach((box) => {
            const elementTop = box.getBoundingClientRect().y;
            const data = parseInt(box.getAttribute('data-element-top'));
            // user scroll down
            if (elementTop < window.innerHeight && elementTop > -100) {
                if (elementTop < data) {
                    const attr = box.getAttribute('data-scroll-y');
                    const previousValue = parseFloat(attr);
                    const speed = parseFloat(box.getAttribute('data-scroll-speed'))*(-1);
                    const sum = previousValue+speed;
                    box.setAttribute('data-scroll-y', sum);
                    box.style.transform = `translateY(${(sum)}px)`;
                }
                else {
                    const attr = box.getAttribute('data-scroll-y');
                    const previousValue = (parseFloat(attr));
                    const speed = parseFloat(box.getAttribute('data-scroll-speed'));
                    const sum = previousValue+speed;

                    box.setAttribute('data-scroll-y', sum);
                    box.style.transform = `translateY(${(sum)}px)`;
                }
            }

            box.setAttribute('data-element-top', elementTop);
        })
    }

    return (
        <div className="projects-menu">
            <p className="date">
                {/* <span className='date-span super-big-texts typing-erase'>{date}</span> */}
            </p>
            <div className="projects-menu-container" onScroll={onScroll}> 
                <div className="projects-menu-landing date-scroll" data-date=''>
                    <div className="projects-menu-landing-item">
                        <div className="projects-menu-item-item-texts">
                            <p className="animateTexts txt-1"> "Life</p>
                            <p className="animateTexts txt-2"> is</p>
                        </div>
                        <div className="projects-menu-item-item-texts">
                            <p className="animateTexts txt-3"> a </p>
                            <p className="animateTexts txt-4"> journey" </p>
                        </div>
                        <div className="projects-menu-item-item-texts">
                            <p className="animateTexts txt-5"> - A STRANGER</p>
                        </div>
                    </div>
                    <div className="projects-menu-landing-item">
                        <div className="projects-menu-item-item-texts">
                            <p className="long-txt">
                                {
                                Array.from(description.string).map((letter) => {
                                    if (letter === ' ') {
                                        return <span key={uniqid()}> &nbsp; </span>
                                    }
                                    else {
                                        description.count += .05;
                                        return <span key={uniqid()} className="showLetter" style={{animationDelay: `${description.count}s`, visibility: 'hidden'}}> {letter} </span>;
                                    }
                                })}
                            </p>
                        </div>
                    </div>
                </div>
                <p className="text-center">
                    Click images to see the details.
                </p>
                <div className="timeline-container">
                    {projects.map((project) => {
                        return <Timeline id={project.id} description={project.description} title={project.title} key={project.id} date={project.date} img={project.img}/>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Projects;