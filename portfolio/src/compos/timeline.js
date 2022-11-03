import './css/projects.css';
import React, { useState, useEffect } from 'react';

function Timeline(props) {
    return (
        <>
            <div className="projects-menu-item date-scroll" data-date={props.date}>
                <div className="img-container c-1 scroll-timeline" data-scroll-y='0' data-scroll-speed='0'>
                    <img className="img" src={require(`./imgs/2/${props.img1}`)} alt={props.title} />
                </div>
                <div className="img-container c-2 scroll-timeline" data-scroll-y='0.2' data-scroll-speed='1.5'>
                    <img className="img" src={require(`./imgs/2/${props.img2}`)} alt={props.title}/>
                </div>
                {(props.img3)?
                <div className="img-container c-3 scroll-timeline" data-scroll-y='0' data-scroll-speed='4'>
                    <img className="img" src={require(`./imgs/2/${props.img3}`)} alt={props.title}/>
                </div>:null}
                {/* <div className="text-container text-1 scroll-timeline" data-scroll-y='0' data-scroll-speed='1'>
                    <p>
                        Some random text Some random textSome random textSome random textSome random textSome random textSome random textSome random textSome random textSome random textSome random text
                    </p>
                </div> */}
                <div className="text-container text-2 scroll-timeline" data-scroll-y='0' data-scroll-speed='0'>
                    <h3 className="project-timeline-name"> {props.title} </h3> 
                    <p>
                        {props.description}
                    </p>                    
                </div>
            </div>
        </>
    )
}

export default Timeline;