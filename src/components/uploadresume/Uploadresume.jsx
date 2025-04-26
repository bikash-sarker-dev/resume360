import React, { useEffect, useRef, useState } from "react";
import WebViewer from "@pdftron/webviewer";
import Uploadtemplate from "./Uploadtemplate";

const Uploadresume = () => {
  const viewerRef = useRef(null);
  const [instance, setInstance] = useState(null);
  const [textContent, setTextContent] = useState({});
  const [pdfUploaded, setPdfUploaded] = useState(false);

  useEffect(() => {
    WebViewer(
      {
        path: "/webviewer",
        fullAPI: true,
      },
      viewerRef.current
    ).then((inst) => {
      setInstance(inst);

      inst.Core.documentViewer.addEventListener("documentLoaded", async () => {
        await extractTextFromPDF(inst);
        setPdfUploaded(true);
      });
    });
  }, []);

 
  
  
  
  

  const extractTextFromPDF = async (inst) => {
    try {
      const doc = inst.Core.documentViewer.getDocument();  
      const pageCount = inst.Core.documentViewer.getPageCount();  

      let fullText = "";

      for (let p = 1; p <= pageCount; p++) {
        const pageText = await doc.loadPageText(p);  
        fullText += pageText + "\n\n";

      }


      console.log("📄 fullText:", fullText);
      const parsed = parseResumeSections(fullText);

      console.log("🧩 parsed:", parsed);
      setTextContent(parsed);
    } catch (e) {
      console.error("❌ extractTextFromPDF failed:", e);
    }
  };

  function splitByHeadings(fullText) {
    const headingRe = /^([A-Z ]+):?\s*$/gm;
  
    let match;
    const sections = [];
    let lastIndex = 0;
    let lastHeading = null;
  
    while ((match = headingRe.exec(fullText))) {
      if (lastHeading !== null) {
        const sectionText = fullText.slice(lastIndex, match.index).trim();
        sections.push({ heading: lastHeading, text: sectionText });
      }
      lastHeading = match[1].trim();     
      lastIndex = headingRe.lastIndex;     
    }
    
    if (lastHeading !== null) {
      sections.push({
        heading: lastHeading,
        text: fullText.slice(lastIndex).trim(),
      });
    }
  
    return sections.reduce((acc, { heading, text }) => {
      const key = heading
        .toLowerCase()
        .split(" ")
        .map((w, i) => (i ? w[0].toUpperCase() + w.slice(1) : w))
        .join("");
      acc[key] = text;
      return acc;
    }, {});
  }

  function parseSkills(text) {
    const frontendKeywords = [
      'JavaScript', 'React', 'React.js', 'Bootstrap', 'Tailwind', 'Vue.js', 
      'Angular', 'SASS', 'HTML', 'CSS', 'TypeScript', 'jQuery', 'Responsive Web Design'
    ];
  
    const backendKeywords = [
      'MongoDB', 'Express', 'Node', 'Node.js', 'Python', 'Django', 'Ruby', 
      'Java', 'C#', 'PHP', 'MySQL', 'PostgreSQL', 'JWT'
    ];
  
    const categoryMap = {
      experience: [],
      comfortable: [],
      familiar: [],
      tools: [],
      softSkills: [],
    };
  
    const frontend = [];
    const backend = [];
    const others = [];
  
    const lines = text.split("●").map(line => line.trim()).filter(Boolean);
  
    lines.forEach(line => {
      const [rawCategory, skillList] = line.split(":");
      if (!skillList) return;
  
      const category = rawCategory.toLowerCase();
      const skills = skillList.split(",").map(s => s.trim()).filter(Boolean);
  
      if (category.includes("experience")) {
        categoryMap.experience.push(...skills);
      } else if (category.includes("comfortable")) {
        categoryMap.comfortable.push(...skills);
      } else if (category.includes("familiar")) {
        categoryMap.familiar.push(...skills);
      } else if (category.includes("tools")) {
        categoryMap.tools.push(...skills);
      } else if (category.includes("soft")) {
        categoryMap.softSkills.push(...skills);
      }
  
      // Classify each skill into frontend, backend, others
      skills.forEach(skill => {
        const lowerSkill = skill.toLowerCase();
        if (frontendKeywords.some(k => lowerSkill.includes(k.toLowerCase()))) {
          frontend.push(skill);
        } else if (backendKeywords.some(k => lowerSkill.includes(k.toLowerCase()))) {
          backend.push(skill);
        } else {
          others.push(skill);
        }
      });
    });
  
    return {
      frontend,
      backend,
      others,
      ...categoryMap,
    };
  }
  
  
  

  const parseProjects = (text) => {
    const projects = [];
    const projectBlocks = text.split(/(?=\bvisa_store\b|\bbook_bundle\b|\bTech_Hunt\b)/);
  
    projectBlocks.forEach(block => {
      const title = block.match(/^\w+/)?.[0] || "Untitled Project";
      const type = block.match(/Type:\s*(.*?)(?=\||\n)/i)?.[1]?.trim() || "";
      const clientRepo = block.match(/Client\s*\|/) ? "Yes" : "No";
      const overviewMatch = block.match(/overview\s*[:\-]?\s*(.*?)(?=\n|Features|Used technologies|$)/i);
    const overview = overviewMatch ? overviewMatch[1].trim() : "";  
      const featuresMatch = block.match(/Features\s*(.*?)(?=Used technologies|$)/is);
      const features = featuresMatch ? featuresMatch[1].split(/[\n•-]/).map(f => f.trim()).filter(f => f) : [];
  
      const techMatch = block.match(/Used technologies\s*[:\-]?\s*(.*)/i);
      const technologies = techMatch ? techMatch[1].split(",").map(t => t.trim()) : [];
  
      projects.push({ title, type, clientRepo, overview, features, technologies });
    });
  
    return projects;
  };

  

  const parseResumeSections = (fullText) => {
    const lines = fullText.split("\n").map(line => line.trim()).filter(Boolean);
  
    const name = lines[0] || "Your Name";
    const title = lines[1] || "Your Title";
    const email = fullText.match(/\b\S+@\S+\.\S+\b/)?.[0] || "example@email.com";
  
    const sections = splitByHeadings(fullText); 
    const skillData = sections.skills ? parseSkills(sections.skills) : { frontend: [], backend: [], others: [] };
    const projectsText = sections.projects || "";

  
    return {
      name,
      title,
      email,
      ...sections,
      skills: skillData,
      projects: parseProjects(projectsText),
      references: sections.references || "Available on request",
      portfolio: sections.portfolio || "yourportfolio.com",
      linkedin: sections.linkedin || "linkedin.com/in/joynal-abedin",
      
    };
  };
  
  
  

  return (
    <div className="p-6  rounded-xl shadow-md min-h-screen max-w-4xl mx-auto mt-20">
      <h2 className="text-2xl font-semibold mb-6">Upload Resume & Preview</h2>

      {!pdfUploaded ? (
        <div className="border-2 border-dashed p-6 text-center h-60 rounded-3xl cursor-pointer hover:border-blue-500 mb-6">
          <label htmlFor="resume-upload" className="cursor-pointer ">
            <span className="text-lg ">Click to upload your PDF resume</span>
            <p className="text-sm text-gray-400">(PDF only)</p>
          </label>
          <input
            id="resume-upload"
            type="file"
            accept="application/pdf"
            onChange={async (e) => {
              const file = e.target.files[0];
              const buf = await file.arrayBuffer();
              await instance.UI.loadDocument(buf, { filename: file.name });
            }}
            className="hidden"
          />
        </div>
      ) : (
        <Uploadtemplate extractedText={textContent} />
      )}

      <div ref={viewerRef} style={{ display: "none" }} />
    </div>
  );
};

export default Uploadresume;
