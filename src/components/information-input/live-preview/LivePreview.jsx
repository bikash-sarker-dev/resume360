import React, { useContext } from "react";
import { ResumeContext } from "../../../contextApi/resume-context/ResumeContext";

const LivePreview = () => {
    const { resumeData } = useContext(ResumeContext);
    // const { personalInfo, education, skills, socialLinks, projects, experience } = resumeData;
    console.log(resumeData);

    // const handleSaveResume = async () => {
    //     try {
    //         const response = await fetch('https://your-api-url.com/api/saveResume', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify(resumeData)
    //         });

    //         const result = await response.json();
    //         if (response.ok) {
    //             console.log("Resume saved successfully!", result);
    //             alert("Resume saved successfully!");
    //         } else {
    //             console.error("Failed to save resume", result);
    //             alert("Failed to save resume");
    //         }
    //     } catch (error) {
    //         console.error("Error saving resume:", error);
    //         alert("Error saving resume");
    //     }
    // };

    // Tailwind reusable class names
    const titleClass = "text-xl font-bold";
    const subtitleClass = "text-sm text-center";
    const headerClass = "font-semibold mb-4";
    const subheaderClass = "text-sm font-semibold mb-2";
    const textClass = "text-xs leading-relaxed";


    return (
        <div className="container pb-8 lg:pb-12">
            <div className="max-w-4xl mx-auto p-8 bg-white text-black shadow-xl">

                {/* Title */}
                <h1 className={titleClass}><p className="text-center">Lorem Ipsum</p></h1>
                <h1 className={subtitleClass}>Front End Developer</h1>

                {/* Contact Info */}
                <p className={`${textClass} mb-6 text-center italic`}>
                    Location | Phone Number | Email <br /> LinkedIn / Portfolio / GitHub
                </p>

                {/* Summary */}
                <h2 className={headerClass}>About</h2>
                <p className={`${textClass} mb-6`}>
                    Highly motivated and detail-oriented Frontend Developer with 3+ years of
                    experience in building responsive web applications. Proficient in React,
                    Tailwind CSS, and JavaScript frameworks. Passionate about creating
                    user-friendly experiences and clean code.
                </p>

                {/* Skills */}
                <h2 className={headerClass}>Skills</h2>
                <div className={`${textClass} ml-6 mb-6`}>
                    HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, Tailwind CSS, DaisyUI, Material UI, Git, GitHub, Figma, Adobe Photoshop
                </div>

                {/* Experience */}
                <h2 className={headerClass}>Professional Experience</h2>
                <div className="mb-6">
                    <div className="flex justify-between">
                        <h3 className={subheaderClass}>Frontend Developer – ABC Tech, Remote</h3>
                        <p className={`${textClass} text-sm`}>01/2022 – Present</p>
                    </div>
                    <div className={`${textClass} ml-6`}>
                        Proficient in React,
                        Tailwind CSS, and JavaScript frameworks. Passionate about creating
                        user-friendly experiences and clean code.
                    </div>
                </div>

                {/* Education */}
                <h2 className={headerClass}>Education</h2>
                <div className="mb-6">
                    <div className="flex justify-between">
                        <h3 className={subheaderClass}>B.Sc. in Computer Science – XYZ University</h3>
                        <p className={`${textClass} text-sm`}>2018 – 2022</p>
                    </div>
                    <div className={`${textClass} ml-6`}>
                        Proficient in React,
                        Tailwind CSS, and JavaScript frameworks. Passionate about creating
                        user-friendly experiences and clean code.
                    </div>
                </div>

                {/* Projects */}
                <h2 className={headerClass}>Projects</h2>
                <div className="mb-6">
                    <h3 className={subheaderClass}>Task Management App</h3>
                    <div className={textClass} >Live link / Repo Link</div>
                    <p className={textClass}>
                        Built a full-stack task management app with React, Node.js, and MongoDB
                        featuring real-time updates and drag-and-drop functionality.
                    </p>
                    <ul className={`${textClass} list-disc ml-6`}>
                        <li>Built a full-stack task management app with React</li>
                        <li>Built a full-stack task management app with React</li>
                        <li>Built a full-stack task management app with Reactx</li>
                    </ul>
                </div>

                {/* Languages */}
                <h2 className={headerClass}>Languages</h2>
                <ul className={`${textClass} ml-6`}>
                    <li>English – Fluent</li>
                    <li>Bangla – Native</li>
                </ul>
            </div>

            {/* <button
                className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded mt-4"
                onClick={handleSaveResume}
            >
                Save Resume
            </button> */}
        </div>

    );
};

export default LivePreview;
