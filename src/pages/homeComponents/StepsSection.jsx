import ResumeMockup from '../homeComponents/media/resume.jpg'
import { FiArrowRightCircle } from "react-icons/fi";

const StepsSection = () => {
    return (
        <div>
            <p className="text-center mb-5 text-r-primary">How it Works</p>
            <h2 className="md:text-4xl text-3xl font-bold text-center mb-14">Build your job-winning resume<br />steps by steps</h2>
            <div className="grid md:grid-cols-2 items-center md:gap-4 gap-8 max-w-7xl max-md:max-w-md mx-auto">
                <div className="md:h-[470px]">
                    <img src={ResumeMockup} className="w-full h-full object-cover md:object-contain" />
                </div>
                <div className="max-md:order-1 max-md:text-center">
                    <div className="p-8 rounded-xl max-w-3xl mx-auto">
                        <div className="space-y-4">
                            <div className="flex items-center gap-4 p-4">
                                <div className="">
                                    <FiArrowRightCircle className="w-5 h-5 text-gray-600" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold">Choose a Template</h3>
                                    <p className="text-gray-600">Pick a professionally designed template that suits your industry.</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 p-4">
                                <div className="">
                                    <FiArrowRightCircle className="w-5 h-5 text-gray-600" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold">Customize Your Information</h3>
                                    <p className="text-gray-600">Fill in your personal details, experience, and skills with ease.</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 p-4">
                                <div className="">
                                    <FiArrowRightCircle className="w-5 h-5 text-gray-600" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold">Enhance with AI Suggestions</h3>
                                    <p className="text-gray-600">Get AI-powered recommendations to optimize your resume.</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 p-4">
                                <div className="">
                                    <FiArrowRightCircle className="w-5 h-5 text-gray-600" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold">Preview & Edit</h3>
                                    <p className="text-gray-600">Fine-tune your resume with our live preview feature.</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 p-4">
                                <div className="">
                                    <FiArrowRightCircle className="w-5 h-5 text-gray-600" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold">Download & Share</h3>
                                    <p className="text-gray-600">Export your resume in multiple formats and share it effortlessly.</p>
                                </div>
                            </div>
                        </div>
                    </div>               
                </div>
            </div>
        </div>
    );
};

export default StepsSection;