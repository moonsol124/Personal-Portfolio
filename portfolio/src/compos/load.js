import React, { useState, useEffect } from 'react';
import './css/load.css';

function Load(props) {
    const [percent, setPercent] = useState(0);

    useEffect(() => {
        const heart = document.querySelector(".heart-container");
        heart.classList.add('heart-beat')
        if (percent < 97) {
            setTimeout(() => {
                incrementPercent();
            }, 30)
        }
        else if (percent === 99 || percent === 98 || percent === 97) {
            setTimeout(() => {
                incrementPercent();
            }, 500)
        } 
        else {
            const heart = document.querySelector(".heart-container");
            heart.classList.remove('heart-beat');
            heart.classList.add('make-heart-bigger');
            heart.addEventListener('animationend', (e) => {
                const load = document.querySelector('.load');
                load.classList.add('hide');
                setTimeout(() => {
                    props.loadApp();
                }, 500)
            })
        }
        
    }, [incrementPercent])

    function incrementPercent() {
        setPercent(percent+1);
    }
    
    return (
        <div className='load'>
                <div className="heart-container">
                    <div className="heart">
                </div>
            </div>
            <div className="load-percentage">
                {percent}%
            </div>
        </div>
    )
}

export default Load;