import Question from './questionAnswer';
import React, { useState, useEffect } from 'react';

function QuestionBox() {

    useEffect(()=>{
    }, [])

    const [qa, setQa] = useState([{'id': 1, 'question': 'What is yoyes ur favorite cookie?', 'answer': 'my favorite cookie is this and this and that because of this and that and this.'},
    {'id': 2, 'question': 'What is your favorite cooaaaakie?', 'answer': 'answer 2'},
    {'id': 3, 'question': 'What is your favorite cookie?', 'answer': 'answer 3'},
    {'id': 4, 'question': 'What is your favorite cookie?', 'answer': 'answer 4'},
    {'id': 5, 'question': 'What is your favorite cookie?', 'answer': 'answer 5'},
    {'id': 6, 'question': 'What is your favorite cookie?', 'answer': 'answer 6'},
    {'id': 7, 'question': 'What is your favorite cookie?', 'answer': 'answer 7'}])

    const [curQA, setCurQA] = useState(0);

    function setCurrentQuestion(id) {
        setCurQA(id);
    }
    return (
        <div className="questionBox">
            <div className="big-letters-container">
                <p className='super-big-letters-about' style={{color: 'rgba(255, 164, 0, 0.5)'}}> Questions </p>
                <p className="big-letters" style={{zIndex: '1'}}>
                    Questions
                </p>
            </div>
            <div className='text-box-1'>
                <p style={{textAlign: 'end'}} className="about-header-title scroll" id="about">
                    and Answers
                </p>
                <div style={{display: 'flex', justifyContent: 'flex-end'}}>
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