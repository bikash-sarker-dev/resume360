
import React, { useRef } from "react";
import html2pdf from "html2pdf.js";

const Uploadtemplate = ({ extractedText }) => {
  const resumeRef = useRef();

  const handleDownload = () => {
    if (!resumeRef.current) return;

    const opt = {
      margin: 0.5,
      filename: `${extractedText.name || "resume"}.pdf`,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };

    html2pdf().set(opt).from(resumeRef.current).save();
  };

  return (
    <>
    <div  ref={resumeRef} className="container pt-28 mx-auto bg-white shadow-lg p-16 rounded-lg">
      <div className="text-center flex justify-between border-b pb-5">
        <div className="text-left">
          <h1
            className="text-4xl font-bold text-black"
            contentEditable
            suppressContentEditableWarning
          >
            {extractedText.name || "Your Name"}
          </h1>
          <h2
            className="text-2xl mt-2 text-black"
            contentEditable
            suppressContentEditableWarning
          >
            {extractedText.title || "Your Title"}
          </h2>
        </div>
        <div className="mt-2 text-left flex flex-col text-black">
          <h2 className="mb-3 text-2xl font-bold">Contact Info</h2>
          <a href="" contentEditable suppressContentEditableWarning>
            Email: {extractedText.email || "example@mail.com"}
          </a>
          <a href="" contentEditable suppressContentEditableWarning>
            Portfolio: {extractedText.portfolio || "yourportfolio.com"}
          </a>
          <a
            href={extractedText.linkedin}
            contentEditable
            suppressContentEditableWarning
          >
            LinkedIn: {extractedText.linkedin || "linkedin.com/in/you"}
          </a>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-xl font-semibold text-black">SUMMARY</h3>
        <p
          className="text-black mt-2"
          contentEditable
          suppressContentEditableWarning
        >
          {extractedText.summary || "Write a brief personal summary here..."}
        </p>
      </div>

      <div>
          <h3 className="text-xl font-semibold text-black mt-4">SKILLS</h3>
          <div className="">
            

            <div className="mt-2">
              <p className="font-medium text-gray-700">Front-End:</p>
              <p
                className="text-black ml-4"
                contentEditable
                suppressContentEditableWarning
              >
                {(extractedText.skills?.frontend || []).join(", ") ||
                  "Add front-end skills..."}
              </p>
            </div>

            <div className="mt-2">
              <p className="font-medium text-gray-700">Back-End:</p>
              <p
                className="text-black ml-4"
                contentEditable
                suppressContentEditableWarning
              >
                {(extractedText.skills?.backend || []).join(", ") ||
                  "Add back-end skills..."}
              </p>
            </div>

            {extractedText.skills?.others?.length > 0 && (
              <div className="mt-2">
                <p className="font-medium text-gray-700">Other Skills:</p>
                <p
                  className="text-black ml-4"
                  contentEditable
                  suppressContentEditableWarning
                >
                  {extractedText.skills.others.join(", ")}
                </p>
              </div>
            )}
          </div>
        </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-xl font-semibold text-black">EDUCATION</h3>
          <p
            className="text-black mt-2"
            contentEditable
            suppressContentEditableWarning
          >
            {extractedText.education || "Add your education background here..."}
          </p>
        </div>

        
      </div>

      <div className="mt-6">
        <h3 className="text-xl font-bold mb-2">PROJECTS</h3>
        <div
          className="text-black"
          contentEditable
          suppressContentEditableWarning
        >
          {extractedText.projects?.map((proj, index) => (
            <div key={index} className="mb-4">
              <div className="flex my-3 space-x-3">
                <h4 className="text-lg font-bold">{proj.title}</h4>
                <p>
                  <strong>Type:</strong> {proj.type}
                </p>
                
                <p>
                  <strong>Client Repo:</strong> {proj.clientRepo}
                </p>
              </div>
              <p>
                <strong>Features:</strong>
              </p>
              <ul className="list-disc ml-6">
                {proj.features.map((feat, i) => (
                  <li key={i}>{feat}</li>
                ))}
              </ul>
              <p>
                  <strong>Overview:</strong> {proj.overview}
                </p>
              <p className="mt-2">
                <strong>Technologies:</strong> {proj.technologies.join(", ")}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-xl font-semibold text-black">languages</h3>
        <p
          className="text-black mt-2"
          contentEditable
          suppressContentEditableWarning
        >
          {extractedText.languages || "Reference details go here..."}
        </p>
      </div>

     

    </div>
     <div className="text-center mt-6">
     <button
       onClick={handleDownload}
       className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 transition"
     >
       Download PDF
     </button>
   </div>
   </>
  );
};

export default Uploadtemplate;
