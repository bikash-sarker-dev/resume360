
import React from "react";
import pic1 from "../../../../src/assets/images/about/connecting/pic1.jpg"
import pic2 from "../../../../src/assets/images/about/connecting/pic2.jpg"
import pic3 from "../../../../src/assets/images/about/connecting/pic3.jpg"
import pic4 from "../../../../src/assets/images/about/connecting/pic5.jpg"
import { motion } from "framer-motion";

const ConnectingPeople = () => {
  return (
    <div className="max-w-7xl mx-auto pt-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4  md:p-12 lg:p-16">
    
    <div className="md:col-span-6 lg:col-span-8 text-center md:text-left ">
  


<motion.h1
            className="text-3xl md:text-5xl font-bold sm:w-2/3"
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, ease: "easeOut" }} 
          >
            We're changing <br className="hidden md:block" /> the way people
            connect
          </motion.h1>
      <p className="py-4 md:py-6 text-gray-500 text-sm md:text-base px-1  sm:w-3/4">
      In today’s fast-paced digital world, your resume is your first impression. Our online resume builder is revolutionizing the way job seekers and employers connect by providing an easy-to-use platform that creates professional, customizable resumes in minutes. Whether you're a recent graduate or an experienced professional, our tool helps you showcase your skills, experience,
       and personality in a way that sets you apart. With powerful features, a user-friendly interface, and expert guidance,
        we’re making the job application process smoother, faster, and more effective than ever before.
      </p>
    </div>

 
    <div className="md:col-span-6 lg:col-span-4 flex justify-center">
      <div className="flex gap-8  ">
        <div className="flex flex-col gap-4 mt-8 md:mt-14">
          <img
            src={pic1}
            alt="Person 1"
            className="w-[120px] h-[160px] md:w-[150px] md:h-[200px] rounded-lg shadow-lg object-cover"
          />
          <img
            src={pic3}
            alt="Person 2"
            className="w-[120px] h-[160px] md:w-[150px] md:h-[200px] rounded-lg shadow-lg object-cover"
          />
        </div>
        <div className="flex flex-col gap-4 mb-8 md:mb-14">
          <img
            src={pic4}
            alt="Person 3"
            className="w-[120px] h-[160px] md:w-[150px] md:h-[200px] rounded-lg shadow-lg object-cover"
          />
          <img
            src={pic2}
            alt="Person 4"
            className="w-[120px] h-[160px] md:w-[150px] md:h-[200px] rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>
    </div>
  </div>
    </div>
  );
};

export default ConnectingPeople;
