// CustomTemplate2PDF.jsx
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
export const CustomTemplate2PDF = ({formData}) => {

  console.log(formData);
    const {
        personalInfo: { fullName, jobTitle, phoneNumber, email, address, summary } = {},
        education: { institution, cgpa, degree, fieldOfStudy, additionalInfo, startDate, endDate } = {},
        experience: { companyName, position, duration, location, description } = {},
        experience2: { companyName2, position2, duration2, location2, description2 } = {},
        achievements: { achievementTitle, startdate, enddate, organization, description: achievementDescription } = {},
      } = formData || {};
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Name and Job Title */}
        <Text style={styles.headingCenter}>{fullName || 'Emma Achern'}</Text>
        <Text style={styles.subHeadingCenter}>{jobTitle || 'Chemist'}</Text>

        <View style={styles.divider} />

        {/* Professional Summary */}
        <Text style={styles.sectionTitle}>Professional Summary</Text>
        <Text style={styles.textCenter}>
          {summary ||
            `Dedicated and detail-oriented chemist with extensive experience in analytical research, laboratory testing, and chemical synthesis. Skilled in utilizing advanced instrumentation and methodologies to conduct qualitative and quantitative analyses.`}
        </Text>

        {/* Contact Info */}
        <View style={styles.contactInfo}>
          <View style={styles.contactItem}>
            <Text style={styles.textXs}>Phone</Text>
            <Text style={styles.textXs}>{phoneNumber || '+1 (123) 456-7890'}</Text>
          </View>
          <View style={styles.contactItem}>
            <Text style={styles.textXs}>Email</Text>
            <Text style={styles.textXs}>{email || 'emma.achern@example.com'}</Text>
          </View>
          <View style={styles.contactItem}>
            <Text style={styles.textXs}>Address</Text>
            <Text style={styles.textXs}>{address || '123 Main St, New York, NY'}</Text>
          </View>
        </View>

        {/* Education */}
        <Text style={styles.sectionTitle}>Education</Text>
        <Text style={styles.normalText}>
          {fieldOfStudy || 'Bachelor of Science in Chemistry'} | {startDate || '2026'} - {endDate || '2030'}
        </Text>
        <Text style={{ ...styles.normalText, color: '#006400' }}>
          {institution || 'East State University, Valley City'}
        </Text>
        <View style={{ marginVertical: 5 }}>
          <Text style={styles.listItem}>
            • <Text>Additional Info: {additionalInfo || 'Organic Chemistry, Analytical Chemistry, Physical Chemistry, Biochemistry, Environmental Chemistry'}</Text>
          </Text>
          <Text style={styles.listItem}>
            • <Text>CGPA: {cgpa || '3.8/4.0'}</Text>
          </Text>
        </View>

        {/* Project Experience */}
        <Text style={styles.sectionTitle}>Project Experience</Text>

        {/* Project 1 */}
        <Text style={styles.normalText}>
          {companyName || 'Fabrication of Miniature Chemical Reactor'} | {duration || '2028'}
        </Text>
        <Text style={{ ...styles.normalText, color: '#006400' }}>
          {position || 'Department of Chemistry, East State University'}
        </Text>
        {description ? (
          <Text style={styles.normalText}>{description}</Text>
        ) : (
          <View style={{ marginVertical: 5 }}>
            <Text style={styles.listItem}>• Project Focus: Design and fabrication of a miniature chemical reactor for lab-scale reactions</Text>
            <Text style={styles.listItem}>• Key Responsibilities: Developing the prototype, conducting experiments to test efficiency, and optimizing reactor performance</Text>
            <Text style={styles.listItem}>• Technologies/Methods Used: CAD modeling, thermodynamic analysis, and material selection for reactor components</Text>
          </View>
        )}

        {/* Project 2 */}
        <Text style={{ ...styles.normalText, marginTop: 10 }}>
          {companyName2 || 'The Green Thumb Chemist'} | {duration2 || '2029'}
        </Text>
        <Text style={`${styles.projectSubTitle},, color: '#006400'`}>
          {position2 || 'Department of Chemistry, East State University'}
        </Text>
        {description2 ? (
          <Text style={styles.normalText}>{description2}</Text>
        ) : (
          <View style={{ marginVertical: 5 }}>
            <Text style={styles.listItem}>• Project Focus: Development of an eco-friendly chemical solution for plant growth and soil health improvement</Text>
            <Text style={styles.listItem}>• Key Responsibilities: Synthesizing the chemical solution, testing its effects on different plant species, and analyzing soil samples</Text>
            <Text style={styles.listItem}>• Technologies/Methods Used: Green chemistry techniques, soil pH analysis, plant growth tracking</Text>
          </View>
        )}

        {/* Awards */}
        <Text style={styles.sectionTitle}>Notable Awards</Text>
        <View style={{ marginVertical: 5 }}>
          <Text style={styles.listItem}>
            • {achievementTitle || `Dean's List`}, {organization || `East State University`}, {(startdate && startdate.split(`-`)[0]) || `2026`} - {(enddate && enddate.split(`-`)[0]) || `2026`}
          </Text>
        </View>

        <View style={styles.divider} />
      </Page>
    </Document>
  )
}
