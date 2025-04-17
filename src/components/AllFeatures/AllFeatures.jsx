import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BiCustomize } from "react-icons/bi";
import { BsRobot } from "react-icons/bs";
import { FaRegFileAlt } from "react-icons/fa";
import { LuSquareDashedMousePointer } from "react-icons/lu";
import { PiReadCvLogo } from "react-icons/pi";
import { VscPreview } from "react-icons/vsc";
import { MdSpaceDashboard } from "react-icons/md";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { AiOutlineBars } from "react-icons/ai";
import { MdOutlineSecurity } from "react-icons/md";

const features = [
    { icon: BiCustomize, title: "Customizable Templates", desc: "The Customizable Templates feature allows users to choose from a variety of professionally designed resume templates. Users can personalize colors, fonts, layouts, and section styles to match their preferences. The platform provides templates tailored for modern, creative, and ATS-friendly resumes, ensuring a polished and professional look." },
    { icon: LuSquareDashedMousePointer, title: "Drag and Drop", desc: "With the Drag and Drop functionality, users can easily rearrange resume sections by simply dragging and dropping them into the desired order. This makes it convenient to highlight important information and tailor the resume to different job applications. The platform automatically saves the updated section order in real time, ensuring a seamless editing experience." },
    { icon: VscPreview, title: "Real-time Preview", desc: "The Real-time Preview feature provides instant visual feedback, allowing users to see changes as they make modifications to their resumes. A split-screen interface ensures that users can edit on one side while viewing a live preview on the other, eliminating the need to switch between tabs or reload the page." },
    { icon: BsRobot, title: "AI-Based Suggestions", desc: "AI-Based Resume Suggestions help users craft stronger resumes by offering intelligent recommendations. The system suggests relevant keywords, action verbs, and skills based on the user’s job role. Additionally, it highlights missing sections and provides content improvements, ensuring that resumes are impactful and tailored to industry standards." },
    { icon: FaRegFileAlt, title: "Multiple File Formats", desc: "The Multiple File Formats option allows users to download their resumes in PDF, DOCX, or TXT formats, making it easy to submit applications across different platforms. This ensures compatibility with various applicant tracking systems (ATS) and meets different employer requirements." },
    { icon: IoMdCheckmarkCircleOutline, title: "Grammar and Spell Checker", desc: "To enhance professionalism, the Grammar and Spell Checker feature automatically detects and corrects errors in real time. Users receive instant suggestions to improve clarity, grammar, and punctuation, ensuring their resumes are polished and error-free before submission." },
    { icon: AiOutlineBars, title: "Step-by-Step", desc: "For those new to resume building, the Step-by-Step Guide provides an interactive experience, guiding users through each section of the resume. Tooltips, examples, and a progress tracker ensure that no crucial information is missed, making the process intuitive and stress-free." },
    { icon: MdOutlineSecurity, title: "Data Privacy and Security", desc: "To ensure data privacy and security, the resume-building website implements JWT (JSON Web Token) authentication for secure user access and data protection. JWT provides a stateless, encrypted authentication mechanism, ensuring that only authorized users can access and modify their resume data." },
    { icon: PiReadCvLogo, title: "CV and Cover Letter Generator", desc: "The CV & Cover Letter Generator allows users to create matching cover letters and CVs alongside their resumes. With pre-written templates and AI-powered content suggestions, users can quickly generate personalized cover letters that enhance their job applications." },
    { icon: MdSpaceDashboard, title: "Analytics Dashboard", desc: "The Analytics Dashboard (for admin users) offers insights into user engagement, tracking resume downloads, views, and template popularity. Admins can analyze user behavior with interactive charts and graphs, helping them optimize the platform for better performance." },
  ];

export default function AllFeatures() {
    const refs = features.map(() => useRef(null));
  return (
    <div className="mt-6">
    <div className="grid grid-cols-1 gap-4  mx-auto text-center">
      {features.map((feature, index) => {
        const isInView = useInView(refs[index], { margin: "-100px" });

        return (
          <motion.div
            key={index}
            ref={refs[index]}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.5, ease: "linear" }} 
            className="bg-r-card rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all p-8"
          >
            <div className="mb-5 flex justify-center">
              <feature.icon className="size-10 text-r-accent" />
            </div>
            <h3 className="text-r-text text-lg font-semibold mb-3">{feature.title}</h3>
            <p className="text-r-info text-sm font-medium leading-relaxed">{feature.desc}</p>
          </motion.div>
        );
      })}
    </div>
   
  </div>
  )
}

