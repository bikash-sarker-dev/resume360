import React, { useEffect, useState } from 'react'
import  SectionHead from "../../../components/header/section-head/SectionHead"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, FreeMode, Pagination, Navigation } from "swiper/modules";
import { Rating } from '@material-tailwind/react';

export const Testimonials = () => {
  const[testimonials,setTestimonials]=useState([]);
  useEffect(()=>{
      fetch('testimonials.json')
      .then(res => res.json())
      .then(data => setTestimonials(data))
  },[])

  return (
    <div className="container mx-auto py-16">
     <SectionHead
      subTitle={"See how our users achieved career success"}
      title={"Testimonials & Success Stories"}
    />
     <div>
        <Swiper
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
        {
        testimonials.map(testimonial => <SwiperSlide
        key={testimonial._id}
        >
        <div className='mx-20 my-10'>
       <div className='text-center'>
       <Rating
        style={{ maxWidth: 180 }}
        value={testimonial.rating}
        className='text-yellow-500'
        readOnly
        />
       </div>
        <div className="w-12 h-12 rounded-full mx-auto my-3">
          <img className="h-full w-full object-cover rounded-full" src={testimonial.authorImage}/>
        </div>
        <h3 className='text-3xl text-r-accent font-bold text-center'>{testimonial.name}</h3>
        <h3 className='text-2xl font-semibold text-center my-3'>{testimonial.profession}</h3>
        <p className='text-center'>{testimonial.review}</p>
        </div>
        </SwiperSlide>)
        }
        </Swiper>
      </div>
    </div>
  );
};
