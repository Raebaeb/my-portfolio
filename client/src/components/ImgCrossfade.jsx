import React, { Component } from 'react';

class ImgCrossfade extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currImage: 0,
      arrLen: props.imgList.length,
    }
  };
  componentDidMount() {
    // give first array elem the show class so it renders on mount
    const firstSlide = document.querySelector('#slideimg0');
    firstSlide.classList.add('show')
    this.intervalID = setInterval(() => this.nextImage(), this.props.timer)
  }

  componentWillUnmount() {
    clearInterval(this.intervalID)
  }

  nextImage() {
    const { currImage, arrLen } = this.state;
    let elem;
    // remove show class from current image
    elem = document.querySelector("#slideimg" + currImage);
    console.log(elem.classList)
    elem.classList.remove('show');
    // compute next image
    this.setState({currImage: currImage + 1});
    if (currImage >= arrLen - 1) {
        this.setState({currImage: 0});
    }
    // add show class to next image
    elem = document.querySelector("#slideimg" + currImage);
    elem.classList.add('show');
    console.log('current image #', currImage);
  }

  render() {
    return (
      <div className='img-container'>
        {this.props.imgList?.map((img, i) => (
          <img id={`slideimg${i}` } key={i} src={img.src} alt={img.alt} className='slide'/>
        ))}
      </div>
    );
  }

}
export default ImgCrossfade;