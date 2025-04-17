import React, { useEffect, useState } from "react";
import { NavLink } from "react-router";

const Banner = () => {
  const slides = [
    {
      image: "https://i.ibb.co.com/PGWqTZ4L/template11.png",
      title: "Explore the Beauty",
      description:
        "Discover stunning landscapes and vibrant colors in every frame.",
      buttonText: "Discover More",
      background:
        "https://i.ibb.co.com/Cp0Z51k8/Chat-GPT-Image-Apr-10-2025-04-01-48-PM.png",
    },
    {
      image: "https://i.ibb.co.com/Rky7z0r7/template2.png",
      title: "A New Perspective",
      description:
        "Experience breathtaking visuals from unique angles and views.",
      buttonText: "View More",
      background:
        "https://i.ibb.co.com/Cp0Z51k8/Chat-GPT-Image-Apr-10-2025-04-01-48-PM.png",
    },
    {
      image: "https://i.ibb.co.com/ymZD3KKc/template3.png",
      title: "Unforgettable Moments",
      description:
        "Capture memories that will last a lifetime with our visuals.",
      buttonText: "Get Started",
      background:
        "https://i.ibb.co.com/8L2s2krX/Chat-GPT-Image-Mar-31-2025-11-3.png",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div
      className="relative w-full h-[900px] md:h-[650px] xl:h-[700px] bg-cover bg-center text-r-text flex flex-col md:flex-row items-center pt-[70px] pb-[80px]"
      style={{
        backgroundImage: `url(${slides[activeIndex].background})`,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-60 z-0"></div>

      <div className="relative container  h-[900px] md:h-[650px]  xl:h-[700px]  bg-[url('')] bg-cover bg-center  text-r-text flex flex-col md:flex-row items-center pt-[70px] pb-[80px] ">
        {/* Left Content (Changes Dynamically) */}
        <div
          key={activeIndex} // Forces re-render to trigger animation
          className=" text-left   max-w-lg  py-4   pl-5 lg:py-0 lg:w-1/2"
        >
          {/* Title */}
          <h1 className="text-4xl text-r-card lg:text-6xl font-bold mb-4 slide-up slide-up-h1">
            {slides[activeIndex].title}
          </h1>

          {/* Description */}
          <p className="text-lg text-r-hover mb-6 slide-up slide-up-p">
            {slides[activeIndex].description}
          </p>

          {/* Button */}
          <div className="space-x-5">
            <NavLink to="/add-information">
            <button className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-mono font-bold hover:text-black  text-r-background   bg-r-primary rounded-full group slide-up slide-up-btn">
              <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-r-background  rounded-full group-hover:w-56 group-hover:h-56"></span>
              <span className="absolute inset-0 w-full h-full  rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-r-accent "></span>
              <span className="relative">Generate</span>
            </button>
            </NavLink>
            <NavLink to="/templates">
            <button className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-mono font-bold  border border-r-card hover:border-transparent text-r-card  rounded-full group slide-up slide-up-btn">
              <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-r-primary rounded-full group-hover:w-56 group-hover:h-56"></span>
              <span className="absolute inset-0 w-full h-full  rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-r-primary "></span>
              <span className="relative">Templates</span>
            </button>
            </NavLink>
          </div>
        </div>

        {/* Slider img Section */}
        <div className="relative w-full mt-8 xl:pt-16  lg:w-2/3 h-full flex justify-center  items-center">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute   mr-[-0px] lg:mr-[-80px]  w-full h-full flex justify-center items-center transition-opacity duration-700 ease-in-out ${
                index === activeIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={slide.image}
                alt={`Slide ${index}`}
                className="w-[80%] h-[90%] mt-20 sm:mt-0 mr-[-0px] lg:mr-[-80px] sm:w-full sm:h-[70%] lg:w-[80%] lg:h-[80%] xl:w-[80%]  xl:h-[80%] object-contain lg:object-contain"
              />
            </div>
          ))}
        </div>

        {/* Arrows */}
        <div className="absolute top-6/12  sm:top-9/12  left-5  gap-5 flex justify-between z-10">
          <button
            className="bg-r-background p-3 rounded-full text-r-primary hover:shadow-r-primary shadow transition"
            onClick={() =>
              setActiveIndex(
                (prev) => (prev - 1 + slides.length) % slides.length
              )
            }
          >
            &#10094;
          </button>
          <button
            className="bg-r-background p-3 rounded-full text-r-primary hover:shadow-r-primary shadow transition"
            onClick={() => setActiveIndex((prev) => (prev + 1) % slides.length)}
          >
            &#10095;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
