import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";

const Description = () => {
  const [formData, setFormData] = useState({
    description: "",
    budget: "",
  });
  const dispatch = useDispatch();

  const handelInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      
    </>
  );
};
export default Description;
