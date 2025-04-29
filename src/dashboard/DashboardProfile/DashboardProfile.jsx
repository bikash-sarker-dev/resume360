import { useEffect, useState } from "react";
import { FaCamera, FaEdit, FaMapMarkerAlt, FaTimes } from "react-icons/fa";
import { FiMail, FiPhone } from "react-icons/fi";
import useAuth from "../../hooks/useAuth";

import { getAuth } from "firebase/auth";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import axios from "axios";


const DashboardProfile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const auth = getAuth();
  
  const axiosPublic = useAxiosPublic();
  const [loading, setLoading] = useState(false);
  const [photoURL, setPhotoURL] = useState(null);
  const [imageId, setImageId] = useState("");

  const { user ,setUser,updateUserInfo } = useAuth();

  
  const imgbbApiKey = "4aa34a6921e0ffee4d933681c503ef39";


  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    uploadNewProfileImage(file);
  };

  const uploadNewProfileImage = async (file) => {
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("image", file);

      const imgbbRes = await axios.post(
        `https://api.imgbb.com/1/upload?key=${imgbbApiKey}`,
        formData
      );

      const imageUrl = imgbbRes.data?.data?.url;
      if (!imageUrl) {
        console.error("Image upload failed");
        return;
      }

      const res = await axiosPublic.post("/profile-image", {
        email: user.email,
        name: user.displayName,
        photoURL: imageUrl,
        userId: user.uid,
      });

      const result = res.data?.result;
      if (result?._id) {
        setImageId(result._id);
        setPhotoURL(imageUrl);
      }

      await updateUserInfo({ photoURL: imageUrl });

      setUser({ ...user, photoURL: imageUrl });

      console.log("✅ Firebase photoURL updated!");
    } catch (err) {
      console.error("❌ Upload failed:", err.message);
    } finally {
      setLoading(false);
    }
  };


  console.log(user)
  



  
  
  
  const [profile, setProfile] = useState({
    name: "",
    location: "your location",
    role: "profession role",
    birthday: "your birth year",
    gender: "your gender",
    phone: "phone number",
    email: "",
    website: "enter your protfolio link",
    work: "your profession ",
    address: "your full address",
    skills: ["add-your-skill"],
    progress: [{ description: "progress details ", year: "enter progress duration" }],
  });

  

  useEffect(() => {
    if (user?.email) {
      fetchUserProfile(user.email);
    }
  }, [user]);

  const fetchUserProfile = async (uid) => {
    try {
      setLoading(true);
      const email = user.email;
      const res = await axiosPublic.get(`/profile/${email}`);

      if (res.data?.result) {
        setProfile(res.data.result);
      }   setProfile((prevProfile) => ({
        ...prevProfile,
        email: email,
      }));
    } catch (err) {
      console.error("Error fetching profile:", err);
    } finally {
      setLoading(false);
    }
  };

  const createProfile = async () => {
    console.log("Sending profile to backend:", profile);

    try {
      const res = await axiosPublic.post("/profile", {
        ...profile,
        userId: user?.uid,
      });

      setProfile(res.data.profile);
    } catch (err) {
      console.error("Error creating profile:", err);
    }
  };

  const updateProfile = async () => {
    try {
      const res = await axiosPublic.put(`/profile/${profile._id}`, profile);
      setProfile(res.data.profile);
    } catch (err) {
      console.error("Error updating profile:", err);
    }
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (profile?._id) {
        await updateProfile();
        Swal.fire({
          icon: "success",
          title: "Updated!",
          text: "Your profile was successfully updated.",
          timer: 2000,
          showConfirmButton: false,
        });
      } else {
        await createProfile();
        Swal.fire({
          icon: "success",
          title: "Created!",
          text: "Your profile was successfully created.",
          timer: 2000,
          showConfirmButton: false,
        });
      }

      await fetchUserProfile(user.email);
      setIsModalOpen(false);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    } finally {
      setLoading(false);
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
    <div className="bg-r-background mb-20 pt-0 sm:pt-5 min-h-screen backdrop-blur-lg">
      {loading && (
        <div className="text-center py-4">
          <span className="loading loading-spinner loading-md text-r-accent"></span>
          <p>Loading...</p>
        </div>
      )}

      <div className="w-11/12 container mx-auto p-6 shadow-xl rounded-xl grid md:grid-cols-3 gap-6 bg-gradient-to-br from-r-hover via-r-card to-r-hover text-r-text">
        <div className="pt-4 rounded-xl bg-opacity-30 sm:min-w-50 backdrop-blur-xl shadow-lg border border-[#588568] relative overflow-hidden">
        <div className="flex items-center justify-center">
  {loading ? (
    <p>Loading...</p>
  ) : (
    <div className="relative">
      <img
        src={photoURL || user?.photoURL} 
        alt="Profile"
        loading="lazy" 
        className="rounded-full xl:h-60 xl:w-60 md:h-40 md:w-40 h-80 w-80 object-cover border border-primary/50 hover:scale-105 transition-transform duration-300"
      />
      <label htmlFor="upload-image">
        <div
          className={`absolute bottom-8 sm:bottom-6 sm:right-6 md:bottom-2 md:right-2 xl:bottom-6 xl:right-6 right-8 bg-r-primary text-white p-3 rounded-full cursor-pointer transition-transform ${
            loading ? "opacity-50 cursor-not-allowed" : "hover:scale-110"
          }`}
        >
          <FaCamera className="h-5 w-5" />
        </div>
      </label>
      <input
        type="file"
        id="upload-image"
        accept="image/*"
        style={{ display: "none" }}
        onChange={handleFileChange}
        disabled={loading} // 
      />
    </div>
  )}
</div>

          <div className="mt-6 p-5 space-y-2">
            <h3 className="text-lg font-bold text-r-primary">Work</h3>
            <p className="text-r-text">{profile?.work}</p>
            <p className="text-r-text">{profile?.address}</p>
          </div>
          <div className=" p-5">
            <h3 className="text-lg font-bold text-r-primary">Skills</h3>
            <p className="text-r-text flex flex-wrap  gap-3">
              {(profile?.skills || []).map((skill, index) => (
                <span
                  key={index}
                  className="shadow-md  w-max py-1 px-3 rounded-2xl bg-r-secondary/30 "
                >
                  {skill}
                </span>
              ))}
            </p>
          </div>
        </div>

        <div className="md:col-span-2">
          <div className="flex items-center  justify-between border-b border-[#588568] pb-4">
            <div>
              <h2 className="text-3xl font-extrabold text-r-text">
                {profile?.name || user?.displayName}
              </h2>
              <p className="text-r-text flex items-center mt-1">
                <FaMapMarkerAlt className="mr-2 text-r-primary" />{" "}
                {profile?.location}
              </p>
              <p className="text-r-info/90 text-lg font-semibold">
                {profile?.role}
              </p>
            </div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="p-2 bg-r-secondary/70 rounded-full hover:scale-110 transition-transform"
            >
              <FaEdit className="h-8 w-8 text-r-info" />
            </button>
          </div>

          <div className="mt-6 p-6 rounded-xl bg-opacity-30 backdrop-blur-xl border border-[#588568] shadow-lg">
            <h3 className="text-lg font-bold text-r-primary">
              Contact Information
            </h3>
            <p className="flex items-center text-r-text mt-2">
              <FiPhone className="mr-2 text-blue-400" /> {profile?.phone}
            </p>
            <p className="flex items-center text-r-text mt-2">
              <FiMail className="mr-2 text-blue-400" /> {profile?.email || user?.email}
            </p>
            <a
              href={profile?.website}
              className="border-b border-blue-500 text-blue-600"
            >
              my protfolio
            </a>
          </div>

          <div className="mt-6 p-6 rounded-xl bg-opacity-30 backdrop-blur-xl border border-[#588568] shadow-lg">
            <h3 className="text-lg font-bold text-r-primary">
              Basic Information
            </h3>
            <p className="text-r-text">Birthday: {profile?.birthday}</p>
            <p className="text-r-text">Gender: {profile?.gender}</p>
          </div>

          <div className="mt-6 p-6 rounded-xl bg-opacity-30 backdrop-blur-xl border border-[#588568] shadow-lg">
            <h3 className="text-lg font-bold text-r-primary">
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
        <div className="fixed inset-0  flex mt-[-300px] md:mt-0 pt-80  md:pt-10    justify-center min-h-screen bg-white  z-50">
          
          <div className="bg-gradient-to-br container from-r-hover h-max  via-r-card to-r-hover p-6 rounded-lg shadow-lg w-10/12 relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-2 text-r-text text-xl"
            >
              <FaTimes className="h-10 w-10" />
            </button>
            <h2 className="text-xl font-bold mb-4">Edit Profile</h2>
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              <input
                type="text"
                required
                name="name"
                value={profile?.name}
                onChange={handleChange}
                placeholder={user?.displayName}
                className="bg-transparent  p-2 focus:outline-none border-b border-r-primary"
              />
              <input
                type="text"
                name="location"
                value={profile?.location === "your location" ? "" : profile?.location}
                onChange={handleChange}
                placeholder="Location"
                className="bg-transparent p-2 focus:outline-none border-b border-r-primary"
              />
              <input
                type="text"
                name="role"
                value={profile?.role === "profession role" ? "" : profile?.role}
                onChange={handleChange}
                placeholder="Role"
                className="bg-transparent p-2 focus:outline-none border-b border-r-primary"
              />
              <input
                type="text"
                name="birthday"
                required
                value={profile?.birthday === "your birth year" ? "" : profile?.birthday}
                onChange={handleChange}
                placeholder="Birthday"
                className="bg-transparent p-2 focus:outline-none border-b border-r-primary"
              />
              <select
                name="gender"
                required
                value={profile?.gender === "your gender" ? "" : profile?.gender}
                onChange={handleChange}
                className="bg-transparent p-2 focus:outline-none border-b border-r-primary"
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              <input
                type="text"
                name="phone"
                value={profile?.phone === "phone number" ? "" : profile?.phone}
                onChange={handleChange}
                placeholder="Phone"
                className="bg-transparent p-2 focus:outline-none border-b border-r-primary"
              />
              <input
                type="text"
                name="email"
                required
                value={profile?.email}
                onChange={handleChange}
                placeholder={user?.email}
                className="bg-transparent p-2  focus:outline-none border-b border-r-primary"
              />
              <input
                type="text"
                name="website"
                value={profile?.website === "enter your protfolio link" ? "" : profile?.website}
                onChange={handleChange}
                placeholder="Website"
                className="bg-transparent p-2 focus:outline-none border-b border-r-primary"
              />
              <input
                type="text"
                name="work"
                value={profile?.work === "your profession " ? "" : profile?.work}
                onChange={handleChange}
                placeholder="Workplace"
                className="bg-transparent p-2 focus:outline-none border-b border-r-primary"
              />
              <input
                type="text"
                name="address"
                value={profile?.address === "your full address" ? "" : profile?.address}
                onChange={handleChange}
                placeholder="Work Address"
                className="bg-transparent p-2 focus:outline-none border-b border-r-primary"
              />
              <input
                type="text"
                name="skills"
                value={
                  Array.isArray(profile?.skills)
                    ? profile?.skills.join(", ").includes("add-your-skill")
                      ? ""
                      : profile?.skills.join(", ")
                    : profile?.skills
                }
                onChange={handleChange}
                placeholder="Skills (comma-separated)"
                className="bg-transparent p-2 focus:outline-none border-b border-r-primary md:col-span-2"
              />

              <div className="md:col-span-2 space-y-2">
                {(profile?.progress || []).map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2"
                  >
                    <input
                      type="text"
                      required
                      value={item?.description === "progress details " ? "" : item?.description}
                      placeholder="progress description"
                      onChange={(e) =>
                        handleProgressChange(
                          index,
                          "description",
                          e.target.value
                        )
                      }
                      className="flex-1 bg-transparent p-2 focus:outline-none border-b border-r-primary"
                    />
                    <input
                      type="text"
                      required
                      value={item?.year === "enter progress duration" ? "" : item?.year}
                      placeholder="year / duration"
                      onChange={(e) =>
                        handleProgressChange(index, "year", e.target.value)
                      }
                      className="w-1/3 md:w-1/4 bg-transparent p-2 focus:outline-none border-b border-r-primary"
                    />
                  </div>
                ))}
              </div>

              <div className="md:col-span-2 flex mt-5 justify-start space-x-3">
                <button
                  type="button"
                  onClick={addProgressEntry}
                  className="px-4 py-2 bg-r-accent/60 duration-500 hover:shadow-lg text-r-text border border-green-700 hover:border-transparent hover:bg-r-secondary/50  font-medium rounded-full "
                >
                  + Add Progress
                </button>

                <button
                  type="submit"
                  className="px-4 py-2 bg-r-accent/60 duration-500 hover:shadow-lg text-r-text border border-green-700 hover:border-transparent  font-bold rounded-full hover:bg-r-secondary/50"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardProfile;
