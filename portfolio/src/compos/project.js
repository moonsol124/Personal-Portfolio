import React, { useState, useEffect } from 'react';

function Project() {
    return (
        <div className="project">
            <div className="project-title">
                <h2> Project Name </h2>
                <p> Project short description </p>
            </div>
            <div className="project-img"> project img</div>
            <div className="project-description">
                <h2> Summary</h2>
                <p>
                    An application made for when you want to just scream and
                    do things that normally you don't enjoy
                    like eating craps and hamburgers.
                    The app was targeted to fat people who
                    do not refuse to go on diet like me!
                </p>
            </div>
            <div className="project-technologies">
                <h3> Techonologies </h3>
                <p> rice, hamburger, vegetables and meat.</p>
            </div>
            <div className="project-date">
                <h3> date </h3>
                <p> 2022 </p>
            </div>
            <div className="project-btns">
                <button className="project-btn">LIFE PREVIEW</button>
                <button className="project-btn">VIEW CODE</button>
            </div>
        </div>
    )
}

export default Project;