import React, { useState } from "react";
import { Editor } from "react-simple-wysiwyg";
import { Document, Packer, Paragraph, TextRun } from "docx";
import { saveAs } from "file-saver";
import jsPDF from "jspdf";

// import "react-simple-wysiwyg/dist/index.css";

const CoverLetterEditor = () => {
  const [coverLetter, setCoverLetter] = useState("<h2>Your Cover Letter</h2><p>Write your cover letter here...</p>");

  const handleTextChange = (e) => {
    setCoverLetter(e.target.value);
  };

  const generateDOCX = () => {
    const doc = new Document({
      sections: [
        {
          children: [
            new Paragraph({
              children: [new TextRun(coverLetter.replace(/[#*_`>-]/g, ""))],
            }),
          ],
        },
      ],
    });

    Packer.toBlob(doc).then((blob) => {
      saveAs(blob, "cover-letter.docx");
    });
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    const lines = doc.splitTextToSize(coverLetter.replace(/[#*_`>-]/g, ""), 180);
    doc.text(lines, 10, 10);
    doc.save("cover-letter.pdf");
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-xl rounded-xl mt-8">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">✨ Cover Letter Generator</h1>

      <div className="mb-6">
        <label className="block text-lg font-medium text-gray-700 mb-2">Write Your Cover Letter:</label>
        <Editor
          value={coverLetter}
          onChange={handleTextChange}
          spellCheck
          toolbarClassName="toolbarClassName"
          editorClassName="editorClassName"
        />
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">📝 Live Preview:</h2>
        <div className="p-6 border border-gray-200 rounded-lg bg-gray-50 text-gray-800 leading-relaxed">
          <div dangerouslySetInnerHTML={{ __html: coverLetter }} />
        </div>
      </div>

      <div className="flex justify-center gap-4">
        <button
          onClick={generateDOCX}
          className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-lg shadow-md transition duration-300"
        >
          Download as DOCX
        </button>
        <button
          onClick={generatePDF}
          className="bg-rose-600 hover:bg-rose-500 text-white px-6 py-3 rounded-lg shadow-md transition duration-300"
        >
          Download as PDF
        </button>
      </div>
    </div>
  );
};

export default CoverLetterEditor;
