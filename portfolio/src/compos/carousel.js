// import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './css/carousel.css';

function carousel() {

    return(
        <Carousel showThumbs={false} autoPlay={true} dynamicHeight={true} infiniteLoop={true} preventMovementUntilSwipeScrollTolerance={true}>
            <div className='carousel-container'>
                <img className="carousel-img" src="https://images.pexels.com/photos/2245436/pexels-photo-2245436.png?auto=compress&cs=tinysrgb&w=400" alt="1" />
                <div className="carousel-title">
                    <p className="legend"> title </p>
                </div>
                <div className="carousel-btn-groups">
                    <button> View Code </button>
                    <button> View App </button>
                </div>
            </div>
            <div className='carousel-container'>
                <img className="carousel-img" src="https://images.pexels.com/photos/3889855/pexels-photo-3889855.jpeg?auto=compress&cs=tinysrgb&w=400" alt="2" />
                <div className="carousel-title">
                    <p className="legend"> title </p>
                </div>
                <div className="carousel-btn-groups">
                    <button> View Code </button>
                    <button> View App </button>
                </div>
            </div>
            <div className='carousel-container'>
                <img className="carousel-img" src="https://images.pexels.com/photos/4553618/pexels-photo-4553618.jpeg?auto=compress&cs=tinysrgb&w=400" alt='3' />
                <div className="carousel-title">
                    <p className="legend"> title </p>
                </div>
                <div className="carousel-btn-groups">
                    <button> View Code </button>
                    <button> View App </button>
                </div>   
            </div>
        </Carousel>
    )
}

export default carousel;