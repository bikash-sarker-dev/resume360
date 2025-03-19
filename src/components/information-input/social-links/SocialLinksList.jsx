import React, { useState } from "react";
import SocialLinkForm from "./SocialLinkForm";

const SocialLinksList = () => {
  const [socialLinks, setSocialLinks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addSocialLink = (link) => {
    setSocialLinks([...socialLinks, link]);
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold mb-4">Social Links</h2>

        {/* Open Modal Button */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="rounded-full text-white bg-r-primary py-2 px-5"
        >
          Add Social Link
        </button>
      </div>


      <div className="space-y-2">
        {socialLinks.map((social, index) => (
          <div key={index} className="border p-3 rounded shadow">
            <strong>{social.platform}:</strong> <a href={social.link} target="_blank" rel="noreferrer" className="text-blue-600">{social.link}</a>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <SocialLinkForm
          addSocialLink={addSocialLink}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

export default SocialLinksList;
