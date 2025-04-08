import React from "react";

const TemplateFive = () => {
  return (
    <div className="container mx-auto pb-8 pt-28 lg:pb-12">
      {/* Header Section */}

      <div className="bg-white shadow-lg rounded-lg p-16">
        <div className="text-center">
          <h1 className="text-3xl font-bold">John Smith</h1>
          <h2 className="text-xl text-gray-600">
            Software Development Engineer in Test
          </h2>
          <p className="text-gray-500">123 Flushing NY-11355</p>
        </div>
        <hr className="my-4" />

        {/* Summary Section */}
        <section>
          <h3 className="text-xl font-semibold mb-2">Summary</h3>
          <p>
            Experienced Software Development Engineer in Test with expertise in
            full-stack development, Agile methodologies, and cloud computing.
          </p>
        </section>
        <hr className="my-4" />

        {/* Experience Section */}

        <section>
          <h3 className="text-xl font-bold">Experience</h3>

          <div className="">
            <h4 className="text-lg font-bold">
              Depository Trust & Clearing Corporation (DTCC)
            </h4>
            <p className="italic">
              Software Development Engineer in Test - August 2023 – Present
            </p>
            <ul className="list-disc pl-5">
              <li>
                Tested and validated fixed income clearing applications for FICC
                risk, ensuring seamless user experiences on the client portal.
              </li>
              <li>
                Collaborated with cross-functional teams to align on best
                practices and deliver high-quality solutions for FRM internal
                and external clients.
              </li>
              <li>
                Executed comprehensive test plans to ensure the reliability and
                performance of clearing applications, contributing to risk
                management and client satisfaction.
              </li>
            </ul>
          </div>
        </section>

        <hr className="my-4" />

        {/* additional  */}

        <section className="mt-6">
          <h3 className="text-xl font-semibold">Additional Experience</h3>

          <div className="mt-4">
            <h4 className="text-lg font-bold">
              CUNY Tutor Corps | New York, NY
            </h4>
            <p className="italic ">
              Computer Science Tutor - August 2021 – June 2022
            </p>
            <ul className="list-disc pl-5">
              <li>
                Elevated student mastery of Java fundamentals, encompassing OOP,
                data structures, and algorithms, via interactive sessions and
                exercises.
              </li>
              <li>
                Created and executed over 20 lessons and activities tailored to
                augment students’ acquisition of foundational and advanced
                computer skills.
              </li>
            </ul>
          </div>

          <div className="mt-4">
            <h4 className="text-lg font-bold">
              Tech Incubator at Queens College | New York, NY
            </h4>
            <p className="italic">
              Junior Frontend Developer (Intern) - August 2021 – July 2022
            </p>
            <ul className="list-disc pl-5">
              <li>
                Developed an internal learning platform using React.js, CSS, and
                HTML, boosting worker productivity.
              </li>
              <li>
                Optimized user experience by designing engaging interfaces
                leveraging Bootstrap and CSS.
              </li>
            </ul>
          </div>
        </section>
        <hr className="my-4" />

        {/* Education Section */}
        <section>
          <h3 className="text-xl font-bold">Education</h3>
          <ul>
            <li>
              <strong>Georgia Institute of Technology</strong> - MS in Computer
              Science
            </li>
            <li>
              <strong>Queens College, CUNY</strong> - BA in Computer Science
            </li>
          </ul>
        </section>
        <hr className="my-4" />

        {/* Skills Section */}
        <section>
          <h3 className="text-xl font-semibold">Skills</h3>
          <ul className="list-disc pl-5">
            <li>Java, JavaScript, React, Node.js</li>
            <li>Cloud Computing, Agile, MongoDB</li>
            <li>Software Testing & Automation</li>
          </ul>
        </section>
        <hr className="my-4" />

        {/* Contact Section */}
        <section>
          <h3 className="text-xl font-semibold">Projects</h3>
          <ul className="list-disc pl-5">
            <li>
              <strong>Full-stack Skincare Website:</strong> Built with React.js,
              Express.js, and MongoDB for skincare recommendations and
              specialist appointments.
            </li>
            <li>
              <strong>Matrimony Website:</strong> A matchmaking platform using
              React, Express.js, and MongoDB, featuring user dashboards and
              premium services.
            </li>
            <li>
              <strong>Online Study Website:</strong> Developed with React,
              Express.js, and MongoDB to support assignments, grading, and
              collaboration.
            </li>
          </ul>
        </section>

        <hr className="my-4" />

        <section className="mt-6">
          <h3 className="text-xl font-semibold">Certificates</h3>
          <ul className="list-disc pl-5">
            <li>AWS Certified Cloud Practitioner</li>
            <li>Scrum Master Certification</li>
            <li>ISTQB Foundation Level</li>
          </ul>
        </section>
        <hr className="my-4" />

        <section className="mt-6">
          <h3 className="text-xl font-semibold">Languages</h3>
          <ul className="list-disc pl-5">
            <li>English (Fluent)</li>
            <li>Bengali (Native)</li>
          </ul>
        </section>
        <h1 className="mb-10"></h1>
      </div>
    </div>
  );
};

export default TemplateFive;
