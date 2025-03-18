import React, { useState } from "react";
import SocialLinkForm from "./SocialLinkForm";

const SocialLinksList = () => {
  const [socialLinks, setSocialLinks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addSocialLink = (link) => {
    setSocialLinks([...socialLinks, link]);
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Social Links</h2>
      
      <div className="space-y-2">
        {socialLinks.map((social, index) => (
          <div key={index} className="border p-3 rounded shadow">
            <strong>{social.platform}:</strong> <a href={social.link} target="_blank" rel="noreferrer" className="text-blue-600">{social.link}</a>
          </div>
        ))}
      </div>

      {/* Open Modal Button */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="mt-6 px-4 py-2 rounded-lg text-white bg-blue-600 hover:bg-blue-700"
      >
        Add Social Link
      </button>

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
