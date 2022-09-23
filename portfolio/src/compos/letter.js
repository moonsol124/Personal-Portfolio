function Letter() {
    return(
        <div className="letter-form-container">
            <form className='letter-container'>
                <div className="letter-text">
                    Dear Sol,
                </div>
                <div className="letter-text">
                    When I saw you for the first time,
                    <label htmlFor="confession-1"></label>
                    <select className="letter-input" id='confession-1' >
                        <option value="0">Confess your love to me...</option>
                        <option value="1">I instantly fell in love with you.</option>
                        <option value="2">I wanted to kiss you.</option>
                        <option value="3">I wanted to hire you.</option>
                        <option value="5">I want to be your boyfriend.</option>
                    </select>
                </div>
                <div className="letter-text">
                    It's a lonely night with beautiful stars shining in the sky but
                    <label htmlFor="confession-2"></label>
                    <select className="letter-input" id='confession-2'>
                        <option value="0">Confess your love to me...</option>
                        <option value="1">without your love that means nothing to me</option>
                        <option value="2">Even the brightest star wouldn't be brighter than your smile</option>
                    </select>
                </div>
                <div className="letter-text">
                    Just like the sun that cries
                    <label htmlFor="confession-3"></label>
                    <select className="letter-input" id='confession-3'>
                        <option value="0">Confess your love to me...</option>
                        <option value="1">When the moon goes away</option>
                        <option value="1">When he feels alone in the middle of a galaxy</option>
                    </select>
                </div>
                <div className="letter-text">
                    And just like the little birds that sings us a sad song,
                    <label htmlFor="confession-4"></label>
                    <select className="letter-input" id='confession-4'>
                        <option value="0">Confess your love to me...</option>
                        <option value="1">My heart breaks with every thought of you</option>
                        <option value="1">My life is empty without you</option>
                    </select>
                </div>
                <div className="letter-text">
                    So if you give me just one chance to show you my love
                    <label htmlFor="confession-5"></label>
                    <select className="letter-input" id='confession-5'>
                        <option value="0">Confess your love to me...</option>
                        <option value="1">I'd cross the universe just for you</option>
                        <option value="1">I'll always love you</option>
                    </select>
                </div>
                <div className="letter-text">
                </div>
                <div className="letter-text">
                    Yours, 
                </div>
                <div>
                    <label htmlFor="letter-name"></label>
                    <input type="text" id="letter-name" name="letter-name" placeholder="Name" className="letter-input"></input>
                </div>
                <div className="letter-btn-group">
                    <button className="button"> Send </button>
                </div>
            </form>  
        </div>
    )
}

export default Letter;