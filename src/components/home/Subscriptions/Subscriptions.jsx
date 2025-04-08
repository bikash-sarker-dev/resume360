import React, { useEffect, useState } from "react";
import SectionHead from "../../header/section-head/SectionHead";

export const Subscriptions = () => {
  const [subscriptions, Setsubscriptions] = useState([]);

  useEffect(() => {
    fetch("/subscriptions.json")
      .then((res) => res.json())
      .then((data) => {
        Setsubscriptions(data.subscriptions);
      });
  }, []);

  return (
    <div className="container mx-auto py-16">
      {/* <div className='text-center font-bold'>
      <h5 className='text-lg md:text-xl mb-3 opacity-80'>Choose the Perfect Plan for Your Career Growth.</h5>
      <h1 className='text-2xl md:text-3xl lg:text-5xl'> Choose a Subscription </h1>
      </div> */}

      <SectionHead
        title={"Choose a Subscription"}
        subTitle={"Choose the Perfect Plan for Your Career Growth"}
      />

      <div
        className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
        gap-8
        "
      >
        {subscriptions.map((subscription, idx) => (
          <div key={idx} className="card p-4 bg-white  shadow-sm">
            <div className="card-body">
              <span className="badge badge-xs badge-warning">
                {subscription.popularityBadge && subscription.popularityBadge}
              </span>
              <div className="flex justify-between">
                <h2 className="text-3xl font-bold">{subscription.name}</h2>
                <span className="text-xl">${subscription.price}/mo</span>
              </div>
              <ul className="mt-6 flex flex-col gap-2 text-xs">
                {subscription.features.map((feature) => (
                  <li>
                    <p className="inline-block mr-2">
                      {feature.available ? "✅" : "❌"}
                    </p>
                    <span className=" font-bold opacity-80">
                      {feature.name}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 ">
                <button
                  href="#_"
                  className="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden  font-bold  text-r-text bg-r-background rounded-lg group slide-up slide-up-btn"
                >
                  <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-r-primary rounded-full group-hover:w-56 group-hover:h-56"></span>
                  <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-r-primary "></span>
                  <span className="relative">Subscribe</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
