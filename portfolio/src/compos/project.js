import React, { useState, useEffect } from 'react';

function Project(props) {

    useEffect(()=>{
        animateProject();
    }, [])

    function animateProject() {
        console.log ("mounted");
    }

    return (
        <>
            <div className="project">
                <div className="project-container">
                    <div className="project-title">
                        <p className="project-text" style={{textAlign: 'center', whiteSpace: 'pre'}}> 
                            {props.name}
                        </p>
                    </div>
                    <div className="project-img"> project img</div>
                    <div className='text-box-2'>
                        <div style={{display: 'flex', justifyContent: 'flex-start'}}>
                            <div className="line-right"></div>
                        </div>
                        <p className="project-text"> {props.description} </p>
                    </div>
                    <div className='text-box-1'>
                        <p className="project-text" style={{textAlign: 'end'}}> {props.technolgies} </p>
                        <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                            <div className="line-right"></div>
                        </div>
                    </div>
                    <div className='text-box-2'>
                        <div style={{display: 'flex', justifyContent: 'flex-start'}}>
                            <div className="line-right"></div>
                        </div>
                        <p className="project-text"> {props.date} </p>
                    </div>
                    <div className="project-btns">
                        <button className="button">LIFE PREVIEW</button>
                        <button className="button">VIEW CODE</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Project;