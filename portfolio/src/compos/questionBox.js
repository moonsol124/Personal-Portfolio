import Question from './questionAnswer';
import React, { useState, useEffect } from 'react';

function QuestionBox() {

    useEffect(()=>{
    }, [])

    const [qa, setQa] = useState([{'id': 1, 'question': 'Where do you live?', 'answer': "I live in the Netherlands. Previously I lived in Mexico, Australia and in South Korea."},
    {'id': 2, 'question': 'What is your education backgrounds?', 'answer': "I have an unfinished bachelor's degree in International Relations. Now I study IT at a high level vocational school in the Netherlands."},
    {'id': 3, 'question': 'How much experience do you have in coding?', 'answer': "I started my coding journey back in April, 2022. Mostly following and doing The Odin Project, I've made some very rudiment but functional webpages. For more information, check out the Projects page."},
    {'id': 4, 'question': 'What languages are you experienced in?', 'answer': 'I have knowledge in Javascript and in the ReactJs framework.'},
    {'id': 5, 'question': 'Why is there a long career gap in your CV?', 'answer': "I've spent most of my 20's traveling and working odd jobs. I lived in Mexico for about 4 years and one year in Australia. On the top of that, I've done two years of military service in South Korea. That's why I've haven't had a steady, and a long professional career so far."},
    {'id': 6, 'question': 'Who are you as a person?', 'answer': "As you might have seen already, I'm very friendly and lay back. I'm very communicative, easy to talk and also great in team work."}])

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