import React, { useEffect, useState } from "react";

const Banner = () => {
  const slides = [
    {
      image: "https://i.ibb.co.com/8gLWCDBH/Chat-GPT-Image-Mar-31-2025-11-34-58-PM-removebg-preview.png",
      title: "Explore the Beauty",
      description:
        "Discover stunning landscapes and vibrant colors in every frame.",
      buttonText: "Discover More",
    },
    {
      image: "./assets/resume2.png",
      title: "A New Perspective",
      description:
        "Experience breathtaking visuals from unique angles and views.",
      buttonText: "View More",
    },
    {
      image: "./assets/resume1.png",
      title: "Unforgettable Moments",
      description:
        "Capture memories that will last a lifetime with our visuals.",
      buttonText: "Get Started",
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
    <div className="relative container h-[900px] md:h-[650px]  bg-[url('https://i.ibb.co.com/8L2s2krX/Chat-GPT-Image-Mar-31-2025-11-3.png')] bg-cover bg-center  text-r-text flex flex-col md:flex-row items-center pt-[0px] pb-[80px] ">
      <div className="absolute inset-0 bg-black opacity-60 z-0"></div>
      {/* Left Content (Changes Dynamically) */}
      <div
        key={activeIndex} // Forces re-render to trigger animation
        className=" text-left   max-w-lg  py-4   pl-5 lg:py-0 lg:w-1/2"
      >
        {/* Title */}
        <h1 className="text-4xl text-r-primary lg:text-5xl font-bold mb-4 slide-up slide-up-h1">
          {slides[activeIndex].title}
        </h1>

        {/* Description */}
        <p className="text-lg text-r-accent mb-6 slide-up slide-up-p">
          {slides[activeIndex].description}
        </p>

        {/* Button */}
        <div className="space-x-5">
          <button
            className="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-mono font-bold  text-r-text bg-r-background rounded-lg group slide-up slide-up-btn"
          >
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-r-primary rounded-full group-hover:w-56 group-hover:h-56"></span>
            <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-r-primary "></span>
            <span className="relative">{slides[activeIndex].buttonText}</span>
          </button>
          <button
            className="relative    items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded shadow hover:bg-white group slide-up slide-up-btn"
          >
            <span className="w-72 h-48 rounded rotate-[-40deg] bg-r-primary absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
            <span className="relative w-full text-left text-r-text transition-colors duration-300 ease-in-out group-hover:text-white">
              More
            </span>
          </button>
        </div>
      </div>

      {/* Slider img Section */}
      <div className="relative w-full  lg:w-2/3 h-full flex justify-center  items-center">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute  mr-[-0px] lg:mr-[-100px]  w-full h-full flex justify-center items-center transition-opacity duration-700 ease-in-out ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={`Slide ${index}`}
              className="w-[80%] h-[80%] mr-[-0px] lg:mr-[-100px] sm:w-full sm:h-[70%] lg:w-[80%] lg:h-[80%] xl:w-[80%]  xl:h-[80%] object-contain lg:object-contain"
            />
          </div>
        ))}
      </div>

      {/* Arrows */}
      <div className="absolute top-5/12 sm:top-9/12 left-4   gap-5 flex justify-between z-10">
        <button
          className="bg-r-background p-3 rounded-full text-r-primary hover:shadow-r-primary shadow transition"
          onClick={() =>
            setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length)
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

      {/* Thumbnails */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide.image}
            className={`w-16 h-16 object-cover cursor-pointer rounded-lg border-2 ${
              index === activeIndex ? "border-white" : "border-gray-600"
            }`}
            onClick={() => setActiveIndex(index)}
            alt={`Thumbnail ${index}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;
