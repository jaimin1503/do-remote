import NavLogged from "../components/NavLogged";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const Apply = () => {
  const id = useParams().id;
  const [job, setJob] = useState(null);
  const [formData, setFormData] = useState({
    jobId: id,
    coverLetter: "",
    bidAmount: "",
    deliveryTime: "",
  });

  const now = new Date();
  const createDate = new Date(job?.createdDate);
  const timeDiffrence = now.getTime() - createDate.getTime();
  const minutes = Math.floor(timeDiffrence / 60000);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const inputRef = useRef(null);
  const [Files, setFiles] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageClick = () => {
    inputRef.current.click();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        `${import.meta.env.VITE_BASE_URL}/proposal/createproposal`,
        formData,
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleImageChange = (e) => {
    const files = e.target.files;
    const selectedFilesArray = Array.from(files);
    setFiles(selectedFilesArray);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const droppedFiles = Array.from(event.dataTransfer.files);
    setFiles(droppedFiles);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/job/getjob/${id}`, {
        withCredentials: true,
      })
      .then((res) => {
        setJob(res.data.job);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <>
      <NavLogged />
      <div className="container my-10">
        <h1 className=" text-4xl font-medium">Submit a proposal</h1>
        <div className="job-details my-4 rounded-2xl border-2">
          <h1 className=" text-2xl font-medium m-4">Job Details</h1>
          <h1 className=" text-2xl font-medium m-4">{job?.title}</h1>
          <div className=" m-4 flex items-center w-full">
            <p className=" py-2 px-4 bg-gray-200 w-fit rounded-full">
              {job?.category}
            </p>
            <span className=" text-sm text-gray-500 mx-4">
              {days > 0
                ? "Posted " + days + " days ago"
                : hours > 0
                ? "Posted " + hours + " hours ago"
                : "Posted " + minutes + " minutes ago"}
            </span>
            <div className=" ml-auto mr-10 sm:mr-20">
              <p className=" text-sm font-medium">Client Budget</p>
              <p className=" text-sm text-gray-500 ">{job?.budget} &#8377;</p>
            </div>
          </div>
          <p className=" m-4">{job?.description}</p>
          <hr />
          <div className=" m-4">
            <h1 className=" text-2xl font-medium">Skills and Expertise</h1>
            <div className=" flex items-center my-4">
              {job?.skillsRequired?.map((skill, index) => (
                <p
                  key={index}
                  className=" py-2 px-4 bg-gray-200 w-fit rounded-full text-sm mx-2"
                >
                  {skill}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className="job-proposal my-4 rounded-2xl border-2">
          <h1 className=" text-2xl font-medium m-4">Terms</h1>
          <div className=" bid flex justify-between">
            <div className=" m-4">
              <h1 className=" font-medium">Bid</h1>
              <h1 className=" text-sm text-gray-500 py-2">Your bid amout</h1>
            </div>
            <div className=" m-4">
              <input
                type="number"
                name="bidAmount"
                value={formData.bidAmount}
                onChange={handleChange}
                placeholder={job?.budget}
                className=" p-2 border-2 border-gray-300 text-right rounded-md"
              />
              <span className=" font-medium mx-2">&#8377;</span>
            </div>
          </div>
          <hr />
          <div className=" flex items-center justify-between">
            <h1 className="font-medium m-4">10% Do-Remote service fee</h1>
            <div className=" m-4">
              <input
                type="number"
                name="hourlyRate"
                value={-formData.bidAmount * 0.1}
                disabled
                className=" p-2 border-2 cursor-not-allowed bg-gray-200 border-gray-300 text-right rounded-md"
              />
              <span className=" font-medium mx-2">&#8377;</span>
            </div>
          </div>
          <hr />
          <div className=" bid flex justify-between">
            <div className=" m-4">
              <h1 className=" font-medium">You'll Receive</h1>
              <h1 className=" text-sm text-gray-500 py-2">
                The estimated amount you'll receive after service fees
              </h1>
            </div>
            <div className=" m-4">
              <input
                type="number"
                name="hourlyRate"
                disabled
                value={formData.bidAmount - formData.bidAmount * 0.1}
                className=" p-2 border-2 border-gray-300 text-right rounded-md"
              />
              <span className=" font-medium mx-2">&#8377;</span>
            </div>
          </div>
        </div>
        <div className="my-4 rounded-2xl border-2">
          <h1 className="text-2xl font-medium m-4">
            The time you will take to finish the project.
          </h1>
          <div className=" w-1/3 m-4 text-sm">
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Time</InputLabel>
                <Select
                  id="demo-simple-select"
                  value={formData.deliveryTime}
                  label="Age"
                  onChange={handleChange}
                  name="deliveryTime"
                >
                  <MenuItem value={1}>Less than 1 month</MenuItem>
                  <MenuItem value={3}>1 to 3 months</MenuItem>
                  <MenuItem value={6}>3 to 6 months</MenuItem>
                  <MenuItem value={8}>More than 6 months</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>
        </div>
        <div className="my-4 p-4 rounded-2xl border-2">
          <h1 className=" text-2xl font-medium">Cover Letter</h1>
          <textarea
            className=" p-4 w-full border-2 rounded-xl"
            placeholder="Write a cover letter to the client"
            rows={10}
            value={formData.coverLetter}
            onChange={handleChange}
            name="coverLetter"
          ></textarea>
          <h1 className=" font-medium my-4">Attachments</h1>
          <input
            accept="image/*"
            multiple
            ref={inputRef}
            hidden
            onChange={handleImageChange}
            type="file"
          />

          {Files?.map((file, index) => (
            <div key={index} className="flex items-center my-2">
              <img
                className=" h-10 w-10 object-cover rounded-full"
                src={URL.createObjectURL(file)}
                alt="img"
              />
              <p className=" mx-4">{file.name}</p>
              <button
                onClick={() => {
                  setFiles(Files.filter((f, i) => i !== index));
                }}
              >
                <i className="fas fa-trash text-red-500">Delete</i>
              </button>
            </div>
          ))}
          <div
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            className="border-2 rounded-2xl border-blue-500 border-dashed w-full h-40 flex justify-center items-center"
          >
            <p className=" text-center ">
              Drag or{" "}
              <span
                onClick={handleImageClick}
                className=" text-blue-500 underline cursor-pointer"
              >
                Upload
              </span>{" "}
              your files here
            </p>
          </div>
        </div>
        <div className="my-4 p-4 rounded-2xl border-2">
          <h1 className=" text-2xl font-medium">Terms and Conditions</h1>
          <p className=" text-sm text-gray-500">
            By submitting a proposal, you agree to the terms and conditions of
            Do-Remote. You also agree to the terms and conditions of the client
            who posted the job.
          </p>
          <button
            onClick={handleSubmit}
            className=" bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-xl w-full mt-4"
          >
            Submit Proposal
          </button>
        </div>
      </div>
    </>
  );
};
export default Apply;
