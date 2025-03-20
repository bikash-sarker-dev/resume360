


import React from "react";

const TemplateTwo = () => {
  return (
    <div className="container mx-auto pb-8 pt-28 lg:pb-12">
      <div className="bg-white shadow-lg rounded-lg p-16">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center border-b pb-4 mb-6">
          <h1 className="text-4xl font-bold text-gray-800">Samira Alcaraz</h1>
          <h2 className="text-2xl font-semibold text-gray-600">Mechanical Engineer</h2>
        </div>

        {/* Contact Section */}
        <div className="grid grid-cols-12 mt-10 gap-4">
          <div className="col-span-12 lg:col-span-2">
            <h1 className="text-xl font-bold text-gray-700">Contact</h1>
          </div>
          <div className="col-span-12 lg:col-span-10 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-lg text-gray-800"><span className="font-bold">Phone:</span> +123-456-7890</h3>
              <h4 className="text-lg text-gray-800"> <span className="font-bold">Email:</span> samira.alcaraz@example.com</h4>
            </div>
            <div>
              <h3 className="text-lg text-gray-800"> <span className="font-bold">Address:</span> 123 Main Street, Any City, ST 12345</h3>
              <h4 className="text-lg text-blue-600 underline cursor-pointer">Portfolio: www.samiraalcaraz.com</h4>
            </div>
          </div>
        </div>

        {/* Professional Experience */}
        <section className="mt-10">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 lg:col-span-2">
              <h1 className="text-xl font-bold text-gray-700">Professional Experience</h1>
            </div>
            <div className="col-span-12 lg:col-span-10">
              <div className="mb-6">
                <h2 className="text-lg font-semibold text-gray-800">Research and Development Engineer | 2025-2030</h2>
                <h4 className="text-md font-medium text-gray-600">The Innovation Lab</h4>
                <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                  <li>Led the development of sustainable energy solutions for industrial applications.</li>
                  <li>Designed and tested mechanical components, improving efficiency by 15%.</li>
                  <li>Collaborated with cross-functional teams to implement innovative design methodologies.</li>
                </ul>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-gray-800">Mechanical Design Engineer | 2020-2025</h2>
                <h4 className="text-md font-medium text-gray-600">Tech Solutions Inc.</h4>
                <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                  <li>Developed CAD models for advanced manufacturing processes.</li>
                  <li>Conducted structural analysis to enhance product durability.</li>
                  <li>Managed projects from concept to completion, meeting all quality standards.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="mt-10">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 lg:col-span-2">
              <h1 className="text-xl font-bold text-gray-700">Education</h1>
            </div>
            <div className="col-span-12 lg:col-span-10">
              <div className="mb-4">
                <h2 className="text-lg font-semibold text-gray-800">Master of Science in Mechanical Engineering | 2018-2020</h2>
                <h4 className="text-md font-medium text-gray-600">University of California, Berkeley</h4>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-gray-800">Bachelor of Science in Mechanical Engineering | 2014-2018</h2>
                <h4 className="text-md font-medium text-gray-600">Massachusetts Institute of Technology</h4>
              </div>
            </div>
          </div>
        </section>

        {/* Certification Section */}
        <section className="mt-10">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 lg:col-span-2">
              <h1 className="text-xl font-bold text-gray-700">Certifications</h1>
            </div>
            <div className="col-span-12 lg:col-span-10 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h2 className="text-lg font-semibold text-gray-800">Certified Professional Engineer (PE)</h2>
                <h4 className="text-md font-medium text-gray-600">National Society of Professional Engineers</h4>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-gray-800">Six Sigma Green Belt Quality</h2>
                <h4 className="text-md font-medium text-gray-600">American Society for Quality</h4>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-gray-800">Advanced CAD Design Certification</h2>
                <h4 className="text-md font-medium text-gray-600">Autodesk</h4>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-gray-800">Project Management Professional (PMP)</h2>
                <h4 className="text-md font-medium text-gray-600">Project Management Institute</h4>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TemplateTwo;





