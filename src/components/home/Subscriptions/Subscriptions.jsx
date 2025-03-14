import { Card, CardContent, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { data } from 'react-router'

export const Subscriptions = () => {
    const [subscriptions,Setsubscriptions]=useState([])

    useEffect(
      ()=>{
        fetch('/subscriptions.json')
        .then(res=>res.json())
        .then(data=>{
            Setsubscriptions(data.subscriptions)
             
        })

      },[]
    )

  return (
    <div className='container mx-auto py-16'>
      <div className='text-center font-bold'>
      <h5 className='text-lg md:text-xl mb-3 opacity-80'>Choose the Perfect Plan for Your Career Growth.</h5>
      <h1 className='text-2xl md:text-3xl lg:text-5xl'> Choose a Subscription </h1>
      </div>
        <div className='mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
        gap-8
        '>
            {
                subscriptions.map((subscription ,idx)=><div 
                className="card p-4 bg-white  shadow-sm">
                <div className="card-body">
                  <span className="badge badge-xs badge-warning">{subscription.popularityBadge && subscription.popularityBadge }</span>
                  <div className="flex justify-between">
                    <h2 className="text-3xl font-bold">{subscription.name}</h2>
                    <span className="text-xl">${subscription.price}/mo</span>
                  </div>
                  <ul className="mt-6 flex flex-col gap-2 text-xs">
                   {
                    subscription.features.map(feature=> <li>
                        <p className='inline-block mr-2'>{feature.available?"✅":"❌"}</p>  
                        <span className=' font-bold opacity-80'>{feature.name}</span>
                      </li>)
                   }
                   
                  </ul>
                  <div className="mt-6 ">
                    <button className="btn btn-active  bg-[#86abdf] hover:bg-r-accent">Subscribe</button>
                  </div>
                </div>
              </div>)
            }
        </div>

   
        
        
        </div>
  )
}
