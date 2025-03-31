import React from 'react'
import SocialMiddleware from '../auth/socialMiddleware/SocialMiddleware'

export default function SocialMiddlewarePage() {
  return (
  <div className="container pb-8 pt-28 lg:pb-12">
    <div className="hero bg-background">
      <div className="card w-full">
       <SocialMiddleware></SocialMiddleware>
      </div>
    </div> 
  </div>
  )
}
