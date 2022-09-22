function Letter() {
    return(
        <div>
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
                    Tonight is a beautiful night with stars shining brighter than ever, but
                    <label htmlFor="confession-2"></label>
                    <select className="letter-input" id='confession-2'>
                        <option value="0">Confess your love to me...</option>
                        <option value="1">without your love it means nothing to me</option>
                        <option value="2">without you it's just a lonely night</option>
                    </select>
                </div>
                <div className="letter-text">
                    Just like the sun that cries
                    <label htmlFor="confession-3"></label>
                    <select className="letter-input" id='confession-3'>
                        <option value="0">Confess your love to me...</option>
                        <option value="1">When the moon is gone</option>
                    </select>
                </div>
                <div className="letter-text">
                    And just like a little birds that sings us a sad song,
                    <label htmlFor="confession-4"></label>
                    <select className="letter-input" id='confession-4'>
                        <option value="0">Confess your love to me...</option>
                        <option value="1">My heart breaks every moment that I think of you</option>
                    </select>
                </div>
                <div className="letter-text">
                    So please when you read this letter,
                    <label htmlFor="confession-5"></label>
                    <select className="letter-input" id='confession-5'>
                        <option value="0">Confess your love to me...</option>
                        <option value="1">Know that I've been waiting for someone like you my whole life</option>
                    </select>
                </div>
                <div className="letter-text">
                    I love you.
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