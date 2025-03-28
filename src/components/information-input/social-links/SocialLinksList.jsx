import React, { useContext } from "react";
import SocialLinkForm from "./SocialLinkForm";
import LivePreview from "../live-preview/LivePreview";
import SectionHead from "../../header/section-head/SectionHead";
import { ResumeContext } from "../../../contextApi/resume-context/ResumeContext";

const SocialLinksList = () => {
  const { resumeData, updateSection } = useContext(ResumeContext);

  const addSocialLink = (link) => {
    updateSection("socialLinks", [...resumeData.socialLinks, link]);
  };

  return (
    <div className="p-4">
      <SectionHead subTitle={"Add your Social Links"} title={"Add Social Links"} />

      <div className="grid grid-cols-2 gap-4">
        <SocialLinkForm
          addSocialLink={addSocialLink}
        />
        {/* Live Preview */}
        <div>
          <LivePreview />
        </div>
      </div>

    </div>
  );
};

export default SocialLinksList;
