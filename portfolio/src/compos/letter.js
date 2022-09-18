function Letter() {
    return(
        <div>
            <form className='letter'>
                <p>
                    Hi, my name is 
                </p>
                <label htmlFor="letter-name"></label>
                <input type="text" id="letter-name" name="letter-name" placeholder="Name" className="letter-input"></input>
                <p>
                    and I just want to say that 
                </p>
                <select>
                    <option value="1">I've been in love with you</option>
                    <option value="2">I've wanted to kiss you</option>
                    <option value="3">I've wanted to hire you</option>
                    <option value="4">I've wanted to hug you</option>
                    <option value="5">I've been thinking about you</option>
                    <option value="6">I've wanted to be your boyfriend</option>
                    <option value="7">I've wanted to invite you for some tacos</option>
                </select>
                <p>
                    since when I saw you the first time
                    at our local coffee shop on Siriranka street!
                </p>
                <p> So just call me baby!</p>
                <div>
                    <button> submit </button>
                </div>
            </form>  
        </div>
    )
}

export default Letter;