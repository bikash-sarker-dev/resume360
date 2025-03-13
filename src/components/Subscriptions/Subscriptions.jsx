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
    <div className='container mx-auto'>
        Subscriptions  {subscriptions.length}
        
        
        </div>
  )
}
