import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';

const ResumeView = ({ open, handleClose, resume }) => {
    if (!resume) return null;

    const { personalInfo, education, skills, socialLinks, projects, experience, languages } = resume;

    return (
        <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
            <DialogTitle>{personalInfo?.fullName}'s Resume</DialogTitle>
            <DialogContent dividers>
                <section className="space-y-3">
                    <h3 className="text-lg font-semibold">Personal Info</h3>
                    <p><strong>Email:</strong> {personalInfo?.email}</p>
                    <p><strong>Phone:</strong> {personalInfo?.phone}</p>
                    <p><strong>Address:</strong> {personalInfo?.address}</p>
                    <p><strong>Job Title:</strong> {personalInfo?.jobTitle}</p>
                    <p><strong>About:</strong> {personalInfo?.about}</p>

                    <h3 className="text-lg font-semibold mt-4">Education</h3>
                    {education?.map((edu, i) => (
                        <div key={i}>
                            <p><strong>{edu.degree} in {edu.field}</strong> at {edu.school}</p>
                            <p>{edu.startDate?.split('T')[0]} - {edu.endDate?.split('T')[0]}</p>
                            <p>{edu.description}</p>
                        </div>
                    ))}

                    <h3 className="text-lg font-semibold mt-4">Skills</h3>
                    <p>{skills?.join(', ')}</p>

                    <h3 className="text-lg font-semibold mt-4">Experience</h3>
                    {experience?.map((exp, i) => (
                        <div key={i}>
                            <p><strong>{exp.position}</strong> at {exp.company}</p>
                            <p>{exp.startMonth} - {exp.endMonth}</p>
                            <p>{exp.description}</p>
                        </div>
                    ))}

                    <h3 className="text-lg font-semibold mt-4">Projects</h3>
                    {projects?.map((proj, i) => (
                        <div key={i}>
                            <p><strong>{proj.projectName}</strong></p>
                            <p>{proj.description}</p>
                            <ul className="list-disc pl-4">
                                {proj.features?.map((f, j) => <li key={j}>{f}</li>)}
                            </ul>
                        </div>
                    ))}

                    <h3 className="text-lg font-semibold mt-4">Languages</h3>
                    {languages?.map((lang, i) => (
                        <p key={i}>{lang.language} - {lang.proficiency}</p>
                    ))}

                    <h3 className="text-lg font-semibold mt-4">Social Links</h3>
                    {socialLinks?.map((link, i) => (
                        <p key={i}><strong>{link.platform}:</strong> <a href={link.link} target="_blank" rel="noreferrer">{link.link}</a></p>
                    ))}
                </section>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary" variant="contained">Close</Button>
            </DialogActions>
        </Dialog>
    );
};

export default ResumeView;
