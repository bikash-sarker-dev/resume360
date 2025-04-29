
const CustomeTemplate0 = ({ resumeData }) => {
    const { personalInfo, education, skills, socialLinks, projects, experience, languages } = resumeData;
    const titleClass = "text-xl font-bold";
    const subtitleClass = "text-sm";
    const headerClass = "font-semibold";
    const subheaderClass = "text-xs font-semibold";
    const textClass = "text-xs";
    return (
        <>
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
        </>
    );
};

export default CustomeTemplate0;