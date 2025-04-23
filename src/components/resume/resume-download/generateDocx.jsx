import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  ExternalHyperlink,
  AlignmentType,
} from "docx";
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
      spacing: { after: 100 },
      alignment: AlignmentType.JUSTIFIED,
      children: [new TextRun({ text, ...options, size: 24 })],
    });

  const createBulletPoint = (text) =>
    new Paragraph({
      spacing: { after: 100 },
      alignment: AlignmentType.JUSTIFIED,
      bullet: {
        level: 0,
      },
      children: [
        new TextRun({
          text,
          size: 24,
        }),
      ],
    });

  const createHyperlinkedText = (text, url) =>
    new ExternalHyperlink({
      children: [new TextRun({ text, style: "Hyperlink", size: 24 })],
      link: url,
    });

  const createSectionTitle = (title) =>
    new Paragraph({
      spacing: { before: 200, after: 100 },
      alignment: AlignmentType.JUSTIFIED,
      children: [
        new TextRun({
          text: title,
          size: 28,
          bold: true,
        }),
      ],
    });

  const formatDateRange = (start, end) => {
    const startFormatted = start || "N/A";
    const endFormatted = end || "Present";
    return `${startFormatted} – ${endFormatted}`;
  };

  const doc = new Document({
    sections: [
      {
        properties: {
          page: {
            margin: { top: 720, right: 720, bottom: 720, left: 720 },
          },
        },
        children: [
          // Header
          personalInfo?.fullName &&
            new Paragraph({
              spacing: { after: 200 },
              alignment: AlignmentType.JUSTIFIED,
              children: [
                new TextRun({
                  text: personalInfo.fullName,
                  size: 40,
                  bold: true,
                }),
              ],
            }),

          // Job Title
          personalInfo?.jobTitle &&
            createParagraph(personalInfo.jobTitle, { size: 24 }),

          // Contact Info
          createParagraph(
            `${personalInfo?.email || ""} | ${personalInfo?.phone || ""} | ${personalInfo?.address || ""}`,
            { italics: true }
          ),

          // Social Links
          socialLinks?.length > 0 &&
            new Paragraph({
              spacing: { after: 200 },
              alignment: AlignmentType.JUSTIFIED,
              children: socialLinks.flatMap((link, index) => {
                const children = [createHyperlinkedText(link.platform, link.link)];
                if (index < socialLinks.length - 1) {
                  children.push(new TextRun(", "));
                }
                return children;
              }),
            }),

          // About
          personalInfo?.about && createSectionTitle("About"),
          personalInfo?.about && createParagraph(personalInfo.about),

          // Skills
          skills?.length > 0 && createSectionTitle("Skills"),
          skills?.length > 0 && createParagraph(skills.join(", ")),

          // Experience
          experience?.length > 0 && createSectionTitle("Professional Experience"),
          ...(experience || []).flatMap((exp) => [
            new Paragraph({
              spacing: { after: 100 },
              alignment: AlignmentType.JUSTIFIED,
              children: [
                new TextRun({
                  text: `${exp.position} – ${exp.company}`,
                  bold: true,
                  size: 24,
                }),
              ],
            }),
            new Paragraph({
              alignment: AlignmentType.JUSTIFIED,
              children: [
                new TextRun({
                  text: `${formatDateRange(exp.startMonth, exp.endMonth)}`,
                  italics: true,
                  size: 24,
                }),
              ],
            }),
            new Paragraph({
              alignment: AlignmentType.JUSTIFIED,
              children: [
                new TextRun({
                  text: exp.description,
                  size: 24,
                }),
              ],
            }),
          ]),

          // Education
          education?.length > 0 && createSectionTitle("Education"),
          ...(education || []).flatMap((edu) => [
            new Paragraph({
              spacing: { after: 100 },
              alignment: AlignmentType.JUSTIFIED,
              children: [
                new TextRun({
                  text: `${edu.degree} in ${edu.field} – ${edu.school}`,
                  bold: true,
                  size: 24,
                }),
              ],
            }),
            new Paragraph({
              alignment: AlignmentType.JUSTIFIED,
              children: [
                new TextRun({
                  text: `${formatDateRange(edu.startDate, edu.endDate)}`,
                  italics: true,
                  size: 24,
                }),
              ],
            }),
            new Paragraph({
              alignment: AlignmentType.JUSTIFIED,
              children: [
                new TextRun({
                  text: edu.description,
                  size: 24,
                }),
              ],
            }),
          ]),

          // Projects
          projects?.length > 0 && createSectionTitle("Projects"),
          ...(projects || []).flatMap((proj) => [
            new Paragraph({
              spacing: { after: 100 },
              alignment: AlignmentType.JUSTIFIED,
              children: [
                new TextRun({ text: proj.projectName, bold: true, size: 24 }),
              ],
            }),
            (proj.live || proj.client || proj.server) &&
              new Paragraph({
                spacing: { after: 100 },
                alignment: AlignmentType.JUSTIFIED,
                children: [
                  proj.live && createHyperlinkedText("Live", proj.live),
                  proj.live && (proj.client || proj.server) && new TextRun(" | "),
                  proj.client && createHyperlinkedText("Client", proj.client),
                  proj.client && proj.server && new TextRun(" | "),
                  proj.server && createHyperlinkedText("Server", proj.server),
                ].filter(Boolean),
              }),
            proj.description && createParagraph(proj.description),
            ...(proj.features || []).map((feature) => createBulletPoint(feature)),
          ]),

          // Languages
          languages?.length > 0 && createSectionTitle("Languages"),
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
