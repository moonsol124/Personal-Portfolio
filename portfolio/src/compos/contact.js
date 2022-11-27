import ContactForm from './contactForm';
import Letter from './letter';
import './css/contact.css';
import React, { useEffect } from 'react';
import emailjs from '@emailjs/browser';
import {useNavgiate, useNavigate} from 'react-router-dom';

function Contact(props) {
    const navigate = useNavigate();

    useEffect(() => {
    })

    function onSubmit(e) {
        e.preventDefault();
        for (let i = 0; i < e.target.length; i++) {
            console.log (e.target[i].value);
        }

        const templateParams = {
            to_name: "Sol Moon",
            from_name: e.target[0].value,
            message: e.target[2].value,
            reply_to: e.target[1].value,
        };

        emailjs.send("service_vpnn9fh","template_evpaiiw", templateParams, "Vw8LhwUawXWlKqYNo")
        .then(function(response) {
            navigate('/thanks_message');
            // console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
            // console.log('FAILED...', error);
        });
    }

    return (
        <div className='contact-menu'>
            <div className="contact-menu-container">
                <p className="big-letter"> Contact me via email </p>
                <form className="contact-form" onSubmit={onSubmit}>
                    <div className="contact-input-container">
                        <label htmlFor='name'></label>
                        <input type="text" name="name" id="name" className="contact-input" placeholder="Name" required></input>
                    </div>
                    <div className="contact-input-container">
                        <label htmlFor='email'></label>
                        <input type="email" name="email" id="email" className="contact-input" placeholder="Email" required></input>
                    </div>
                    <div className="contact-input-container">
                        <label htmlFor="message"></label>
                        <textarea className="contact-input" id="message" name="message" placeholder="Message" rows={10}></textarea>
                    </div>
                    <div className="button-container">
                        <button type='submit' className="form-button">Send</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact;