import { useSelector } from "react-redux";
import NavLogged from "../../components/NavLogged";
import { useEffect, useState } from "react";
import ProgressBar from "../../smallComponents/ProgressBar";
import Title from "./postjobforms/Title";
import Description from "./postjobforms/Description";
import Skills from "./postjobforms/Skills";
import Budget from "./postjobforms/Budget";

const PostJob = () => {
  const { user } = useSelector((state) => state.auth);
  const [fromData, setFormData] = useState({
    title: "",
    description: "",
    location: `${user?.location}`,
    category: "",
    budget: "",
    experience: "",
    skillsRequired: "",
    deadline: "",
  });
  const [isBackDisabled, setIsBackDisabled] = useState(true);
  const [isNextDisabled, setIsNextDisabled] = useState(false);
  const [step, setStep] = useState(1);
  const nextStep = () => {
    setStep(step + 1);
  };
  const prevStep = () => {
    setStep(step - 1);
  };

  useEffect(() => {
    if (step === 1) {
      setIsBackDisabled(true);
    } else {
      setIsBackDisabled(false);
    }
    if (step === 4) {
      setIsNextDisabled(true);
    } else {
      setIsNextDisabled(false);
    }
  }, [step]);

  const handleChange = (e) => {
    setFormData({ ...fromData, [e.target.name]: e.target.value });
  };

  return (
    <div className=" h-screen">
      <NavLogged />
      <div className="container m-4">
        <h1 className=" text-3xl font-medium m-4">Post a Job</h1>
        {step === 1 && <Title />}
        {step === 2 && <Description />}
        {step === 3 && <Skills />}
        {step === 4 && <Budget />}
      </div>
      <div className=" my-4 bottom-0 fixed z-50 w-full left-0">
        <ProgressBar currentStep={step} totalSteps={4} />
        <div className="buttons flex justify-between items-center">
          <button
            onClick={prevStep}
            disabled={isBackDisabled}
            className=" mx-4 hover:bg-gray-100 py-2 px-5 rounded-full text-blue-500 border-2 border-blue-500 mt-4"
          >
            Back
          </button>
          <button
            onClick={nextStep}
            disabled={isNextDisabled}
            className=" mx-4 py-2 px-5 rounded-full text-white bg-blue-500 hover:bg-blue-600 border-2 mt-4 border-blue-500"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};
export default PostJob;
