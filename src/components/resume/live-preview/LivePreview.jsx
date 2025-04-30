import React, { useContext, useState } from "react";
import { ResumeContext } from "../../../contextApi/resume-context/ResumeContext";
import CustomeTemplate0 from "../../CustomTemplate/CustomTemplates/CustomeTemplate0";
import { CustomTemplate1 } from "../../CustomTemplate/CustomTemplates/CustomTemplate1";
import { CustomeTemplate2 } from "../../CustomTemplate/CustomTemplates/CustomeTemplate2";


const LivePreview = () => {
  const { resumeData } = useContext(ResumeContext);
  const [showDemo, setShowDemo] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState(0); // 0 = first template by default

  const demoData = {
    personalInfo: {
      fullName: "Johnathan Doe",
      jobTitle: "Senior Frontend Engineer",
      address: "Brooklyn, New York, USA",
      phone: "+1 (234) 567-8900",
      email: "johnathan.doe@example.com",
      about:
        "Creative and detail-oriented frontend engineer with 5+ years of experience crafting intuitive and dynamic user interfaces. Skilled in modern frameworks and passionate about delivering seamless user experiences.",
    },
    education: [
      {
        degree: "BSc",
        field: "Computer Science",
        school: "ABC University",
        startDate: "Feb 2016",
        endDate: "Feb 2020",
        description:
          "Graduated with honors. Focused on software engineering, web development, and UX/UI design.",
      },
    ],
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "CSS Modules",
      "Git",
      "REST APIs",
      "Vite",
      "Figma",
      "Unit Testing",
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
        description:
          "A personal portfolio to showcase skills and projects with a modern, minimal design.",
        features: [
          "Responsive Design",
          "Dark Mode",
          "Animations with Framer Motion",
        ],
      },
      {
        projectName: "Task Management App",
        live: "https://taskflow.app",
        client: "https://github.com/johnathandoe/taskflow-client",
        server: "https://github.com/johnathandoe/taskflow-server",
        description:
          "A full-stack task manager with team collaboration and Kanban-style boards.",
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
        description:
          "Leading the frontend team to build scalable and accessible enterprise dashboards using Next.js and Tailwind. Mentoring junior devs and collaborating closely with UX designers.",
      },
    ],
    languages: [
      { language: "English", proficiency: "Native" },
      { language: "Spanish", proficiency: "Professional Working" },
      { language: "French", proficiency: "Basic" },
    ],
  };

  const finalData = showDemo ? demoData : resumeData;

  const isResumeEmpty = (data) =>
    !data?.personalInfo?.fullName &&
    !data?.education?.length &&
    !data?.skills?.length &&
    !data?.socialLinks?.length &&
    !data?.projects?.length &&
    !data?.experience?.length &&
    !data?.languages?.length;

  const isEmpty = isResumeEmpty(finalData);

  const templates = [
    CustomeTemplate0,
    CustomTemplate1,
    CustomeTemplate2,
  ];

  const SelectedTemplate = templates[selectedTemplate];

  return (
    <div className="container pb-8 lg:pb-12">
      <div className="max-w-4xl mx-auto p-4 bg-r-accent text-center flex items-center justify-center gap-3 rounded-md">
        <span className="text-sm font-medium text-white">Show Demo</span>
        <input
          type="checkbox"
          className="toggle text-r-primary"
          checked={showDemo}
          onChange={(e) => setShowDemo(e.target.checked)}
        />
      </div>

      <div className="flex justify-center gap-4 my-6 flex-wrap">
        <button
          onClick={() => setSelectedTemplate(0)}
          className={`btn ${selectedTemplate === 0 ? "bg-r-primary text-white" : "bg-gray-200 text-black"}`}
        >
          Template 1
        </button>
        <button
          onClick={() => setSelectedTemplate(1)}
          className={`btn ${selectedTemplate === 1 ? "bg-r-primary text-white" : "bg-gray-200 text-black"}`}
        >
          Template 2
        </button>
        <button
          onClick={() => setSelectedTemplate(2)}
          className={`btn ${selectedTemplate === 2 ? "bg-r-primary text-white" : "bg-gray-200 text-black"}`}
        >
          Template 3
        </button>
      </div>

      {!showDemo && isEmpty ? (
        <p className="text-center mt-4 text-gray-500 italic">No resume data provided yet.</p>
      ) : (
        <div className="max-w-4xl mx-auto border border-gray-300 shadow rounded overflow-hidden">
          <SelectedTemplate resumeData={finalData} />
        </div>
      )}
    </div>
  );
};

export default LivePreview;
