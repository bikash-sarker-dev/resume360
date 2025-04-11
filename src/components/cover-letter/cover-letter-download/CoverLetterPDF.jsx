// CoverLetterPDF.js
import React from 'react';
import { Document, Page, Text, StyleSheet, View } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 11,
    fontFamily: 'Helvetica',
    lineHeight: 1.6,
  },
  senderInfo: {
    marginBottom: 10,
  },
  receiverInfo: {
    marginBottom: 20,
  },
  text: {
    marginBottom: 10,
  },
  bold: {
    fontWeight: 'bold',
  },
  date: {
    marginBottom: 10,
  },
  greeting: {
    marginBottom: 10,
    fontWeight: 'bold',
  },
  paragraph: {
    marginBottom: 12,
    textAlign: 'justify',
  },
  closing: {
    marginTop: 20,
  },
  signature: {
    marginTop: 4,
    fontWeight: 'bold',
  },
});

const CoverLetterPDF = ({ coverLetterData }) => {
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

  return (
    <Document>
      <Page style={styles.page}>
        {/* Sender Info */}
        <View style={styles.senderInfo}>
          <Text style={styles.bold}>{personalInfo.fullName}</Text>
          <Text>{personalInfo.address}</Text>
          <Text>{personalInfo.cityZip}</Text>
          <Text>{personalInfo.email}</Text>
          <Text>{personalInfo.phone}</Text>
          <Text>{personalInfo.linkedIn}</Text>
          <Text>{personalInfo.portfolio}</Text>
        </View>

        {/* Date */}
        <Text style={styles.date}>{personalInfo.date}</Text>

        {/* Hiring Manager Info */}
        <View style={styles.receiverInfo}>
          <Text style={styles.bold}>{hiringManager.name}</Text>
          <Text>{hiringManager.company}</Text>
          <Text>{hiringManager.address}</Text>
          <Text>{hiringManager.cityZip}</Text>
        </View>

        {/* Body */}
        <Text style={styles.paragraph}>{greeting}</Text>
        <Text style={styles.paragraph}>{introduction}</Text>
        <Text style={styles.paragraph}>{goodFit}</Text>
        <Text style={styles.paragraph}>{skillsAndQualifications}</Text>
        <Text style={styles.paragraph}>{professionalExperience}</Text>
        <Text style={styles.paragraph}>{closing}</Text>

        {/* Ending */}
        <View style={styles.closing}>
          <Text>{ending?.formalClosing}</Text>
          <Text style={styles.signature}>{ending?.signature}</Text>
        </View>
      </Page>
    </Document>
  );
};

export default CoverLetterPDF;
