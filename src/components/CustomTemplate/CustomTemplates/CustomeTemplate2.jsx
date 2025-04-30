import React from 'react'

export const CustomeTemplate2 = ({ resumeData }) => {
  const { personalInfo, education, projects, experience, achievements } = resumeData;

  return (
    <div>
      <div className="my-6 bg-white">
        <div className="p-8">
          {/* Header */}
          <h1 className="text-center text-3xl font-bold mb-2">
            {personalInfo?.fullName || 'Emma Achern'}
          </h1>
          <h4 className="text-center text-xl font-semibold mb-4">
            {personalInfo?.jobTitle || 'Chemist'}
          </h4>

          <div className="divider"></div>

          {/* Summary */}
          <h3 className="text-xl font-semibold text-center mb-2 text-green-800">Professional Summary</h3>
          <p className="text-sm text-center mb-6">
            {personalInfo?.summary || `Dedicated and detail-oriented chemist with extensive experience...`}
          </p>

          {/* Contact Info */}
          <div className="flex justify-center gap-6 mt-4 text-sm">
            <div className="flex flex-col items-center">
              <h4 className="text-green-800 font-semibold text-xs">Phone</h4>
              <span className="text-[10px]">{personalInfo?.phoneNumber || '+1 (123) 456-7890'}</span>
            </div>
            <div className="flex flex-col items-center">
              <h4 className="text-green-800 font-semibold text-xs">Email</h4>
              <span className="text-[10px]">{personalInfo?.email || 'emma.achern@example.com'}</span>
            </div>
            <div className="flex flex-col items-center">
              <h4 className="text-green-800 font-semibold text-xs">Address</h4>
              <span className="text-[10px]">{personalInfo?.address || '123 Main St, New York, NY'}</span>
            </div>
          </div>

          {/* Education */}
          {education?.length > 0 && (
            <div className="my-8">
              <h1 className="text-green-800 text-xl font-bold mb-2">Education</h1>
              {education.map((edu, idx) => (
                <div key={idx}>
                  <h2 className="text-base font-semibold">
                    {edu.degree || 'Degree'} | {edu.startDate || '----'} From {edu.endDate || '----'}
                  </h2>
                  <p className="text-green-700 font-semibold">{edu.institution}</p>
                  {edu.details && (
                    <ul className="list-disc ml-5 text-sm mt-2">
                      <li><strong>Additional Info:</strong> {edu.details}</li>
                    </ul>
                  )}
                  {edu.cgpa && (
                    <ul className="list-disc ml-5 text-sm mt-1">
                      <li><strong>CGPA:</strong> {edu.cgpa}</li>
                    </ul>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Project Experience */}
          {projects?.length > 0 && (
            <div className="my-8">
              <h1 className="text-green-800 text-xl font-bold mb-2">Project Experience</h1>
              {projects.map((proj, idx) => (
                <div key={idx}>
                  <h2 className="text-base font-semibold">
                    {proj.title || 'Project Title'} | {proj.duration || 'Duration'}
                  </h2>
                  <p className="text-green-700 font-semibold">{proj.position || 'Position / Organization'}</p>
                  <p className="text-sm break-words overflow-hidden">
                    {proj.description || 'Project description'}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Experience (if needed) */}
          {experience?.length > 0 && (
            <div className="my-8">
              <h1 className="text-green-800 text-xl font-bold mb-2">Experience</h1>
              {experience.map((exp, idx) => (
                <div key={idx}>
                  <h2 className="text-base font-semibold">{exp.companyName} | {exp.duration}</h2>
                  <p className="text-green-700 font-semibold">{exp.position}</p>
                  <p className="text-sm">{exp.description}</p>
                </div>
              ))}
            </div>
          )}

          {/* Notable Awards */}
          {achievements?.length > 0 && (
            <div className="my-8">
              <h1 className="text-green-800 text-xl font-bold mb-2">Notable Awards</h1>
              <ul className="list-disc ml-5 text-sm">
                {achievements.map((award, idx) => (
                  <li key={idx}>
                    {award.achievementTitle}, {award.organization},
                    {award.startDate?.split('-')[0] || '----'} - {award.endDate?.split('-')[0] || '----'}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="divider"></div>
        </div>
      </div>
    </div>
  );

}
