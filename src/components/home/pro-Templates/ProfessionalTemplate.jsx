import React, { useState } from "react";
import resume1 from "../../../assets/images/resume/resume1.png";
import resume2 from "../../../assets/images/resume/resume2.png";
import resume3 from "../../../assets/images/resume/resume3.png";
import resume4 from "../../../assets/images/resume/resume4.png";
import resume5 from "../../../assets/images/resume/resume5.png";
import SectionHead from "../../../components/header/section-head/SectionHead";
import ButtonTemplate from "../pro-Templates/ButtonTemplate";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "./style.css";

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
          resume={resume}
          cv={cv}
          coverLetter={coverLetter}
        />
      </div>
      <div className="container">
        <div className="mt-10 mx-5 ">
          {resume && (
            <div>
              <Swiper
               style={{
                "--swiper-navigation-color": "var(--color-r-info)",
                "--swiper-pagination-color": "var(--color-r-accent)",
              }}
                slidesPerView={3}
                spaceBetween={20}
                freeMode={true}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                }}
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
                  <div className="border-6">
                    <img src={resume1} alt="resume image one" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="border-6">
                    <img src={resume2} alt="resume image one" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="border-6">
                    <img src={resume3} alt="resume image one" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="border-6">
                    <img src={resume4} alt="resume image one" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="border-6">
                    <img src={resume5} alt="resume image one" />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          )}
          {cv && (
            <Swiper
            style={{
              "--swiper-navigation-color": "var(--color-r-info)",
              "--swiper-pagination-color": "var(--color-r-accent)",
            }}
              slidesPerView={3}
              spaceBetween={20}
              freeMode={true}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
              }}
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
                <div className="border-6">
                  <img
                    src="https://i.ibb.co.com/9kwQckj0/CV3.jpg"
                    alt="resume image one"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="border-6">
                  <img
                    src="https://i.ibb.co.com/hFb9qN8Z/CV4.jpg"
                    alt="resume image one"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="border-6">
                  <img
                    src="https://i.ibb.co.com/67ss158D/CV5.jpg"
                    alt="resume image one"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="border-6">
                  <img
                    src="https://i.ibb.co.com/FkSw71LY/CV6.jpg"
                    alt="resume image one"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="border-6">
                  <img
                    src="https://i.ibb.co.com/pBjkNqTV/CV2.jpg"
                    alt="resume image one"
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          )}
          {coverLetter && (
            <Swiper
            style={{
              "--swiper-navigation-color": "var(--color-r-info)",
              "--swiper-pagination-color": "var(--color-r-accent)",
            }}
              slidesPerView={3}
              spaceBetween={20}
              freeMode={true}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
              }}
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
                <div className="border-6">
                  <img
                    src="https://i.ibb.co.com/XrpkBz9k/CL3.jpg"
                    alt="resume image one"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="border-6">
                  <img
                    src="https://i.ibb.co.com/TFcGPCM/CL4.jpg"
                    alt="resume image one"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="border-6">
                  <img
                    src="https://i.ibb.co.com/whjd1DsP/CL1.jpg"
                    alt="resume image one"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="border-6">
                  <img
                    src="https://i.ibb.co.com/8L4rKvd7/CL5.jpg"
                    alt="resume image one"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="border-6">
                  <img
                    src="https://i.ibb.co.com/XfX60Hsk/CL2.jpg"
                    alt="resume image one"
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProfessionalTemplate;
