import Project from './project';
import './css/projects.css';
import React, { useState, useEffect } from 'react';
import Timeline from './timeline';
import uniqid from 'uniqid';

function Projects(props) {
    const description = {string: "I started my coding journey with The Odin Project back in April, 2022. It has been a very long journey and I wanted to keep track of each project that I completed in the course. When I look at my previous projects, I can see how much I've progressed in my journey. Below this section, you'll able to see all my previous works. There is still so much to learn and study. But right now in this moment, I'd like to celebrate with you all my hard work.", count: 4};
    const [date, setDate] = useState();
    const [projects, setProjects] = useState([
        {date: '05.05.2022', id: 1, description: "My first project. It was built with some simple css and basic html elements. The theme was a korean recipe blog cause I am a Korean and I couldn't think of anything else in that moment!", title: 'Blog page for a cooking recipes', img1: 'project1-1.png', img2: 'project1-2.png', img3: 'project1-3.png'},
        {date: '08.05.2022', id: 2, description: 'A basic html static page with some css. In the course of The Odin Project, I needed to practice some CSS flexbox and I was given a template to follow. This is the result.', title: 'Another blog page for flexbox practice', img1: 'project2-1.png', img2: 'project2-2.png', img3: 'project2-3.png'},
        {date: '06.2022', description: 'It was the first time ever that I ever coded in Javascript. In the following of The Odin Project, I was assigned to complete 3 different basic javascripts projects which were calculator, e-sketch and rock paper scissors. It was pretty challenging as a beginner!', id: 3, title: 'Calculator, e-sketch and Rock Paper Sissors for fundamental javascript', img1: 'project3-1.png', img2: 'project3-2.png', img3: 'project3-3.png'},
        {date: '03.07.2022', id: 4, description: 'A basic html static page that I built to practice the CSS grid system. It took me sometime to figure out how the stuff works but eventually it clicked. Now, I feel comfortable working with grid and flexbox and choose to use one in whenever needed.', title: 'Sign up page for client-side data validation and css grid', img1: 'project4-1.png', img2: 'project4-2.png'},
        {date: '14.07.2022', id: 5, description: "Some advanced javascript projects. In the path of full-stack web developer from The Odin Project, I had to complete projects such as an Todo app, tic tac toe game and battleship. The funny thing is, I didn't even know what those games were about!", title: 'TicTacToe, todo app and battleship for javascript fundamentals', img1: 'project5-1.png', img2: 'project5-2.png', img3: 'project5-3.png'},
        {date: '26.07.2022', id: 6, description: 'Basic html and javascript to validate client side user inputs. The other project consisted in working with API for a basic weather application. ', title: 'Weather app with basic API and form validation', img1: 'project6-1.png', img2: 'project6-2.png', img3: 'project6-3.png'},
        {date: '09.2022', description: 'Here I learnt the basics of the javascript framework ReactJs. The projects consisted in working with states, components and use of Firebase which works as a backend app. It was a great challenge as I had to figure out all the logic behind the scene, but at the end I made it work out.', id: 8, title: 'Shopping Cart, where is waldo app and a memory card game with basic ReactJs framework.', img1: 'project8-1.png', img2: 'project8-2.png', img3: 'project8-3.png'},
        {date: '01.10.2022', id: 9, description: 'A basic restaurant page with some added features as login, register and order systems. I made this as part of a school project in my first semester at Fontys. I had never worked with python before, so It was a challenge to get used to different syntax. Flask seemed to be light and easy to work with, so I loved it. Figuring out to connect Flask to a database and front end was very smooth and easy.', title: 'Italian themem restaurant made with React/Flask', img1: 'project9-1.png', img2: 'project9-2.png', img3: 'project9-3.png'},
        {date: '20.10.2022', id: 10, description: 'A blog page made with nodeJs. It was a great challenge as it was the first time that I worked with backend. I made this as part of The Odin Project in the backend course. I had to figure out how to implement all the logics behind comment sections, posts and album.', title: 'Simple blog page built with React/Nodejs to practice API requests', img1: 'project10-1.png', img2: 'project10-2.png', img3: 'project10-3.png'},
        {date: '02.11.2022', id: 11, description: "A personal portfolio page made for the CSS course of The Odin Project. Before this, I hadn't dived deep into the CSS. The challenge was to make everything responsive; whether on a mobile device or a laptop, things should look as smoothly as possible. I got some inspiration from other websites as well since I had no idea where to start. At the end, I'm happy about how it turned out. I'm constanly making changes in my porfolio as well to keep it updated.", title: 'Personal Portfolio', img1: 'project11-1.png', img2: 'project11-2.png', img3: 'project11-3.png'},
    ])

    function onScroll() {
        getProjectDate();
        manageScrollAnimation();
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
                <span className='date-span super-big-texts typing-erase'>{date}</span>
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
                                        return <span> &nbsp; </span>
                                    }
                                    else {
                                        description.count += .05;
                                        return <span className="showLetter" style={{animationDelay: `${description.count}s`, visibility: 'hidden'}}> {letter} </span>;
                                    }
                                })}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="timeline-container">
                    {projects.map((project) => {
                        return <Timeline description={project.description} title={project.title} key={project.id} date={project.date} img1={project.img1} img2={project.img2} img3={project.img3}/>
                    })}
                </div>
                {/* <hr style={{height: '10px', backgroundColor: 'black', width: '100%'}}></hr>
                <Timeline />
                <hr style={{height: '10px', backgroundColor: 'black', width: '100%'}}></hr>
                <Timeline /> */}
                {/* <div className="projects-menu-outer-container">
                    <div className="projects-menu-inner-container">
                        <div className="big-letters-container">
                            <p className='super-big-letters-about'> PROJECTS</p>
                            <p className="big-letters">
                                PROJECTS
                            </p>
                        </div>
                        <div className='text-box-1'>
                            <h3 className="text-at-the-end about-header-title" id="about">
                                Have a look at my previous projects.
                            </h3>
                            <div className="left-line-container">
                                <div className="line-right"></div>
                            </div>
                        </div>
                        <div className='text-box-2'>
                            <div className="right-line-container">
                                <div className="line-right"></div>
                            </div>
                            <div className="about-description-texts-container">
                                <p>
                                    Hello there, My name is Sol Moon.
                                </p>
                                <p>
                                    &nbsp;
                                </p>
                                <p>
                                    I started my coding journey back in April, 2022. Mostly following and grinding myself into The Odin Project, I've been able to make some very rudiment but functional webpages. This porfolio webpage is one of them.
                                </p>
                                <p>
                                    &nbsp;
                                </p>
                                <p>
                                    I have knowledge in Javascript and in the ReactJs framework. Now I'm studying backend to be a full stack web developer.
                                </p>
                            </div>
                        </div>
                        <div className="arrow-container">
                            <div className="arrow"></div>
                        </div>
                    </div>
                </div>
                <div className="project-container">
                    {props.projects.map((project) => {
                        return <Project key={project.id} id={project.id} description={project.description} tools={project.tools} img={project.img} title={project.title} live={project.live} code={project.code}  translateValue={project.translateValue}/>
                    })}
                </div> */}
            </div>
        </div>
    )
}

export default Projects;