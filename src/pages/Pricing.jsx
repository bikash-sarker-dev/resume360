import React, { useEffect, useState } from "react";
import SectionHead from '../components/header/section-head/SectionHead'
import { Link } from "react-router";
import { FaCheck } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";

export const Pricing = () => {
      const [subscriptions, Setsubscriptions] = useState([]);
    
      useEffect(() => {
        fetch("/subscriptions.json")
          .then((res) => res.json())
          .then((data) => {
            Setsubscriptions(data.subscriptions);
          });
      }, []);
  return (
    <div className='py-24 mx-auto container'>
     <div className='pt-5'>
     <SectionHead 
        title={"Pricing"}>
</SectionHead>
        <h4 className="text-xl text-r-text mx-auto text-center md:10/12 lg:w-9/12 opacity-50">Choose a plan that gives your resume the edge. Professionally designed, ATS-friendly, and built to impress hiring managers</h4>
     </div>
     <div>
     <div
        className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
        gap-8
        "
      >
        {subscriptions.map((subscription, idx) => (
          <div className="card p-4 bg-white  shadow-sm">
            <div className="card-body">
              <span className="badge badge-xs badge-warning">
                {subscription.popularityBadge && subscription.popularityBadge}
              </span>
              <div className="flex justify-between">
                <h2 className="text-3xl font-bold text-black">{subscription.name}</h2>
                <span className="text-xl text-black">${subscription.price}/mo</span>
              </div>
              <ul className="mt-6 flex flex-col gap-2 text-xs">
                {subscription.features.map((feature) => (
                  <li>
                    <p className="inline-block mr-2">
                      {feature.available ? <FaCheck className="text-green-600"/> : <MdOutlineCancel className="text-red-600" />}
                    </p>
                    <span className=" font-bold opacity-80 text-black">
                      {feature.name}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 ">
                <Link to={`subscribe/${subscription.id}`}
                
                  className="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden  font-bold  text-r-text bg-r-background rounded-lg group slide-up slide-up-btn"
                >
                  <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-r-primary rounded-full group-hover:w-56 group-hover:h-56"></span>
                  <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-r-primary "></span>
                  <span className="relative">Subscribe</span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

     </div>
     <div className="my-8 flex justify-center items-center gap-4">
      <h1 className="text-3xl font-bold">We Accept:</h1>
        <div className="flex gap-4">
            <img src="https://img.icons8.com/?size=48&id=13610&format=png" alt="" />
            <img src="https://img.icons8.com/?size=48&id=13608&format=png" alt="" />
            <img src="https://img.icons8.com/?size=48&id=13611&format=png" alt="" />
        </div>
     </div>
    </div>
  )
}
