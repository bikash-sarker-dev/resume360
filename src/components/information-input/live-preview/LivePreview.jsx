import { useContext } from "react";
import { ResumeContext } from "../../../contextApi/resume-context/ResumeContext";

const LivePreview = () => {
    const { resumeData } = useContext(ResumeContext);
    console.log(resumeData);
    return (
        <>
            <div className="p-4 text-black">
                <h2>Personal Info</h2>
                <p>{JSON.stringify(resumeData.personalInfo)}</p>

                <h2>Education</h2>
                <pre>{JSON.stringify(resumeData.education)}</pre>

                <h2>Skills</h2>
                <pre>{JSON.stringify(resumeData.skills)}</pre>

                <h2>Social Links</h2>
                <pre>{JSON.stringify(resumeData.socialLinks)}</pre>

                <h2>Projects</h2>
                <pre>{JSON.stringify(resumeData.projects)}</pre>

                <h2>Experience</h2>
                <pre>{JSON.stringify(resumeData.experience)}</pre>
            </div>
            <img src="https://i.ibb.co.com/pBTDf678/Whats-App-Image-2025-03-20-at-13-20-15-8709966e.jpg" alt="resume" />

        </>
    );
};

export default LivePreview;