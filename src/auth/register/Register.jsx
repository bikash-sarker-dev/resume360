import Lottie from "lottie-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import Swal from "sweetalert2";
import resumeLottieData from "../../assets/animation/resume2.json";
import SectionHead from "../../components/header/section-head/SectionHead";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import google from "../../assets/icons/google.png"
// import github from "../../assets/icons/github.png"

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api =`https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

export default function Register() {
  const {createUser, setUser, signInWithGithub, updateUserInfo, signInWithGoogle} = useAuth();
  const navigate = useNavigate();
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [conditions, setConditions] = useState(false);
  const [profession, setProfession] = useState("");
  const [showInput, setShowInput] = useState(false);
  const axiosPublic = useAxiosPublic();

  const handleSelectChange =(event) => {
    const selectedValue = event.target.value;
    setProfession(selectedValue);
    setShowInput(selectedValue === "others");
  };

  const handleRegister = async (event) => {
    event.preventDefault();
  
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    const profession = form.profession.value;
    const imageFile = form.image.files[0]; 
    const terms = true;
  
    if (password !== confirmPassword) {
      Swal.fire({
        title: "Error",
        text: "Passwords do not match!",
        icon: "error",
        confirmButtonText: "Ok",
        confirmButtonColor: '#3e563f',
      });
      return;
    }
  
    // Password validation
    const regex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!regex.test(password)) {
      Swal.fire({
        title: "Error",
        text: "Password must contain at least one uppercase, one lowercase letter, and be at least 6 characters long.",
        icon: "error",
        confirmButtonText: "Ok",
        confirmButtonColor: '#3e563f',
      });
      return;
    }
  
    if (!imageFile) {
      Swal.fire({
        title: "Error",
        text: "Please upload an image.",
        icon: "error",
        confirmButtonText: "Ok",
        confirmButtonColor: '#3e563f',
      });
      return;
    }
  
    // Upload image to ImgBB
    const formData = new FormData();
    formData.append("image", imageFile);
  
    try {
      const imgRes = await fetch(image_hosting_api, {
        method: "POST",
        body: formData,
      });
  
      const imgData = await imgRes.json();
  
      if (imgData.success) {
        const imageUrl = imgData.data.display_url;
  
        // Create new user object
        const newUser = { name, profession, email, image: imageUrl, password, terms };
        console.log(newUser)
  
        // Create user in Firebase
        createUser(email, password)
          .then((result) => {
            setUser(result.user);
  
            // Update Firebase user profile
            const profile = { displayName: name, photoURL: imageUrl };
            updateUserInfo(profile)
              .then(() => {
                // Save user to the database
                axiosPublic.post("/users", newUser).then((res) => {
                  if (res.data.message) {
                    form.reset();
                    Swal.fire({
                      title: "Success",
                      text: "Registration is successfully completed",
                      icon: "success",
                      confirmButtonText: "Done",
                      confirmButtonColor: '#3e563f',
                    });
                    navigate("/");
                  }
                });
              })
              .catch(() => {
                Swal.fire({
                  title: "Error",
                  text: "Profile update failed.",
                  icon: "error",
                  confirmButtonText: "Ok",
                  confirmButtonColor: '#3e563f',
                });
              });
          })
          .catch(() => {
            setUser(null);
            Swal.fire({
              title: "Error",
              text: "Registration failed.",
              icon: "error",
              confirmButtonText: "Ok",
              confirmButtonColor: '#3e563f',
            });
          });
      } else {
        Swal.fire({
          title: "Error",
          text: "Image upload failed. Please try again.",
          icon: "error",
          confirmButtonText: "Ok",
          confirmButtonColor: '#3e563f',
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "An error occurred while uploading the image.",
        icon: "error",
        confirmButtonText: "Ok",
        confirmButtonColor: '#3e563f',
      });
    }
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
          confirmButtonColor: '#3e563f',
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
  //         confirmButtonColor: '#3e563f',
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
      <div className="hero bg-background">
        <div className="hero-content flex-1 flex-col lg:flex-row w-full mx-auto lg:mx-0 gap-10">
          <div>
            <Lottie animationData={resumeLottieData}></Lottie>
          </div>
          <div className="card w-full md:w-7/12">
            <div className="card-body">
              <SectionHead title={"Register"} />
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
                  <select
                    defaultValue="default"
                    className="select select-bordered w-full"
                    name="profession"
                    required
                    onChange={handleSelectChange}
                  >
                    <option disabled value="default">
                      select profession
                    </option>
                    <option value="web developer">Web Developer</option>
                    <option value="teacher">Teacher</option>
                    <option value="ui/ux designer">UI/UX Designer</option>
                    <option value="mechanical engineer">Mechanical Engineer</option>
                    <option value="chemist">Chemist</option>
                    <option value="others">Others</option>
                  </select>
                  
                  {showInput && (
                  <input
                  type="text"
                  className="input input-bordered w-full mt-2"
                  placeholder="Enter your profession"
                  value={profession}
                  onChange={(e) => setProfession(e.target.value)}
                  />
                  )}

                  <label className="fieldset-label">Image</label>
                    <input
                      type="file"
                      name="image"
                      className="file-input file-input-bordered w-full"
                      placeholder="Upload Your Image"
                    />

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
                      <input
                        type="checkbox"
                        name="conditions"
                        value={conditions ? "true" : "false"}
                        className="checkbox"
                        onClick={() => setConditions(!conditions)}
                        required
                      />{" "}
                      I accept the Terms and Conditions
                    </label>
                  </div>
                  {conditions ? (
                    <>
                      <button className="btn bg-r-accent mt-4 text-r-text hover:bg-r-primary hover:text-white">
                        Create Account
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        disabled
                        className="btn bg-r-accent mt-4 text-r-text"
                      >
                        Create Account
                      </button>
                    </>
                  )}
                </fieldset>
              </form>
              <div className="divider">OR</div>
              <div className="text-center text-3xl">
              {/* Google Button */}
              <button  onClick={handleGoogleLogin} className="btn w-full border-[1px] border-[#588568] text-r-primary bg-white shadow-2xl">
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
              <Link to="/login" className="text-r-primary">Login here</Link></span>
              </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}