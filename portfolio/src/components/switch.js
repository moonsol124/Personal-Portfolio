import React, { useState, useEffect, Component } from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Day from './day';
import Night from './night';
import './index.css';

class Switch extends Component {
  constructor (props) {
    super(props);
    this.state = {
      darkMode: false,
    }

    this.printCoordinates = this.printCoordinates.bind(this);
  }

  componentDidMount() {
    console.log ("mounted!");
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    //  gives an error
  }

  printCoordinates(e) {
    const { width, height } = e.target.getBoundingClientRect();
    const { offsetX, offsetY } = e.nativeEvent

    const x = Math.round((offsetX / width) * 100);
    const y = Math.round((offsetY / height) * 100);
    
    if ((x >= 45 && x <= 55) && (
      y >= 4 && y <= 16
    )) {
      if (this.state.darkMode) {
        this.setState({
          darkMode: false,
        })
      }
      else {
        this.setState({
          darkMode: true,
        })
      }
    }
  };

  render() {
    return (
      <div className='contents' onClick={this.printCoordinates}>
        {(!this.state.darkMode)?<Day />:<Night />}
      </div>
    )
  }
}

export default Switch;
