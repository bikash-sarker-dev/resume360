import React, { useEffect, useState } from "react";
import Rating from "react-rating";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, FreeMode, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SectionHead from "../../../components/header/section-head/SectionHead";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

export const Testimonials = () => {
  const axiosPublic = useAxiosPublic();
  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
    async function TestimonialsFun() {
      const response = await axiosPublic.get("/reviews");
      setTestimonials(response.data.result);
    }
    TestimonialsFun();
  }, []);

  return (
    <div className="container mx-auto py-16">
      <SectionHead
        subTitle={"See how our users achieved career success"}
        title={"Testimonials & Success Stories"}
      />
      <div>
        <Swiper
          style={{
            "--swiper-navigation-color": "var(--color-r-info)",
            "--swiper-pagination-color": "var(--color-r-accent)",
          }}
          slidesPerView={3}
          breakpoints={{
            768: { slidesPerView: 1 },
            0: { slidesPerView: 1 },
          }}
          spaceBetween={30}
          freeMode={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={{
            clickable: true,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, FreeMode, Navigation, Pagination]}
          className="mySwiper"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial._id}>
              <div className="mx-20 my-10 ">
                <div className="grid grid-cols-1 md:grid-cols-2 justify-between items-center text-center">
                  <div>
                    <div className="flex justify-center items-center gap-x-1">
                      <div className="w-16 h-16 rounded-full">
                        <img
                          className="h-full w-full object-cover rounded-full"
                          src={testimonial.authorImage}
                        />
                      </div>
                      <div className="hidden md:flex  divider divider-horizontal"></div>
                      <div className="">
                        <h3 className="text-3xl text-r-primary font-bold">
                          {testimonial.name}
                        </h3>
                        <h3 className="text-sm font-bold text-gray-600  sm:text-left">
                          {testimonial.profession}
                        </h3>
                      </div>
                    </div>
                  </div>
                  {/* Rating */}
                  <div>
                    <Rating
                      className="text-yellow-500 text-2xl"
                      initialRating={testimonial.rating}
                      emptySymbol="far fa-star"
                      fullSymbol="fas fa-star"
                    />
                  </div>
                </div>
                <p className="text-center   sm:w-11/12 md:w-10/12 lg:w-9/12 mx-auto mt-6">
                  {testimonial.review}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
