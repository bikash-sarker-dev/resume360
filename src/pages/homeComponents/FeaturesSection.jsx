import { BiCustomize } from "react-icons/bi";
import { LuSquareDashedMousePointer } from "react-icons/lu";
import { VscPreview } from "react-icons/vsc";
import { BsRobot } from "react-icons/bs";
import { FaRegFileAlt } from "react-icons/fa";
import { PiReadCvLogo } from "react-icons/pi";

const FeaturesSection = () => {
    return (
        <div class="">
            <div class="max-w-6xl mx-auto py-16 px-4">
                <p className="text-center mb-5 text-r-primary">Discover Our Exclusive Features</p>
                <h2 class="md:text-4xl text-3xl font-bold text-center mb-14">Our Features</h2>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-md:max-w-md mx-auto">
                    <div class="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all">
                        <div class="p-8">
                            <div className="mb-5"><BiCustomize className="size-10 text-r-accent"></BiCustomize></div>
                            <h3 class="text-slate-900 text-lg font-semibold mb-3">Customizable Templates</h3>
                            <p class="text-slate-500 text-sm font-medium leading-relaxed">Users can choose from multiple pre-designed resume templates.</p>
                        </div>
                    </div>

                    <div class="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all">
                        <div class="p-8">
                            <div className="mb-5"><LuSquareDashedMousePointer className="size-10 text-r-accent"></LuSquareDashedMousePointer></div>
                            <h3 class="text-slate-900 text-lg font-semibold mb-3">Drag and Drop</h3>
                            <p class="text-slate-500 text-sm font-medium leading-relaxed">Easily rearrange resume sections for better customization.</p>
                        </div>
                    </div>

                    <div class="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all">
                        <div class="p-8">
                            <div className="mb-5"><VscPreview className="size-10 text-r-accent"></VscPreview></div>
                            <h3 class="text-slate-900 text-lg font-semibold mb-3">Real-time Preview</h3>
                            <p class="text-slate-500 text-sm font-medium leading-relaxed">Instant visual feedback of the resume as the user makes changes.</p>
                        </div>
                    </div>

                    <div class="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all">
                        <div class="p-8">
                            <div className="mb-5"><BsRobot className="size-10 text-r-accent"></BsRobot></div>
                            <h3 class="text-slate-900 text-lg font-semibold mb-3">AI-Based Suggestions</h3>
                            <p class="text-slate-500 text-sm font-medium leading-relaxed">Get intelligent recommendations for resume content.</p>
                        </div>
                    </div>

                    <div class="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all">
                        <div class="p-8">
                            <div className="mb-5"><FaRegFileAlt className="size-10 text-r-accent"></FaRegFileAlt></div>
                            <h3 class="text-slate-900 text-lg font-semibold mb-3">Multiple File Formats</h3>
                            <p class="text-slate-500 text-sm font-medium leading-relaxed">Option to download the resume in various formats to meet different application.</p>
                        </div>
                    </div>

                    <div class="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all">
                        <div class="p-8">
                            <div className="mb-5"><PiReadCvLogo className="size-10 text-r-accent"></PiReadCvLogo></div>
                            <h3 class="text-slate-900 text-lg font-semibold mb-3">CV and Cover Letter Generator</h3>
                            <p class="text-slate-500 text-sm font-medium leading-relaxed">Create matching professional cover letter and CV with the resume.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturesSection;