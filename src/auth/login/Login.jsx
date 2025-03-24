import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import SectionHead from "../../components/header/section-head/SectionHead";

export default function Login() {
  const { signInUser, setUser, signInWithGoogle, signInWithGithub } = useAuth();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const user = { email, password };
    // console.log(user);

    // SignInUser
    signInUser(email, password)
      .then((result) => {
        // console.log(result.user)
        setUser(result.user);
        Swal.fire({
          title: "Success",
          text: "Login successfully",
          icon: "success",
          confirmButtonText: "Done",
        });
        navigate("/");
        form.reset();
      })
      .catch((error) => {
        // console.log(error.message)
        setUser(null);
        Swal.fire({
          title: "Error",
          text: "Email or Password is wrong please check",
          icon: "error",
          confirmButtonText: "Ok",
        });
      });
  };

  // google signin
  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((result) => {
        // console.log(result.user)
        setUser(result.user);
        Swal.fire({
          title: "Success",
          text: "Login with Google successfully",
          icon: "success",
          confirmButtonText: "Done",
        });
        navigate("/");
      })
      .catch((error) => {
        // console.log(error)
        setUser(null);
      });
  };

  // github signin
  const handleGithubLogin = () => {
    signInWithGithub()
      .then((result) => {
        setUser(result.user);
        //  console.log(result.user)
        Swal.fire({
          title: "Success",
          text: "Login With Github Successfully",
          icon: "success",
          confirmButtonText: "Done",
        });
        navigate("/");
      })
      .catch((error) => {
        //  console.log(error)
        setUser(null);
      });
  };

  return (
    <div>
      <div className="card-body">
      <SectionHead
        title={"Login"}
      />
        <form onSubmit={handleLogin}>
          <fieldset className="fieldset">
            <label className="fieldset-label">Email</label>
            <div className="relative">
            <input
              type="email"
              name="email"
              className="input w-full"
              placeholder="Enter Your Email"
            />
            <span className="absolute inset-y-0 right-3 flex items-center text-gray-500">
              <i className="fa-solid fa-envelope"></i>
            </span>
            </div>
            <label className="fieldset-label">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                className="input w-full pr-10"
                placeholder="Enter Password"
                required
              />
              <span
                className="absolute inset-y-0 right-3 flex items-center cursor-pointer text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <i className="fa-solid fa-eye"></i>
                ) : (
                  <i className="fa-solid fa-eye-slash"></i>
                )}
              </span>
            </div>
            <div>
              <Link to="/forgetPassword">Forgot your password?</Link>
            </div>
            <button className="btn bg-r-accent mt-4 text-white">Login</button>
          </fieldset>
        </form>
        <div className="divider">OR</div>
        <div className="text-center text-3xl">
          <i
            onClick={handleGoogleLogin}
            className="fa-brands fa-google mr-5 cursor-pointer"
          ></i>
          {/* <i className="fa-brands fa-facebook mr-5 cursor-pointer"></i> */}
          <i
            onClick={handleGithubLogin}
            className="fa-brands fa-github cursor-pointer"
          ></i>
        </div>
        <div className="text-center">
          <p>Already have an account? <span className="underline"><Link  to='/register' className="text-r-accent">Register here</Link></span></p>
        </div>
      </div>
    </div>
  );
}
