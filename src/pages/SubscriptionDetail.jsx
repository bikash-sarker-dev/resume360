import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';

export const SubscriptionDetail = () => {
    const [subscriptions, Setsubscriptions] = useState([]);
    const [currentSub, setCurrentSub] = useState(null);
    const { id } = useParams();
    console.log(id);
  
    useEffect(() => {
      fetch("/subscriptions.json")
        .then((res) => res.json())
        .then((data) => {
        
          const found =data.subscriptions.find((sub)=>sub.id.toString()=== id)
          setCurrentSub(found);
          console.log(found);
        
          
        });
    }, [id]);
 
  return (
    <div className='py-16 container mx-auto'>
      <h1 className='text-4xl font-bold text-black text-center my-16'>Submit Your Payment Details</h1>
     <div>
      <div className='mt-8'>
      
      
      </div>
      <div className="bg-white shadow-lg rounded-xl p-6 max-w-md mx-auto mt-8">
  <h2 className="text-xl font-semibold text-gray-800 mb-4">Payment Information</h2>

  <form className="space-y-4">
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">Cardholder Name</label>
      <input
        type="text"
        placeholder="Enter Your Name"
        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#0E7A81]"
      />
    </div>

    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">Card Number</label>
      <input
        type="text"
        placeholder="1234 5678 9012 3456"
        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#0E7A81]"
      />
    </div>

    <div className="flex gap-4">
      <div className="w-1/2">
        <label className="block text-sm font-medium text-gray-700 mb-1">Expiry Date</label>
        <input
          type="date"
          placeholder="MM/YY"
          className="input w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#0E7A81]"
        />
      </div>

      <div className="w-1/2">
        <label className="block text-sm font-medium text-gray-700 mb-1">CVC</label>
        <input type="text" placeholder="Type here" className="input" />
      </div>
    </div>

    <button
    
      className="w-full bg-r-primary
       text-white py-2 rounded-md font-semibold  transition"
    >
      Submit Payment
    </button>
  </form>
</div>

     </div>
    </div>
  )
}
