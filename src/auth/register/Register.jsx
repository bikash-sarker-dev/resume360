import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import Lottie from "lottie-react";
import resumeLottieData from "../../assets/animation/resume2.json"

export default function Register() {
  const {createUser,setUser,signInWithGithub,updateUserInfo,signInWithGoogle} = useAuth();
  const navigate = useNavigate();
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const handleRegister = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const profession = form.profession.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    if (password !== confirmPassword) {

      Swal.fire({
        title: "Error",
        text: "Passwords do not match!",
        icon: "error",
        confirmButtonText: "Ok",
      });
      return;
    }

    const newUser = { name,profession,email };

    // password validation

    const regex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    if (!regex.test(password)) {
      Swal.fire({
        title: "Error",
        text:  "Please give a valid password with at lease one Uppercase, one Lowercase and length must be 6 character or more.",
        icon: "error",
        confirmButtonText: "Ok",
      });
      return;
    }

    // CreateUser
    createUser(email, password)
      .then((result) => {
        setUser(result.user);
        form.reset();
        navigate("/");
        Swal.fire({
          title: "Success",
          text: "Registration is Successfully Completed",
          icon: "success",
          confirmButtonText: "Done",
        });
        // UpdateUser
        const profile = {
          displayName: name,
        };
        updateUserInfo(profile)
          .then((res) => {
            //  console.log(res.user)
          })
          .catch((error) => {
            Swal.fire({
              title: "Error",
              text:  "Update is Unsuccessful",
              icon: "error",
              confirmButtonText: "Ok",
            });
            return;
          });
      })
      .catch((error) => {
        setErrorMessage(error.message);
        setUser(null);
        Swal.fire({
          title: "Error",
          text: "Registration is Unsuccessful",
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
          text: "Login With Google Successfully",
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
      <div className="hero bg-background">
        <div className="hero-content flex-1 flex-col lg:flex-row w-full mx-auto lg:mx-0 gap-10">
          <div>
            <Lottie animationData={resumeLottieData}></Lottie>
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

                  <label className="fieldset-label">Profession</label>
                    <select defaultValue="default" className="select select-bordered w-full" name='profession' required type='text'>
                    <option disabled value="default">select profession</option>
                    <option value="student">Web Developer</option>
                    <option value="tutor">Teacher</option>
                    <option value="admin">UI/UX Designer</option>
                    <option value="admin">Mechanical Engineer</option>
                    <option value="admin">Chemist</option>
                    </select>

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
                  {/* password */}
                  <label className="fieldset-label">Password</label>
                  <div className="relative">
                    <input
                      type={showPassword1 ? "text" : "password"}
                      name="password"
                      className="input w-full pr-10"
                      placeholder="Enter Password"
                      required
                    />
                    <span
                      className="absolute inset-y-0 right-3 flex items-center cursor-pointer text-gray-500"
                      onClick={() => setShowPassword1(!showPassword1)}
                    >
                      {showPassword1 ? (
                        <i className="fa-solid fa-eye"></i>
                      ) : (
                        <i className="fa-solid fa-eye-slash"></i>
                      )}
                    </span>
                  </div>
                  {/* confirm password */}
                  <label className="fieldset-label">Confirm Password</label>
                  <div className="relative">
                    <input
                      type={showPassword2 ? "text" : "password"}
                      name="confirmPassword"
                      className="input w-full pr-10"
                      placeholder="Enter Comfirm Password"
                      required
                    />
                    <span
                      className="absolute inset-y-0 right-3 flex items-center cursor-pointer text-gray-500"
                      onClick={() => setShowPassword2(!showPassword2)}
                    >
                      {showPassword2 ? (
                        <i className="fa-solid fa-eye"></i>
                      ) : (
                        <i className="fa-solid fa-eye-slash"></i>
                      )}
                    </span>
                  </div>

                  <div className="flex justify-between items-center mt-2">
                    <label className="fieldset-label">
                      <input type="checkbox" className="checkbox" required /> I
                      accept the Terms and Conditions
                    </label>
                  </div>

                  <button className="btn bg-r-accent mt-4 text-white">
                    Create Account
                  </button>
                </fieldset>
              </form>
              <div className="divider">OR</div>
        <div className="text-center text-3xl">
          <i
            onClick={handleGoogleLogin}
            className="fa-brands fa-google mr-5 cursor-pointer"
          ></i>
          <i
            onClick={handleGithubLogin}
            className="fa-brands fa-github cursor-pointer"
          ></i>
        </div>
            <div className="text-center">
              <p>Already have an account? <span className="underline"><Link  to='/login' className="text-r-accent">Login here</Link></span></p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
