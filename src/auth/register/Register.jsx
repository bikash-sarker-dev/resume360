import React, { useState } from "react";
import { Link } from "react-router";

export default function Register() {

    const [showPassword, setShowPassword] = useState(false);

    const handleRegister = (event) => {
      event.preventDefault();
      const form = event.target;
      const email = form.email.value;
      const name = form.name.value;
      const password = form.password.value;
    
  
    };
  return (
    <div>
        <div className="hero bg-background">
        <div className="hero-content flex-1 flex-col lg:flex-row w-full mx-auto lg:mx-0 gap-10">
          <div className="text-center lg:text-left w-8/12 mx-auto">
            <h1 className="text-3xl mb-6 lg:text-3xl font-semibold">Instant Access</h1>
            <div className="flex flex-col space-y-4">
              <button className="btn bg-r-accent text-white flex items-center justify-center gap-2 p-3 rounded-lg whitespace-nowrap w-8/12">
              <i className="fa-brands fa-github"></i> Continue with Github
              </button>
              <button className="btn bg-r-accent text-white flex items-center justify-center gap-2 p-3 rounded-lg whitespace-nowrap w-8/12">
                <i className="fa-brands fa-google"></i> Continue with Google
              </button>
            </div>
          </div>
          <div className="card w-full md:w-7/12">
            <div className="card-body">
              <h2 className="text-xl lg:text-2xl font-bold mb-4">Register</h2>
              <form onSubmit={handleRegister}>
                <fieldset className="fieldset">
                  <label className="fieldset-label">Name</label>
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      className="input w-full pr-10"
                      placeholder="Enter Name"
                      required
                    />
                    <span className="absolute inset-y-0 right-3 flex items-center text-gray-500">
                      <i className="fa-solid fa-user"></i>
                    </span>
                  </div>

                  <label className="fieldset-label">Email</label>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      className="input w-full pr-10"
                      placeholder="Enter Email"
                      required
                    />
                    <span className="absolute inset-y-0 right-3 flex items-center text-gray-500">
                      <i className="fa-solid fa-envelope"></i>
                    </span>
                  </div>
                  <label className="fieldset-label">Password</label>
                  <div className="relative">
                    <input type={showPassword ? "text" : "password"} name="password" className="input w-full pr-10" placeholder="Enter Password" required/>
                    <span className="absolute inset-y-0 right-3 flex items-center cursor-pointer text-gray-500" onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? (
                    <i className="fa-solid fa-eye"></i>
                    ) : (
                    <i className="fa-solid fa-eye-slash"></i>
                    )}
                    </span>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <label className="fieldset-label">
                      <input type="checkbox" className="checkbox" required /> I accept the Terms and Conditions
                    </label>
                  </div>

                  <button className="btn bg-r-accent mt-4 text-white">Create Account</button>
                </fieldset>
              </form>
              <div className="text-center">
                <h1>
                  Already have an account? <span className="underline"><Link to='/login' className="text-r-accent"> Login here</Link></span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
