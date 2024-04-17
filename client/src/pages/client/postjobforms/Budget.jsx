import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { RadioGroup } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Budget = ({ formData, handleChange }) => {
  return (
    <>
      <div className="container mb-5 border rounded-2xl p-4 min:h-[50vh] flex flex-col md:flex-row">
        <div className=" m-4 md:w-1/2">
          <h1 className=" text-3xl font-medium ">
            Next, estimate the scope of your job.
          </h1>
          <p className=" mt-4 text-gray-500">
            This will help freelancers understand your needs and attract the
            right candidates.
          </p>
          <p className=" mt-4 text-gray-500">
            <span className=" text-gray-700 font-medium">Tip: </span> Be
            specific with your budget and deadline to attract the right
            freelancers.
          </p>
        </div>
        <div className="md:w-1/2 m-4">
          <Accordion defaultExpanded>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <div className=" flex flex-col justify-center">
                <p className=" mx-4 text-xl font-medium">
                  How long your work will take?
                </p>

                <p className=" ml-6">
                  {formData?.deadline || "less than a month"}
                </p>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <RadioGroup
                name="deadline"
                value={formData.deadline}
                onChange={handleChange}
                className=" mx-4"
              >
                <FormControlLabel
                  value="less than a month"
                  control={<Radio />}
                  label="less than a month"
                />
                <FormControlLabel
                  value="1 to 3 months"
                  control={<Radio />}
                  label="1 to 3 months"
                />
                <FormControlLabel
                  value="3 to 6 months"
                  control={<Radio />}
                  label="3 to 6 months"
                />
                <FormControlLabel
                  value="more than 6 months"
                  control={<Radio />}
                  label="more than 6 months"
                />
              </RadioGroup>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <div className=" flex flex-col justify-center">
                <p className=" mx-4 text-xl font-medium">
                  Estimated job budget?
                </p>
                <p className=" ml-6">{formData?.budget || "1000"} &#8377;</p>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <div className=" mx-4">
                <h1 className=" text-xl font-medium ">
                  What is the best cost estimate for your project?
                </h1>
                <input
                  className="p-2 mt-2 border-2 border-gray-300 rounded-md"
                  type="text"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                />
                <span className=" pl-2">&#8377;</span>
              </div>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <div className=" flex flex-col justify-center">
                <p className=" mx-4 text-xl font-medium">
                  How much experience is required?
                </p>
                <p className=" ml-6">
                  {formData?.experience || "Intermediate"}
                </p>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <RadioGroup
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                className=" mx-4"
              >
                <FormControlLabel
                  value="Beginner"
                  control={<Radio />}
                  label="Beginner"
                />
                <FormControlLabel
                  value="Intermediate"
                  control={<Radio />}
                  label="Intermediate"
                />
                <FormControlLabel
                  value="Expert"
                  control={<Radio />}
                  label="Expert"
                />
              </RadioGroup>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </>
  );
};
export default Budget;
