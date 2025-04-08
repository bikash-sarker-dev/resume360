import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const SocialLinkForm = ({ addSocialLink }) => {
  const [platform, setPlatform] = useState("");
  const [link, setLink] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (link.trim()) {
      addSocialLink({ platform, link });
      setPlatform("LinkedIn");
      setLink("");
    }
  };

  const platforms = ["LinkedIn", "Facebook", "Twitter", "GitHub", "Instagram", "Portfolio"];

  return (
    <div>
    {/* Form */}
        <form onSubmit={handleSubmit} className="grid gap-4">
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
            <button type="submit" className="cursor-pointer rounded-full text-white bg-r-primary py-2 px-5">Add</button>
        </form>
      </div>
  );
};

export default SocialLinkForm;
