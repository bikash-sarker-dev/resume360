import EducationList from "./education/EducationList";
import Skill from "./skill/skill";
import StepperComponents from "./stepper/StepperComponents";

const InformationInput = () => {
    return (
        <>
            <div className="">
                <div className="max-w-7xl mx-auto pt-30">
                    <StepperComponents/>
                    {/* <PersonalInfo/> */}
                    {/* <EducationList></EducationList> */}
                    <Skill></Skill>
                </div>
            </div>
        </>
    );
};

export default InformationInput;