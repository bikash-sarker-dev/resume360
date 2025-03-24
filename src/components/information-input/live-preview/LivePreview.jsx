import React, { useContext } from "react";
import { ResumeContext } from "../../../contextApi/resume-context/ResumeContext";

const LivePreview = () => {
    const { resumeData } = useContext(ResumeContext);
    const {
        personalInfo = {},
        education = [],
        skills = [],
        socialLinks = [],
        projects = [],
        experience = [],
    } = resumeData;

    // Default Personal Info
    const fullName = personalInfo.fullName || "Your Name";
    const address = personalInfo.address || "Dhaka, Bangladesh";
    const email = personalInfo.email || "example@gmail.com";
    const phone = personalInfo.phone || "+8801XXXXXXX";
    const about = personalInfo.about || "An enthusiastic professional with a strong desire to learn and grow in the field.";

    const handleSaveResume = async () => {
        try {
            const response = await fetch('https://your-api-url.com/api/saveResume', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(resumeData)
            });
            const result = await response.json();
            if (response.ok) {
                console.log("Resume saved successfully!", result);
                alert("Resume saved successfully!");
            } else {
                console.error("Failed to save resume", result);
                alert("Failed to save resume");
            }
        } catch (error) {
            console.error("Error saving resume:", error);
            alert("Error saving resume");
        }
    };

    return (
        <div className="mx-auto pb-8 lg:pb-12">
            <div className="bg-white p-12">
                <h1 className="font-bold mb-3">{fullName}</h1>
                <h2 className="text-[12px] font-bold mb-2">UX DESIGNER</h2>
                <p className="text-[10px] mb-2">
                    <i className="fa-solid fa-location-dot mr-2"></i>{address} |{" "}
                    <i className="fa-solid fa-envelope mr-2"></i>{email} |{" "}
                    <i className="fa-solid fa-phone mr-2"></i>{phone}
                </p>

                {/* Social Links */}
                <div className="text-[10px]">
                    {(socialLinks.length ? socialLinks : [{ platform: "linkedin", link: "https://linkedin.com" }]).map((link, index) => (
                        <a key={index} href={link.link} className="mr-10" target="_blank" rel="noreferrer">
                            <i className={`fa-brands fa-${link.platform.toLowerCase()}`}></i>
                        </a>
                    ))}
                </div>

                {/* Summary */}
                <section className="mt-2">
                    <h3 className="text-[13px] font-bold bg-gray-300 px-6 py-1 rounded-full mb-2">SUMMARY</h3>
                    <p className="text-[10px]">{about}</p>
                </section>

                {/* Skills */}
                <section className="mt-2">
                    <h3 className="text-[13px] font-bold bg-gray-300 px-6 py-1 rounded-full mb-2">TECHNICAL SKILLS</h3>
                    <div className="text-[10px] flex">
                        {(skills.length ? skills : ["HTML", "CSS", "JavaScript"]).map((skill, index) => (
                            <p key={index}> {skill},</p>
                        ))}
                    </div>
                </section>

                {/* Experience */}
                <section className="mt-2">
                    <h3 className="text-[13px] font-bold bg-gray-300 px-6 py-1 rounded-full mb-2">EXPERIENCE</h3>
                    {(experience.length ? experience : [{
                        company: "ABC Company",
                        duration: "Jan 2020 - Dec 2022",
                        position: "Front-End Developer",
                        description: "Worked on various web projects using React and Tailwind CSS."
                    }]).map((exp, index) => (
                        <div key={index} className="mb-4 text-[10px]">
                            <div className="grid grid-cols-2 font-bold">
                                <p>{exp.company}</p>
                                <p>{exp.duration}</p>
                            </div>
                            <p>{exp.position}</p>
                            <p>{exp.description}</p>
                        </div>
                    ))}
                </section>

                {/* Projects */}
                <section className="mt-2">
                    <h3 className="text-[13px] font-bold bg-gray-300 px-6 py-1 rounded-full mb-2">PROJECTS</h3>
                    {(projects.length ? projects : [{
                        projectName: "Sample Project",
                        description: "Developed a web application for task management.",
                        live: "#",
                        client: "#",
                        server: "#",
                        features: ["User Authentication", "Real-time Updates"]
                    }]).map((proj, index) => (
                        <div key={index} className="text-[10px]">
                            <p className="font-bold">{index + 1}. {proj.projectName}</p>
                            <p>{proj.description}</p>
                            <div className="grid grid-cols-3 gap-4">
                                <a className="underline text-blue-500" href={proj.live} target="_blank" rel="noreferrer"><p>Live</p></a>
                                <a className="underline text-blue-500" href={proj.client} target="_blank" rel="noreferrer"><p>Client</p></a>
                                <a className="underline text-blue-500" href={proj.server} target="_blank" rel="noreferrer"><p>Server</p></a>
                            </div>
                            <ul className="list-disc list-inside">
                                {proj.features.map((feature, i) => (
                                    <li key={i}>{feature}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </section>

                {/* Education */}
                <section className="mt-2">
                    <h3 className="text-[13px] font-bold bg-gray-300 px-6 py-1 rounded-full mb-2">EDUCATION</h3>
                    {(education.length ? education : [{
                        degree: "Bachelor of Science",
                        field: "Computer Science",
                        startMonth: "Jan",
                        startYear: "2018",
                        endMonth: "Dec",
                        endYear: "2022",
                        school: "XYZ University",
                        grade: "3.80/4.00"
                    }]).map((edu, index) => (
                        <div key={index} className="mb-4 text-[10px]">
                            <div className="grid grid-cols-2 font-bold">
                                <p>{edu.degree} in {edu.field}</p>
                                <p>{edu.startMonth} {edu.startYear} - {edu.endMonth} {edu.endYear}</p>
                            </div>
                            <p>{edu.school}</p>
                            <p>GPA: {edu.grade}</p>
                        </div>
                    ))}
                </section>

                {/* Languages */}
                <section className="mt-2">
                    <h3 className="text-[13px] font-bold bg-gray-300 px-6 py-1 rounded-full mb-2">LANGUAGES</h3>
                    <ul className="list-inside list-disc text-[10px]">
                        <li className="flex"><p className="font-bold">English:</p><p> Comfortable</p></li>
                        <li className="flex"><p className="font-bold">Bangla:</p><p> Native</p></li>
                    </ul>
                </section>
            </div>

            <button
                className="cursor-pointer bg-r-primary text-white px-6 py-2 rounded mt-4"
                onClick={handleSaveResume}
            >
                Save Resume
            </button>
        </div>
    );
};

export default LivePreview;
