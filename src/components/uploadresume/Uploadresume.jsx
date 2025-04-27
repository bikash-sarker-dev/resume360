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
      frontend: [],
      backend: [],
      others: [],
    };
  
    const lines = text.split(/\n|●/).map(line => line.trim()).filter(Boolean);
  
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
      } else if (category.includes("front")) {
        categoryMap.frontend.push(...skills);
      } else if (category.includes("back")) {
        categoryMap.backend.push(...skills);
      } else if (category.includes("other")) {
        categoryMap.others.push(...skills);
      }
  
      // Auto-classify for frontend, backend, or others (only if not already categorized)
      skills.forEach(skill => {
        const lowerSkill = skill.toLowerCase();
        if (frontendKeywords.some(k => lowerSkill.includes(k.toLowerCase()))) {
          if (!categoryMap.frontend.includes(skill)) categoryMap.frontend.push(skill);
        } else if (backendKeywords.some(k => lowerSkill.includes(k.toLowerCase()))) {
          if (!categoryMap.backend.includes(skill)) categoryMap.backend.push(skill);
        } else {
          if (!categoryMap.others.includes(skill)) categoryMap.others.push(skill);
        }
      });
    });
  
    return categoryMap;
  }
  
  

  
  

  const parseProjects = (text) => {
    const projects = [];
  
    // Split by project number like "1." or custom "||" type blocks
    const blocks = text.split(/\n(?=\d+\.\s|[a-zA-Z0-9]+\s*\|\|)/).filter(Boolean);
  
    blocks.forEach(block => {
      const lines = block.trim().split("\n").map(l => l.trim()).filter(Boolean);
  
      // === Type 1: PDF-style format with ||
      if (block.includes("||")) {
        const projectBlocks = text.split(/\n(?=\w+\s*\|\|)/).filter(Boolean);
  
        projectBlocks.forEach(block => {
          const lines = block.trim().split("\n").filter(Boolean);
      
          let title = "";
          let type = "";
          let clientRepo = "";
          let serverRepo = "";
          let overview = "";
          const features = [];
          const technologies = [];
      
          lines.forEach((line, index) => {
            const cleanLine = line.trim();
      
            if (index === 0) {
              // First line example: Tech_Hunt || Type: full stack || github_repo: Client | Server
              const titleMatch = cleanLine.match(/^(.+?)\s*\|\|/);
              const typeMatch = cleanLine.match(/Type\s*:\s*(.+?)\s*\|\|/i);
              const githubMatch = cleanLine.match(/github_repo\s*:\s*(.*)/i);
      
              title = titleMatch ? titleMatch[1].trim() : "Untitled Project";
              type = typeMatch ? typeMatch[1].trim() : "";
              if (githubMatch) {
                clientRepo = githubMatch[1].includes("Client") ? "Yes" : "No";
                serverRepo = githubMatch[1].includes("Server") ? "Yes" : "No";
              }
            } else if (/^overview\s*:/i.test(cleanLine)) {
              overview = cleanLine.replace(/^overview\s*:\s*/i, "").trim();
            } else if (/^features/i.test(cleanLine)) {
              // Features are below this line
              const featureText = cleanLine.replace(/^features\s*/i, "").trim();
              if (featureText) {
                features.push(featureText);
              }
            } else if (cleanLine.startsWith("•") || cleanLine.includes("–")) {
              // Bullet points or dash-separated features
              features.push(cleanLine.replace(/^•\s*/, "").trim());
            } else if (/^used technologies\s*:/i.test(cleanLine)) {
              const techText = cleanLine.split(":")[1] || "";
              technologies.push(...techText.split(",").map(t => t.trim()));
            }
          });
      
          projects.push({
            title,
            type,
            overview,
            features,
            technologies,
            clientRepo,
            serverRepo,
            liveLink: ""
          });
        });
  
      } else {
        // === Type 2: Traditional resume format ===
        const projectBlocks = text.split(/\n(?=\d+\.)/).filter(Boolean);
  
        projectBlocks.forEach(block => {
          const lines = block.trim().split("\n").filter(Boolean);
      
          // Title and type from first line
          const titleLine = lines[0];
          const [titlePart, typePart] = titleLine.split(" - ");
          const title = titlePart?.replace(/^\d+\.\s*/, "").trim() || "Untitled Project";
          const type = typePart?.replace(/\(.*\)/g, "").trim() || "";
      
          const features = [];
          let technologies = [];
          let overview = "";
          let clientRepo = "";
          let serverRepo = "";
          let liveLink = "";
      
          lines.forEach(line => {
            const cleanLine = line.trim();
            if (cleanLine.startsWith("●")) {
              features.push(cleanLine.replace(/^●\s*/, ""));
            } else if (/^Technologies\s*:/i.test(cleanLine)) {
              technologies = cleanLine.split(":")[1]
                .split(",")
                .map(t => t.trim());
            } else if (/live link/i.test(cleanLine)) {
              liveLink = cleanLine;
            } else if (/client/i.test(cleanLine)) {
              clientRepo = cleanLine;
            } else if (/server/i.test(cleanLine)) {
              serverRepo = cleanLine;
            } else if (!overview && cleanLine.length > 10) {
              overview = cleanLine;
            }
          });
      
          projects.push({
            title,
            type,
            overview,
            features,
            technologies,
            clientRepo,
            serverRepo,
            liveLink,
          });
        });
      }
    });
  
    return projects;
  };
  

  function extractLocation(lines) {
    const locationKeywords = [
      "bandarban", "barguna", "barisal", "bhola", "bogura", "brahmanbaria",
      "chandpur", "chapainawabganj", "chattogram", "chuadanga", "comilla", "cox's bazar",
      "dhaka", "dinajpur", "faridpur", "feni", "gaibandha", "gazipur",
      "gopalganj", "habiganj", "jaipurhat", "jamalpur", "jashore", "jhalokathi",
      "jhenaidah", "joypurhat", "khagrachhari", "khulna", "kishoreganj", "kurigram",
      "kushtia", "lakshmipur", "lalmonirhat", "madaripur", "magura", "manikganj",
      "meherpur", "moulvibazar", "munshiganj", "mymensingh", "naogaon", "narail",
      "narayanganj", "narsingdi", "natore", "netrokona", "nilphamari", "noakhali",
      "pabna", "panchagarh", "patuakhali", "pirojpur", "rajbari", "rajshahi",
      "rangamati", "rangpur", "satkhira", "shariatpur", "sherpur", "sirajganj",
      "sunamganj", "sylhet", "tangail", "thakurgaon", "bangladesh"
    ];
  
    for (const line of lines) {
      const words = line.toLowerCase().split(/[\s,]+/); 
      for (const word of words) {
        if (locationKeywords.includes(word)) {
          return word.charAt(0).toUpperCase() + word.slice(1);
        }
      }
    }
  
    return ""; 
  }
  
  
  
  
  

  

  const parseResumeSections = (fullText) => {
    const lines = fullText.split("\n").map(line => line.trim()).filter(Boolean);
  
    const name = lines[0] || "Your Name";
    const title = lines[1] || "Your Title";
    const email = fullText.match(/\b\S+@\S+\.\S+\b/)?.[0] || "example@email.com";

    const numberMatch = fullText.match(/(\+?88)?01[3-9]\d{8}\b/);
    const number = numberMatch ? numberMatch[0] : "Your Number";
  
    const location = extractLocation(lines); 
  
    const sections = splitByHeadings(fullText); 
    const skillData = sections.skills ? parseSkills(sections.skills) : { frontend: [], backend: [], others: [] };
    const projectsText = sections.projects || "";

  
    return {
      name,
      title,
      email,
      number,
    location,
      ...sections,
      skills: skillData,
      projects: parseProjects(projectsText),
      references: sections.references,
      portfolio: sections.portfolio,
      linkedin: sections.linkedin,
      
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
