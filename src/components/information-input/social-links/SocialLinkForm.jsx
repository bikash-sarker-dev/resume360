import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const SocialLinkForm = ({ addSocialLink, onClose }) => {
  const [platform, setPlatform] = useState("");
  const [link, setLink] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (link.trim()) {
      addSocialLink({ platform, link });
      setPlatform("LinkedIn");
      setLink("");
      onClose(); // Close the modal after saving
    }
  };

  const platforms = ["LinkedIn", "Facebook", "Twitter", "GitHub", "Instagram", "Portfolio"];

  return (
    <div className="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6 relative">
        {/* Modal Header */}
        <div className="flex items-center pb-3 border-b border-gray-300">
          <h3 className="text-slate-900 text-xl font-semibold flex-1">Add Social Link</h3>
          <svg onClick={onClose} xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 ml-2 cursor-pointer fill-gray-400 hover:fill-red-500"
            viewBox="0 0 320.591 320.591">
            <path d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z" />
            <path d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z" />
          </svg>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
          <div>
            <TextField
              select
              fullWidth
              required
              label="Select Platform"
              value={platform}
              onChange={(e) => setPlatform(e.target.value)}
            >
              {platforms.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </div>

          <div>
            <TextField
              required
              fullWidth
              id="outlined-required"
              label="Profile Link"
              value={link}
              onChange={(e) => setLink(e.target.value)}
              placeholder="https://your-profile-link"
            />
          </div>

          {/* Buttons */}
          <div className="border-t border-gray-300 pt-6 flex justify-end gap-4">
            <button type="button" onClick={onClose}
              className="cursor-pointer rounded-full text-white bg-r-secondary py-2 px-5">Close</button>
            <button type="submit"
              className="cursor-pointer rounded-full text-white bg-r-primary py-2 px-5">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SocialLinkForm;
