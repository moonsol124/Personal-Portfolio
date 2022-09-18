function ContactForm() {
    return (
        <form className="contactForm">
            <div className="input-box">
                <label htmlFor="firstName"></label>
                <input type="text" id="firstName" placeholder="First Name" name="name"></input>
            </div>
            <div className="input-box">
                <label htmlFor="lastName"></label>
                <input type="text" id="lastName" placeholder="Last Name" name="name"></input>
            </div>
            <div className="input-box">
                <label htmlFor="email"></label>
                <input type="email" id="email" placeholder="email" name="name"></input>
            </div>
            <div className="input-box">
                <label htmlFor="text-area"></label>
                <textarea id="text-area"></textarea>
            </div>
            <div>
                <button> SUBMIT </button>
            </div>
        </form>
    )
}

export default ContactForm;