// import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './css/carousel.css';

function CarouselItem(props) {

    return(
        <div className='carousel-container'>
            <img className="carousel-img" src={props.img} alt="img" />
            <div className="carousel-title">
                <p className="legend"> title </p>
            </div>
            <div className="carousel-btn-groups">
                <button className='button'> View Code </button>
                <button className='button'> View App </button>
            </div>
        </div>
    )
}

export default CarouselItem;