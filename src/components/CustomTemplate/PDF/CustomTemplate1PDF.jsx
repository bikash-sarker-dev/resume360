import React from 'react'
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import { useFormData } from '../FormDataProvider';
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

export const CustomTemplate1PDF = ({formData}) => {
    
    
      
        const {
          personalInfo: { fullName, jobTitle, phoneNumber, email, address,summary },
          education: { institution, degree, fieldOfStudy, additionalInfo , startDate,endDate},
          experience: { companyName, position, duration, location, description },
          experience2: { companyName2, position2, duration2, location2, description2 },
          achievements: { achievementTitle, date, organization, description: achievementDescription },
        } = formData;
  return (
   
          <Document>
      <Page size="A4" style={styles.page}>
        
        {/* Personal Info */}
        <View>
          <Text style={styles.heading}>{fullName || "DANIEL GALLEGO 4"}</Text>
          <Text style={styles.subHeading}>{jobTitle || "UX DESIGNER"}</Text>
          <Text style={styles.text}>
            {address || "Dhaka, Bangladesh"} | {email || "denial123@gmail.com"} | {phoneNumber || "+8801523892111"}
          </Text>
        </View>

        {/* Summary */}
        <View style={{ marginTop: 10 }}>
          <Text style={styles.sectionTitle}>SUMMARY</Text>
          <Text style={styles.text}>
            {summary || `UX Designer with a focus on delivering impactful results, eager to tackle dynamic challenges...`}
          </Text>
        </View>

        {/* Skills */}
        <View style={{ marginTop: 10 }}>
          <Text style={styles.sectionTitle}>TECHNICAL SKILLS</Text>
          <Text style={styles.listItem}>• Prototyping Tools</Text>
          <Text style={styles.listItem}>• User Research</Text>
          <Text style={styles.listItem}>• Information Architecture</Text>
          <Text style={styles.listItem}>• Interaction Design</Text>
          <Text style={styles.listItem}>• Visual Design</Text>
          <Text style={styles.listItem}>• Usability Heuristics</Text>
          <Text style={styles.listItem}>• Accessibility</Text>
          <Text style={styles.listItem}>• Responsive Design</Text>
          <Text style={styles.listItem}>• User Testing Tools</Text>
        </View>

        {/* Experience */}
        <View style={{ marginTop: 10 }}>
          <Text style={styles.sectionTitle}>EXPERIENCE</Text>
          <Text style={styles.text}>
            {companyName || "Instant Chartz App, Morcelle Program"} ({duration || "Jan 2023 - Present"})
          </Text>
          <Text style={styles.listItem}>
            • {description || "Led development of an advanced automation system..."}
          </Text>

          {/* Second Experience if exists */}
          {/* {Object.values(experience2 || {}).some((val) => val) && (
            <>
              <Text style={{ marginTop: 6, fontWeight: "bold" }}>
                {companyName2 || "System UX Engineer, XarrowAI Industries"} ({duration2 || "Feb 2021 - Dec 2022"})
              </Text>
              <Text style={styles.listItem}>
                • {description2 || "Designed and optimized a robotic control system..."}
              </Text>
            </>
          )} */}
        </View>

        {/* Projects */}
        <View style={{ marginTop: 10 }}>
          <Text style={styles.sectionTitle}>PROJECTS</Text>
          <Text style={styles.text}>SmartBudget – Personal Finance Tracker (UX Designer)</Text>
          <Text style={styles.listItem}>• Designed wireframes and interactive prototypes</Text>
          <Text style={styles.listItem}>• Conducted usability testing</Text>

          <Text style={{ marginTop: 6, fontWeight: "bold" }}>Task Management App (UX Designer)</Text>
          <Text style={styles.listItem}>• Conducted user research</Text>
          <Text style={styles.listItem}>• Created user personas and flows</Text>
        </View>

        {/* Education */}
        <View style={{ marginTop: 10 }}>
          <Text style={styles.sectionTitle}>EDUCATION</Text>
          <Text style={styles.text}>UX Industrial Basics and General Application (Aug 2016 - Oct 2019)</Text>
          <Text style={styles.listItem}>• Major in Automotive Technology</Text>
          <Text style={styles.listItem}>• Thesis on "Technological Advancements within Mechatronics"</Text>

          <Text style={{ marginTop: 6, fontWeight: "bold" }}>Bachelor of Design in Process Engineering (May 2014 - May 2016)</Text>
          <Text style={styles.listItem}>• Coursework in Structural Design and Project Management</Text>
        </View>

        {/* Languages */}
        <View style={{ marginTop: 10 }}>
          <Text style={styles.sectionTitle}>LANGUAGES</Text>
          <Text style={styles.listItem}>• English: Comfortable</Text>
          <Text style={styles.listItem}>• Bangla: Native</Text>
        </View>

      </Page>
    </Document>
   
  )
}
