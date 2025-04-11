// generateDocx.js
import { Document, Packer, Paragraph, TextRun, HeadingLevel } from "docx";
import { saveAs } from "file-saver";

export const generateDocx = (coverLetterData) => {
  // Create a new document
  const doc = new Document({
    sections: [
      {
        properties: {},
        children: [
          // Greeting
          new Paragraph({
            children: [
              new TextRun(coverLetterData.greeting),
            ],
          }),

          // Introduction
          new Paragraph({
            children: [
              new TextRun(coverLetterData.introduction),
            ],
          }),

          // Why you're a good fit
          new Paragraph({
            children: [
              new TextRun(coverLetterData.goodFit),
            ],
          }),

          // Skills and Qualifications
          new Paragraph({
            children: [
              new TextRun(coverLetterData.skillsAndQualifications),
            ],
          }),

          // Professional Experience
          new Paragraph({
            children: [
              new TextRun(coverLetterData.professionalExperience),
            ],
          }),

          // Closing
          new Paragraph({
            children: [
              new TextRun(coverLetterData.closing),
            ],
          }),

          // Formal Closing
          new Paragraph({
            children: [
              new TextRun(coverLetterData.ending?.formalClosing),
            ],
          }),

          // Signature
          new Paragraph({
            children: [
              new TextRun(coverLetterData.ending?.signature),
            ],
          }),
        ],
      },
    ],
  });

  // Generate the DOCX file
  Packer.toBlob(doc).then((blob) => {
    saveAs(blob, "coverLetter.docx");
  });
};
