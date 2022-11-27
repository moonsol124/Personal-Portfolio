import { useNavigate } from 'react-router-dom';
import './css/contact.css';
import {useEffect} from 'react';

function ThanksMessage() {
    const navigate = useNavigate();
    useEffect(() => {
        setTimeout(() => {
            navigate('/');
        }, 2000)
    }, [])

    return (
        <div className="thanks-div">
            <p> Thank you very much for your contact. </p>
            <p> I'll get back to you as soon as possible. </p>
        </div>
    )
}

export default ThanksMessage;