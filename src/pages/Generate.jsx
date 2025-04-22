import { Link } from "react-router";
import SectionHead2 from "../components/header/section-head/SectionHead2";
import { PiReadCvLogoFill } from "react-icons/pi";
import { SlEnvolopeLetter } from "react-icons/sl";

const Generate = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto py-30 text-center">
                <SectionHead2
                    subTitle="Build a free resume that gets you interviewed by employers"
                    title="How do you want to start?"
                />
                <div className="flex gap-6 justify-center mt-12 flex-wrap">
                    {/* Import Resume */}
                    <Link to="/resume"className="bg-white shadow-md hover:shadow-xl text-r-info-card cursor-pointer rounded-xl p-8 w-72">
                        <div className="flex justify-center mb-4 text-r-primary">
                            <PiReadCvLogoFill  size="50px" />
                        </div>
                        <h2 className="text-xl font-semibold mb-2">Resume</h2>
                        <p className="text-sm text-gray-600">
                            Upload your existing resume and we’ll auto-fill your information to get started quickly.
                        </p>
                    </Link>

                    {/* Resume List */}
                    <Link to="/cover-letter" className="bg-white shadow-md hover:shadow-xl text-r-info-card cursor-pointer rounded-xl p-8 w-72">
                        <div className="flex justify-center mb-4 text-r-primary">
                            <SlEnvolopeLetter size="50px" />
                        </div>
                        <h2 className="text-xl font-semibold mb-2">Cover Letter</h2>
                        <p className="text-sm text-gray-600">
                            View and manage all your previously created resumes in one place.
                        </p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Generate;