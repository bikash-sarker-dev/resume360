import React, { useEffect, useState } from "react";
import Modal from "./Modal";
import {
  pdf,
  Document,
  Page,
  Text,
  View,
  StyleSheet,
} from "@react-pdf/renderer";
import axios from "axios";
import { useParams } from "react-router";

const Uploadtemplate = ({ resumeId }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingSection, setEditingSection] = useState(null);
  const [extractedTexts, setExtractedTexts] = useState(null);

  const handleSave = (updatedObject) => {
    setExtractedTexts(updatedObject);
  };

  useEffect(() => {
    const fetchResume = async () => {
      try {
        const res = await axios.get(
          `https://resume360-server.vercel.app/resumeIn/${resumeId}`
        );
        console.log(res.data.result);
        setExtractedTexts(res.data.result);
      } catch (err) {
        console.error("Failed to fetch resume:", err);
      }
    };

    if (resumeId) {
      fetchResume();
    }
  }, [resumeId]);

  console.log(extractedTexts)

  const generatePDFDocument = (texts) => (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.headerContainer}>
          {/* Left Side: Name & Title */}
          <View style={styles.leftColumn}>
            <Text style={styles.name}>{texts.name || "Your Name"}</Text>
            <Text style={styles.title}>{texts.title || "Your Title"}</Text>
          </View>

          {/* Right Side: Contact Info */}
          <View style={styles.rightColumn}>
  <Text style={styles.contactHeading}>Contact Info</Text>
  
  <Text style={styles.headingText}>
    Name: {texts.name || "Your Name"}
  </Text>

  <Text style={styles.headingText}>
    Location: {texts.location || "Your City"}
  </Text>
  
  <Text style={styles.headingText}>
    Number: {texts.number || "123-456-7890"}
  </Text>

  <Text style={styles.headingText}>
    Email: {texts.email || "example@mail.com"}
  </Text>
  
  <View style={styles.row}>
    <Text style={styles.link} onPress={() => Linking.openURL(texts.portfolio || "https://yourportfolio.com")}>
      Portfolio
    </Text>
    
    <Text style={styles.link} onPress={() => Linking.openURL(`https://linkedin.com/in/${texts.linkedin || "yourprofile"}`)}>
      LinkedIn
    </Text>
  </View>
