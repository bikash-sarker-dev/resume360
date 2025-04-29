import React from "react";
import { useFormData } from "../FormDataProvider";

export const CustomTemplate1 = () => {
  const { formData, updateFormData } = useFormData();

  console.log(formData);
    const {
      personalInfo: { fullName, jobTitle, phoneNumber, email, address,summary },
      education: { institution, degree, fieldOfStudy, additionalInfo , startDate,endDate},
      experience: { companyName, position, duration, location, description,
        projectTitle
       , projectTools ,projectDescription,projectGithubLink
       },
      experience2: { companyName2, position2, duration2, location2, description2,
        projectTitle2
        , projectTools2 ,projectDescription2,projectGithubLink2
       },
      achievements: { achievementTitle, date, organization, description: achievementDescription },
    } = formData;
    

  return (
    <div className="h-screen flex flex-col">
    <div className="pb-8 lg:pb-12 flex-1 overflow-auto">
      <div className="bg-white p-8">
        <h1 className="text-4xl font-bold mb-3">{fullName || "DANIEL GALLEGO 4"}</h1>
        <h2 className="text-2xl font-bold mb-2">{jobTitle || "UX DESIGNER"}</h2>
        <p className="mb-2">
          <i className="fa-solid fa-location-dot mr-2"></i>{address || "Dhaka, Bangladesh"} |{" "}
          <i className="fa-solid fa-envelope mr-2"></i>{email || "denial123@gmail.com"} |{" "}
          <i className="fa-solid fa-phone mr-2"></i>{phoneNumber || "+8801523892111"}
        </p>
        <div className="text-2xl">
          <a target="_blank" href="">
            <i className="fa-brands fa-linkedin mr-10"></i>
          </a>
          <a target="_blank" href="">
            <i className="fa-brands fa-github mr-10"></i>
          </a>
          <a target="_blank" href="">
            <i className="fa-brands fa-square-facebook"></i>
          </a>
        </div>
  
        {/* Summary Section */}
        <section className="mt-6">
          <h3 className="text-lg font-bold bg-gray-300 px-6 py-2 rounded-full mb-2">SUMMARY</h3>
          <p className="break-words overflow-hidden">
            {summary || `UX Designer with a focus on delivering impactful results, eager to track dynamic challenges and apply creativity to craft intuitive user experiences. Demonstrated proficiency in project management, user-centric problem-solving, and seamless collaboration across teams skilled in leveraging state-of-the-art tools and methodologies to streamline processes and elevate user satisfaction.`}
          </p>
        </section>
  
        {/* Skills Section */}
        <section className="mt-6">
          <h3 className="text-lg font-bold bg-gray-300 px-6 py-2 rounded-full mb-2">TECHNICAL SKILLS</h3>
          <div className="grid grid-cols-3 justify-between">
            <div>
              <p>Prototyping Tools</p>
              <p>User Research</p>
              <p>Information Architecture</p>
            </div>
            <div>
              <p>Interaction Design</p>
              <p>Visual Design</p>
              <p>Usability Heuristics</p>
            </div>
            <div>
              <p>Accessibility</p>
              <p>Responsive Design</p>
              <p>User Testing Tools</p>
            </div>
          </div>
        </section>
  
        {/* Experience Section */}
        <section className="mt-6">
          <h3 className="text-lg font-bold bg-gray-300 px-6 py-2 rounded-full mb-2">EXPERIENCE</h3>
          {/* Experience - 1 */}
          <div className="grid grid-cols-2 font-bold">
            <p>{formData.experience.companyName || 'Instant Chartz App, Morcelle Program'}</p>
            <p>{formData.experience.duration || 'Jan 2023 - Present'}</p>
          </div>
          <ul className="list-inside list-disc break-words overflow-hidden">
            <li>{formData.experience.description || 'Led development of an advanced automation system, achieving a 15% increase in operational efficiency.'}</li>
          </ul>
  
          {/* Experience - 2 */}
          {Object.values(formData.experience2).some((value) => value) && (
            <>
              <div className="grid grid-cols-2 font-bold mt-4">
                <p>{formData.experience2.companyName2 || 'System UX Engineer, XarrowAI Industries'}</p>
                <p>{formData.experience2.duration2 || 'Feb 2021 - Dec 2022'}</p>
              </div>
              <ul className="list-inside list-disc break-words overflow-hidden">
                <li>{formData.experience2.description2 || 'Designed and optimized a robotic control system, realizing a 12% performance improvement.'}</li>
              </ul>
            </>
          )}
        </section>
  
        {/* Projects Section */}
        <section className="mt-6">
          <h3 className="text-lg font-bold bg-gray-300 px-6 py-2 rounded-full mb-2">PROJECTS</h3>
          {/* Project - 1 */}
          <p className="font-bold">{ projectTitle||`1. SmartBudget – Personal Finance Tracker`}</p>
          
          <div className="flex">
            <p className="font-bold mr-2">Tools: </p>
            <p>{ projectTools|| `Figma, Adobe XD, Sketch, Usability Testing`}</p>
          </div>
          <p className="font-bold">Key Contributions:</p>
          <ul className="list-inside list-disc break-words overflow-hidden">
          <li>{projectDescription || 'Designed wireframes and interactive prototypes.'}</li>
          </ul>
          <div className="grid grid-cols-3">
          
          <a className="underline text-blue-500" href={projectGithubLink || "http://localhost:5173/templateOne"} target="_blank" rel="noopener noreferrer">
      GitHub Link
    </a>
          </div>
  
          {/* Project - 2 */}
          <p className="font-bold mt-4">{projectTitle || `2. Task Management App`}</p>
          
          <div className="flex">
            <p className="font-bold mr-2">Tools: </p>
            <p>{projectTools2 || `Figma, Adobe XD, User Interviews, Wireframing`}</p>
          </div>
          <p className="font-bold">Key Contributions:</p>
          <ul className="list-inside list-disc">
          <li>{projectDescription2 || 'Conducted user research through interviews and surveys.'}</li>
            <li>Created user personas and user flows for seamless navigation.</li>
          </ul>
          <div className="grid grid-cols-3">
          <li>{projectDescription2 || 'Conducted user research through interviews and surveys.'}</li>
          </div>
        </section>
  
        {/* Education Section */}
        <section className="mt-6">
          <h3 className="text-lg font-bold bg-gray-300 px-6 py-2 rounded-full mb-2">EDUCATION</h3>
          {/* Education - 1 institution, degree, fieldOfStudy, additionalInfo , startDate,endDate */}
          <div className="grid grid-cols-2 font-bold">
            <p>{ institution || "UX Industrial Basics and General Application"}</p>
            <p>{{startDate}-{ endDate } || "Aug 2016 - Oct 2019"}</p>
          </div>
          <p>University of Engineering UX Cohort</p>
          <ul className="list-inside list-disc">
            <li>Major in Automotive Technology.</li>
            <li>Thesis on "Technological Advancements within the current Mechatronics Industry."</li>
          </ul>
  
          {/* Education - 2 */}
          <div className="grid grid-cols-2 font-bold mt-4">
            <p>Bachelor of Design in Process Engineering</p>
            <p>May 2014 - May 2016</p>
          </div>
          <p>Engineering University</p>
          <ul className="list-inside list-disc">
            <li>Relevant coursework in Structural Design and Project Management.</li>
          </ul>
        </section>
  
        {/* Languages Section */}
        <section className="mt-6">
          <h3 className="text-lg font-bold bg-gray-300 px-6 py-2 rounded-full mb-2">LANGUAGES</h3>
          <ul className="list-inside list-disc">
            <li className="flex">
              <p className="font-bold">English: </p>
              <p>Comfortable</p>
            </li>
            <li className="flex">
              <p className="font-bold">Bangla: </p>
              <p>Native</p>
            </li>
          </ul>
        </section>
      </div>
    </div>
  </div>
  
  );
};
