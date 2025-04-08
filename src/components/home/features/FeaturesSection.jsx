import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BiCustomize } from "react-icons/bi";
import { BsRobot } from "react-icons/bs";
import { FaRegFileAlt } from "react-icons/fa";
import { LuSquareDashedMousePointer } from "react-icons/lu";
import { PiReadCvLogo } from "react-icons/pi";
import { VscPreview } from "react-icons/vsc";
import { Link } from "react-router";

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
      <p className="text-center mb-5 text-r-primary">
        Discover Our Exclusive Features
      </p>
      <h2 className="md:text-4xl text-2xl font-bold text-center mb-14 text-r-text">
        Our Features
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-md:max-w-md mx-auto text-center">
        {features.map((feature, index) => {
          const isInView = useInView(refs[index], { margin: "-100px" });

          return (
            <motion.div
              key={index}
              ref={refs[index]}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.5, ease: "linear" }}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all p-8"
            >
              <div className="mb-5 flex justify-center">
                <feature.icon className="size-10 text-r-accent" />
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
      <div className="text-center mt-10 text-2xl font-medium text-r-accent">
        <Link to="/features" className="underline">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default FeaturesSection;
