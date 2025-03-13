import React from "react";

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
        Don't have an account <span>Register here</span>
      </p>
    </div>
    <div className="card w-full">
      <div className="card-body">
        <fieldset className="fieldset">
          <label className="fieldset-label">Email</label>
          <input type="email" className="input w-full" placeholder="Email" />
          <label className="fieldset-label">Password</label>
          <input type="password" className="input w-full" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
      </div>
    </div>
  </div>
</div>
    
  </div>;
};

export default LoginPage;
