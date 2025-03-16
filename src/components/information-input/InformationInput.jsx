import PersonalInfo from "../information-input/personal-info/PersonalInfo"
import StepperComponents from "./stepper/StepperComponents";

const InformationInput = () => {
    return (
        <>
            <div className="">
                <div className="max-w-7xl mx-auto pt-30">
                    <StepperComponents/>
                    <PersonalInfo/>
                </div>
            </div>
        </>
    );
};

export default InformationInput;