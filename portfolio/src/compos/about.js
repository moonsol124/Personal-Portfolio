import Question from './questionAnswer';
import React, { useState, useEffect } from 'react';
import uniqid from 'uniqid';

import './css/about.css';

function About() {
    const [qa, setQa] = useState([{'id': 1, 'question': 'question1', 'answer': 'answer 1'},
    {'id': 2, 'question': 'question2', 'answer': 'answer 2'},
    {'id': 3, 'question': 'question3', 'answer': 'answer 3'},
    {'id': 4, 'question': 'question4', 'answer': 'answer 4'},
    {'id': 5, 'question': 'question5', 'answer': 'answer 5'},
    {'id': 6, 'question': 'question6', 'answer': 'answer 6'},
    {'id': 7, 'question': 'question7', 'answer': 'answer 7'}])

    const [curQA, setCurQA] = useState(0);

    function setCurrentQuestion(id) {
        setCurQA(id);
    }

    return (
        <div className="about-menu">
            <div className="about-menu-header">
                <h1 className="titleId"> About </h1>
                <div className="photo"></div>
                <h2> Have you ever wondered what icecream you like?</h2>
                <p> My favorite ice cream is chocolcate. 
                    There is nothing better than a good chocolate icecream! I just love it!
                    If tomorrow is the end of the world, I'd liket get burried with a nice
                    homemade chocolate Ice cream.
                </p>
            </div>
            <div className="questionBox">
                <h1 className="titleId"> question and answer </h1>
                <div>
                    {qa.map((element)=>{
                            return <Question curQA={curQA} setCurrentQuestion={setCurrentQuestion} id={element.id} q={element.question} a={element.answer} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default About;