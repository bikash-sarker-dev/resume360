import React, { useState } from "react";
import { Link } from "react-router";

const LoginPage = () => {

  const [showPassword,setShowPassword]=useState(false)

  const handleLogin = (event) => {
    event.preventDefault()
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const user = {email,password}
    console.log(user);
  }

  return <div className="container py-24">
   <div className="hero bg-background">
  <div className="hero-content flex-1 flex-col lg:flex-row">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Seamless Login for Exclusive Access</h1>
      <p className="py-6">
        Immerse yourself in a hassle-free login journey with our intuitively designed login form. Effortless access your account.
        <br></br>
        <br></br>
        <br></br>
        Don't have an account? <span className="underline"><Link to='/register'>Register here</Link></span>
      </p>
    </div>
    <div className="card w-full">
      <div className="card-body">
       <form  onSubmit={handleLogin}>
       <fieldset className="fieldset">
          <label className="fieldset-label">Email</label>
          <input type="email" name="email" className="input w-full" placeholder="Email" />
          <label className="fieldset-label">Password</label>
          <input type="password" name="password" className="input w-full" placeholder="Password" />
          <div className="flex justify-between items-center">
          <label className="fieldset-label">
          <input type="checkbox" defaultChecked className="checkbox" />
           Remember me
          </label>
          <div><a className="link link-hover">Forgot your password?</a></div>
          </div>
          <button className="btn btn-primary mt-4">Login</button>
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
  </div>
</div>
    
  </div>;
};

export default LoginPage;
