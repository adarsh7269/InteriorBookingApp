import React from "react";
import image from "../images/awning.jpg";
import "../styles/hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Awnings , <br />
          Elevate Your Outdoor Space with Stylish Awnings: Where Function Meets Fashion.
        </h1>
        <p>
        An awning is a covering that attaches to the side of a home and extends outward to protect anything underneath it from sun and harsh weather. Awnings are either fixed or retractable and come in a variety of shapes and materials. You'll find them hanging over patios, windows, doors, and balconies on residential (and commercial) properties around the country.
        </p>
      </div>
      <div className="hero-img">
        <img
          src={image}
          alt="hero"
        />
      </div>
    </section>
  );
};

export default Hero;
