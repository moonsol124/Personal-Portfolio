import Project from './project';
import './css/projects.css';
import React, { useState, useEffect } from 'react';

function Projects() {
    const [projects, setProjects] = useState([{'id': '1','liveLink': '#', 'codeLink': '#', 'img': '#', 'name': 'Yo wassup!', 'description': 'this is a short description', 'summary': 'hehe', 'technolgies': 'rice, rice, rice, rice', 'date': '2022'}, 
    {'id': '2','liveLink': '#', 'codeLink': '#', 'img': '#', 'name': 'Yo wassup!', 'description': 'this is a short description', 'summary': 'hehe', 'technolgies': 'rice, rice, rice, rice', 'date': '2022'}])
    
    useEffect(() => {
        animateAboutHeader();
    })

    function animateAboutHeader() {
        const about = document.querySelector('.about-menu-header');
        about.classList.add('header-appears');
    }

    return (
        <div className="projects-menu">
            <div className="projects-menu-container">
                <div className="big-letters-container" style={{marginTop: '35vmin'}}>
                    <p className='super-big-letters-about' style={{color: 'rgba(255, 164, 0, 0.5)'}}> PROJECTS</p>
                    <p className="big-letters" style={{zIndex: '1'}}>
                        PROJECTS
                    </p>
                </div>
                <div className="about-menu-header" style={{marginTop: '0'}}>
                    <div className="projects-menu-container">
                        {projects.map((project) => {
                            return (
                                <Project id={project.id} name={project.name} description={project.description} summary={project.summary} technolgies={project.technolgies} date={project.date} />
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;