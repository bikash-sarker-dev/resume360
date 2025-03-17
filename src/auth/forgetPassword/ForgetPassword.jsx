import React from 'react'
import { Link } from 'react-router'

export default function ForgetPassword() {
  return (
    <div>
    <form>
      <fieldset className="fieldset">
        <label className="fieldset-label">Email</label>
        <input type="email" name="email" className="input w-full" placeholder="Enter Your Email" />
        <button className="btn bg-r-accent mt-4 text-white">Send Reset Email</button>
      </fieldset>
        <p className="text-center mt-4">Remember Your Password? <span className="underline"><Link to='/login' className="text-r-accent">Login</Link></span></p>
    </form>
    </div>
  )
}
