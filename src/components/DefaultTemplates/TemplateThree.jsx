import React from "react";

const TemplateThree = () => {
  return (
    <div className="container   pt-28 mx-auto bg-white shadow-lg p-16 rounded-lg">
      <div className="text-center flex justify-between border-b pb-5">
        <div className="text-left">
          <h1 className="text-4xl font-bold text-black">Catriana Janssen</h1>
          <h2 className="text-2xl  mt-2 text-black">
            SOFTWARE DEVELOPER
          </h2>
        </div>
        <div className="mt-2  text-left text-black">
          <h2 className="mb-3 text-2xl text-black font-bold ">contect info</h2>
          <p>Email: hello@reallygreatsite.com</p>
          <p>Portfolio: www.reallygreatsite.com</p>
          <p>LinkedIn: www.reallygreatsite.com</p>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-xl font-semibold text-black">
          PERSONAL PROFILE
        </h3>
        <p className="text-black mt-2 ">
          I am a software developer and systems architect with a background in
          designing, coding, and testing intricate systems. My expertise lies in
          C#, Java, and Ruby programming languages.
        </p>
      </div>

      <div className="mt-6">
        <h3 className="text-xl font-semibold text-black">WORK EXPERIENCE</h3>
        <div className="mt-4">
          <h4 className="font-semibold text-gray-800">
            Senior Software Engineer
          </h4>
          <p className=" text-black">
            The Systems Design Group | Jan 2034 - June 2038
          </p>
          <ul className="list-disc list-inside text-black  mt-2">
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
          <p className=" text-black">
            The Systems Design Inc. | Sept 2030 - Dec 2033
          </p>
          <ul className="list-disc list-inside text-black  mt-2">
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
          <h3 className="text-xl font-semibold text-black">EDUCATION</h3>
          <div className="mt-4">
            <h4 className="font-semibold text-gray-800">
              North State University
            </h4>
            <p className=" text-black">
              Masters of Science | May 2030 - May 2032
            </p>
            <p className=" text-black">
              GPA: 3.35 | Most Impactful Thesis Award
            </p>
          </div>

          <div className="mt-4">
            <h4 className="font-semibold text-gray-800">City College</h4>
            <p className=" text-black">
              Bachelor of Science | Jun 2026 - Jun 2030
            </p>
            <p className=" text-black">
              GPA: 3.75 | Specialization in Enterprise Systems
            </p>
          </div>
        </div>

        <div className="">
          <h3 className="text-xl font-semibold text-black">SKILLS</h3>
          <ul className="list-disc list-inside text-black  mt-4">
            <li>System Analysis</li>
            <li>User Research</li>
            <li>Machine Learning</li>
            <li>Agile Methodology</li>
            <li>Database Modelling</li>
          </ul>
        </div>

       
      </div>
      <section className="mt-6">
          <h3 className="text-xl font-bold mb-2">
            PROJECTS
          </h3>
          {/* project - 1 */}
          <p className="font-bold">1. SmartBudget – Personal Finance Tracker</p>
          <div className="flex">
            <p className="font-bold mr-2">Role: </p>
            <p> UX Designer</p>
          </div>
          <div className="flex">
            <p className="font-bold mr-2">Tools: </p>
            <p>Figma, Adobe XD, Sketch, Usability Testing</p>
          </div>
          <p className="font-bold">Key Contributions:</p>
          <ul className="list-inside list-disc">
            <li>Designed wireframes and interactive prototypes.</li>
            <li>
              Conducted usability testing and improved designs based on
              feedback.
            </li>
          </ul>
          <div className="flex gap-5">
            <a
              className="underline text-blue-500"
              href="http://localhost:5173/templateOne"
            >
              Live Link 
            </a>
            <a
              className="underline text-blue-500"
              href="http://localhost:5173/templateOne"
            >
              Client Github Link
            </a>
            <a
              className="underline text-blue-500"
              href="http://localhost:5173/templateOne"
            >
              Server Github Link
            </a>
          </div>
         
        </section>

      <div className="mt-6">
        <h3 className="text-xl font-semibold text-black">REFERENCES</h3>
        <div className="mt-4  text-black">
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
