import React, { useContext } from "react";
import SocialLinkForm from "./SocialLinkForm";
import { ResumeContext } from "../../../contextApi/resume-context/ResumeContext";

const SocialLinksList = () => {
  const { resumeData, updateSection } = useContext(ResumeContext);

  const addSocialLink = (link) => {
    updateSection("socialLinks", [...resumeData.socialLinks, link]);
  };

  const deleteSocialLink = (indexToDelete) => {
    const updatedLinks = resumeData.socialLinks.filter((_, index) => index !== indexToDelete);
    updateSection("socialLinks", updatedLinks);
  };

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 gap-4">
        <SocialLinkForm addSocialLink={addSocialLink} />
      </div>

      {/* Render list of social links */}
      {resumeData.socialLinks?.length > 0 && (
        <div className="mt-6">
          {resumeData.socialLinks.map((item, index) => (
            <div
              key={index}
              className="mb-3 p-4 border border-gray-300 rounded-lg shadow-sm relative"
            >
              <button
                onClick={() => deleteSocialLink(index)}
                className="absolute top-2 right-2 text-sm text-white bg-red-500 hover:bg-red-600 px-3 py-1 rounded-full"
              >
                Delete
              </button>
              <p className="font-semibold">{item.platform}</p>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline break-all"
              >
                {item.link}
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SocialLinksList;
