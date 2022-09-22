function ContactForm() {
    return (
        <form className="contactForm">
            <div className="input-box">
                <label htmlFor="firstName"></label>
                <input className="contact-input" type="text" id="firstName" placeholder="First Name" name="name"></input>
            </div>
            <div className="input-box">
                <label htmlFor="lastName"></label>
                <input className="contact-input" type="text" id="lastName" placeholder="Last Name" name="name"></input>
            </div>
            <div className="input-box">
                <label htmlFor="email"></label>
                <input className="contact-input" type="email" id="email" placeholder="email" name="name"></input>
            </div>
            <div className="input-box">
                <label htmlFor="title"></label>
                <input className="contact-input" type="text" id="title" placeholder="title" name="title"></input>
            </div>
            <div className="input-box">
                <label htmlFor="text-area"></label>
                <textarea className="contact-input" rows="5" id="text-area" placeholder="Hi good morning... "></textarea>
            </div>
            <div className="contact-form-btn-group">
                <button className="button"> SUBMIT </button>
            </div>
        </form>
    )
}

export default ContactForm;