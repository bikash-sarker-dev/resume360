import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import Swal from "sweetalert2";
import google from "../../assets/icons/google.png";
import SectionHead from "../../components/header/section-head/SectionHead";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "./../../hooks/useAxiosPublic";

export default function Login() {
  const {
    signInUser,
    setLoading,
    setUser,
    signInWithGoogle,
    signInWithGithub,
    loading,
  } = useAuth();
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  const [showPassword, setShowPassword] = useState(false);
  const [blocks, setBlocks] = useState(false);

  const blockFun = (num) => {
    let getValue = localStorage.getItem("block");
    let count = num + parseInt(getValue);
    console.log(count);
    setBlocks(count);
    localStorage.setItem("block", count);
  };

  // useEffect(()=>{
  //   async function getBlockFun() {
  //     let res = await axiosPublic.get(`/users/${}`)
  //   }
  //   getBlockFun()
  // },[])

  const handleLogin = async (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const user = { email, password };

    let res = await axiosPublic.get(`/users/${email}`);
    if (res.data.result?.block) {
      console.log("user block");
      Swal.fire({
        title: "Warning",
        text: "Your account has been blocked, please contact the admin.",
        icon: "warning",
        confirmButtonColor: "#3e563f",
        showCancelButton: true,
        confirmButtonText: "Contact",
        background: "#7dc696",
        color: "#fff",
      }).then((result) => {
        if (result.value) {
          window.location.href = `https://resume360.netlify.app/contact`;
        }
      });
    } else {
      if (parseInt(localStorage.getItem("block")) === 2) {
        let res = await axiosPublic.patch(`/users/block/${email}`);
        localStorage.setItem("block", "0");
      }
      // SignInUser
      signInUser(email, password)
        .then((result) => {
          // console.log(result.user)
          if (loading) {
            return (
              <span className="block mx-auto loading loading-spinner loading-xl"></span>
            );
          }
          setUser(result.user);
          Swal.fire({
            title: "Success",
            text: "Login successfully",
            icon: "success",
            confirmButtonText: "Done",
            confirmButtonColor: "#3e563f",
          });
          navigate("/");
          form.reset();
        })

        .catch((error) => {
          // console.log(error.message)
          if (localStorage.getItem("block") == null) {
            localStorage.setItem("block", "0");
          }
          blockFun(1);
          console.log("error login");
          setLoading(false);
          setUser(null);
          Swal.fire({
            title: "Error",
            text: "Email or Password is wrong please check",
            icon: "error",
            confirmButtonText: "Ok",
            confirmButtonColor: "#3e563f",
          });
        });
    }
  };

  // google signin
  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((result) => {
        // console.log(result.user)
        if (loading) {
          return (
            <span className="block mx-auto loading loading-spinner loading-xl"></span>
          );
        }
        setUser(result.user);
        Swal.fire({
          title: "Success",
          text: "Login with Google successfully",
          icon: "success",
          confirmButtonText: "Done",
          confirmButtonColor: "#3e563f",
        });
        navigate("/socialMiddleware");
      })
      .catch((error) => {
        // console.log(error)
        setUser(null);
      });
  };

  // github signin
  // const handleGithubLogin = () => {
  //   signInWithGithub()
  //     .then((result) => {
  //       setUser(result.user);
  //       //  console.log(result.user)
  //       Swal.fire({
  //         title: "Success",
  //         text: "Login With Github Successfully",
  //         icon: "success",
  //         confirmButtonText: "Done",
  // confirmButtonColor: '#3e563f',
  //       });
  //       navigate("/");
  //     })
  //     .catch((error) => {
  //       //  console.log(error)
  //       setUser(null);
  //     });
  // };

  return (
    <div>
      <div className="card-body">
        <SectionHead title={"Login"} />
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
            <button className="btn bg-r-accent mt-4 text-r-text hover:bg-r-primary hover:text-white">
              Login
            </button>
          </fieldset>
        </form>
        <div className="divider">OR</div>
        <div className="text-center text-3xl">
          {/* Google Button */}
          <button
            onClick={handleGoogleLogin}
            className="btn w-full border-[1px] border-[#588568] text-r-primary bg-white shadow-2xl"
          >
            <img className="w-9 bg-transparent" src={google} alt="" />
            Sign in with Google
          </button>
          {/* Github Button */}
          {/* <button  onClick={handleGithubLogin} className="btn w-full border-[1px] border-gray-400 text-r-accent bg-white shadow-2xl mt-4">
          <img className="w-7 bg-transparent" src={github} alt="" />
          Sign in with GitHub
          </button> */}
        </div>
        <div className="text-center">
          <p className="mt-2">
            Already have an account?{" "}
            <span className="underline">
              <Link to="/register" className="text-r-primary">
                Register here
              </Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
