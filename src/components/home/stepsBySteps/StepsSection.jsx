import { motion } from "framer-motion";
import { FiArrowRightCircle } from "react-icons/fi";
import ResumeMockup from "../../../assets/media/resume.jpg";
import SectionHead from "../../header/section-head/SectionHead";

const steps = [
  {
    title: "Choose a Template",
    desc: "Pick a professionally designed template that suits your industry.",
  },
  {
    title: "Customize Your Information",
    desc: "Fill in your personal details, experience, and skills with ease.",
  },
  {
    title: "Enhance with AI Suggestions",
    desc: "Get AI-powered recommendations to optimize your resume.",
  },
  {
    title: "Preview & Edit",
    desc: "Fine-tune your resume with our live preview feature.",
  },
  {
    title: "Download & Share",
    desc: "Export your resume in multiple formats and share it effortlessly.",
  },
];

const StepsSection = () => {
  return (
    <div className="max-w-7xl mx-auto py-16 px-4">
      <SectionHead
        subTitle={"How it Works"}
        title={"Build your job-winning resume steps by steps"}
      />

      <div className="grid md:grid-cols-2 items-center md:gap-8 gap-8 max-md:max-w-md mx-auto mt-12">
        <img
          src={ResumeMockup}
          className="w-full h-full object-cover md:object-contain"
        />

        <div className="space-y-4 max-md:text-center">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: index * 0.2,
              }}
              viewport={{ once: false }}
              className="md:flex items-center gap-4 p-4"
            >
              <div className="flex justify-center md:justify-normal">
                <FiArrowRightCircle className="w-5 h-5 text-r-secondary rotate-90 md:rotate-0" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-r-text">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StepsSection;
