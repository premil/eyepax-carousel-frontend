import React, { useState, useEffect } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import '../styles/slideshow.css'
import SlideShow from "./Slideshow";

const Carousel = ({ slideCount=4, infinte=true }) => {
  const [currentslide, setCurrent] = useState(0);
  const [nextslide, setSlides] = useState([]);
  const [length, setLength] = useState(0)
  const [nextslideDisabled, setNextSlideDisabled] = useState(false)
  const [prevslideDisabled, setPrevSlideDisabled] = useState(false)

  useEffect(()=> {
    fetch(`http://localhost:3600/carousels?count=${slideCount}`)
    .then((response) => response.json())
    .then((data) => {
       //console.log(data.data);
       setSlides(data.data);
       setLength(data.data.length)
    })
    .catch((error) => {
       console.log(error.message);
    });
  }, [slideCount])

  const nextSlide = () => {
    if(infinte){
      setCurrent(currentslide === length - 1 ? 0 : currentslide + 1);
    } else{
      if(currentslide === length - 1){
        setNextSlideDisabled(true)
      } else {
        setCurrent(currentslide + 1)
      }
    }
  };

  const prevSlide = () => {
    if(infinte){
      setCurrent(currentslide === 0 ? length - 1 : currentslide - 1);
    } else {
      if(currentslide ===  0){
        setPrevSlideDisabled(true)
      } else {
        setCurrent(currentslide - 1)
      }
    }
  };

  return (
    <div className="wrapper">
      <FaChevronLeft className="left-arrow" onClick={prevSlide} style={{display: nextslide.length > 1 ? "inline": "none"}}/>
      <FaChevronRight className="right-arrow" onClick={nextSlide} style={{display: nextslide.length > 1  ? "inline": "none"}}/>
      {nextslide.map((slide, index) => {
        return (
          <div key={index}>
            {index === currentslide && <SlideShow slide={slide} alt="" />}
          </div>
        );
      })}
    </div>
  );
};

export default Carousel;