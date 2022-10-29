import Question from './questionAnswer';
import React, { useState, useEffect } from 'react';

function QuestionBox() {

    useEffect(()=>{
    }, [])

    const [qa, setQa] = useState([{'id': 1, 'question': 'Where do you live?', 'answer': "I live in the Netherlands. But I'm originally from South Korea."},
    {'id': 2, 'question': 'What are your hobbies?', 'answer': "I like learning new languages, playing music and adquiring new skills."},
    {'id': 3, 'question': 'What are your personalities?', 'answer': "I'm very friendly and lovely :)"}])

    const [curQA, setCurQA] = useState(0);

    function setCurrentQuestion(id) {
        setCurQA(id);
    }
    return (
        <div className="questionBox">
            <div className="big-letters-container">
                <p className='super-big-letters-about' style={{color: 'rgba(255, 164, 0, 0.5)'}}> Questions </p>
                <p className="big-letters">
                    Questions
                </p>
            </div>
            <div className='text-box-1'>
                <p className="text-at-the-end about-header-title scroll" id="about">
                    and Answers
                </p>
                <div className="left-line-container">
                    <div className="line-right"></div>
                </div>
            </div>
            <div className='questions'>
                {qa.map((element)=>{
                    return <Question key={element.id} curQA={curQA} setCurrentQuestion={setCurrentQuestion} id={element.id} q={element.question} a={element.answer} />
                })}
            </div>
        </div>
    )
}

export default QuestionBox;