import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BiCustomize } from "react-icons/bi";
import { BsRobot } from "react-icons/bs";
import { FaRegFileAlt } from "react-icons/fa";
import { LuSquareDashedMousePointer } from "react-icons/lu";
import { PiReadCvLogo } from "react-icons/pi";
import { VscPreview } from "react-icons/vsc";
import { Link } from "react-router";
import SectionHead from "../../header/section-head/SectionHead";

const features = [
  {
    icon: BiCustomize,
    title: "Customizable Templates",
    desc: "Users can choose from multiple pre-designed resume templates.",
  },
  {
    icon: LuSquareDashedMousePointer,
    title: "Drag and Drop",
    desc: "Easily rearrange resume sections for better customization.",
  },
  {
    icon: VscPreview,
    title: "Real-time Preview",
    desc: "Instant visual feedback of the resume as the user makes changes.",
  },
  {
    icon: BsRobot,
    title: "AI-Based Suggestions",
    desc: "Get intelligent recommendations for resume content.",
  },
  {
    icon: FaRegFileAlt,
    title: "Multiple File Formats",
    desc: "Option to download the resume in various formats to meet different applications.",
  },
  {
    icon: PiReadCvLogo,
    title: "CV and Cover Letter Generator",
    desc: "Create matching professional cover letter and CV with the resume.",
  },
];

const FeaturesSection = () => {
  const refs = features.map(() => useRef(null));

  return (
    <div className="max-w-6xl mx-auto py-16 px-4">
      <SectionHead
        subTitle={"Discover Our Exclusive Features"}
        title={"Our Features"}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-md:max-w-md mx-auto text-center mt-10">
        {features.map((feature, index) => {
          const isInView = useInView(refs[index], { margin: "-100px" });

          return (
            <motion.div
              key={index}
              ref={refs[index]}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.5, ease: "linear" }}
              className="bg-r-card hover:bg-r-hover duration-300 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all p-8"
            >
              <div className="mb-5 flex justify-center">
                <feature.icon className="size-10 text-r-primary" />
              </div>
              <h3 className="text-r-text text-lg font-semibold mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-500 text-sm font-medium leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          );
        })}
      </div>
      <div className="text-center mt-10 text-xl font-medium text-r-primary">
      <Link to="/features" className="underline">
      <button className="relative inline-flex items-center justify-center px-6 py-2 overflow-hidden font-mono font-bold hover:text-black  text-r-background   bg-r-primary rounded-full group slide-up slide-up-btn">
          <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-r-background  rounded-full group-hover:w-56 group-hover:h-56"></span>
          <span className="absolute inset-0 w-full h-full  rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-r-accent "></span>
          <span className="relative">Read More</span>
      </button>
      </Link>
      </div>
    </div>
  );
};

export default FeaturesSection;
