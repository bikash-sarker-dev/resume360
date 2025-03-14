import React, { useState } from 'react';
import Lottie from 'lottie-react';
import registerLottieData from "../assets/Animation - 1733872653274.json";
import { Link, useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
    photoURL: null, // Change to null initially, as it's a file object URL
  });
  const [photoPreview, setPhotoPreview] = useState(null);
  const [formErrors, setFormErrors] = useState({});

  const handleRegister = (e) => {
    e.preventDefault();
    const { name, email, password, photoURL } = userData;

    // Reset errors
    setFormErrors({});

    // Validation logic
    let errors = {};

    if (!name) {
      errors.name = 'Name is required';
    }

    if (!email) {
      errors.email = 'Email is required';
    }

    if (!password) {
      errors.password = 'Password is required';
    } else {
      const passwordCriteria = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;
      if (!passwordCriteria.test(password)) {
        errors.password =
          'Password must be at least 8 characters long, contain one uppercase letter, one lowercase letter, one number, and one special character.';
      }
    }

    if (!photoURL) {
      errors.photoURL = 'Profile picture is required';
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    console.log('User Registered:', { name, email, password, photoURL });
    navigate('/login');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const photoUrl = URL.createObjectURL(file);
      setUserData({
        ...userData,
        photoURL: photoUrl,
      });
      setPhotoPreview(photoUrl);
    }
  };

  return (
    <div className="hero bg-base-200 min-h-screen flex justify-center items-center">
      <div className="card bg-white shadow-xl rounded-lg flex justify-center gap-4 p-8">
        {/* Left Section (Form) */}
        <div className="flex flex-col justify-center space-y-6 w-full">
          <div className="text-center">
            <h1 className="text-4xl font-semibold text-gray-700">Register Now!</h1>
          </div>
          <form className="space-y-4" onSubmit={handleRegister}>
            <div className="form-control">
              <label className="label text-gray-600">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered w-full"
                name="name"
                value={userData.name}
                onChange={handleChange}
                required
              />
              {formErrors.name && <p className="text-red-500 text-sm mt-2">{formErrors.name}</p>}
            </div>
            <div className="form-control">
              <label className="label text-gray-600">Email</label>
              <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered w-full"
                name="email"
                value={userData.email}
                onChange={handleChange}
                required
              />
              {formErrors.email && <p className="text-red-500 text-sm mt-2">{formErrors.email}</p>}
            </div>
            <div className="form-control">
              <label className="label text-gray-600">Password</label>
              <input
                type="password"
                placeholder="Your Password"
                className="input input-bordered w-full"
                name="password"
                value={userData.password}
                onChange={handleChange}
                required
              />
              {formErrors.password && (
                <p className="text-red-500 text-sm mt-2">{formErrors.password}</p>
              )}
            </div>
            <div className="form-control">
              <label className="label text-gray-600">Profile Picture</label>
              <input
                type="file"
                className="file-input file-input-bordered w-full" // Use file-input class from DaisyUI
                onChange={handlePhotoChange}
                accept="image/*"
                required
              />
              {formErrors.photoURL && (
                <p className="text-red-500 text-sm mt-2">{formErrors.photoURL}</p>
              )}
              {photoPreview && (
                <div className="mt-4 text-center">
                  <img
                    src={photoPreview}
                    alt="Profile Preview"
                    className="w-24 h-24 rounded-full mx-auto"
                  />
                </div>
              )}
            </div>
            <div className="flex justify-center mt-6"> 
  <button
    type="submit"
    className="bg-blue-600 text-white rounded-lg px-8 py-4 font-semibold hover:bg-blue-700 transition duration-300 shadow-md"
  >
    Register
  </button>
</div>
          </form>
          <p className="text-center mt-4 text-gray-600">
            Already registered?{' '}
            <Link to="/login" className="text-blue-500 hover:underline">
              Login here
            </Link>
          </p>
        </div>

        {/* Right Section (Animation) */}
        <div className="w-full flex justify-center items-center">
          <Lottie animationData={registerLottieData} loop={true} className="w-full max-w-lg" />
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;