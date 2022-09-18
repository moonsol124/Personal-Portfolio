import React, { Component } from 'react';
import Sun from './443.jpg';
import Moon from './v964-25.jpg';

class Nav extends Component {
    constructor() {
        super();
        this.state = ({
            darkmode: false,
            logo: Sun,
            deg: 0,
            mouseover: false,
        })
        this.handlesDarkMode = this.handlesDarkMode.bind(this);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log (this.state.darkmode);
        if (this.state.darkmode === true) {
            setTimeout(()=>{
                this.setState({
                    logo: Moon,
                })
            }, 2000)
        }
        else {
            setTimeout(()=>{
                this.setState({
                    logo: Sun,
                })
            }, 2000)
        }
    }

    handlesDarkMode(e) {
        e.target.className = 'logo rising';
        if (this.state.darkmode === false) {
            this.setState({
                darkmode: true,
            })
        }
        else {
            this.setState({
                darkmode: false,
            })        
        }

        setTimeout(()=>{
            e.target.className = 'logo falling';
        }, 2000)
    }

    render() {
        return (
            <div className='nav'>
            <img className="logo" src={this.state.logo} alt="logo" onClick={this.handlesDarkMode}></img>
            <ul className="menu">
                <li> menu 1</li>
                <li> menu 2</li>
                <li> menu 3</li>
            </ul>
        </div>
        )
    }
} 

export default Nav