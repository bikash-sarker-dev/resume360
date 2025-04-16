import React, { useContext, useState } from "react";
import { ResumeContext } from "../../../contextApi/resume-context/ResumeContext";

const LivePreview = () => {
    const { resumeData } = useContext(ResumeContext);
    const [showDemo, setShowDemo] = useState(false);
    console.log(resumeData);

    const demoData = {
        personalInfo: {
            fullName: "Johnathan Doe",
            jobTitle: "Senior Frontend Engineer",
            address: "Brooklyn, New York, USA",
            phone: "+1 (234) 567-8900",
            email: "johnathan.doe@example.com",
            about: "Creative and detail-oriented frontend engineer with 5+ years of experience crafting intuitive and dynamic user interfaces. Skilled in modern frameworks and passionate about delivering seamless user experiences.",
        },
        education: [
            {
                degree: "BSc",
                field: "Computer Science",
                school: "ABC University",
                startDate: "Feb 2016",
                endDate: "Feb 2020",
                description: "Graduated with honors. Focused on software engineering, web development, and UX/UI design.",
            }
        ],
        skills: [
            "React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS",
            "CSS Modules", "Git", "REST APIs", "Vite", "Figma", "Unit Testing"
        ],
        socialLinks: [
            { platform: "LinkedIn", link: "https://linkedin.com/in/johnathandoe" },
            { platform: "GitHub", link: "https://github.com/johnathandoe" },
            { platform: "Twitter", link: "https://twitter.com/johnathandoe" },
        ],
        projects: [
            {
                projectName: "Portfolio Website",
                live: "https://johnathandoe.dev",
                client: "https://github.com/johnathandoe/portfolio-client",
                server: "https://github.com/johnathandoe/portfolio-server",
                description: "A personal portfolio to showcase skills and projects with a modern, minimal design.",
                features: [
                    "Responsive Design",
                    "Dark Mode",
                    "Animations with Framer Motion"
                ],
            },
            {
                projectName: "Task Management App",
                live: "https://taskflow.app",
                client: "https://github.com/johnathandoe/taskflow-client",
                server: "https://github.com/johnathandoe/taskflow-server",
                description: "A full-stack task manager with team collaboration and Kanban-style boards.",
                features: [
                    "User Authentication",
                    "Drag & Drop Tasks",
                    "Real-time Updates with WebSockets",
                ],
            },
        ],
        experience: [
            {
                position: "Senior Frontend Engineer",
                company: "NextWave Tech",
                startMonth: "Feb 2023",
                endMonth: "Present",
                description: "Leading the frontend team to build scalable and accessible enterprise dashboards using Next.js and Tailwind. Mentoring junior devs and collaborating closely with UX designers.",
            }
        ],
        languages: [
            { language: "English", proficiency: "Native" },
            { language: "Spanish", proficiency: "Professional Working" },
            { language: "French", proficiency: "Basic" },
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
    const subtitleClass = "text-sm";
    const headerClass = "font-semibold";
    const subheaderClass = "text-xs font-semibold";
    const textClass = "text-xs";

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
                            <h1 className={titleClass}><p>{personalInfo?.fullName}</p></h1>
                            <h1 className={subtitleClass}>{personalInfo?.jobTitle}</h1>
                        </>
                    )}

                    {/* Contact Info */}
                    {(personalInfo?.address || personalInfo?.phone || personalInfo?.email || socialLinks?.length) && (
                        <p className={`${textClass} mb-6 italic`}>
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
                            <p className={`${textClass} mb-6`}>
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
                                    <div>
                                        <h3 className={subheaderClass}>{exp.position} – {exp.company}</h3>
                                        <p className={`${textClass} text-sm`}>{exp.startMonth} – {exp.endMonth}</p>
                                    </div>
                                    <p className={`${textClass}`}>{exp.description}</p>
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
                                    <div>
                                        <h3 className={subheaderClass}>{edu.degree} in {edu.field} – {edu.school}</h3>
                                        <p className={`${textClass} text-sm`}>{edu.startDate} – {edu.endDate}</p>
                                    </div>
                                    <p className={`${textClass}`}>{edu.description}</p>
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
                            <ul className={`${textClass}`}>
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
