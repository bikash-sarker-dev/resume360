import React from "react";
import { useEffect, useState } from "react";



const Banner = () => {
  const slides = [
    {
      image: "./assets/resume1.png",
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
    <div className="relative w-10/12 mx-auto h-[900px] md:h-[650px] bg-r-background text-r-text flex flex-col md:flex-row items-center pt-[80px] pb-[80px] ">
  {/* Left Content (Changes Dynamically) */}
  <div
    key={activeIndex} // Forces re-render to trigger animation
    className=" text-left ml-5  max-w-lg px-6 py-4 lg:px-0 lg:py-0 lg:w-1/2"
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
    <button className="shadow shadow-r-primary px-6 py-3 rounded-4xl text-lg font-semibold duration-500 text-r-accent hover:text-r-text hover:bg-r-primary transition slide-up slide-up-btn">
      {slides[activeIndex].buttonText}
    </button>
    <button className="shadow shadow-r-primary px-6 py-3 rounded-4xl text-lg font-semibold duration-500 text-white hover:text-r-text hover:bg-r-background bg-r-primary transition slide-up slide-up-btn">
      more
    </button>
    </div>
  </div>

  {/* Slider img Section */}
  <div className="relative w-full  lg:w-2/3 h-full flex justify-center  items-center">
    {slides.map((slide, index) => (
      <div
        key={index}
        className={`absolute  mr-[-0px] sm:mr-[-100px]  w-full h-full flex justify-center items-center transition-opacity duration-700 ease-in-out ${
          index === activeIndex ? "opacity-100" : "opacity-0"
        }`}
      >
        <img
          src={slide.image}
          alt={`Slide ${index}`}
          className="w-[80%] h-[80%] mr-[-0px] sm:mr-[-100px] sm:w-full sm:h-[70%] lg:w-[80%] lg:h-[80%] xl:w-[80%] xl:h-[80%] object-contain lg:object-contain"
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
