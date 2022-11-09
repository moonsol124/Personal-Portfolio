import './css/projects.css';
import React, { useState, useEffect } from 'react';

function Timeline(props) {
    const [toggled, setToggled] = useState(false);

    useEffect(() => {
    }, [])

    function flip(e) {
        const div = document.getElementById(props.id);
        const children = Array.from(div.children);
        if (!toggled) {
            children[0].className="card front flip-front";
            children[1].className="card back flip";
            setToggled(true);
        }
        else {
            children[0].className="card front flip-back-front";
            children[1].className="card back flip-back";
            setToggled(false);
        }
    }

    return (
        <>
            <div className="projects-menu-item date-scroll" data-date={props.date}>
                <div className="slide" onClick={flip} id={props.id}>
                    <div className="card front">
                        <p>
                            {props.description}
                        </p>
                        <p>
                            {props.date}
                        </p>
                    </div>
                    <div className="card back">
                        <img className="img"src={props.img} alt={props.id}/>
                    </div>
                </div>
            </div>    
        </>
    )
}

export default Timeline;