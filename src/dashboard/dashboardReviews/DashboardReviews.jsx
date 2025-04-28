import React, { useEffect, useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";

export default function DashboardReviews() {
  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
    fetch("/testimonials.json")
      .then((res) => res.json())
      .then((data) => setTestimonials(data));
  }, []);
  // console.log(testimonials)
  return (
    <div className="mx-auto w-11/12 p-4">
      <div className="mb-4"></div>
      <div className="overflow-x-auto">
        <table className="table w-full border border-gray-300">
          <thead>
            <tr className="bg-r-primary/70 text-[17px] text-r-text">
              <th>#</th>
              <th>Photo</th>
              <th>User Name</th>
              <th>Email</th>
              <th>Rating</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {testimonials.map((testimonial, index) => (
              <tr key={testimonial._id || index} className="hover:bg-gray-200">
                <td className="font-semibold text-center">{index + 1}</td>

                <td>
                  <img
                    className="w-14 h-14 rounded-full"
                    src={
                      testimonial.image ||
                      "https://static.vecteezy.com/system/resources/previews/024/183/525/non_2x/avatar-of-a-man-portrait-of-a-young-guy-illustration-of-male-character-in-modern-color-style-vector.jpg"
                    }
                    alt=""
                  />
                </td>
                <td>{testimonial.name || "N/A"}</td>
                <td>{testimonial.email}</td>
                <td>{testimonial.rating}</td>
                <td>
                  <button>
                    <RiDeleteBinLine />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
