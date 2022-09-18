import birds from "./images/giphy-unscreen.gif";
import './day.css';
import grass from "./images/grass.gif";
import tree from './images/beachtree.gif';
import leaves from './images/leaves.gif';
import leaves2 from './images/leaves2.gif';
import house from './images/house.gif';
import paper from './images/paper.gif';

function Day() {
    
    const randomBranch = () => {
        return Math.floor(Math.random() * (50-20)+20);
    }

    return (
        <div className='container'>
            {/* <img className="house" alt="house" src={house}/> */}
            <div className="island"></div>
            <img src={birds} alt="birds" className='birds'/>
            <div className='beach'>
                <div className="sea">
                    <div className="seafoam"></div>
                    <div className="wet-sand"></div>
                    <div className="sand"></div>
                    <div className="sand-front"></div>
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

export default Day;