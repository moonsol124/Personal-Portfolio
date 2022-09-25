// import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './css/carousel.css';
import { Link } from "react-router-dom";

function CarouselItem(props) {

    return(
        <div className='carousel-container'>
            <img className="carousel-img" src={props.img} alt="img" />
            <div className="carousel-title">
                <p className="legend"> {props.title} </p>
            </div>
            <div className="carousel-btn-groups">
                <a href={props.code} target="_blank" rel="noreferrer"><button className='button'>View Code</button></a>
                <a href={props.live} target="_blank" rel="noreferrer"><button className='button'>View App</button></a>
            </div>
        </div>
    )
}

export default CarouselItem;