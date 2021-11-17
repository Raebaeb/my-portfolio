import { useEffect, useState } from "react";

const Carousel = (props) => {

  const imgType = props.imgType;
  const imgList = props.imgList;

  const [activeImg, setActiveImg] = useState(null);

  const setCurrentImage = () => {
    const selectImg1 = document.querySelector(`.${imgType}`);
    selectImg1.classList.add(`active-${imgType}`);
    setActiveImg(document.querySelector(`.active-${imgType}`));
    setInterval(function() {  
      activeImg.classList.remove(`active-${imgType}`);
      if (activeImg.nextElementSibling) {
        console.log('setting to elem sibling')
        setActiveImg(activeImg.nextElementSibling);
      } else {
        console.log('finding next elem')
        setActiveImg(document.querySelector(`.${imgType}`));
      }
      activeImg.classList.add(`active-${imgType}`);
      console.log(activeImg)
    })
  };
  
  useEffect(() => {
    setCurrentImage();
    }, [])

  return (
    <div className={`${imgType}-img-container`}>
      {imgList.map((img, i) => (
        <img
          className={imgType}
          src={img.src}
          alt={img.altTxt}
          key={i}
        />
      ))}
    </div>
  );
};

export default Carousel;
