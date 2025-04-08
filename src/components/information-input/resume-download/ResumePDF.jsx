import React from 'react';
import { Page, Text, View, Document, StyleSheet, Link } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 11,
    fontFamily: 'Helvetica',
    lineHeight: 1.5,
  },
  section: {
    marginBottom: 12,
  },
  heading: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 6,
    textTransform: 'uppercase',
  },
  subheading: {
    fontSize: 11,
    fontWeight: 'bold',
  },
  paragraph: {
    marginBottom: 4,
  },
  bulletList: {
    paddingLeft: 12,
    marginTop: 2,
  },
  bulletItem: {
    marginBottom: 2,
  },
  divider: {
    marginVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

const ResumePDF = ({ resumeData }) => {
  const {
    personalInfo,
    education,
    skills,
    socialLinks,
    projects,
    experience,
    languages,
  } = resumeData;

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Title */}
        {personalInfo?.fullName && (
          <View style={styles.section}>
            <Text style={{ fontSize: 18, textAlign: 'center', fontWeight: 'bold' }}>{personalInfo.fullName}</Text>
            {personalInfo.jobTitle && (
              <Text style={{ textAlign: 'center', fontSize: 12, marginBottom: 6 }}>
                {personalInfo.jobTitle}
              </Text>
            )}
            <Text style={{ textAlign: 'center', fontSize: 10 }}>
              {personalInfo.address} | {personalInfo.phone} | {personalInfo.email}
            </Text>
            {socialLinks?.length > 0 && (
              <Text style={{ textAlign: 'center', fontSize: 10 }}>
                {socialLinks.map((link, i) => (
                  <Text key={i}>
                    <Link src={link.link}>{link.platform}</Link>{i < socialLinks.length - 1 ? ' | ' : ''}
                  </Text>
                ))}
              </Text>
            )}
          </View>
        )}

        {/* About */}
        {personalInfo?.about && (
          <View style={styles.section}>
            <Text style={styles.heading}>About</Text>
            <Text style={styles.paragraph}>{personalInfo.about}</Text>
          </View>
        )}

        {/* Skills */}
        {skills?.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.heading}>Skills</Text>
            <Text style={styles.paragraph}>{skills.join(', ')}</Text>
          </View>
        )}

        {/* Experience */}
        {experience?.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.heading}>Professional Experience</Text>
            {experience.map((exp, i) => (
              <View key={i} style={styles.paragraph}>
                <Text style={styles.subheading}>
                  {exp.position} – {exp.company}
                </Text>
                <Text style={{ fontSize: 10, fontStyle: 'italic' }}>{exp.startMonth} – {exp.endMonth}</Text>
                <Text>{exp.description}</Text>
              </View>
            ))}
          </View>
        )}

        {/* Education */}
        {education?.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.heading}>Education</Text>
            {education.map((edu, i) => (
              <View key={i} style={styles.paragraph}>
                <Text style={styles.subheading}>
                  {edu.degree} in {edu.field} – {edu.school}
                </Text>
                <Text style={{ fontSize: 10, fontStyle: 'italic' }}>{edu.startDate} – {edu.endDate}</Text>
                <Text>{edu.description}</Text>
              </View>
            ))}
          </View>
        )}

        {/* Projects */}
        {projects?.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.heading}>Projects</Text>
            {projects.map((project, i) => (
              <View key={i} style={styles.paragraph}>
                <Text style={styles.subheading}>{project.projectName}</Text>
                <Text style={{ fontSize: 10 }}>
                  {project.live && <Link src={project.live}>Live</Link>}{" "}
                  {project.client && <Link src={project.client}>Client</Link>}{" "}
                  {project.server && <Link src={project.server}>Server</Link>}
                </Text>
                <Text>{project.description}</Text>
                {project.features?.length > 0 && (
                  <View style={styles.bulletList}>
                    {project.features.map((feature, idx) => (
                      <Text key={idx} style={styles.bulletItem}>• {feature}</Text>
                    ))}
                  </View>
                )}
              </View>
            ))}
          </View>
        )}

        {/* Languages */}
        {languages?.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.heading}>Languages</Text>
            <View style={styles.bulletList}>
              {languages.map((lang, i) => (
                <Text key={i} style={styles.bulletItem}>
                  • {lang.language} – {lang.proficiency}
                </Text>
              ))}
            </View>
          </View>
        )}
      </Page>
    </Document>
  );
};

export default ResumePDF;
