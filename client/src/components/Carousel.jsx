import React, { useState } from "react";
import {BsArrowLeftCircleFill,BsArrowRightCircleFill} from "react-icons/bs";
import "../styles/carousel.css";
const Carousel = ({images})=> {
  const [slide,setslide]= useState(0);
  const nextSlide = ()=>{
    setslide(slide === images.length-1 ? 0:slide+1);
  }
  const prevSlide = ()=>{
    setslide(slide === 0 ?images.length-1:slide-1);
  }
  return <div className="carousel">
    <BsArrowLeftCircleFill className="arrow arrow-left" onClick={prevSlide}/>
    {images.map((item,idx) => {
        return <img src ={item} className={slide === idx ? "slides":"slides slide-hidden"}/>
    })}
    <BsArrowRightCircleFill className="arrow arrow-right" onClick={nextSlide}/>
    <span className="indicators">
      {images.map((_, idx)=>{
          return <button key={idx}
          onClick={()=>setslide(idx)} className={slide === idx ? "indicator":"indicator indicator-inactive "}></button>

      })}
    </span>
  </div>

};

export default Carousel;