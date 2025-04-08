import React from "react";
import SectionHead from "../components/header/section-head/SectionHead";

const privacyData = [
    { title: "Information We Collect", content: [
        "Personal Information: Name, email, phone number, address.",
        "Education Details: Degrees, institutions, years of study.",
        "Work Experience: Job titles, company names, duration, responsibilities.",
        "Skills & Projects: Technical and soft skills, projects with descriptions.",
        "Social Links: LinkedIn, GitHub, portfolio websites."
    ]},
    { title: "How We Use the Information", content: [
        "To generate and display resumes.",
        "To allow users to edit, download, or share their resumes.",
        "To improve the resume-building experience (optional analytics)."
    ]},
    { title: "Data Storage and Security", content: [
        "Data is stored locally in the browser (if not saved to a server).",
        "If stored on a server, encryption and security measures are applied.",
        "No sharing of user data with third parties without consent."
    ]},
    { title: "User Control & Rights", content: [
        "Users can edit or delete their data anytime.",
        "If accounts are used, users can request complete data deletion."
    ]},
    { title: "Third-Party Services", content: [
        "Mention if you use external services (e.g., Firebase for authentication, cloud storage).",
        "State their privacy policies if applicable."
    ]},
    { title: "Cookies and Tracking", content: [
        "If cookies or analytics are used, disclose their purpose."
    ]},
    { title: "Contact Information", content: [
        "For privacy-related concerns, contact us at support@yourresumeapp.com."
    ]}
];

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen p-6 md:p-12">
            <div className="max-w-7xl mx-auto pt-10">
                <SectionHead
                    subTitle={"Home / Privacy Policy"}
                    title={"Privacy Policy"}
                />

                {/* Data Collection Sections */}
                <div className="space-y-6">
                    {privacyData.map((section, index) => (
                        <div key={index} className="bg-gray-50 p-4 rounded-lg border border-gray-300">
                            <h3 className="text-xl font-semibold">{index + 1}. {section.title}</h3>
                            <ul className="list-disc list-inside text-gray-600 mt-2">
                                {section.content.map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
