import ContactForm from './contactForm';
import Letter from './letter';
import './css/contact.css';

function Contact() {
    return (
        <div className='contact-menu'>
            <div className="contact-menu-container">
                <div className="big-letters-container" style={{marginTop: '35vmin'}}>
                    <p className='super-big-letters-about' style={{color: 'rgba(255, 164, 0, 0.5)'}}> CONTACT</p>
                    <p className="big-letters" style={{zIndex: '1'}}>
                        CONTACT
                    </p>
                </div>
                <div>
                    <div className='text-box-1'>
                        <h3 style={{textAlign: 'end', zIndex: '1'}} className="about-header-title" id="about">
                            Connect with me
                        </h3>
                        <div style={{display: 'flex', zIndex: '1', justifyContent: 'flex-end'}}>
                            <div className="line-right"></div>
                        </div>
                    </div>
                    <ContactForm />
                </div>
                <div>
                    <div className='text-box-1'>
                        <h3 style={{textAlign: 'end', zIndex: '1'}} className="about-header-title" id="about">
                            Shoot me a love letter
                        </h3>
                        <div style={{display: 'flex', zIndex: '1', justifyContent: 'flex-end'}}>
                            <div className="line-right"></div>
                        </div>
                    </div>
                    <Letter />
                </div>
            </div>
        </div>
    )
}

export default Contact;