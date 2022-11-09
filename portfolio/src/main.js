import App from './App';
import React, { useEffect, useState} from 'react';
import Load from './compos/load';

function Main() {
    const [appLoaded, setAppLoaded] = useState(false);
    useEffect(() => {
        // const loadValue = sessionStorage.getItem('loaded');
        // if (loadValue) {
        //     setAppLoaded(true);
        // }
    }, [])

    function loadApp() {
        sessionStorage.setItem('loaded', true);
        setAppLoaded(true);
    }
    
    return (
        <>
            {(appLoaded)?<App />:<Load loadApp={loadApp}/>}
        </>
    )
}

export default Main