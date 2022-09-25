import ContactForm from './contactForm';
import Letter from './letter';
import './css/contact.css';
import React, { useEffect } from 'react';

function Contact(props) {
    useEffect(() => {
    })
    return (
        <div className='contact-menu'>
            <div className="contact-menu-container">
                <div className="big-letters-container">
                    <p className='super-big-letters-about' style={{color: 'rgba(255, 164, 0, 0.5)'}}> CONTACT</p>
                    <p className="big-letters">
                        CONTACT
                    </p>
                </div>
                <div className="contact-form-container">
                    <ContactForm />
                </div>
                <div>
                    <div className="big-letters-container">
                        <p className='super-big-letters-about' style={{color: 'rgba(255, 164, 0, 0.5)'}}> Love...</p>
                        <p className="big-letters">
                            Love Letter
                        </p>
                    </div>
                    <div>
                        <Letter />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;