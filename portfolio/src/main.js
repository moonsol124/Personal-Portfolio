import App from './App';
import React, { useEffect, useState} from 'react';
import Load from './compos/load';

function Main() {
    const [appLoaded, setAppLoaded] = useState(true);

    useEffect(() => {

    }, [])

    function loadApp() {
        setAppLoaded(true);
    }
    
    return (
        <>
            {(appLoaded)?<App />:<Load loadApp={loadApp}/>}
        </>
    )
}

export default Main