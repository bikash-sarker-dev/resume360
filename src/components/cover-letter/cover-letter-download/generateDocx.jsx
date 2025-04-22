import {
  Document,
  Packer,
  Paragraph,
  TextRun,
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
      alignment: AlignmentType.JUSTIFIED,
      spacing: { after: 200 },
      ...options,
      children: [new TextRun({ text, size: 24 })],
    });

  const makeSimpleLine = (text, bold = false) =>
    new Paragraph({
      alignment: AlignmentType.LEFT,
      spacing: { after: 100 },
      children: [
        new TextRun({
          text,
          bold,
          size: 24,
        }),
      ],
    });

  const doc = new Document({
    sections: [
      {
        properties: {
          page: {
            margin: { top: 720, right: 720, bottom: 720, left: 720 }, // 0.5 inch
          },
        },
        children: [
          // Sender Info
          personalInfo.fullName && makeSimpleLine(personalInfo.fullName, true),
          personalInfo.address && makeSimpleLine(personalInfo.address),
          personalInfo.cityZip && makeSimpleLine(personalInfo.cityZip),
          personalInfo.email && makeSimpleLine(personalInfo.email),
          personalInfo.phone && makeSimpleLine(personalInfo.phone),
          personalInfo.linkedIn && makeSimpleLine(personalInfo.linkedIn),
          personalInfo.portfolio && makeSimpleLine(personalInfo.portfolio),
          personalInfo.date && makeSimpleLine(personalInfo.date),
          personalInfo.date && makeSimpleLine(),

          // Hiring Manager Info
          hiringManager.name && makeSimpleLine(hiringManager.name, true),
          hiringManager.company && makeSimpleLine(hiringManager.company),
          hiringManager.address && makeSimpleLine(hiringManager.address),
          hiringManager.cityZip && makeSimpleLine(hiringManager.cityZip),
          personalInfo.date && makeSimpleLine(),

          // Cover Letter Body
          greeting && makeParagraph(greeting, { spacing: { after: 100 } }),
          introduction && makeParagraph(introduction),
          goodFit && makeParagraph(goodFit),
          skillsAndQualifications && makeParagraph(skillsAndQualifications),
          professionalExperience && makeParagraph(professionalExperience),
          closing && makeParagraph(closing),

          // Closing
          ending?.formalClosing &&
            new Paragraph({
              alignment: AlignmentType.JUSTIFIED,
              spacing: { before: 300 },
              children: [
                new TextRun({ text: ending.formalClosing, size: 24 }),
              ],
            }),

          ending?.signature &&
            new Paragraph({
              alignment: AlignmentType.LEFT,
              spacing: { after: 0 },
              children: [
                new TextRun({ text: ending.signature, bold: true, size: 24 }),
              ],
            }),
        ].filter(Boolean),
      },
    ],
  });

  // Save as .docx
  Packer.toBlob(doc).then((blob) => {
    saveAs(blob, "coverLetter.docx");
  });
};
