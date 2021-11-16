import React, { Component } from 'react';
import selfie1 from "../assets/selfie1.jpg";
import selfie2 from "../assets/selfie2.jpg";
import selfie3 from "../assets/selfie3.jpg";

class carousel extends Component {


  render() {
    return (
      <article id="img-container">
        <img className='selfie-1 selfie' src={selfie1} alt="Selfie with friends" />
        <img className='selfie-2 selfie' src={selfie3} alt="Just a selfie" />
        <img className='selfie-3 selfie' src={selfie2} alt="Selfie with my dog Bisco" />
      </article>
    );
  }
}

export default carousel;
