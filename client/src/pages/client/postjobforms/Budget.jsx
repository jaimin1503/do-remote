import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { RadioGroup } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";

const Budget = ({ formData, handleChange }) => {
  return (
    <>
      <div className="container flex flex-col md:flex-row">
        <div className=" m-4 md:w-1/2">
          <h1 className=" text-3xl font-medium ">
            Next, estimate the scope of your job.
          </h1>
        </div>
        <div className="md:w-1/2">
          <Accordion defaultExpanded>
            <AccordionSummary
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <div className=" flex flex-col justify-center">
                <p className=" mx-4 text-xl font-medium">
                  How long your work will take?
                </p>

                <p className=" ml-6">{formData?.deadline}</p>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <RadioGroup
                name="deadline"
                value={formData.deadline}
                onChange={handleChange}
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
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <div className=" flex flex-col justify-center">
                <p className=" mx-4 text-xl font-medium">
                  How much is your job budget?
                </p>
                <p className=" ml-6">{formData?.budget} &#8377;</p>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <div className=" m-4">
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
        </div>
      </div>
    </>
  );
};
export default Budget;
