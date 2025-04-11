import React, { useEffect, useState } from 'react'
import  SectionHead from "../../../components/header/section-head/SectionHead"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, FreeMode, Pagination, Navigation } from "swiper/modules";
import Rating from 'react-rating';

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
      <div className='grid grid-cols-2 justify-between items-center text-center'>
      <div>
      <div className='flex justify-center items-center'>
       <div className="w-16 h-16 rounded-full">
          <img className="h-full w-full object-cover rounded-full" src={testimonial.authorImage}/>
        </div>
        <div class="divider divider-horizontal"></div>
        <div>
        <h3 className='text-3xl text-r-accent font-bold'>{testimonial.name}</h3>
        <h3 className='text-sm font-bold text-gray-600 text-left'>{testimonial.profession}</h3>
        </div>
       </div>
      </div>
        <div>
        <Rating
        className='text-yellow-300 text-2xl'
        initialRating={testimonial.rating}
        emptySymbol="far fa-star"       
        fullSymbol="fas fa-star"/>
       </div>
      </div>
        <p className='text-center  sm:w-11/12 md:w-10/12 lg:w-9/12 mx-auto mt-6'>{testimonial.review}</p>
        </div>
        </SwiperSlide>)
        }
        </Swiper>
      </div>
    </div>
  );
};
