import React, { useEffect, useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";

export default function DashboardReviews() {
  const axiosPublic = useAxiosPublic();
  const [reviews, setReviews] = useState([]);
  const [reviewTrue, setReviewsTrue] = useState(false);
  useEffect(() => {
    async function reviewFun() {
      const response = await axiosPublic.get(`/reviews/all`);
      setReviews(response.data.result);
    }
    reviewFun();
  }, [reviewTrue]);
  console.log(reviews);
  const handleDeleteReview = (review) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#588568",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosPublic.delete(`/reviews/${review._id}`);
        console.log(res.data);
        setReviewsTrue(!reviewTrue);
        Swal.fire({
          title: "Deleted!",
          text: res.data.message,
          icon: "success",
          confirmButtonColor: "#588568",
        });
      }
    });
  };
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
            {reviews.map((testimonial, index) => (
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
                <td>
                  <span
                    className={`  ${
                      testimonial.rating < 4 && "bg-[#FDD9D7] text-[#BB2626]"
                    }
                    ${testimonial.rating > 4 && "bg-[#DBEFDC] text-[#1B5E20]"} 
                    
                     px-6 rounded-sm py-2 text-lg font-bold `}
                  >
                    {testimonial.rating}
                  </span>
                </td>
                <td>
                  <button onClick={() => handleDeleteReview(testimonial)}>
                    <RiDeleteBinLine className="text-2xl text-red-500 cursor-pointer" />
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
