import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'
import ReactSixteenAdapter from 'enzyme-adapter-react-16';


export default class ChromeBoisDomain extends Component {
  
  handleMouseMove = (event) => {
    let x = event.clientX;
    let y = event.clientY;
    drawChromeBoiAtCoords(x, y)
  }

  interpretKey = (event) => {
    if (event.key === 'a') {
      resize('+');
    }
    if (event.key === 's') {
      resize('-');
    }
  }
  
  render() {
    return (
      <canvas 
        onMouseMove={this.handleMouseMove}
        onClick={toggleCycling}
        onKeyPress={this.interpretKey}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
