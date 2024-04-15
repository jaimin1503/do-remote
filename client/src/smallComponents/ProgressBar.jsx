// ProgressBar.js
import React from "react";
import { LinearProgress } from "@mui/material";

const ProgressBar = ({ currentStep, totalSteps }) => {
  const progress = (currentStep / totalSteps) * 100;

  return <LinearProgress variant="determinate" value={progress} />;
};

export default ProgressBar;
