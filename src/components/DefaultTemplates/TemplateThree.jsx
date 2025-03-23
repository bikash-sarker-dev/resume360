import React from "react";

const TemplateThree = () => {
  return (
    <div className="max-w-4xl mb-5 pt-24 mx-auto bg-white shadow-lg p-16 rounded-lg">
      <div className="text-center flex justify-between border-b pb-5">
        <div className="text-left">
          <h1 className="text-4xl font-bold text-blue-600">Catriana Janssen</h1>
          <h2 className="text-lg font-semibold mt-2 text-gray-700">
            SOFTWARE DEVELOPER
          </h2>
        </div>
        <div className="mt-2 text-sm text-left text-gray-600">
          <h2 className="mb-3 text-blue-400 font-bold ">contect info</h2>
          <p>Email: hello@reallygreatsite.com</p>
          <p>Portfolio: www.reallygreatsite.com</p>
          <p>LinkedIn: www.reallygreatsite.com</p>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-xl font-semibold text-blue-600">
          PERSONAL PROFILE
        </h3>
        <p className="text-gray-700 mt-2 text-sm">
          I am a software developer and systems architect with a background in
          designing, coding, and testing intricate systems. My expertise lies in
          C#, Java, and Ruby programming languages.
        </p>
      </div>

      <div className="mt-6">
        <h3 className="text-xl font-semibold text-blue-600">WORK EXPERIENCE</h3>
        <div className="mt-4">
          <h4 className="font-semibold text-gray-800">
            Senior Software Engineer
          </h4>
          <p className="text-sm text-gray-600">
            The Systems Design Group | Jan 2034 - June 2038
          </p>
          <ul className="list-disc list-inside text-gray-700 text-sm mt-2">
            <li>
              Led a team of 10 engineers to develop a new architecture,
              increasing system performance by 40%.
            </li>
            <li>
              Successfully implemented automated testing protocols, reducing
              bug-related incidents by 40%.
            </li>
          </ul>
        </div>

        <div className="mt-4">
          <h4 className="font-semibold text-gray-800">Software Developer</h4>
          <p className="text-sm text-gray-600">
            The Systems Design Inc. | Sept 2030 - Dec 2033
          </p>
          <ul className="list-disc list-inside text-gray-700 text-sm mt-2">
            <li>
              Optimized database queries, improving application performance by
              30%.
            </li>
            <li>
              Completed a major project 1 week ahead of schedule and 15% under
              budget.
            </li>
            <li>Implemented automated testing, reducing bug reports by 40%.</li>
          </ul>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-xl font-semibold text-blue-600">EDUCATION</h3>
          <div className="mt-4">
            <h4 className="font-semibold text-gray-800">
              North State University
            </h4>
            <p className="text-sm text-gray-600">
              Masters of Science | May 2030 - May 2032
            </p>
            <p className="text-sm text-gray-700">
              GPA: 3.35 | Most Impactful Thesis Award
            </p>
          </div>

          <div className="mt-4">
            <h4 className="font-semibold text-gray-800">City College</h4>
            <p className="text-sm text-gray-600">
              Bachelor of Science | Jun 2026 - Jun 2030
            </p>
            <p className="text-sm text-gray-700">
              GPA: 3.75 | Specialization in Enterprise Systems
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-blue-600">SKILLS</h3>
          <ul className="list-disc list-inside text-gray-700 text-sm mt-4">
            <li>System Analysis</li>
            <li>User Research</li>
            <li>Machine Learning</li>
            <li>Agile Methodology</li>
            <li>Database Modelling</li>
          </ul>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-xl font-semibold text-blue-600">REFERENCES</h3>
        <div className="mt-4 text-sm text-gray-700">
          <p>
            <strong>Akio Tomika</strong>
          </p>
          <p>Email: hello@reallygreatsite.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
      </div>
    </div>
  );
};

export default TemplateThree;
