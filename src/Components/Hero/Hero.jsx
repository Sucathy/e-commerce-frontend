import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import arrow_icon from "../Assets/arrow.png";
import hero1_image from "../Assets/hero1_image.webp";
import "./Hero.css";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const heroSections = [
    {
      title: "NEW ARRIVALS ONLY",
      description: ["new", "collections", "for everyone"],
      link: "/NewCollections",
      image: hero1_image,
      background: "linear-gradient(180deg, #262227, #36203122 60%)",
    },
    {
      title: "FRESH STYLES",
      description: ["new", "arrivals", "just for you"],
      link: "/FreshStyles",
      image: hero1_image,
      background: "linear-gradient(180deg, #8a7c3e, #36203122 60%)",
    },
    {
      title: "EXCLUSIVE OFFERS",
      description: ["exclusive", "deals", "just for you"],
      link: "/ExclusiveOffers",
      image: hero1_image,
      background: "linear-gradient(180deg, #9a4419, #36203122 60%)",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === heroSections.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [heroSections.length]);

  return (
    <div className="hero-container">
      <div
        className="hero-wrapper"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {heroSections.map((section, index) => (
          <div
            className="hero"
            key={index}
            style={{ background: section.background }}
          >
            <div className="hero-left">
              <h2>{section.title}</h2>
              <div>
                <div className="hero-hand-icon">
                  <p>{section.description[0]}</p>
                </div>
                <p>{section.description[1]}</p>
                <p>{section.description[2]}</p>
              </div>
              <Link to={section.link}>
                <div className="hero-latest-btn">
                  <div>Latest Collection</div>
                  <img src={arrow_icon} alt="Arrow Icon" />
                </div>
              </Link>
            </div>
            <div className="hero-right">
              <img src={section.image} alt="hero" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
