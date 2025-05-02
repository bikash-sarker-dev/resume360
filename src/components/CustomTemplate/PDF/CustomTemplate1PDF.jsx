import React from 'react';
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
  Link,
} from '@react-pdf/renderer';

// Custom font registration (optional, can use default fonts)
Font.register({
  family: 'Roboto',
  fonts: [
    {
      src: 'https://fonts.gstatic.com/s/roboto/v29/KFOmCnqEu92Fr1Mu4mxP.ttf',
    },
  ],
});

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 11,
    fontFamily: 'Roboto',
    lineHeight: 1.5,
    color: '#000',
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 6,
    textTransform: 'uppercase',
  },
  text: {
    fontSize: 11,
    marginBottom: 2,
  },
  paragraph: {
    fontSize: 11,
    marginBottom: 6,
  },
  listItem: {
    fontSize: 11,
    marginLeft: 10,
    marginBottom: 2,
  },
});

export const CustomTemplate1PDF = ({ resumeData }) => {
  const {
    personalInfo,
    education,
    skills,
    experience,
    projects,
    languages,
    socialLinks,
  } = resumeData || {};

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Name and Job Title */}
        <View>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
            {personalInfo?.fullName || 'Your Name'}
          </Text>
          <Text style={{ fontSize: 12, marginBottom: 6 }}>
            {personalInfo?.jobTitle || 'Your Job Title'}
          </Text>
        </View>

        {/* Contact Info */}
        <View style={{ marginBottom: 10 }}>
          {personalInfo?.email && <Text style={styles.text}>Email: {personalInfo.email}</Text>}
          {personalInfo?.phone && <Text style={styles.text}>Phone: {personalInfo.phone}</Text>}
          {personalInfo?.address && <Text style={styles.text}>Address: {personalInfo.address}</Text>}
        </View>

        {/* Summary */}
        {personalInfo?.about && (
          <View style={{ marginBottom: 10 }}>
            <Text style={styles.sectionTitle}>Summary</Text>
            <Text style={styles.paragraph}>{personalInfo.about}</Text>
          </View>
        )}

        {/* Education */}
        {education?.length > 0 && (
          <View style={{ marginBottom: 10 }}>
            <Text style={styles.sectionTitle}>Education</Text>
            {education.map((edu, i) => (
              <View key={i} style={{ marginBottom: 6 }}>
                <Text style={styles.text}>
                  {edu.school} ({new Date(edu.startDate).getFullYear()} - {new Date(edu.endDate).getFullYear()})
                </Text>
                <Text style={styles.listItem}>
                  {edu.degree} in {edu.field} | Grade: {edu.grade}
                </Text>
                {edu.description && <Text style={styles.listItem}>• {edu.description}</Text>}
              </View>
            ))}
          </View>
        )}

        {/* Skills */}
        {skills?.length > 0 && (
          <View style={{ marginBottom: 10 }}>
            <Text style={styles.sectionTitle}>Skills</Text>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
              {skills.map((skill, i) => (
                <Text key={i} style={{ ...styles.listItem, width: '50%' }}>
                  • {skill}
                </Text>
              ))}
            </View>
          </View>
        )}

        {/* Experience */}
        {experience?.length > 0 && (
          <View style={{ marginBottom: 10 }}>
            <Text style={styles.sectionTitle}>Experience</Text>
            {experience.map((exp, i) => (
              <View key={i} style={{ marginBottom: 6 }}>
                <Text style={styles.text}>
                  {exp.company} — {exp.position}
                </Text>
                <Text style={styles.listItem}>
                  {exp.startMonth} to {exp.endMonth}
                </Text>
                <Text style={styles.listItem}>{exp.description}</Text>
              </View>
            ))}
          </View>
        )}

        {/* Projects */}
        {projects?.length > 0 && (
          <View style={{ marginBottom: 10 }}>
            <Text style={styles.sectionTitle}>Projects</Text>
            {projects.map((project, i) => (
              <View key={i} style={{ marginBottom: 6 }}>
                <Text style={styles.text}>{project.projectName}</Text>
                <Text style={styles.listItem}>• {project.description}</Text>
                {project.features?.map((feature, j) => (
                  <Text key={j} style={styles.listItem}>• {feature}</Text>
                ))}
                {project.live && <Text style={styles.listItem}>Live: <Link src={project.live}>{project.live}</Link></Text>}
                {project.client && <Text style={styles.listItem}>Client: <Link src={project.client}>{project.client}</Link></Text>}
                {project.server && <Text style={styles.listItem}>Server: <Link src={project.server}>{project.server}</Link></Text>}
              </View>
            ))}
          </View>
        )}

        {/* Languages */}
        {languages?.length > 0 && (
          <View style={{ marginBottom: 10 }}>
            <Text style={styles.sectionTitle}>Languages</Text>
            {languages.map((lang, i) => (
              <Text key={i} style={styles.listItem}>
                {lang.language} — {lang.proficiency}
              </Text>
            ))}
          </View>
        )}

        {/* Social Links */}
        {socialLinks?.length > 0 && (
          <View style={{ marginBottom: 10 }}>
            <Text style={styles.sectionTitle}>Social Links</Text>
            {socialLinks.map((link, i) => (
              <Text key={i} style={styles.listItem}>
                {link.platform}: <Link src={link.link}>{link.link}</Link>
              </Text>
            ))}
          </View>
        )}
      </Page>
    </Document>
  );
};

export default CustomTemplate1PDF;
