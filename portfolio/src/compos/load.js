import React, { useState, useEffect } from 'react';
import './css/load.css';

function Load(props) {
    const [percent, setPercent] = useState(0);

    useEffect(() => {
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
            const load = document.querySelector('.load');
            load.classList.add('hide');
            setTimeout(() => {
                props.loadApp();
                const test = sessionStorage.getItem('loaded');
                console.log (test);
            }, 1000)
        }
        
    }, [incrementPercent])

    function incrementPercent() {
        setPercent(percent+1);
    }
    
    return (
        <div className='load'>
            <ul className="loader-list">
                <li>
                    {/* <!-- Loader 1--> */}
                    <div className="loader-5 center"><span></span></div>
                </li>
            </ul>
            <div className="load-percentage">
                {percent}%
            </div>
        </div>
    )
}

export default Load;