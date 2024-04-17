import { useSelector } from "react-redux";
import NavLogged from "../../components/NavLogged";
import { useEffect, useState } from "react";
import ProgressBar from "../../smallComponents/ProgressBar";
import Title from "./postjobforms/Title";
import Description from "./postjobforms/Description";
import Skills from "./postjobforms/Skills";
import Budget from "./postjobforms/Budget";
import axios from "axios";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";

const PostJob = () => {
  const { user } = useSelector((state) => state.user);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    location: user?.location,
    category: "",
    budget: "",
    experience: "",
    skillsRequired: "",
    deadline: "",
  });
  const dispatch = useDispatch();
  const [skills, setSkills] = useState([]);
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
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const postJob = () => {
    const formDataWithSkills = {
      ...formData,
      skillsRequired: skills.map((skill) => skill.value),
    };
    axios
      .post(
        `${import.meta.env.VITE_BASE_URL}/job/postjob`,
        formDataWithSkills,
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log(res.data.savedJob);
        toast.success("Job posted successfully");
        window.location.href = "/myjobs";
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="h-screen relative">
      <NavLogged />
      <h1 className="text-3xl font-medium m-4">Post a new Job</h1>
      <p className="ml-10 mb-2">STEP {step}</p>
      <div className="container pb-16">
        {step === 1 && (
          <Title formData={formData} handleChange={handleChange} />
        )}
        {step === 2 && <Skills skills={skills} setSkills={setSkills} />}
        {step === 3 && (
          <Budget formData={formData} handleChange={handleChange} />
        )}
        {step === 4 && (
          <Description formData={formData} handleChange={handleChange} />
        )}
      </div>
      <div className="fixed bottom-0 w-full bg-white">
        <ProgressBar currentStep={step} totalSteps={4} />
        <div className="buttons flex justify-between items-center px-4 py-4">
          <button
            onClick={prevStep}
            disabled={isBackDisabled}
            className="hover:bg-gray-100 py-2 px-5 rounded-full text-blue-500 border-2 border-blue-500"
          >
            Back
          </button>
          {step === 4 ? (
            <button
              onClick={postJob}
              className="hover:bg-blue-600 py-2 px-5 rounded-full text-white bg-blue-500"
            >
              Post Job
            </button>
          ) : (
            <button
              onClick={nextStep}
              disabled={isNextDisabled}
              className="hover:bg-blue-600 py-2 px-5 rounded-full text-white bg-blue-500"
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
export default PostJob;
