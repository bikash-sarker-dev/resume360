

import React from "react";

const ConnectingPeople = () => {
  return (
    <div className="container mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4  md:p-12 lg:p-16">
    
    <div className="md:col-span-6 lg:col-span-7 text-center md:text-left">
      <h1 className="text-3xl md:text-5xl font-bold w-2/3">
        We're changing <br className="hidden md:block" /> the way people
        connect
      </h1>
      <p className="py-4 md:py-6 text-gray-500 text-sm md:text-base w-3/4">
        Cupidatat minim id magna ipsum sint dolor qui. Sunt sit in quis
        cupidatat mollit aute velit. Et labore commodo nulla aliqua proident
        mollit ullamco exercitation tempor. Sint aliqua anim nulla sunt
        mollit id pariatur in voluptate cillum. Eu voluptate tempor esse
        minim amet fugiat veniam occaecat aliqua....
      </p>
    </div>

 
    <div className="md:col-span-6 lg:col-span-5 flex  ">
      <div className="flex gap-8">
        <div className="flex flex-col gap-4 mt-8 md:mt-14">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Person 1"
            className="w-[120px] h-[160px] md:w-[150px] md:h-[200px] rounded-lg shadow-lg object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Person 2"
            className="w-[120px] h-[160px] md:w-[150px] md:h-[200px] rounded-lg shadow-lg object-cover"
          />
        </div>
        <div className="flex flex-col gap-4 mb-8 md:mb-14">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Person 3"
            className="w-[120px] h-[160px] md:w-[150px] md:h-[200px] rounded-lg shadow-lg object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Person 4"
            className="w-[120px] h-[160px] md:w-[150px] md:h-[200px] rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>
    </div>
  </div>
    </div>
  );
};

export default ConnectingPeople;
