import { useState } from "react";
import { FaStar, FaMapMarkerAlt, FaEdit, FaCross, FaTimes } from "react-icons/fa";
import { FiPhone, FiMail } from "react-icons/fi";

const DashboardProfile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [profile, setProfile] = useState({
    name: "Jeremy Rose",
    location: "New York, NY",
    role: "Product Designer",
    rating: 8.6,
    phone: "+1 123 456 7890",
    email: "hello@jeremyrose.com",
    website: "www.jeremyrose.com",
    birthday: "June 5, 1992",
    gender: "Male",
    work: "Spotify New York",
    address: "170 William Street, NY",
    skills: "Branding, UI/UX, Web Design",
    progress: [
      { year: "2019", description: "Joined Spotify", color: "blue-500" },
      { year: "2021", description: "Promoted to Senior Designer", color: "green-500" },
      { year: "2023", description: "Freelancing UX Projects", color: "yellow-500" },
    ],
  });

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleProgressChange = (index, field, value) => {
    const updatedProgress = [...profile.progress];
    updatedProgress[index][field] = value;
    setProfile({ ...profile, progress: updatedProgress });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsModalOpen(false); 
  };

  return (
    <div className="bg-r-primary/20 pt-0 sm:pt-5 min-h-screen backdrop-blur-lg">
        <div className="w-11/12 mx-auto p-6 shadow-xl rounded-xl grid md:grid-cols-3 gap-6 bg-gradient-to-br from-r-info via-r-card to-r-info text-r-text">
      
      <div className="p-6 rounded-xl bg-opacity-30 backdrop-blur-xl shadow-lg border border-r-primary/50 relative overflow-hidden">
        <div className="flex items-center justify-center">
        <img
          src="https://t4.ftcdn.net/jpg/02/24/86/95/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg"
          className="rounded-full h-80 w-80  object-cover border border-r-primary/50 hover:scale-105 transition-transform duration-300"
          alt="Profile"
        />
        </div>
        <div className="mt-6 space-y-2">
          <h3 className="text-lg font-bold text-purple-400">Work</h3>
          <p className="text-r-text">{profile.work}</p>
          <p className="text-r-text">{profile.address}</p>
        </div>
        <div className="mt-6">
          <h3 className="text-lg font-bold text-purple-400">Skills</h3>
          <p className="text-r-text">{profile.skills}</p>
        </div>
      </div>

     
      <div className="md:col-span-2">
        <div className="flex items-center justify-between border-b border-r-primary/50 pb-4">
          <div>
            <h2 className="text-3xl font-extrabold text-r-text">{profile.name}</h2>
            <p className="text-r-text flex items-center mt-1">
              <FaMapMarkerAlt className="mr-2 text-purple-400" /> {profile.location}
            </p>
            <p className="text-blue-400 text-lg font-semibold">{profile.role}</p>
            <div className="flex items-center mt-2">
              <span className="text-lg font-bold text-yellow-600">{profile.rating}</span>
              <div className="flex text-yellow-500 ml-2">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
            </div>
          </div>
          <button onClick={() => setIsModalOpen(true)} className="p-2 bg-r-info rounded-full hover:scale-110 transition-transform">
            <FaEdit className="h-8 w-8 text-blue-400" />
          </button>
        </div>

        <div className="mt-6 p-6 rounded-xl bg-opacity-30 backdrop-blur-xl border border-r-primary/50 shadow-lg">
          <h3 className="text-lg font-bold text-purple-400">Contact Information</h3>
          <p className="flex items-center text-r-text mt-2">
            <FiPhone className="mr-2 text-blue-400" /> {profile.phone}
          </p>
          <p className="flex items-center text-r-text mt-2">
            <FiMail className="mr-2 text-blue-400" /> {profile.email}
          </p>
          <p className="text-r-text mt-2">{profile.website}</p>
        </div>

        <div className="mt-6 p-6 rounded-xl bg-opacity-30 backdrop-blur-xl border border-r-primary/50 shadow-lg">
          <h3 className="text-lg font-bold text-purple-400">Basic Information</h3>
          <p className="text-r-text">Birthday: {profile.birthday}</p>
          <p className="text-r-text">Gender: {profile.gender}</p>
        </div>

        <div className="mt-6 p-6 rounded-xl bg-opacity-30 backdrop-blur-xl border border-r-primary/50 shadow-lg">
          <h3 className="text-lg font-bold text-purple-400">Career Progress</h3>
          <ul className="mt-3 space-y-3">
            {profile.progress.map((item, index) => (
              <li key={index} className={`border-l-4 border-${item.color} pl-4 text-r-text`}>{item.description} - {item.year}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-r-background bg-opacity-50 z-50">
          <div className="bg-gradient-to-br from-r-info via-r-card to-r-info p-6 rounded-lg shadow-lg w-10/12 relative">
            <button onClick={() => setIsModalOpen(false)} className="absolute top-2  right-2 text-r-text text-xl"><FaTimes className="h-10 w-10"></FaTimes></button>
            <h2 className="text-xl font-bold  mb-4">Edit Profile</h2>
            <form onSubmit={handleSubmit} className="space-y-3">
              {/* Personal Info */}
              <input type="text" name="name" value={profile.name} onChange={handleChange} placeholder="Name" className="w-full bg-transparent  p-2 focus:outline-none border-b border-r-primary" />
              <input type="text" name="location" value={profile.location} onChange={handleChange} placeholder="Location" className="w-full bg-transparent  p-2 focus:outline-none border-b border-r-primary" />
              <input type="text" name="role" value={profile.role} onChange={handleChange} placeholder="Role" className="w-full bg-transparent  p-2 focus:outline-none border-b border-r-primary" />

              {/* Basic Info */}
              <input type="text" name="birthday" value={profile.birthday} onChange={handleChange} placeholder="Birthday" className="w-full bg-transparent  p-2 focus:outline-none border-b border-r-primary" />
              <input type="text" name="gender" value={profile.gender} onChange={handleChange} placeholder="Gender" className="w-full bg-transparent  p-2 focus:outline-none border-b border-r-primary" />

              {/* Contact Info */}
              <input type="text" name="phone" value={profile.phone} onChange={handleChange} placeholder="Phone" className="w-full bg-transparent  p-2 focus:outline-none border-b border-r-primary" />
              <input type="text" name="email" value={profile.email} onChange={handleChange} placeholder="Email" className="w-full bg-transparent  p-2 focus:outline-none border-b border-r-primary" />
              <input type="text" name="website" value={profile.website} onChange={handleChange} placeholder="Website" className="w-full bg-transparent  p-2 focus:outline-none border-b border-r-primary" />

              {/* Work Info */}
              <input type="text" name="work" value={profile.work} onChange={handleChange} placeholder="Workplace" className="w-full bg-transparent  p-2 focus:outline-none border-b border-r-primary" />
              <input type="text" name="address" value={profile.address} onChange={handleChange} placeholder="Work Address" className="w-full bg-transparent  p-2 focus:outline-none border-b border-r-primary" />

              {/* Career Progress */}
              {profile.progress.map((item, index) => (
                <div key={index} className="flex space-x-2">
                  <input type="text" value={item.description} onChange={(e) => handleProgressChange(index, "description", e.target.value)} className="w-3/4 bg-transparent  p-2 focus:outline-none border-b border-r-primary" />
                  <input type="text" value={item.year} onChange={(e) => handleProgressChange(index, "year", e.target.value)} className="w-1/4 bg-transparent  p-2 focus:outline-none border-b border-r-primary" />
                </div>
              ))}

              <button type="submit" className="px-4 py-2 bg-white text-teal-600 font-bold rounded-md hover:bg-gray-100">Save</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardProfile;
