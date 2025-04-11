import React, { useContext, useState } from "react";
import { ResumeContext } from "../../../contextApi/resume-context/ResumeContext";

const LivePreview = () => {
    const { resumeData } = useContext(ResumeContext);
    const [showDemo, setShowDemo] = useState(false);
    console.log(resumeData);

    const demoData = {
        personalInfo: {
            fullName: "JOHN DOE",
            jobTitle: "Frontend Developer",
            address: "New York, USA",
            phone: "+1 234 567 890",
            email: "john@example.com",
            about: "Passionate frontend developer with 3+ years of experience building web apps.",
        },
        education: [
            {
                degree: "BSc",
                field: "Computer Science",
                school: "ABC University",
                startDate: "2016",
                endDate: "2020",
                description: "Graduated with honors.",
            },
        ],
        skills: ["React", "JavaScript", "Tailwind CSS", "Git"],
        socialLinks: [
            { platform: "LinkedIn", link: "https://linkedin.com" },
            { platform: "GitHub", link: "https://github.com" },
        ],
        projects: [
            {
                projectName: "Portfolio Website",
                live: "https://portfolio.com",
                client: "https://github.com/portfolio-client",
                server: "https://github.com/portfolio-server",
                description: "A personal portfolio to showcase projects.",
                features: ["Responsive Design", "Dark Mode", "Smooth Scroll"],
            },
        ],
        experience: [
            {
                position: "Frontend Developer",
                company: "Tech Corp",
                startMonth: "Jan 2021",
                endMonth: "Present",
                description: "Building scalable web applications using React.",
            },
        ],
        languages: [
            { language: "English", proficiency: "Fluent" },
            { language: "Spanish", proficiency: "Intermediate" },
        ],
    };

    const {
        personalInfo,
        education,
        skills,
        socialLinks,
        projects,
        experience,
        languages
    } = showDemo ? demoData : resumeData;

    const titleClass = "text-xl font-bold";
    const subtitleClass = "text-sm text-center";
    const headerClass = "font-semibold mb-4";
    const subheaderClass = "text-sm font-semibold mb-2";
    const textClass = "text-xs leading-relaxed";

    const isEmpty = !personalInfo?.fullName && !education?.length && !skills?.length &&
        !socialLinks?.length && !projects?.length && !experience?.length && !languages?.length;

    return (
        <div className="container pb-8 lg:pb-12">
            <div id="resume-content" className="max-w-4xl mx-auto p-4 bg-r-accent text-center flex items-center justify-center gap-3 rounded-md">
                <span className="text-sm font-medium text-white">Show Demo</span>
                <input
                    type="checkbox"
                    className="toggle text-r-primary"
                    checked={showDemo}
                    onChange={(e) => setShowDemo(e.target.checked)}
                />
            </div>

            {!showDemo && isEmpty ? (
                <p className="text-center mt-4 text-gray-500 italic">No resume data provided yet.</p>
            ) : (
                <div className="max-w-4xl mx-auto p-8 bg-white text-black shadow-xl mt-4">
                    {/* Title */}
                    {(personalInfo?.fullName || personalInfo?.jobTitle) && (
                        <>
                            <h1 className={titleClass}><p className="text-center">{personalInfo?.fullName}</p></h1>
                            <h1 className={subtitleClass}>{personalInfo?.jobTitle}</h1>
                        </>
                    )}

                    {/* Contact Info */}
                    {(personalInfo?.address || personalInfo?.phone || personalInfo?.email || socialLinks?.length) && (
                        <p className={`${textClass} mb-6 text-center italic`}>
                            {personalInfo?.address} | {personalInfo?.phone} | {personalInfo?.email}
                            <br />
                            {socialLinks?.map((link, i) => (
                                <span key={i}>
                                    <a href={link.link} className="underline mx-1" target="_blank" rel="noreferrer">{link.platform}</a>
                                </span>
                            ))}
                        </p>
                    )}

                    {/* About */}
                    {personalInfo?.about && (
                        <>
                            <h2 className={headerClass}>About</h2>
                            <p className={`${textClass} mb-6`}>{personalInfo.about}</p>
                        </>
                    )}

                    {/* Skills */}
                    {skills?.length > 0 && (
                        <>
                            <h2 className={headerClass}>Skills</h2>
                            <p className={`${textClass} ml-6 mb-6`}>
                                {skills.join(', ')}
                            </p>
                        </>
                    )}

                    {/* Experience */}
                    {experience?.length > 0 && (
                        <>
                            <h2 className={headerClass}>Professional Experience</h2>
                            {experience.map((exp, i) => (
                                <div className="mb-4" key={i}>
                                    <div className="flex justify-between">
                                        <h3 className={subheaderClass}>{exp.position} – {exp.company}</h3>
                                        <p className={`${textClass} text-sm`}>{exp.startMonth} – {exp.endMonth}</p>
                                    </div>
                                    <p className={`${textClass} ml-6`}>{exp.description}</p>
                                </div>
                            ))}
                        </>
                    )}

                    {/* Education */}
                    {education?.length > 0 && (
                        <>
                            <h2 className={headerClass}>Education</h2>
                            {education.map((edu, i) => (
                                <div className="mb-4" key={i}>
                                    <div className="flex justify-between">
                                        <h3 className={subheaderClass}>{edu.degree} in {edu.field} – {edu.school}</h3>
                                        <p className={`${textClass} text-sm`}>{edu.startDate} – {edu.endDate}</p>
                                    </div>
                                    <p className={`${textClass} ml-6`}>{edu.description}</p>
                                </div>
                            ))}
                        </>
                    )}

                    {/* Projects */}
                    {projects?.length > 0 && (
                        <>
                            <h2 className={headerClass}>Projects</h2>
                            {projects.map((project, i) => (
                                <div className="mb-6" key={i}>
                                    <h3 className={subheaderClass}>{project.projectName}</h3>
                                    <div className={`${textClass} mb-1`}>
                                        <a href={project.live} className="underline mr-2" target="_blank" rel="noreferrer">Live</a>
                                        <a href={project.client} className="underline mr-2" target="_blank" rel="noreferrer">Client</a>
                                        {project.server && (
                                            <a href={project.server} className="underline" target="_blank" rel="noreferrer">Server</a>
                                        )}
                                    </div>
                                    <p className={textClass}>{project.description}</p>
                                    <ul className={`${textClass} list-disc ml-6`}>
                                        {project.features?.map((feature, index) => <li key={index}>{feature}</li>)}
                                    </ul>
                                </div>
                            ))}
                        </>
                    )}

                    {/* Languages */}
                    {languages?.length > 0 && (
                        <>
                            <h2 className={headerClass}>Languages</h2>
                            <ul className={`${textClass} ml-6`}>
                                {languages.map((lang, i) => (
                                    <li key={i}>{lang.language} – {lang.proficiency}</li>
                                ))}
                            </ul>
                        </>
                    )}
                </div>
            )}
        </div>
    );
};

export default LivePreview;
