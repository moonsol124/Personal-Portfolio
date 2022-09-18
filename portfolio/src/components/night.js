import birds from "./images/giphy-unscreen.gif";
import './night.css';
import grass from "./images/images-night/grass.gif";
import tree from './images/images-night/beachtree.gif';
import leaves from './images/images-night/leaves.gif';
import leaves2 from './images/images-night/leaves2.gif';
import house from './images/images-night/house.gif';
import paper from './images/paper.gif';
import stars from './images/images-night/stars.gif';

function Night() {

    const randomBranch = () => {
        return Math.floor(Math.random() * (50-20)+20);
    }

    const randomStarsTop = () => {
        return Math.floor(Math.random() * (70-10));
    }

    const randomStarsLeft = () => {
        return Math.floor(Math.random() * 180);
    }

    const rotateStars = () => {
        return Math.floor(Math.random() * 360);
    }

    const stars = []
    for (let i = 0; i < 40; i++) {
        stars.push(<img className="st" alt="stars" src='https://media4.giphy.com/media/iFPLtlXfskcbU6tigb/giphy.gif?cid=ecf05e47pk6kk1bx9xrvrcke593850jzbsdem4721mb6kep9&rid=giphy.gif&ct=s' style={{top: `${randomStarsTop()}vmin`, left: `${randomStarsLeft()}vmin`, transform: `rotate(${rotateStars()}deg)`}}/>)
    }

    return (
        <div className='container-night'>
            <div className="stars">
                <div className="star" style={{top: `${randomStarsTop()}vmin`, left: `${randomStarsLeft()}vmin`}}>
                    <div className="star-line"></div>
                    <div className="star-main"></div>
                </div>
                    {stars.map((star)=>{
                        return star;
                    })}
            </div>
            {/* <img className="house" alt="house" src={house}/> */}
            <div className="island"></div>
            <img src={birds} alt="birds" className='birds'/>
            <div className='beach-night'>
                <div className="sea-night">
                    <div className="seafoam-night"></div>
                    <div className="wet-sand-night"></div>
                    <div className="sand-night"></div>
                    <div className="sand-front-night"></div>
                </div>
            </div>
            <div className="grassField">
                <img src={grass} alt="grass" className="grass"/>
                <img src={grass} alt="grass" className="grass-1"/>
                <img src={grass} alt="grass" className="grass-2"/>
                <img src={tree} alt="tree" className="tree"/>
                <img src={grass} alt="grass" className="grass-3"/>
                <img alt="paper" src={paper} className="paper"/>
            </div>
            <div className="leaves-top">
                <img alt="leaves" src={leaves2} className="leaves2"/>
                <img alt="leaves" src={leaves2} className="leaves2-1"/>
            </div>

            <div className="leaves-right">
                <img alt="leaves" src={leaves} className="leaves"/>
                <img alt="leaves" src={leaves} className="leaves-1"/>
                <img alt="leaves" src={leaves} className="leaves-2"/>
            </div>
        </div>
    )
}

export default Night;