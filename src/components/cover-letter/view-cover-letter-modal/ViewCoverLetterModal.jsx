import React, { useState, useEffect } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button } from '@mui/material';
import { useAxiosPublic } from '../../../../hooks/useAxiosPublic';


const ViewCoverLetterModal = ({ open, onClose, coverLetterId }) => {
    const axiosPublic = useAxiosPublic();
    const [coverLetter, setCoverLetter] = useState(null);
    const [showDemo, setShowDemo] = useState(false);
    const [isEmpty, setIsEmpty] = useState(false);

    useEffect(() => {
        if (coverLetterId) {
            axiosPublic.get(`/cover-letter/${coverLetterId}`)
                .then(res => {
                    if (res.status === 200) {
                        setCoverLetter(res.data.result[0]);  // Assuming the result is an array, take the first element
                        setIsEmpty(false);
                    }
                })
                .catch(() => {
                    setIsEmpty(true);
                });
        }
    }, [coverLetterId]);

    const { personalInfo, hiringManager, greeting, introduction, professionalExperience, skillsAndQualifications, goodFit, closing, ending } = coverLetter || {};

    const textClass = "text-sm font-normal text-gray-700"; // Class for text styling

    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="lg">
            <DialogTitle>Cover Letter Details</DialogTitle>
            <DialogContent>
                <div className="container pb-8 lg:pb-12">
                    <div id="cover-letter-content" className="max-w-4xl mx-auto p-4 bg-r-accent text-center flex items-center justify-center gap-3 rounded-md">
                        <span className="text-sm font-medium text-white">Show Demo</span>
                        <input
                            type="checkbox"
                            className="toggle text-r-primary"
                            checked={showDemo}
                            onChange={(e) => setShowDemo(e.target.checked)}
                        />
                    </div>

                    {!showDemo && isEmpty ? (
                        <p className="text-center mt-4 text-gray-500 italic">No cover letter data provided yet.</p>
                    ) : (
                        <div className="max-w-4xl mx-auto p-8 bg-white text-black shadow-lg rounded-lg mt-4">
                            {/* Personal Information */}
                            <div className={`${textClass}`}>
                                <p className="font-bold">{personalInfo?.fullName}</p>
                                <p className="">{personalInfo?.address}</p>
                                <p className="">{personalInfo?.cityZip}</p>
                                <p className="">{personalInfo?.email}</p>
                                <p className="">{personalInfo?.phone}</p>
                                <p className="">
                                    <a href={`https://${personalInfo?.linkedIn}`} className="text-blue-600">{personalInfo?.linkedIn}</a>
                                </p>
                                <p className="">
                                    <a href={personalInfo?.portfolio} className="text-blue-600">{personalInfo?.portfolio}</a>
                                </p>
                            </div>

                            <div className={`${textClass}`}>
                                <p className="">{personalInfo?.date}</p>
                            </div>

                            {/* Hiring Manager Information */}
                            <div className={`${textClass} mt-6`}>
                                <p className="font-semibold">{hiringManager?.name}</p>
                                <p className="">{hiringManager?.company}</p>
                                <p className="">{hiringManager?.address}</p>
                                <p className="">{hiringManager?.cityZip}</p>
                            </div>

                            {/* Greeting */}
                            {greeting && (
                                <p className={`${textClass} mt-6`}>{greeting}</p>
                            )}

                            {/* Introduction */}
                            {introduction && (
                                <p className={`${textClass} mt-4`}>{introduction}</p>
                            )}

                            {/* Professional Experience */}
                            {professionalExperience && (
                                <>
                                    <p className={`${textClass}`}>{professionalExperience}</p>
                                </>
                            )}

                            {/* Skills and Qualifications */}
                            {skillsAndQualifications && (
                                <>
                                    <p className={`${textClass}`}>{skillsAndQualifications}</p>
                                </>
                            )}

                            {/* Why You’re a Good Fit */}
                            {goodFit && (
                                <>
                                    <p className={`${textClass}`}>{goodFit}</p>
                                </>
                            )}

                            {/* Closing */}
                            {closing && (
                                <>
                                    <p className={`${textClass}`}>{closing}</p>
                                </>
                            )}

                            {/* Signature */}
                            {ending && (
                                <>
                                    <p className={`${textClass} mt-4`}>{ending.formalClosing}</p>
                                    <p className={`${textClass}`}>{ending.signature}</p>
                                </>
                            )}
                        </div>
                    )}
                </div>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="primary">
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default ViewCoverLetterModal;
