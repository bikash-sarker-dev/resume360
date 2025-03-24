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

      
    </div>
  );
};

export default DashboardProfile;
