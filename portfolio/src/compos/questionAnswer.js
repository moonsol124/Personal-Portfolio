import React, { useEffect, useState } from 'react';
import './css/about.css';

function Answer(props) {

    return (
        <div>
            {props.a}
        </div>
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
                <h2> {props.q} </h2>
                {(props.id === props.curQA)?null:
                <button onClick={()=>{return opensQuestion(props.id)}}> open </button>}
            </div>
            {(toggled)?
            <div className="answer">
                {(props.id === props.curQA)?<Answer a={props.a}/>:null}
            </div>
            :null}
        </div>
    )
}

export default Question;