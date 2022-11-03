import Question from './questionAnswer';
import React, { useState, useEffect } from 'react';

function QuestionBox() {

    useEffect(()=>{
    }, [])

    const [qa, setQa] = useState([{'id': 1, 'question': 'Where do you live?', 'answer': "I live in the Netherlands."},
    {'id': 2, 'question': 'Where are you from?', 'answer': "I'm from South Korea."},
    {'id': 3, 'question': 'What are your hobbies?', 'answer': "I like learning new languages, playing music and adquiring new skills."},
    {'id': 4, 'question': 'When did you start programming?', 'answer': "I started back in April 2022 with The Odin Project."},
    {'id': 5, 'question': 'What languages do you speak?', 'answer': "I speak English, Korean, Spanish and (broken) dutch."},
    {'id': 6, 'question': 'What are your personalities?', 'answer': "I'm very friendly and lovely :)"}])

    const [curQA, setCurQA] = useState(0);

    function setCurrentQuestion(id) {
        setCurQA(id);
    }
    return (
        <div className="questionBox">
            <div className="container-to-center-texts">
                <h3 className="medium-texts"> More things about me </h3>
                <div className="thin-hr-container">
                    <div className="thin-hr"></div>
                </div>
                <p className="small-texts"> Click and find out </p>
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