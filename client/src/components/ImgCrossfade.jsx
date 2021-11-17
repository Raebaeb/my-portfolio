import React, { Component } from 'react';


class ImgCrossfade extends Component {
  constructor(props) {
    super(props)
    this.state = {
      topSrc: props.imgList[0].src,
      bottomOpacity: 0,
      bottomSrc: props.imgList[-1].src
    }
  };

  getDerivedStateFromProps(newProps) {
    const oldSrc = this.state.topSrc;
    const newSrc = newProps.src;
    if (newSrc !== oldSrc) {
      this.setSTate
    }
  }

  render() {
    const { duration, timingFunction, delay, alt } = this.props;
    const { topSrc, bottomOpacity, bottomSrc } = this.state;
    return (
      <div className='img-container'>
        
      </div>
    );
  }
}

export default ImgCrossfade;