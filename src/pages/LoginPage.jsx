import React from "react";
import { Link } from "react-router";

const LoginPage = () => {
  return <div className="container py-28">
   <div className="hero bg-background">
  <div className="hero-content flex-1 flex-col lg:flex-row">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Seamless Login for Exclusive Access</h1>
      <p className="py-6">
        Immerse yourself in a hassle-free login journey with our intuitively designed login form. Effortless access your account.
        <br></br>
        <br></br>
        Don't have an account? <span className="underline"><Link to='/register'>Register here</Link></span>
      </p>
    </div>
    <div className="card w-full">
      <div className="card-body">
        <h2 className="text-2xl font-bold mb-5">Login</h2>
        <fieldset className="fieldset">
          <label className="fieldset-label">Email</label>
          <input type="email" className="input w-full" placeholder="Email" />
          <label className="fieldset-label">Password</label>
          <input type="password" className="input w-full" placeholder="Password" />
          <div className="flex justify-between items-center">
          <label className="fieldset-label">
          <input type="checkbox" defaultChecked className="checkbox" />
           Remember me
          </label>
          <div><a className="link link-hover">Forgot password?</a></div>
          </div>
          <button className="btn btn-primary mt-4">Login</button>
        </fieldset>
      </div>
    </div>
  </div>
</div>
    
  </div>;
};

export default LoginPage;
