import React, { useState } from "react";
import { Link } from "react-router";

export default function Login() {

    const [showPassword,setShowPassword]=useState(false)

    const handleLogin = (event) => {
      event.preventDefault()
      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;
      const user = {email,password}
      // console.log(user);
    }
  return (
    <div>
      <div className="card-body">
        <h2 className="text-xl lg:text-2xl font-bold mb-4">Login</h2>
       <form  onSubmit={handleLogin}>
       <fieldset className="fieldset">
          <label className="fieldset-label">Email</label>
          <input type="email" name="email" className="input w-full" placeholder="Enter Email" />
          <label className="fieldset-label">Password</label>
          <div className="relative">
            <input type={showPassword ? "text" : "password"} name="password" className="input w-full pr-10" placeholder="Enter Password" required />
            <span className="absolute inset-y-0 right-3 flex items-center cursor-pointer text-gray-500" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? (
                <i className="fa-solid fa-eye"></i>
                ) : (
                <i className="fa-solid fa-eye-slash"></i>
                )}
            </span>
          </div>
          <div><Link to='/forgetPassword'>Forgot your password?</Link></div>
          <button className="btn bg-r-accent mt-4 text-white">Login</button>
        </fieldset>
       </form>
        <div className="divider">OR</div>
        <div className="text-center text-3xl">
        <i className="fa-brands fa-google mr-5"></i>
        <i className="fa-brands fa-facebook mr-5"></i>
        <i className="fa-brands fa-apple"></i>
        </div>
      </div>
    </div>
  )
}
