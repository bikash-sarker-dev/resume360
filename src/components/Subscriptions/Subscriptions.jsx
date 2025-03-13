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
    <div className='container mx-auto '>
        Subscriptions  {subscriptions.length}

        <div className='mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
        gap-8
        '>
            {
                subscriptions.map((subscription ,idx)=><div className="card w-96 bg-base-100 shadow-sm">
                <div className="card-body">
                  <span className="badge badge-xs badge-warning">Most Popular</span>
                  <div className="flex justify-between">
                    <h2 className="text-3xl font-bold">Premium</h2>
                    <span className="text-xl">$29/mo</span>
                  </div>
                  <ul className="mt-6 flex flex-col gap-2 text-xs">
                   {
                    subscription.features.map(feature=> <li>
                        <p></p>  
                        <span>High-resolution image generation</span>
                      </li>)
                   }
                   
                  </ul>
                  <div className="mt-6">
                    <button className="btn btn-primary btn-block">Subscribe</button>
                  </div>
                </div>
              </div>)
            }
        </div>
        
        
        </div>
  )
}
