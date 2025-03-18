import EducationList from "./education/EducationList";
import StepperComponents from "./stepper/StepperComponents";

const InformationInput = () => {
    return (
        <>
            <div className="">
                <div className="max-w-7xl mx-auto pt-30">
                    <StepperComponents/>
                    {/* <PersonalInfo/> */}
                    <EducationList></EducationList>
                </div>
            </div>
        </>
    );
};

export default InformationInput;