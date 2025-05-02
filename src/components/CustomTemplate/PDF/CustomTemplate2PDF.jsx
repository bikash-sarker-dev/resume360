import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import React from 'react';

// Styles
const styles = StyleSheet.create({
    page: {
      backgroundColor: '#ffffff',
      padding: 30,
      fontSize: 12,
    },
    headingCenter: {
      textAlign: 'center',
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 4,
    },
    subHeadingCenter: {
      textAlign: 'center',
      fontSize: 16,
      fontWeight: 'semibold',
      marginBottom: 10,
    },
    divider: {
      borderBottomWidth: 1,
      marginVertical: 10,
      borderColor: '#ccc',
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#006400', // Dark Green
      marginBottom: 8,
    },
    textCenter: {
      textAlign: 'center',
      fontSize: 10,
      marginBottom: 10,
    },
    contactInfo: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      gap: 20,
      marginBottom: 20,
    },
    contactItem: {
      flexDirection: 'column',
      alignItems: 'center',
    },
    textXs: {
      fontSize: 8,
    },
    normalText: {
      fontSize: 10,
      marginBottom: 5,
    },
    subheading:{
      fontSize: 10,
    },
    listItem: {
      marginLeft: 10,
      marginBottom: 4,
    },
});

export const CustomTemplate2PDF = ({ formData }) => {
  const {
    personalInfo: {
      fullName,
      jobTitle,
      phone,
      email,
      address,
      about,
    } = {},
    education = [],
    skills = [],
    socialLinks = [],
    projects = [],
    experience = [],
    languages = [],
  } = formData || {};

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Name and Job Title */}
        <Text style={styles.headingCenter}>{fullName || 'Johnathan Doe'}</Text>
        <Text style={styles.subHeadingCenter}>{jobTitle || 'Senior Frontend Engineer'}</Text>

        <View style={styles.divider} />

        {/* About Section */}
        <Text style={styles.sectionTitle}>About Me</Text>
        <Text style={styles.textCenter}>
          {about ||
            'Creative and detail-oriented frontend engineer with 5+ years of experience crafting intuitive and dynamic user interfaces. Skilled in modern frameworks and passionate about delivering seamless user experiences.'}
        </Text>

        {/* Contact Info */}
        <View style={styles.contactInfo}>
          <View style={styles.contactItem}>
            <Text style={styles.textXs}>Phone</Text>
            <Text style={styles.textXs}>{phone || '+1 (123) 456-7890'}</Text>
          </View>
          <View style={styles.contactItem}>
            <Text style={styles.textXs}>Email</Text>
            <Text style={styles.textXs}>{email || 'adnan.mahmud.pc@gmail.com'}</Text>
          </View>
          <View style={styles.contactItem}>
            <Text style={styles.textXs}>Address</Text>
            <Text style={styles.textXs}>{address || '170 William Street, NY'}</Text>
          </View>
        </View>

        {/* Education */}
        {education.length > 0 && (
          <>
            <Text style={styles.sectionTitle}>Education</Text>
            {education.map((edu, idx) => (
              <View key={idx}>
                <Text style={styles.normalText}>
                  {edu.field || 'Field'} | {edu.startDate ? new Date(edu.startDate).getFullYear() : '2025'} - {edu.endDate ? new Date(edu.endDate).getFullYear() : '2025'}
                </Text>
                <Text style={{ ...styles.normalText, color: '#006400' }}>
                  {edu.school || 'University Name'}
                </Text>
                <Text style={styles.normalText}>{edu.description || 'Description of the course'}</Text>
              </View>
            ))}
          </>
        )}

        {/* Skills */}
        {skills.length > 0 && (
          <>
            <Text style={styles.sectionTitle}>Skills</Text>
            <View style={{ marginVertical: 5 }}>
              {skills.map((skill, idx) => (
                <Text key={idx} style={styles.listItem}>• {skill}</Text>
              ))}
            </View>
          </>
        )}

        {/* Social Links */}
        {socialLinks.length > 0 && (
          <>
            <Text style={styles.sectionTitle}>Social Links</Text>
            <View style={{ marginVertical: 5 }}>
              {socialLinks.map((link, idx) => (
                <Text key={idx} style={styles.listItem}>
                  • <Text>{link.platform}: <Text style={{ color: '#006400' }}>{link.link}</Text></Text>
                </Text>
              ))}
            </View>
          </>
        )}

        {/* Projects */}
        {projects.length > 0 && (
          <>
            <Text style={styles.sectionTitle}>Projects</Text>
            <View style={{ marginVertical: 5 }}>
              {projects.map((project, idx) => (
                <View key={idx}>
                  <Text style={styles.normalText}>{project.projectName}</Text>
                  <Text style={styles.normalText}>{project.description}</Text>
                  <Text style={styles.normalText}>Live: <Text style={{ color: '#006400' }}>{project.live}</Text></Text>
                  <Text style={styles.normalText}>Client: <Text style={{ color: '#006400' }}>{project.client}</Text></Text>
                  <Text style={styles.normalText}>Server: <Text style={{ color: '#006400' }}>{project.server}</Text></Text>
                  <View style={{ marginVertical: 5 }}>
                    {project.features.map((feature, idx) => (
                      <Text key={idx} style={styles.listItem}>• {feature}</Text>
                    ))}
                  </View>
                </View>
              ))}
            </View>
          </>
        )}

        {/* Experience */}
        {experience.length > 0 && (
          <>
            <Text style={styles.sectionTitle}>Experience</Text>
            <View style={{ marginVertical: 5 }}>
              {experience.map((exp, idx) => (
                <View key={idx}>
                  <Text style={styles.normalText}>{exp.position} at {exp.company}</Text>
                  <Text style={styles.normalText}>
                    {exp.startMonth} - {exp.endMonth}
                  </Text>
                  <Text style={styles.normalText}>{exp.description}</Text>
                </View>
              ))}
            </View>
          </>
        )}

        {/* Languages */}
        {languages.length > 0 && (
          <>
            <Text style={styles.sectionTitle}>Languages</Text>
            <View style={{ marginVertical: 5 }}>
              {languages.map((lang, idx) => (
                <Text key={idx} style={styles.listItem}>• {lang.language} ({lang.proficiency})</Text>
              ))}
            </View>
          </>
        )}

        <View style={styles.divider} />
      </Page>
    </Document>
  );
};
export default CustomTemplate2PDF;