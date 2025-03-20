import React from "react";

const TemplateThree = () => {
  return (
    <div className="max-w-4xl mb-5 pt-24 mx-auto bg-white shadow-lg p-10 rounded-lg">
      
      <div className="text-center flex justify-between border-b pb-5">
        <div className="text-left">
        <h1 className="text-4xl font-bold text-blue-600">Catriana Janssen</h1>
        <h2 className="text-lg font-semibold mt-2 text-gray-700">SOFTWARE DEVELOPER</h2>
        </div>
        <div className="mt-2 text-sm text-left text-gray-600">
          <h2 className="mb-3 text-blue-400 font-bold ">contect info</h2>
          <p>Email: hello@reallygreatsite.com</p>
          <p>Portfolio: www.reallygreatsite.com</p>
          <p>LinkedIn: www.reallygreatsite.com</p>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-xl font-semibold text-blue-600">PERSONAL PROFILE</h3>
        <p className="text-gray-700 mt-2 text-sm">
          I am a software developer and systems architect with a background in designing, coding,
          and testing intricate systems. My expertise lies in C#, Java, and Ruby programming languages.
        </p>
      </div>

      <div className="mt-6">
        <h3 className="text-xl font-semibold text-blue-600">WORK EXPERIENCE</h3>
        <div className="mt-4">
          <h4 className="font-semibold text-gray-800">Senior Software Engineer</h4>
          <p className="text-sm text-gray-600">The Systems Design Group | Jan 2034 - June 2038</p>
          <ul className="list-disc list-inside text-gray-700 text-sm mt-2">
            <li>Led a team of 10 engineers to develop a new architecture, increasing system performance by 40%.</li>
            <li>Successfully implemented automated testing protocols, reducing bug-related incidents by 40%.</li>
          </ul>
        </div>

        <div className="mt-4">
          <h4 className="font-semibold text-gray-800">Software Developer</h4>
          <p className="text-sm text-gray-600">The Systems Design Inc. | Sept 2030 - Dec 2033</p>
          <ul className="list-disc list-inside text-gray-700 text-sm mt-2">
            <li>Optimized database queries, improving application performance by 30%.</li>
            <li>Completed a major project 1 week ahead of schedule and 15% under budget.</li>
            <li>Implemented automated testing, reducing bug reports by 40%.</li>
          </ul>
        </div>
      </div>

      
    </div>
  );;
};

export default TemplateThree;
