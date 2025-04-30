import { Link } from "react-router";
import SectionHead2 from "../components/header/section-head/SectionHead2";
import { FaFileImport } from "react-icons/fa6";
import { IoIosCreate } from "react-icons/io";
import { FaListAlt } from "react-icons/fa";

const ResumeGenerate = () => {
  return (
    <div className="max-w-7xl mx-auto py-30 text-center">
      <SectionHead2
        subTitle="Build a free resume that gets you interviewed by employers"
        title="How do you want to start?"
      />
      
      <div className="flex gap-6 justify-center mt-12 flex-wrap">
        {/* Import Resume */}
        <Link to='/resumeUpload' className="bg-white shadow-md hover:shadow-xl text-r-info-card cursor-pointer rounded-xl p-8 w-72">
          <div className="flex justify-center mb-4 text-r-primary">
            <FaFileImport size="50px" />
          </div>
          <h2 className="text-xl font-semibold mb-2">Import Resume</h2>
          <p className="text-sm text-gray-600">
            Upload your existing resume and we’ll auto-fill your information to get started quickly.
          </p>
        </Link>

        {/* Resume List */}
        <Link to="/resume-manager" className="bg-white shadow-md hover:shadow-xl text-r-info-card cursor-pointer rounded-xl p-8 w-72">
          <div className="flex justify-center mb-4 text-r-primary">
            <FaListAlt size="50px" />
          </div>
          <h2 className="text-xl font-semibold mb-2">My Resumes</h2>
          <p className="text-sm text-gray-600">
            View and manage all your previously created resumes in one place.
          </p>
        </Link>

        {/* Create New Resume */}
        <Link
          to="/create-resume/resume0"
          className="bg-white shadow-md hover:shadow-xl text-r-info-card cursor-pointer rounded-xl p-8 w-72 block"
        >
          <div className="flex justify-center mb-4 text-r-primary">
            <IoIosCreate size="50px" />
          </div>
          <h2 className="text-xl font-semibold mb-2">Create New Resume</h2>
          <p className="text-sm text-gray-600">
            Start from scratch and follow our guided builder to craft the perfect resume.
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ResumeGenerate;
