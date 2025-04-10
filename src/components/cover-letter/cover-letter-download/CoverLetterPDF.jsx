// CoverLetterPDF.js
import React from 'react';
import { Document, Page, Text, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 12,
    fontFamily: 'Helvetica',
  },
  section: {
    marginBottom: 15,
  },
  heading: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  body: {
    fontSize: 12,
    marginBottom: 10,
  },
});

const CoverLetterPDF = ({ coverLetterData }) => {
  return (
    <Document>
      <Page style={styles.page}>
        <Text style={styles.heading}>Cover Letter</Text>

        {/* Greeting */}
        <Text style={styles.body}>{coverLetterData.greeting}</Text>

        {/* Introduction */}
        <Text style={styles.body}>{coverLetterData.introduction}</Text>

        {/* Why you're a good fit */}
        <Text style={styles.body}>{coverLetterData.goodFit}</Text>

        {/* Skills and Qualifications */}
        <Text style={styles.body}>{coverLetterData.skillsAndQualifications}</Text>

        {/* Professional Experience */}
        <Text style={styles.body}>{coverLetterData.professionalExperience}</Text>

        {/* Closing */}
        <Text style={styles.body}>{coverLetterData.closing}</Text>

        {/* Signature */}
        <Text style={styles.body}>{coverLetterData.ending?.formalClosing}</Text>
        <Text style={styles.body}>{coverLetterData.ending?.signature}</Text>
      </Page>
    </Document>
  );
};

export default CoverLetterPDF;
