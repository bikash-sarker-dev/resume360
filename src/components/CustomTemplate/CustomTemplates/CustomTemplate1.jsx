import React from "react";


export const CustomTemplate1 = ({ resumeData }) => {
  const { personalInfo, education, skills, socialLinks, projects, experience, languages } = resumeData;

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white w-[800px] min-h-[1100px] px-10 py-12 shadow-lg text-black">

        {/* Header */}
        <h1 className="text-4xl font-bold mb-1">{personalInfo?.fullName || "Full Name"}</h1>
        <h2 className="text-xl font-semibold mb-2">{personalInfo?.jobTitle || "Job Title"}</h2>

        <p className="text-sm mb-1">
          <i className="fa-solid fa-location-dot mr-1"></i>{personalInfo?.address || "City, Country"} |{" "}
          <i className="fa-solid fa-envelope mr-1"></i>{personalInfo?.email || "email@example.com"} |{" "}
          <i className="fa-solid fa-phone mr-1"></i>{personalInfo?.phoneNumber || "+123456789"}
        </p>

        <div className="text-lg mb-6 mt-1">
          {socialLinks?.linkedin && <a target="_blank" href={socialLinks.linkedin} className="mr-4"><i className="fa-brands fa-linkedin"></i></a>}
          {socialLinks?.github && <a target="_blank" href={socialLinks.github} className="mr-4"><i className="fa-brands fa-github"></i></a>}
          {socialLinks?.facebook && <a target="_blank" href={socialLinks.facebook}><i className="fa-brands fa-square-facebook"></i></a>}
        </div>

        {/* Summary */}
        {personalInfo?.summary && (
          <section className="mb-5">
            <h3 className="text-lg font-bold border-b border-gray-400 pb-1 mb-1">SUMMARY</h3>
            <p className="text-sm">{personalInfo.summary}</p>
          </section>
        )}

        {/* Skills */}
        {skills?.length > 0 && (
          <section className="mb-5">
            <h3 className="text-lg font-bold border-b border-gray-400 pb-1 mb-1">TECHNICAL SKILLS</h3>
            <div className="grid grid-cols-3 gap-2 text-sm">
              {skills.map((skill, index) => (
                <p key={index}>• {skill}</p>
              ))}
            </div>
          </section>
        )}

        {/* Experience */}
        {experience?.length > 0 && (
          <section className="mb-5">
            <h3 className="text-lg font-bold border-b border-gray-400 pb-1 mb-1">EXPERIENCE</h3>
            {experience.map((exp, index) => (
              <div key={index} className="mb-3">
                <div className="flex justify-between text-sm font-semibold">
                  <p>{exp.companyName}</p>
                  <p>{exp.duration}</p>
                </div>
                <ul className="list-disc list-inside text-sm">
                  <li>{exp.description}</li>
                </ul>
              </div>
            ))}
          </section>
        )}

        {/* Projects */}
        {projects?.length > 0 && (
          <section className="mb-5">
            <h3 className="text-lg font-bold border-b border-gray-400 pb-1 mb-1">PROJECTS</h3>
            {projects.map((project, index) => (
              <div key={index} className="mb-2">
                <p className="font-semibold text-sm">{index + 1}. {project.title}</p>
                <p className="text-sm"><span className="font-semibold">Tools:</span> {project.tools}</p>
                <p className="text-sm font-semibold">Key Contributions:</p>
                <ul className="list-disc list-inside text-sm">
                  <li>{project.description}</li>
                </ul>
                {project.github && (
                  <a className="text-blue-500 text-sm underline" href={project.github} target="_blank">GitHub Link</a>
                )}
              </div>
            ))}
          </section>
        )}

        {/* Education */}
        {education?.length > 0 && (
          <section className="mb-5">
            <h3 className="text-lg font-bold border-b border-gray-400 pb-1 mb-1">EDUCATION</h3>
            {education.map((edu, index) => (
              <div key={index} className="mb-3">
                <div className="flex justify-between text-sm font-semibold">
                  <p>{edu.institution}</p>
                  <p>{edu.startDate} - {edu.endDate}</p>
                </div>
                <p className="text-sm">{edu.degree}</p>
                {edu.details && (
                  <ul className="list-disc list-inside text-sm">
                    <li>{edu.details}</li>
                  </ul>
                )}
              </div>
            ))}
          </section>
        )}

        {/* Languages */}
        {languages?.length > 0 && (
          <section>
            <h3 className="text-lg font-bold border-b border-gray-400 pb-1 mb-1">LANGUAGES</h3>
            <ul className="list-disc list-inside text-sm">
              {languages.map((lang, index) => (
                <li key={index}><span className="font-semibold">{lang.language}:</span> {lang.proficiency}</li>
              ))}
            </ul>
          </section>
        )}

      </div>
    </div>
  );

};
