import { Document, Packer, Paragraph, TextRun, HeadingLevel } from "docx";
import { saveAs } from "file-saver";

export const generateDocx = (resumeData) => {
  const {
    personalInfo,
    education,
    skills,
    socialLinks,
    projects,
    experience,
    languages,
  } = resumeData;

  const createParagraph = (text, options = {}) =>
    new Paragraph({
      children: [new TextRun({ text, ...options })],
    });

  const createBulletPoint = (text) =>
    new Paragraph({
      text,
      bullet: {
        level: 0,
      },
    });

  const doc = new Document({
    sections: [
      {
        children: [
          // Header
          personalInfo?.fullName &&
            createParagraph(personalInfo.fullName, { bold: true, size: 32 }),
          personalInfo?.jobTitle &&
            createParagraph(personalInfo.jobTitle, { italics: true }),
          createParagraph(
            `${personalInfo?.email || ""} | ${personalInfo?.phone || ""} | ${personalInfo?.address || ""}`
          ),
          socialLinks?.length > 0 &&
            createParagraph(
              socialLinks.map((link) => `${link.platform}: ${link.link}`).join(" | ")
            ),

          // About
          personalInfo?.about &&
            new Paragraph({
              text: "About",
              heading: HeadingLevel.HEADING_2,
            }),
          personalInfo?.about && createParagraph(personalInfo.about),

          // Skills
          skills?.length > 0 &&
            new Paragraph({
              text: "Skills",
              heading: HeadingLevel.HEADING_2,
            }),
          skills?.length > 0 && createParagraph(skills.join(", ")),

          // Experience
          experience?.length > 0 &&
            new Paragraph({
              text: "Professional Experience",
              heading: HeadingLevel.HEADING_2,
            }),
          ...(experience || []).map((exp) =>
            new Paragraph({
              children: [
                new TextRun({ text: `${exp.position} – ${exp.company}`, bold: true }),
                new TextRun(`\n${exp.startMonth} – ${exp.endMonth}`),
                new TextRun(`\n${exp.description}`),
              ],
              spacing: { after: 200 },
            })
          ),

          // Education
          education?.length > 0 &&
            new Paragraph({
              text: "Education",
              heading: HeadingLevel.HEADING_2,
            }),
          ...(education || []).map((edu) =>
            new Paragraph({
              children: [
                new TextRun({
                  text: `${edu.degree} in ${edu.field} – ${edu.school}`,
                  bold: true,
                }),
                new TextRun(`\n${edu.startDate} – ${edu.endDate}`),
                new TextRun(`\n${edu.description}`),
              ],
              spacing: { after: 200 },
            })
          ),

          // Projects
          projects?.length > 0 &&
            new Paragraph({
              text: "Projects",
              heading: HeadingLevel.HEADING_2,
            }),
          ...(projects || []).flatMap((proj) => [
            new Paragraph({
              children: [new TextRun({ text: proj.projectName, bold: true })],
            }),
            proj.description && createParagraph(proj.description),
            ...(proj.features || []).map((feature) => createBulletPoint(feature)),
            (proj.live || proj.client || proj.server) &&
              createParagraph(
                `Links: ${
                  proj.live ? `Live: ${proj.live} ` : ""
                }${proj.client ? `Client: ${proj.client} ` : ""}${
                  proj.server ? `Server: ${proj.server}` : ""
                }`
              ),
            new Paragraph({ text: "" }), // Empty line spacing
          ]),

          // Languages
          languages?.length > 0 &&
            new Paragraph({
              text: "Languages",
              heading: HeadingLevel.HEADING_2,
            }),
          ...(languages || []).map((lang) =>
            createBulletPoint(`${lang.language} – ${lang.proficiency}`)
          ),
        ].filter(Boolean),
      },
    ],
  });

  // Save as .docx
  Packer.toBlob(doc).then((blob) => {
    saveAs(blob, `${personalInfo?.fullName || "resume"}.docx`);
  });
};
