import React from "react";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";
import { editProposal } from "../../../services/proposal";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";

const EditDeadline = ({ id, handleCloseDeadlineModal, deliveryTime }) => {
  const [formData, setFormData] = useState({
    deliveryTime: deliveryTime,
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    const toastId = toast.loading("Loading...");
    e.preventDefault();
    dispatch(editProposal(id, formData))
      .then(() => {
        handleCloseDeadlineModal();
      })
      .catch((err) => {
        console.log(err);
      });
    toast.dismiss(toastId);
  };

  return (
    <>
      <div className=" bg-white absolute top-[50%] p-4 left-[50%] translate-x-[-50%] translate-y-[-50%] z-10 rounded-2xl w-[300px] sm:w-[350px]">
        <h1 className=" text-3xl font-medium">Edit DeliveryTime</h1>
        <div className="  m-4 text-sm">
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
                <MenuItem value={"Less than 1 month"}>
                  Less than 1 month
                </MenuItem>
                <MenuItem value={"1 to 3 months"}>1 to 3 months</MenuItem>
                <MenuItem value={"3 to 6 months"}>3 to 6 months</MenuItem>
                <MenuItem value={"More than 6 months"}>
                  More than 6 months
                </MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
        <button
          onClick={handleSubmit}
          className="btn bg-blue-500 hover:bg-blue-600 py-2 px-5 rounded-lg float-right text-white mt-4"
        >
          Save
        </button>
        <button
          onClick={handleCloseDeadlineModal}
          className="py-2 px-4 float-right text-blue-500 mt-4"
        >
          cancel
        </button>
      </div>
    </>
  );
};
export default EditDeadline;
