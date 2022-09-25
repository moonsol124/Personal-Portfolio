import Project from './project';
import './css/projects.css';
import React, { useState, useEffect } from 'react';

function Projects(props) {
    useEffect(() => {
    }, [])
    
    return (
        <div className="projects-menu">
            <div className="projects-menu-outer-container">
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
                    return <Project id={project.id} description={project.description} tools={project.tools} img={project.img} title={project.title} live={project.live} code={project.code}  translateValue={project.translateValue}/>
                })}
            </div>
        </div>
    )
}

export default Projects;