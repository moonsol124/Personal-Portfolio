import Project from './project';
import './css/projects.css';
import React, { useState, useEffect } from 'react';

function Projects(props) {


    return (
        <div className="projects-menu">
            <div className="projects-menu-container">
                <div className="big-letters-container">
                    <p className='super-big-letters-about' style={{color: 'rgba(255, 164, 0, 0.5)'}}> PROJECTS</p>
                    <p className="big-letters" style={{zIndex: '1'}}>
                        PROJECTS
                    </p>
                </div>
            </div>
            <div className="project-container">
                {props.projects.map((project) => {
                    return <Project id={project.id} description={project.description} tools={project.tools} img={project.img} title={project.title} live={project.live} code={project.code}  translateValue={project.translateValue}/>
                })}
            </div>
        </div>
    )
}

export default Projects;