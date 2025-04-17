import React from "react";

const TemplateOne = () => {
  return (
    <div className="container pb-8 pt-28 lg:pb-12">
      <div className="bg-white p-16">
        <h1 className="text-4xl font-bold mb-3">DANIEL GALLEGO 4</h1>
        <h2 className="text-2xl font-bold mb-2">UX DESIGNER</h2>
        <p className="mb-2">
          <i className="fa-solid fa-location-dot mr-2"></i>Dhaka, Bangladesh |{" "}
          <i className="fa-solid fa-envelope mr-2"></i>denial123@gmail.com |{" "}
          <i className="fa-solid fa-phone mr-2"></i>+8801523892111
        </p>
        <div className="text-2xl">
          <a href="https://www.linkedin.com/in/sadia-afrin-597515301/">
            <i className="fa-brands fa-linkedin mr-10"></i>
          </a>
          <a href="https://github.com/Sadia0920">
            <i className="fa-brands fa-github mr-10"></i>
          </a>
          <a href="https://www.facebook.com/sadia.afrin.khan.52">
            <i className="fa-brands fa-square-facebook"></i>
          </a>
        </div>

        {/* Summary section */}
        <section className="mt-6">
          <h3 className="text-lg font-bold bg-gray-300 px-6 py-2 rounded-full mb-2">
            SUMMARY
          </h3>
          <p>
            UX Designer with a focus on devivering impactful results, eager to
            trackle dynamic challenges and apply creativity to craft intutive
            user experiences. Demonstrated profiency in project management,
            user-centric problem-solving, and seamless collaboration across
            teams skilled in leveraging state-of-the-art tools and methosologies
            to streaming processes and elevate user satisfaction.
          </p>
        </section>

        {/* Skills Section */}
        <section className="mt-6">
          <h3 className="text-lg font-bold bg-gray-300 px-6 py-2 rounded-full mb-2">
            TECHNICAL SKILLS
          </h3>
          <div className="grid grid-cols-3 justify-between">
            <div>
              <p>Prototypink Tools</p>
              <p>User Research</p>
              <p>Information Architecture</p>
            </div>
            <div>
              <p>Interaction Design</p>
              <p>Visual Design</p>
              <p>Useablity Heuristics</p>
            </div>
            <div>
              <p>Accessibility</p>
              <p>Responsive Design</p>
              <p>User Testing Tools</p>
            </div>
          </div>
        </section>

        {/* Experiences Section */}
        <section className="mt-6">
          <h3 className="text-lg font-bold bg-gray-300 px-6 py-2 rounded-full mb-2">
            EXPERIENCE
          </h3>
          {/* experience - 1 */}
          <div className="grid grid-cols-2 font-bold">
            <p>Instant Chartz App, Morcelle Program</p>
            <p>Jan 2023 - Present</p>
          </div>
          <ul className="list-inside list-disc">
            <li>
              Led development of an advance automation system, achieving a 15%
              increase in operational efficiency.
            </li>
            <li>
              Steamlined manufacturing processes, reducung production costs by
              10%.
            </li>
            <li>
              Implemented preventive maintenance strategies, resuting in a 20%
              decrease in equipment downtime.
            </li>
          </ul>
          {/* experience - 2 */}
          <div className="grid grid-cols-2 font-bold mt-4">
            <p>System UX Engineer, XarrowAI Industries</p>
            <p>Feb 2021 - Dec 2022</p>
          </div>
          <ul className="list-inside list-disc">
            <li>
              Design and optimised a robotic control system, realizing a 12%
              performance improvement.
            </li>
            <li>
              Coordinated texting and validation, ensuring compliance with
              industry standards.
            </li>
            <li>
              provided technical expertise, contributing to a 15% reduction in
              system failures.
            </li>
          </ul>
        </section>

        {/* project section */}
        <section className="mt-6">
          <h3 className="text-lg font-bold bg-gray-300 px-6 py-2 rounded-full mb-2">
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
          <div className="grid grid-cols-3">
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
          {/* project - 2 */}
          <p className="font-bold mt-4">2. Task Management App</p>
          <div className="flex">
            <p className="font-bold mr-2">Role: </p>
            <p> UX Designer</p>
          </div>
          <div className="flex">
            <p className="font-bold mr-2">Tools: </p>
            <p>Figma, Adobe XD, User Interviews, Wireframing</p>
          </div>
          <p className="font-bold">Key Contributions:</p>
          <ul className="list-inside list-disc">
            <li>Conducted user research through interviews and surveys.</li>
            <li>
              Created user personas and user flows for seamless navigation.
            </li>
          </ul>
          <div className="grid grid-cols-3">
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

        {/* education section */}
        <section className="mt-6">
          <h3 className="text-lg font-bold bg-gray-300 px-6 py-2 rounded-full mb-2">
            EDUCATION
          </h3>
          {/* education - 1 */}
          <div className="grid grid-cols-2 font-bold">
            <p>UX Industrial Basics and General Application</p>
            <p>Aug 2016 - Oct 2019</p>
          </div>
          <p>University of Engineering UX Cohort</p>
          <ul className="list-inside list-disc">
            <li>Major in Automotive Technology.</li>
            <li>
              Thesis on "technological Advancements within the current
              Mechatronics Industry.
            </li>
          </ul>
          {/* education - 2 */}
          <div className="grid grid-cols-2 font-bold mt-4">
            <p>Bachelor of Design in Process Engineering</p>
            <p>May 2014 - May 2016</p>
          </div>
          <p>Engineering University</p>
          <ul className="list-inside list-disc">
            <li>
              Relevant coursework in Structural Design and Project Management.
            </li>
          </ul>
        </section>

        {/* Languages Section */}
        <section className="mt-6">
          <h3 className="text-lg font-bold bg-gray-300 px-6 py-2 rounded-full mb-2">
            LANGUAGES
          </h3>
          <ul className="list-inside list-disc">
            <li className="flex">
              <p className="font-bold">English: </p>
              <p>Comfortable</p>
            </li>
            <li className="flex">
              <p className="font-bold">bangla: </p>
              <p>Native</p>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default TemplateOne;
