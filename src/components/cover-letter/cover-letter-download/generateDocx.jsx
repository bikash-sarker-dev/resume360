import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  HeadingLevel,
  AlignmentType
} from "docx";
import { saveAs } from "file-saver";

export const generateDocx = (coverLetterData) => {
  const {
    personalInfo,
    hiringManager,
    greeting,
    introduction,
    goodFit,
    skillsAndQualifications,
    professionalExperience,
    closing,
    ending,
  } = coverLetterData;

  const makeParagraph = (text, options = {}) =>
    new Paragraph({
      spacing: { after: 200 },
      alignment: AlignmentType.JUSTIFIED,
      ...options,
      children: [new TextRun(text)],
    });

  const doc = new Document({
    sections: [
      {
        properties: {},
        children: [
          // Sender Info
          new Paragraph({
            spacing: { after: 100 },
            children: [
              new TextRun({ text: personalInfo.fullName, bold: true }),
              new TextRun(`\n${personalInfo.address}`),
              new TextRun(`\n${personalInfo.cityZip}`),
              new TextRun(`\n${personalInfo.email}`),
              new TextRun(`\n${personalInfo.phone}`),
              new TextRun(`\n${personalInfo.linkedIn}`),
              new TextRun(`\n${personalInfo.portfolio}`),
            ],
          }),

          // Date
          new Paragraph({
            spacing: { after: 200 },
            children: [new TextRun(personalInfo.date)],
          }),

          // Hiring Manager Info
          new Paragraph({
            spacing: { after: 200 },
            children: [
              new TextRun({ text: hiringManager.name, bold: true }),
              new TextRun(`\n${hiringManager.company}`),
              new TextRun(`\n${hiringManager.address}`),
              new TextRun(`\n${hiringManager.cityZip}`),
            ],
          }),

          // Cover Letter Body
          makeParagraph(greeting, { spacing: { after: 100 } }),
          makeParagraph(introduction),
          makeParagraph(goodFit),
          makeParagraph(skillsAndQualifications),
          makeParagraph(professionalExperience),
          makeParagraph(closing),

          // Closing
          new Paragraph({
            spacing: { before: 300 },
            children: [new TextRun(ending?.formalClosing)],
          }),

          new Paragraph({
            spacing: { after: 0 },
            children: [
              new TextRun({ text: ending?.signature, bold: true }),
            ],
          }),
        ],
      },
    ],
  });

  // Save as .docx
  Packer.toBlob(doc).then((blob) => {
    saveAs(blob, "coverLetter.docx");
  });
};