</View>

        </View>

        {/* Summary */}
        <View style={styles.section}>
          <Text style={styles.heading}>SUMMARY</Text>
          <Text style={styles.paragraph}>
            {texts.summary ||
              texts.objective ||
              "Write a brief personal summary here..."}
          </Text>
        </View>

        {/* Skills */}
        <View style={styles.section}>
          <Text style={styles.heading}>SKILLS</Text>
          <Text style={styles.paragraph}>
            <Text style={{ fontWeight: "bold" }}>Front-End: </Text>
            {texts?.skills?.frontend?.join(", ") || "Add front-end skills..."}
          </Text>
          <Text style={styles.paragraph}>
            <Text style={{ fontWeight: "bold" }}>Back-End: </Text>
            {texts?.skills?.backend?.join(", ") || "Add back-end skills..."}
          </Text>
          {texts?.skills?.comfortable?.length > 0 && (
            <Text style={styles.paragraph}>
              <Text style={{ fontWeight: "bold" }}>Comfortable: </Text>
              {texts.skills.comfortable.join(", ") ||
                "Add comfortable skills..."}
            </Text>
          )}
          {texts?.skills?.experience?.length > 0 && (
            <Text style={styles.paragraph}>
              <Text style={{ fontWeight: "bold" }}>Experience: </Text>
              {texts.skills.experience.join(", ") ||
                "Add experienced skills..."}
            </Text>
          )}
          {texts?.skills?.familiar?.length > 0 && (
            <Text style={styles.paragraph}>
              <Text style={{ fontWeight: "bold" }}>Familiar: </Text>
              {texts.skills.familiar.join(", ") || "Add familiar skills..."}
            </Text>
          )}
          {texts?.skills?.softSkills?.length > 0 && (
            <Text style={styles.paragraph}>
              <Text style={{ fontWeight: "bold" }}>Soft Skills: </Text>
              {texts.skills.softSkills.join(", ") || "Add soft skills..."}
            </Text>
          )}
          {texts?.skills?.tools?.length > 0 && (
            <Text style={styles.paragraph}>
              <Text style={{ fontWeight: "bold" }}>Tools: </Text>
              {texts.skills.tools.join(", ") || "Add tools..."}
            </Text>
          )}
          {texts?.skills?.others?.length > 0 && (
            <Text style={styles.paragraph}>
              <Text style={{ fontWeight: "bold" }}>Others: </Text>
              {texts.skills.others.join(", ") || "Add other skills..."}
            </Text>
          )}
        </View>

        {/* Education */}
        <View style={styles.section}>
          <Text style={styles.heading}>EDUCATION</Text>
          <Text style={styles.paragraph}>
            {texts.education || "Add your education background here..."}
          </Text>
        </View>

        {/* Projects */}
        {texts.projects?.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.heading}>PROJECTS</Text>
            {texts.projects.map((proj, index) => (
              <View key={index}>
                {proj.title && (
                  <Text style={styles.paragraph}>
                    <Text style={{ fontWeight: "bold" }}>Title: </Text>
                    {proj.title}
                  </Text>
                )}
                {proj.overview && (
                  <Text style={styles.paragraph}>
                    <Text style={{ fontWeight: "bold" }}>Overview: </Text>
                    {proj.overview}
                  </Text>
                )}
                {proj.features?.length > 0 && (
                  <View style={styles.list}>
                    <Text style={styles.paragraph}>
                      <Text style={{ fontWeight: "bold" }}>Features: </Text>
                    </Text>
                    {proj.features.map((feat, i) => (
                      <Text key={i} style={styles.listItem}>
                        {feat}
                      </Text>
                    ))}
                  </View>
                )}
                {proj.technologies?.length > 0 && (
                  <Text style={styles.paragraph}>
                    <Text style={{ fontWeight: "bold" }}>Technologies: </Text>
                    {proj.technologies.join(", ")}
                  </Text>
                )}
              </View>
            ))}
          </View>
        )}

        {/* Languages */}
        <View style={styles.section}>
          <Text style={styles.heading}>LANGUAGES</Text>
          <Text style={styles.paragraph}>
            {texts.languages ||
              texts.language ||
              "Add your language details..."}
          </Text>
        </View>
      </Page>
    </Document>
  );

  const styles = StyleSheet.create({
    page: {
      padding: 30,
    },
    section: {
      marginBottom: 5,
    },
    title: {
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 10,
    },
    heading: {
      fontSize: 18,
      fontWeight: "bold",
      marginTop: 3,
    },
    paragraph: {
      fontSize: 12,
    },
    list: {
      marginLeft: 20,
    },
    listItem: {
      fontSize: 12,
    },
    headerContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      paddingBottom: 20,
    },
    leftColumn: {
      flex: 1,
      paddingRight: 10,
    },
    rightColumn: {
      flex: 1,
      paddingLeft: 10,
    },
    name: {
      fontSize: 24,
      fontWeight: "bold",
    },
    title: {
      fontSize: 18,
      color: "#666",
    },
    contactHeading: {
      fontSize: 16,
      fontWeight: "bold",
      marginBottom: 5,
    },
    rightColumn: {
      flex: 1,
      paddingLeft: 10,
      flexDirection: 'column', 
    },
    contactHeading: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    headingText: {
      fontSize: 18, 
      fontWeight: 'bold',
      marginBottom: 5,
    },
    link: {
      color: '#1E90FF',  
      textDecorationLine: 'underline',
      marginRight: 15, 
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'flex-start', 
      marginTop: 5, 
    },
  });

  const downloadPdf = async () => {
    const blob = await pdf(generatePDFDocument(extractedTexts)).toBlob();
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <>
      <div className="container pt-28 mx-auto bg-white shadow-lg p-16 rounded-lg">
        {/* Name and Contact Info */}
        <div className="text-center flex justify-between border-b pb-5">
          <div className="text-left">
            <h1 className="text-4xl font-bold text-black">
              {extractedTexts?.name || "Your Name"}
            </h1>
            <h2 className="text-2xl mt-2 text-black">
              {extractedTexts?.title || "Your Title"}
            </h2>
          </div>
          <div className="mt-2 text-left flex flex-col text-black">
            <h2 className="mb-3 text-2xl font-bold">Contact Info</h2>
            <a href="">Email: {extractedTexts?.email || "example@mail.com"}</a>
            <div className="flex gap-4">
              <a href={extractedTexts?.portfolio}>
                {extractedTexts?.portfolio ? "Portfolio " : "add-your-portfolio"}
              </a>
              <h2>|</h2>
              <a href={extractedTexts?.linkedin}>
                {extractedTexts?.linkedin ? "linkedin" : "add-your-linkdin"}
              </a>
            </div>
            <h2>location: {extractedTexts?.location}</h2>
            <h2>number: {extractedTexts?.number}</h2>
          </div>
        </div>

        {/* Summary */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-black">SUMMARY</h3>
          <p className="text-black mt-2">
            {extractedTexts?.summary ||
              extractedTexts?.objective ||
              "Write a brief personal summary here..."}
          </p>
        </div>

        {/* Skills Section */}
        <div>
          <h3 className="text-xl font-semibold text-black mt-4">SKILLS</h3>
          <div>
            <div className="mt-2">
              <p className="text-black ml-4">
                <span className="font-bold text-gray-700">Front-End:</span>{" "}
                {extractedTexts?.skills?.frontend.join(", ") ||
                  "Add front-end skills..."}
              </p>
            </div>
            <div className="mt-2">
              <p className="text-black ml-4">
                <span className="font-bold text-gray-700">Back-End:</span>{" "}
                {extractedTexts?.skills?.backend.join(", ") ||
                  "Add front-end skills..."}
              </p>
            </div>

            {extractedTexts?.skills?.comfortable?.length > 0 && (
              <div className="mt-2">
                <p className="text-black ml-4">
                  <span className="font-bold text-gray-700">comfortable:</span>{" "}
                  {extractedTexts.skills.comfortable.join(", ") ||
                    "Add front-end skills..."}
                </p>
              </div>
            )}
            {extractedTexts?.skills?.experience?.length > 0 && (
              <div className="mt-2">
                <p className="text-black ml-4">
                  <span className="font-bold text-gray-700">experience:</span>{" "}
                  {extractedTexts.skills.experience.join(", ") ||
                    "Add front-end skills..."}
                </p>
              </div>
            )}
            {extractedTexts?.skills?.familiar?.length > 0 && (
              <div className="mt-2">
                <p className="text-black ml-4">
                  <span className="font-bold text-gray-700">familiar:</span>{" "}
                  {extractedTexts.skills.familiar.join(", ") ||
                    "Add front-end skills..."}
                </p>
              </div>
            )}
            {extractedTexts?.skills?.softSkills?.length > 0 && (
              <div className="mt-2">
                <p className="text-black ml-4">
                  <span className="font-bold text-gray-700">softSkills:</span>{" "}
                  {extractedTexts.skills.softSkills.join(", ") ||
                    "Add front-end skills..."}
                </p>
              </div>
            )}
            {extractedTexts?.skills?.tools?.length > 0 && (
              <div className="mt-2">
                <p className="text-black ml-4">
                  <span className="font-bold text-gray-700">tools:</span>{" "}
                  {extractedTexts.skills.tools.join(", ") ||
                    "Add front-end skills..."}
                </p>
              </div>
            )}
            {extractedTexts?.skills?.others?.length > 0 && (
              <div className="mt-2">
                <p className="text-black ml-4">
                  <span className="font-bold text-gray-700">others:</span>{" "}
                  {extractedTexts.skills.others.join(", ") ||
                    "Add front-end skills..."}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Education Section */}
        <div>
          <h3 className="text-xl font-semibold text-black">EDUCATION</h3>
          <p className="text-black mt-2">
            {extractedTexts?.education ||
              "Add your education background here..."}
          </p>
        </div>

        {/* Projects Section */}
        <div className="mt-2">
          {extractedTexts?.projects?.length > 0 ? (
            <div className="text-black">
              <h3 className="text-xl font-bold mb-2">PROJECTS</h3>
              {extractedTexts.projects.map((proj, index) => (
                <div key={index} className="mb-1  p-4 ">
                  {proj.title && (
                    <h4 className="text-lg font-bold">{proj.title}</h4>
                  )}

                  <div className="flex flex-wrap gap-4 my-2">
                    {proj.type && (
                      <p>
                        <strong>Type:</strong> {proj.type}
                      </p>
                    )}
                    {proj.clientRepo && (
                      <p>
                        <strong>Client Repo:</strong> {proj.clientRepo}
                      </p>
                    )}
                    {proj.serverRepo && (
                      <p>
                        <strong>Server Repo:</strong> {proj.serverRepo}
                      </p>
                    )}
                    {proj.liveLink && (
                      <p>
                        <strong>Live:</strong> {proj.liveLink}
                      </p>
                    )}
                  </div>

                  {proj.overview && (
                    <p className="mt-2">
                      <strong>Overview:</strong> {proj.overview}
                    </p>
                  )}

                  {proj.features && proj.features.length > 0 && (
                    <>
                      <p className="mt-2 font-semibold">Features:</p>
                      <ul className="list-disc ml-6">
                        {proj.features.map((feat, i) => (
                          <li key={i}>{feat}</li>
                        ))}
                      </ul>
                    </>
                  )}

                  {proj.technologies && proj.technologies.length > 0 && (
                    <p className="mt-2">
                      <strong>Technologies:</strong>{" "}
                      {proj.technologies.join(", ")}
                    </p>
                  )}
                </div>
              ))}
            </div>
          ) : (
            // If no projects found
            <div className="text-center">
              <p className="text-gray-500 mb-4">No projects added yet.</p>
              <button
                onClick={() => setIsModalOpen(true)} // Modal open for adding project
                className="bg-green-600 text-white py-2 px-6 rounded hover:bg-green-700 transition"
              >
                + Add Project
              </button>
            </div>
          )}
        </div>

        {/* Languages Section */}
        <div className="mt-2">
          <h3 className="text-xl font-semibold text-black">Languages</h3>
          <p className="text-black mt-2">
            {extractedTexts?.languages ||
              extractedTexts?.language ||
              "Language details go here..."}
          </p>
        </div>

        {/* edit Button */}
      </div>

      <div className="text-center space-x-3 mt-6">
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-r-info text-white py-2 px-6 rounded-full hover:text-r-text hover:bg-r-accent transition"
        >
          edit
        </button>
        <button
          className="bg-r-info text-white py-2 px-6 rounded-full hover:text-r-text hover:bg-r-accent transition"
          onClick={() => {
            setIsModalOpen(false);
            setTimeout(() => {
              downloadPdf();
            }, 100);
          }}
        >
          download pdf
        </button>
      </div>

      {/* Modal for editing */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSave}
        extractedTexts={extractedTexts}
      />
    </>
  );
};

export default Uploadtemplate;
