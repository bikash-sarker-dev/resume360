import React, { useContext, useState } from "react";
import { CoverLetterContext } from "../../../contextApi/coverletter-context/CoverLetterContext";

const CoverLetterLivePreview = () => {
    const { CoverLetterData } = useContext(CoverLetterContext);
    const [showDemo, setShowDemo] = useState(false);

    const demoData = {
        personalInfo: {
            fullName: "MD ADNAN MAHMUD",
            address: "Dhaka, Bangladesh",
            cityZip: "Dhaka, 1000",
            email: "adnan.mahmud.pc@gmail.com",
            phone: "01641378317",
            linkedIn: "www.linkedin.com/in/adnanmahmud99",
            portfolio: "https://adnan-mahmud.web.app/",
            date: "April 12, 2025"
        },
        hiringManager: {
            name: "Adnan Mahmud",
            company: "TDCL",
            address: "Dhaka, Bangladesh",
            cityZip: "Dhaka, 1000"
        },
        greeting: "Dear Hiring Manager,",
        introduction: "I am writing to express my interest in the [Job Position] at TDCL, as advertised. With a solid background in Frontend Web Development, combined with my experience in designing and developing web applications, I am confident in my ability to contribute to your team's success.",
        professionalExperience: "I am currently a Design Team Lead at Empower Next Gen, where I provide design instruction, create sketch designs, guide the team for better outputs, and contribute to design tasks when workload is high. I also advise the Web Developer CTO on improving the website, ensuring user-centered design principles are adhered to. In addition, I have developed a wide range of projects, including a Donation Platform for Bangladesh, a Task Management Application, and a Pet Adoption Platform, using various technologies like React, Node.js, Express, MongoDB, Firebase, and Tailwind CSS.",
        skillsAndQualifications: "I am also highly skilled in HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, PHP, and Python. Additionally, I have experience in Photoshop, Figma, and other open-source design platforms, which allows me to bring a well-rounded perspective to both the front-end and design aspects of web development.",
        goodFit: "I would be thrilled to bring my expertise in web development, design, and problem-solving to TDCL. I am confident that my technical skills, coupled with my passion for creating impactful, user-centric web applications, would be a valuable asset to your team.",
        closing: "Thank you for considering my application. I look forward to the opportunity to discuss how my skills and experience align with the needs of your team. Please feel free to contact me at 01641378317 or via email at adnan.mahmud.pc@gmail.com.",
        ending: {
            formalClosing: "Sincerely",
            signature: "MD ADNAN MAHMUD"
        }
    };

    const {
        personalInfo,
        hiringManager,
        greeting,
        introduction,
        professionalExperience,
        skillsAndQualifications,
        goodFit,
        closing,
        ending
    } = showDemo ? demoData : CoverLetterData;

    const textClass = "text-xs leading-relaxed";

    const isEmpty = !personalInfo?.fullName && !hiringManager?.company && !greeting && !introduction && !professionalExperience && !skillsAndQualifications && !goodFit && !closing && !ending;

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
                <div className="max-w-4xl mx-auto p-8 bg-white text-black shadow-lg rounded-lg mt-4">
                    {/* Personal Information */}
                    <div className={`${textClass}`}>
                        <p className="font-bold">{personalInfo.fullName}</p>
                        <p className="">{personalInfo.address}</p>
                        <p className="">{personalInfo.cityZip}</p>
                        <p className="">{personalInfo.email}</p>
                        <p className="">{personalInfo.phone}</p>
                        <p className="">
                            <a href={`https://${personalInfo.linkedIn}`} className="text-blue-600">{personalInfo.linkedIn}</a>
                        </p>
                        <p className="">
                            <a href={personalInfo.portfolio} className="text-blue-600">{personalInfo.portfolio}</a>
                        </p>
                    </div>

                    <div className={`${textClass}`}>
                        <p className="">{personalInfo.date}</p>
                    </div>

                    {/* Hiring Manager Information */}
                    <div className={`${textClass} mt-6`}>
                        <p className="font-semibold">{hiringManager.name}</p>
                        <p className="">{hiringManager.company}</p>
                        <p className="">{hiringManager.address}</p>
                        <p className="">{hiringManager.cityZip}</p>
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
                            <p className={`${textClass} mt-4`}>{ending.formalClosing},</p>
                            <p className={`${textClass} `}>{ending.signature}</p>
                        </>
                    )}
                </div>
            )}
        </div>
    );
};

export default CoverLetterLivePreview;
