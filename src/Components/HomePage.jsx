import React, { Component } from 'react'

import { Parallax, withController } from 'react-scroll-parallax';

 class HomePage extends Component {
    constructor(props) {
      super(props)
        this.textRef = React.createRef();
        this.parallax = null;
    }
    componentDidMount() {
        this.parallax = this.props.parallaxController.createElement({
            el:this.textRef.current,
            props: {
                translateY : [0,-200],
                scale: [1,0.5],
                opacity: [1,0],
                easing: 'easeOutQuad',
                startScroll: 0,
                endScroll : window.innerHeight,
            }
        });
    }
    componentWillUnmount() {
        if(this.parallax) {
            this.props.parallaxController.remove(this.parallax);
        }
    }

  render() {
    return (
      <div className='homepage-container' >
        <h1 className='main-text' ref={this.textRef}>
            PSLR
        </h1>
        <div style={{height: '100vh', background: '#111'}}>

        </div>
      </div>
    )
  }
}

export default withController(HomePage);