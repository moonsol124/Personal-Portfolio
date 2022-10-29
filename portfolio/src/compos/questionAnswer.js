import React, { useEffect, useState } from 'react';
import './css/about.css';
import lockIcon from './imgs/open-padlock.png'

function Answer(props) {

    return (
        <li className="answer">
            {props.a}
        </li>
    )
}

function Question(props) {
    const [toggled, setToggled] = useState(false);

    function opensQuestion (id) {
        setToggled(true);
        props.setCurrentQuestion(id)
    }

    function closesQuestion () {
        setToggled(false);
    }

    return (
        <div className="questionAnswer">
            <div className="question">
                <p> {props.id}. </p>
                <p className="question-p"> {props.q} </p>
                {(props.id === props.curQA)?null:
                <div className="question-answer-btn-group">
                    <img src={lockIcon} alt="open" className="lockIcon" onClick={()=>{return opensQuestion(props.id)}}/>
                </div>
                }
            </div>
            {(toggled)?
            <ul className="answer-container">
                {(props.id === props.curQA)?<Answer a={props.a}/>:null}
            </ul>
            :null}
        </div>
    )
}

export default Question;