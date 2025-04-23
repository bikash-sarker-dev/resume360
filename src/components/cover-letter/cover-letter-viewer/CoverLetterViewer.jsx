// components/CoverLetterViewer.jsx
import React from 'react';
import { Dialog, DialogContent, DialogActions } from '@mui/material';
import { PDFDownloadLink } from '@react-pdf/renderer';

import { generateDocx } from '../cover-letter-download/generateDocx';
import CoverLetterPDF from '../cover-letter-download/CoverLetterPDF';

const CoverLetterViewer = ({ open, onClose, data }) => {
    if (!data) return null;

    const textClass = "text-sm md:text-base leading-relaxed";

    return (
        <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
            <DialogContent dividers>
                <div className="prose max-w-full">
                    <div className="max-w-4xl mx-auto px-4 md:px-8 py-6 md:py-10 bg-white text-black shadow-lg rounded-md overflow-auto">
                        {/* Personal Information */}
                        <div className={`${textClass}`}>
                            <p className="font-bold">{data.personalInfo.fullName}</p>
                            <p>{data.personalInfo.address}</p>
                            <p>{data.personalInfo.cityZip}</p>
                            <p>{data.personalInfo.email}</p>
                            <p>{data.personalInfo.phone}</p>
                            {data.personalInfo.linkedIn && (
                                <p>
                                    <a
                                        href={`https://${data.personalInfo.linkedIn}`}
                                        className="text-blue-600 break-words"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {data.personalInfo.linkedIn}
                                    </a>
                                </p>
                            )}
                            {data.personalInfo.portfolio && (
                                <p>
                                    <a
                                        href={data.personalInfo.portfolio}
                                        className="text-blue-600 break-words"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {data.personalInfo.portfolio}
                                    </a>
                                </p>
                            )}
                        </div>

                        <div className={`${textClass} mt-2`}>
                            <p>{data.personalInfo.date}</p>
                        </div>

                        {/* Hiring Manager Information */}
                        <div className={`${textClass} mt-6`}>
                            <p className="font-semibold">{data.hiringManager.name}</p>
                            <p>{data.hiringManager.company}</p>
                            <p>{data.hiringManager.address}</p>
                            <p>{data.hiringManager.cityZip}</p>
                        </div>

                        {/* Sections */}
                        {data.greeting && <p className={`${textClass} mt-6`}>{data.greeting}</p>}
                        {data.introduction && <p className={`${textClass} mt-4`}>{data.introduction}</p>}
                        {data.professionalExperience && <p className={textClass}>{data.professionalExperience}</p>}
                        {data.skillsAndQualifications && <p className={textClass}>{data.skillsAndQualifications}</p>}
                        {data.goodFit && <p className={textClass}>{data.goodFit}</p>}
                        {data.closing && <p className={textClass}>{data.closing}</p>}
                        {data.ending && (
                            <div className="mt-4">
                                <p className={textClass}>{data.ending.formalClosing}</p>
                                <p className={textClass}>{data.ending.signature}</p>
                            </div>
                        )}
                    </div>
                </div>
            </DialogContent>

            <DialogActions className="flex flex-wrap justify-center md:justify-end gap-3 px-4 pb-4">
                <PDFDownloadLink
                    document={<CoverLetterPDF coverLetterData={data} />}
                    fileName={`${data?.greeting || 'coverLetter'}.pdf`}
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

                <button
                    className='btn bg-r-accent text-r-text hover:bg-r-primary hover:text-white h-12 px-4 text-sm rounded'
                    onClick={() => generateDocx(data)}
                >
                    Download DOCX
                </button>

                <button
                    className='btn bg-red-400 text-white hover:bg-red-600 h-12 px-4 text-sm rounded'
                    onClick={onClose}
                >
                    Close
                </button>
            </DialogActions>
        </Dialog>
    );
};

export default CoverLetterViewer;
