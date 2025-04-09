import React, { useContext, useState } from "react";
import { CoverLetterContext } from "../../../contextApi/coverletter-context/CoverLetterContext";


const CoverLetterLivePreview = () => {
    const { CoverLetterData } = useContext(CoverLetterContext);
    const [showDemo, setShowDemo] = useState(false);
    console.log(CoverLetterData);

    const demoData = {
        personalInfo: {
            fullName: "JOHN DOE",
            jobTitle: "Frontend Developer",
            address: "New York, USA",
            phone: "+1 234 567 890",
            email: "john@example.com",
        },
        employer: {
            companyName: "Tech Corp",
            companyAddress: "123 Business Rd, Tech City",
        },
        greeting: "Dear Hiring Manager,",
        introduction: "I am writing to express my interest in the Frontend Developer position at Tech Corp.",
        professionalExperience: "I have over 3 years of experience building scalable web applications using React.",
        skillsAndQualifications: "I am proficient in JavaScript, React, CSS, and Tailwind CSS.",
        goodFit: "I believe my technical skills, combined with my passion for web development, make me an ideal fit for your team.",
        closing: "Thank you for considering my application. I look forward to hearing from you.",
        signature: "Sincerely, John Doe",
    };

    const {
        personalInfo,
        employer,
        greeting,
        introduction,
        professionalExperience,
        skillsAndQualifications,
        goodFit,
        closing,
        signature
    } = showDemo ? demoData : CoverLetterData;

    // const titleClass = "text-xl font-bold";
    // const subtitleClass = "text-sm text-center";
    const headerClass = "font-semibold mb-4";
    const textClass = "text-xs leading-relaxed";

    const isEmpty = !personalInfo?.fullName && !employer?.companyName && !greeting && !introduction && !professionalExperience && !skillsAndQualifications && !goodFit && !closing && !signature;

    return (
        <div className="container pb-8 lg:pb-12">
            <div id="cover-letter-content" className="max-w-4xl mx-auto p-4 bg-gray-100 text-center flex items-center justify-center gap-3 rounded-md">
                <span className="text-sm font-medium">Show Demo</span>
                <input
                    type="checkbox"
                    className="toggle"
                    checked={showDemo}
                    onChange={(e) => setShowDemo(e.target.checked)}
                />
            </div>

            {!showDemo && isEmpty ? (
                <p className="text-center mt-4 text-gray-500 italic">No cover letter data provided yet.</p>
            ) : (
                <div className="max-w-4xl mx-auto p-8 bg-white text-black shadow-xl mt-4">
                    {/* Greeting */}
                    {greeting && (
                        <p className={`${textClass} text-center mb-4`}>{greeting}</p>
                    )}

                    {/* Introduction */}
                    {introduction && (
                        <p className={textClass}>{introduction}</p>
                    )}

                    {/* Professional Experience */}
                    {professionalExperience && (
                        <>
                            <h2 className={headerClass}>Professional Experience</h2>
                            <p className={textClass}>{professionalExperience}</p>
                        </>
                    )}

                    {/* Skills and Qualifications */}
                    {skillsAndQualifications && (
                        <>
                            <h2 className={headerClass}>Skills and Qualifications</h2>
                            <p className={textClass}>{skillsAndQualifications}</p>
                        </>
                    )}

                    {/* Why You’re a Good Fit */}
                    {goodFit && (
                        <>
                            <h2 className={headerClass}>Why I am a Good Fit</h2>
                            <p className={textClass}>{goodFit}</p>
                        </>
                    )}

                    {/* Closing */}
                    {closing && (
                        <>
                            <h2 className={headerClass}>Closing</h2>
                            <p className={textClass}>{closing}</p>
                        </>
                    )}

                    {/* Signature */}
                    {signature && (
                        <p className={`${textClass} mt-4 text-right`}>{signature}</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default CoverLetterLivePreview;
