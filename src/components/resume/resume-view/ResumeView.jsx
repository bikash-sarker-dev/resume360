import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { generateDocx } from '../resume-download/generateDocx';
import ResumePDF from '../resume-download/ResumePDF';


const ResumeView = ({ open, handleClose, resume }) => {
    if (!resume) return null;

    const { personalInfo, education, skills, socialLinks, projects, experience, languages } = resume;

    const titleClass = "text-3xl font-bold";
    const subtitleClass = "text-xl font-medium text-gray-600";
    const headerClass = "text-2xl font-semibold mt-6 pb-1";
    const subheaderClass = "text-lg font-semibold";
    const textClass = "text-base text-gray-800";

    return (
        <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth scroll="paper">
            <DialogContent dividers>
                <div className="max-w-4xl mx-auto p-4 text-black bg-white">
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
            </DialogContent>
            <DialogActions className="flex flex-wrap justify-center md:justify-end gap-3 px-4 pb-4">
                {/* PDF Download Button */}
                <PDFDownloadLink
                    document={<ResumePDF resumeData={resume} />}
                    fileName={`${personalInfo?.fullName || 'resume'}.pdf`}
                >
                    {({ loading }) => (
                        <button
                            className='btn bg-r-accent text-r-text hover:bg-r-primary hover:text-white h-12 px-4 text-sm rounded'
                            disabled={loading}
                        >
                            {loading ? 'Preparing PDF...' : 'Download PDF'}
                        </button>
                    )}
                </PDFDownloadLink>

                {/* DOCX Download Button */}
                <button
                    className='btn bg-r-accent text-r-text hover:bg-r-primary hover:text-white h-12 px-4 text-sm rounded'
                    onClick={() => generateDocx(resume)}
                >
                    Download DOCX
                </button>

                {/* Close Button */}
                <button
                    className='btn bg-red-400 text-white hover:bg-red-600 h-12 px-4 text-sm rounded'
                    onClick={handleClose}
                >
                    Close
                </button>
            </DialogActions>
        </Dialog>
    );
};

export default ResumeView;
