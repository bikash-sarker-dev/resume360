import React, { useState } from "react";
import resume1 from "../../../assets/images/resume/resume1.png";
import resume2 from "../../../assets/images/resume/resume2.png";
import resume3 from "../../../assets/images/resume/resume3.png";
import resume4 from "../../../assets/images/resume/resume4.png";
import resume5 from "../../../assets/images/resume/resume5.png";
import ButtonTemplate from "../pro-Templates/ButtonTemplate"
import  SectionHead from "../../../components/header/section-head/SectionHead"



// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { Autoplay, FreeMode, Pagination } from "swiper/modules";

const ProfessionalTemplate = () => {
  let [resume, setResume] = useState(true);
  let [cv, setCv] = useState(false);
  let [coverLetter, setCoverLetter] = useState(false);

  const handleResume = () => {
    setResume(true);
    setCv(false);
    setCoverLetter(false);
  };
  const handleCv = () => {
    setResume(false);
    setCoverLetter(false);
    setCv(true);
  };

  const handleCoverLetter = () => {
    setResume(false);
    setCv(false);
    setCoverLetter(true);
  };

  return (
    <section className="my-24">
      <div className="container">
        <SectionHead
          subTitle={"The best resume builder online"}
          title={"Professional Templates"}
        />
        <ButtonTemplate
          handleResume={handleResume}
          handleCv={handleCv}
          handleCoverLetter={handleCoverLetter}
        />
      
      </div>
      <div className="mt-10 mx-5 ">
        {resume && (
          <div>
            <Swiper
              slidesPerView={3}
              breakpoints={{
                768: { slidesPerView: 2 }, 
                0: { slidesPerView: 1 }, 
              }}
              spaceBetween={30}
              freeMode={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay, FreeMode, Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="p-5 bg-r-primary/25 border border-r-primary backdrop-blur-lg rounded-xl">
                  <img src={resume1} alt="resume image one" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="p-5 bg-r-primary/25 border border-r-primary backdrop-blur-lg rounded-xl">
                  <img src={resume2} alt="resume image one" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="p-5 bg-r-primary/25 border border-r-primary backdrop-blur-lg rounded-xl">
                  <img src={resume3} alt="resume image one" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="p-5 bg-r-primary/25 border border-r-primary backdrop-blur-lg rounded-xl">
                  <img src={resume4} alt="resume image one" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="p-5 bg-r-primary/25 border border-r-primary backdrop-blur-lg rounded-xl">
                  <img src={resume5} alt="resume image one" />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        )}
        {cv && (
          <div>
            <h1 className="text-5xl text-center mt-16 text-orange-400">Cv</h1>
          </div>
        )}
        {coverLetter && (
          <div>
            <h1 className="text-5xl text-center mt-16 text-orange-400">
              Cover letter
            </h1>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProfessionalTemplate;
