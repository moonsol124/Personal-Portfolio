import ContactForm from './contactForm';
import Letter from './letter';
import './css/contact.css';

function Contact() {
    return (
        <div className='contact-menu'>
            <div className="contact-menu-container">
                <h2 className="titleId"> Contact </h2>
                <ContactForm />
                <h2 className="titleId"> ...or </h2>
                <h3 className="titleId">Just shoot me a love letter!</h3> 
                <Letter />
            </div>
        </div>
    )
}

export default Contact;