import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import uniqid from 'uniqid';
import QuestionBox from './questionBox';
import './css/about.css';

function About(props) {
    const [qaToggled, setQaToggled] = useState(false);
    const [fotos, setFotos] = useState([]);

    useEffect(() => {
        // const array = [];
        // for (let i = 0; i < 100; i++) {
        //     const randomInt = generateRandomInt();
        //     const obj = {'index': i, 'random': randomInt};
        //     array.push(obj);
        // }
        // setFotos(array);

        importAll(require.context('./imgs/1', false, /\.(png|jpe?g|svg)$/));
    }, [])

    function importAll(r) {
        let images = [];
        r.keys().forEach((item, index) => { 
            const img = item.replace('./', '');
            images.push(img);
        });
        setFotos(images);
    }
    
    function generateRandomInt() {
        return Math.floor(Math.random() * 5);
    }
    function handlesPackman(e) {
        const packman = document.getElementById('packman-menu-about');
        packman.classList.add('animatePackman');
        const letters = Array.from(e.target.children);
        letters.forEach((letter) => {
          letter.classList.add('hideLetter');
        })
        setTimeout(()=>{
            setQaToggled(true);
        }, 1000)
    }
    
    return (
        <div className="about-menu">
            <div className="about-menu-container">
                <div className="about-fotos">
                {fotos.map((foto)=>{
                    return <img key={uniqid()} src={require(`./imgs/1/${foto}`)} alt={foto} className="foto"/>
                })}
                </div>
                <div className="about-menu-texts">
                    <div className="about-menu-description text-end">
                        <p className="super-big-texts font-style-italic"> I AM </p>
                    </div>
                    <div className="thin-vl-container">
                        <div className="thin-vl"></div>
                    </div>
                    <div className="small-texts about-menu-description-container">
                        <p className="about-menu-description">
                            <span>An immigrant,</span>
                            <span>friend,</span>
                            <span>waiter,</span>
                            <span>student,</span>
                            <span>volunteer,</span>
                            <span>teacher,</span>
                            <span>dancer,</span>
                            <span>singer,</span>
                            <span>worker,</span>
                            <span>lover,</span>
                            <span> And all the things that I wanted to be, want to be and will be.</span>
                            <span> Nothing more and nothing else, just an apprentice of life who sails through this wild world and all the beautiful moments in it. </span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="question-container">
                <QuestionBox />
            </div>
        </div>
    )
}

export default About;