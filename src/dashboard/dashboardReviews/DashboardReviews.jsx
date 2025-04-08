import React, { useEffect, useState } from 'react'
import SectionHead from '../../components/header/section-head/SectionHead';

export default function DashboardReviews() {
    const[testimonials,setTestimonials]=useState([]);
      useEffect(()=>{
          fetch('/testimonials.json')
          .then(res => res.json())
          .then(data => setTestimonials(data))
      },[])
// console.log(testimonials)
  return (
    <div className="mx-auto w-11/12 p-4">
    <div className="mb-4">
    <SectionHead
      title={"Reviews"}
    />
    </div>
    <div className="overflow-x-auto">
        <table className="table w-full border border-gray-300">
            <thead>
                <tr className="bg-gray-200">
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Rating</th>
                </tr>
            </thead>
            <tbody>
                {testimonials.map((testimonial, index) => (
                    <tr key={testimonial._id || index} className="hover:bg-gray-100">
                        <td className="font-semibold text-center">{index + 1}</td>
                        <td>{testimonial.name || 'N/A'}</td>
                        <td>{testimonial.email}</td>
                        <td>{testimonial.rating}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    </div>
  )
}
