import { useContext } from 'react';
import { ResumeContext } from '../../../contextApi/resume-context/ResumeContext';


const FinalOutput = () => {
    const { resumeData } = useContext(ResumeContext);
    console.log(resumeData);
    return (
        <div className="p-4 text-black">
            <h2>Personal Info</h2>
            <pre>{JSON.stringify(resumeData.personalInfo)}</pre>

            <h2>Education</h2>
            <pre>{JSON.stringify(resumeData.education, null, 2)}</pre>

            <h2>Skills</h2>
            <pre>{JSON.stringify(resumeData.skills, null, 2)}</pre>

            <h2>Social Links</h2>
            <pre>{JSON.stringify(resumeData.socialLinks, null, 2)}</pre>

            <h2>Projects</h2>
            <pre>{JSON.stringify(resumeData.projects, null, 2)}</pre>

            <h2>Experience</h2>
            <pre>{JSON.stringify(resumeData.experience, null, 2)}</pre>
        </div>
    );
};

export default FinalOutput;
