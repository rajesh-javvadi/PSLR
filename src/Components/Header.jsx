import React, { Component } from 'react';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.handleHover = this.handleHover.bind(this);
    this.state = {
      isHovered: false
    };
  }

  handleHover() {
    this.setState(prevState => ({
      isHovered: !prevState.isHovered
    }));
  }

  render() {
    return (
      <header className="header-container">
        <div 
          className={`header-content ${this.state.isHovered ? 'hovered' : ''}`}
          onMouseEnter={this.handleHover}
          onMouseLeave={this.handleHover}
        >
          <h1 className="logo-text">PSLR</h1>
          <p className="logo-subtext">
            {this.state.isHovered 
              ? "Problem Solution Learning Repository" 
              : "Your Knowledge Preservation Hub"}
          </p>
          <div className="logo-divider"></div>
          <p className="logo-motto">Learn • Solve • Remember</p>
        </div>
      </header>
    );
  }
}