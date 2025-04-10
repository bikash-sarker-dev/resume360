import { useEffect, useState } from "react";
import { FaCamera, FaEdit, FaMapMarkerAlt, FaTimes } from "react-icons/fa";
import { FiMail, FiPhone } from "react-icons/fi";
import useAuth from "../../hooks/useAuth";

import axios from "axios";
import { getAuth } from "firebase/auth";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const DashboardProfile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const auth = getAuth();
  const { user } = useAuth();
  const [users, setUser] = useState({
    photoURL:
      user?.photoURL ||
      "https://www.shutterstock.com/image-vector/male-default-avatar-profile-icon-600nw-1725062341.jpg",
  });

  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    if (user && user.uid) {
      fetchUserProfile(user.uid);
    }
  }, [user]);

  // useEffect(() => {
  //   onAuthStateChanged(auth, (currentUser) => {
  //     if (currentUser) {
  //       setUser({ photoURL: currentUser.photoURL });
  //     }
  //   });
  // }, [auth]);

  // const handleImageUpload = async (e) => {
  //   const file = e.target.files[0];
  //   if (!file) return;

  //   const formData = new FormData();
  //   formData.append("image", file);

  //   try {
  //     const response = await fetch(
  //       `https://api.imgbb.com/1/upload?key=4aa34a6921e0ffee4d933681c503ef39`,
  //       {
  //         method: "POST",
  //         body: formData,
  //       }
  //     );

  //     const data = await response.json();
  //     if (data.success) {
  //       const imageUrl = data.data.display_url;
  //       console.log("Uploaded Image URL:", imageUrl);

  //       // ✅ Update Local State
  //       setUser({ ...users, photoURL: imageUrl });

  //       // ✅ Update Firebase Authentication User
  //       await updateProfile(user, {
  //         photoURL: imageUrl,
  //       });

  //       alert("Image uploaded and profile updated successfully!");
  //     } else {
  //       alert("Image upload failed!");
  //     }
  //   } catch (error) {
  //     console.error("Error uploading image:", error);
  //   }
  // };

  const [profile, setProfile] = useState(null);

  const fetchUserProfile = async (userId) => {
    try {
      const response = await axios.get(
        `https://resume360-server.vercel.app/profile/${userId}`
      );
      const userData = response.data;

      if (userData) {
        setProfile({
          name: userData.name || "",
          email: userData.email || "",
          role: userData.role || "",
          location: userData.location || "",
          work: userData.work || "",
          address: userData.address || "",
          skills: userData.skills || [],
          phone: userData.phone || "",
          website: userData.website || "",
          birthday: userData.birthday || "",
          gender: userData.gender || "",
          progress: userData.progress || [{ description: "", year: "" }],
          id: userData._id,
        });
      }
    } catch (error) {
      console.error("Error fetching user profile:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "skills") {
      setProfile((prevProfile) => ({
        ...prevProfile,
        [name]: value.split(",").map((skill) => skill.trim()),
      }));
    } else {
      setProfile((prevProfile) => ({
        ...prevProfile,
        [name]: value,
      }));
    }
  };

  const handleProgressChange = (index, field, value) => {
    const updatedProgress = [...profile.progress];
    updatedProgress[index][field] = value;
    setProfile((prevProfile) => ({
      ...prevProfile,
      progress: updatedProgress,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(" Profile before submit:", profile);

    try {
      if (profile?.id) {
        let res = await axiosPublic.put(`/profile/${profile.id}`, profile);
        console.log(res);
        alert("Profile updated successfully!");
      } else {
        let res = await axiosPublic.post("/profile", profile);
        console.log(res);
        alert("Profile created successfully!");
      }
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error saving profile:", error);
      alert("Error saving profile. Please try again.");
    }
  };

  const addProgressEntry = () => {
    setProfile((prevProfile) => {
      if (!prevProfile) return prevProfile;

      return {
        ...prevProfile,
        progress: Array.isArray(prevProfile.progress)
          ? [...prevProfile.progress, { description: "", year: "" }]
          : [{ description: "", year: "" }],
      };
    });
  };

  return (
    <div className="bg-r-primary/20 pt-0 sm:pt-5 min-h-screen backdrop-blur-lg">
      <div className="w-11/12 mx-auto p-6 shadow-xl rounded-xl grid md:grid-cols-3 gap-6 bg-gradient-to-br from-r-info via-r-card to-r-info text-r-text">
        <div className="pt-4 rounded-xl bg-opacity-30 sm:min-w-50 backdrop-blur-xl shadow-lg border border-primary/50 relative overflow-hidden">
          <div className="flex items-center justify-center">
            <div className="relative">
              <img
                src={users.photoURL}
                className="rounded-full xl:h-60 xl:w-60 md:h-40 md:w-40 h-80 w-80 object-cover border border-primary/50 hover:scale-105 transition-transform duration-300"
                alt="Profile photo"
              />
              <label htmlFor="upload-image">
                <div className="absolute bottom-8 sm:bottom-6 sm:right-6 md:bottom-2 md:right-2 xl:bottom-6 xl:right-6 right-8 bg-blue-600 text-white p-3 rounded-full cursor-pointer hover:scale-110 transition-transform">
                  <FaCamera className="h-5 w-5"></FaCamera>
                </div>
              </label>
              <input
                type="file"
                id="upload-image"
                accept="image/*"
                style={{ display: "none" }}
                // onChange={handleImageUpload}
              />
            </div>
          </div>
          <div className="mt-6 p-5 space-y-2">
            <h3 className="text-lg font-bold text-purple-400">Work</h3>
            <p className="text-r-text">{profile?.work}</p>
            <p className="text-r-text">{profile?.address}</p>
          </div>
          <div className=" p-5">
            <h3 className="text-lg font-bold text-purple-400">Skills</h3>
            <p className="text-r-text flex flex-wrap  gap-3">
              {(profile?.skills || []).map((skill, index) => (
                <h1
                  key={index}
                  className="shadow-md  w-max py-1 px-3 rounded-2xl bg-r-info "
                >
                  {skill}
                </h1>
              ))}
            </p>
          </div>
        </div>

        <div className="md:col-span-2">
          <div className="flex items-center justify-between border-b border-primary/50 pb-4">
            <div>
              <h2 className="text-3xl font-extrabold text-r-text">
                {profile?.name}
              </h2>
              <p className="text-r-text flex items-center mt-1">
                <FaMapMarkerAlt className="mr-2 text-purple-400" />{" "}
                {profile?.location}
              </p>
              <p className="text-blue-400 text-lg font-semibold">
                {profile?.role}
              </p>
            </div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="p-2 bg-r-info rounded-full hover:scale-110 transition-transform"
            >
              <FaEdit className="h-8 w-8 text-blue-400" />
            </button>
          </div>

          <div className="mt-6 p-6 rounded-xl bg-opacity-30 backdrop-blur-xl border border-primary/50 shadow-lg">
            <h3 className="text-lg font-bold text-purple-400">
              Contact Information
            </h3>
            <p className="flex items-center text-r-text mt-2">
              <FiPhone className="mr-2 text-blue-400" /> {profile?.phone}
            </p>
            <p className="flex items-center text-r-text mt-2">
              <FiMail className="mr-2 text-blue-400" /> {profile?.email}
            </p>
            <a
              href={profile?.website}
              className="border-b border-blue-500 text-blue-600"
            >
              my protfolio
            </a>
          </div>

          <div className="mt-6 p-6 rounded-xl bg-opacity-30 backdrop-blur-xl border border-primary/50 shadow-lg">
            <h3 className="text-lg font-bold text-purple-400">
              Basic Information
            </h3>
            <p className="text-r-text">Birthday: {profile?.birthday}</p>
            <p className="text-r-text">Gender: {profile?.gender}</p>
          </div>

          <div className="mt-6 p-6 rounded-xl bg-opacity-30 backdrop-blur-xl border border-primary/50 shadow-lg">
            <h3 className="text-lg font-bold text-purple-400">
              Career Progress
            </h3>
            <ul className="mt-3 space-y-3">
              {(profile?.progress || []).map((item, index) => (
                <li
                  key={index}
                  className={`border-l-4 border-${item.color} pl-4 text-r-text`}
                >
                  {item.description} - {item.year}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex mt-[-500px] md:mt-0 pt-0 md:pt-40 items-center justify-center bg-r-background bg-opacity-50 z-50">
          <div className="bg-gradient-to-br from-r-info via-r-card to-r-info p-6 rounded-lg shadow-lg w-10/12 relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-2 text-r-text text-xl"
            >
              <FaTimes className="h-10 w-10" />
            </button>
            <h2 className="text-xl font-bold mb-4">Edit Profile</h2>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text"
                name="name"
                value={profile?.name}
                onChange={handleChange}
                placeholder="Name"
                className="w-full bg-transparent p-2 focus:outline-none border-b border-r-primary"
              />
              <input
                type="text"
                name="location"
                value={profile?.location}
                onChange={handleChange}
                placeholder="Location"
                className="w-full bg-transparent p-2 focus:outline-none border-b border-r-primary"
              />
              <input
                type="text"
                name="role"
                value={profile?.role}
                onChange={handleChange}
                placeholder="Role"
                className="w-full bg-transparent p-2 focus:outline-none border-b border-r-primary"
              />

              <input
                type="text"
                name="birthday"
                value={profile?.birthday}
                onChange={handleChange}
                placeholder="Birthday"
                className="w-full bg-transparent p-2 focus:outline-none border-b border-r-primary"
              />
              <select
                name="gender"
                value={profile?.gender}
                onChange={handleChange}
                className="w-full bg-transparent p-2 focus:outline-none border-b border-r-primary"
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>

              <input
                type="text"
                name="phone"
                value={profile?.phone}
                onChange={handleChange}
                placeholder="Phone"
                className="w-full bg-transparent p-2 focus:outline-none border-b border-r-primary"
              />
              <input
                type="text"
                name="email"
                value={profile?.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full bg-transparent p-2 focus:outline-none border-b border-r-primary"
              />
              <input
                type="text"
                name="website"
                value={profile?.website}
                onChange={handleChange}
                placeholder="Website"
                className="w-full bg-transparent p-2 focus:outline-none border-b border-r-primary"
              />

              <input
                type="text"
                name="work"
                value={profile?.work}
                onChange={handleChange}
                placeholder="Workplace"
                className="w-full bg-transparent p-2 focus:outline-none border-b border-r-primary"
              />
              <input
                type="text"
                name="address"
                value={profile?.address}
                onChange={handleChange}
                placeholder="Work Address"
                className="w-full bg-transparent p-2 focus:outline-none border-b border-r-primary"
              />

              <input
                type="text"
                name="skills"
                value={
                  Array.isArray(profile?.skills)
                    ? profile?.skills.join(", ")
                    : profile?.skills
                }
                onChange={handleChange}
                placeholder="Skills (comma-separated)"
                className="w-full bg-transparent p-2 focus:outline-none border-b border-r-primary"
              />

              {(profile?.progress || []).map((item, index) => (
                <div key={index} className="flex space-x-2">
                  <input
                    type="text"
                    value={item.description}
                    onChange={(e) =>
                      handleProgressChange(index, "description", e.target.value)
                    }
                    className="w-3/4 bg-transparent p-2 focus:outline-none border-b border-r-primary"
                  />
                  <input
                    type="text"
                    value={item.year}
                    onChange={(e) =>
                      handleProgressChange(index, "year", e.target.value)
                    }
                    className="w-1/4 bg-transparent p-2 focus:outline-none border-b border-r-primary"
                  />
                </div>
              ))}

              <button
                type="button"
                onClick={addProgressEntry}
                className="px-4 py-1 bg-white text-teal-600 font-medium rounded-md hover:bg-gray-100"
              >
                + Add Progress
              </button>

              <button
                type="submit"
                className="px-4 py-2 bg-white text-teal-600 font-bold rounded-md hover:bg-gray-100"
              >
                Save
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardProfile;
