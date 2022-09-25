import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './css/carousel.css';
import CarouselItem from './carouselItem';
import uniqid from 'uniqid';
import memoryCard from './imgs/memoryCard.gif';
import sketch from './imgs/sketch.gif';
import shoppingCart from './imgs/shoppingCart.gif';
import restaurantPage from './imgs/restaurantPage.gif';
import resumeBuilder from './imgs/resumeBuilder.gif';
import weatherApp from './imgs/weatherApp.gif';
import battleShip from './imgs/battleShip.gif';

function Carousels(props) {
    useEffect(() => {
    }, [])
    
    return(
        <Carousel showThumbs={false} dynamicHeight={false} showIndicators={false} autoPlay={true} interval={8000} infiniteLoop={true} preventMovementUntilSwipeScrollTolerance={true}>
            {props.projectsProps.map((item) => {
                return <CarouselItem key={uniqid()} img={item.img} title={item.title} live={item.live} code={item.code}/>
            })}
        </Carousel>
    )
}

export default Carousels;