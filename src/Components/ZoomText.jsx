
import React, { Component } from 'react';
import { Parallax } from 'react-scroll-parallax';


export default class ZoomText extends Component {
    render() {
      return (
        <div>
          <Parallax speed={-20} y={[-50, 50]}>
            <div className="zoom-letter">P</div>
          </Parallax>
          <Parallax speed={-20} y={[-50, 50]}>
            <div className="zoom-letter">S</div>
          </Parallax>
          <Parallax speed={-20} y={[-50, 50]}>
            <div className="zoom-letter">L</div>
          </Parallax>
          <Parallax speed={-20} y={[-50, 50]}>
            <div className="zoom-letter">R</div>
          </Parallax>
        </div>
      );
    }
  }