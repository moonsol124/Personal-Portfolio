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
                <div className="container-to-center-texts ">
                    <p>
                        moonsol124@gmail.com
                    </p>
                    <p>
                        +31620058406
                    </p>
                    <p>
                        Sol Moon
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Contact;