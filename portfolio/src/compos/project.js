import React, { useState, useEffect } from 'react';

function Project(props) {

    useEffect(()=>{
    }, [])

    return (
        <>
            <div className="project">
                <div className="project-preview">
                    <div className="project-img-container">
                        <img className="project-preview-img" src={props.img} alt={props.title}></img>
                    </div>
                </div>
                <div className='project-description' id={props.id}>
                    <p className="project-title"> {props.title} </p>
                    <div className="project-info">
                        <p>
                            {props.description}
                        </p>
                        <p>
                            Built with {props.tools}
                        </p>
                        <div className="project-btns">
                            <a href={props.code} target="_blank" rel="noreferrer"><button className="button">View Code</button></a>
                            <a href={props.live} target="_blank" rel="noreferrer"><button className="button">View App</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Project;