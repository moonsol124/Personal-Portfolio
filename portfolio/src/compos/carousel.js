import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './css/carousel.css';
import CarouselItem from './carouselItem';
import uniqid from 'uniqid';

function Carousels() {
    const [imgs, setImgs] = useState([{'img': 'https://images.pexels.com/photos/2245436/pexels-photo-2245436.png?auto=compress&cs=tinysrgb&w=400'},
{'img': 'https://images.pexels.com/photos/3889855/pexels-photo-3889855.jpeg?auto=compress&cs=tinysrgb&w=400'},
{'img': 'https://images.pexels.com/photos/4553618/pexels-photo-4553618.jpeg?auto=compress&cs=tinysrgb&w=400'}])
    
    return(
        <Carousel showThumbs={false} autoPlay={true} dynamicHeight={true} infiniteLoop={true} preventMovementUntilSwipeScrollTolerance={true}>
            {imgs.map((item) => {
                return <CarouselItem key={uniqid()} img={item.img}/>
            })}
        </Carousel>
    )
}

export default Carousels;