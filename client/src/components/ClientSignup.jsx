import { useState } from "react";
import axios from "axios";
import "./styles.css";
import SelectCountry from "./SelectCountry";
import { sendOtp } from "../pages/SendOtp";
import { useDispatch } from "react-redux";
import { setsignupdata } from "../reducers/authReducer";
import { useNavigate } from "react-router-dom";

const ClientSignup = ({ role }) => {
  const url = import.meta.env.VITE_BASE_URL;
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    location: "",
    role: role,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCountrySelect = (country) => {
    setFormData({ ...formData, location: country.label });
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {};
    for (const key in formData) {
      if (formData[key] !== "") {
        data[key] = formData[key];
      }
    }
    dispatch(setsignupdata(data));
    sendOtp(data.email, navigate);
    console.log("inside handle submit", data);
  };

  return (
    <>
      <div className=" w-fit mx-auto md:border-2 border-blue-300 rounded-2xl p-20 mt-10">
        <div className=" flex justify-center items-center">
          <h1 className=" text-3xl pb-10 font-medium">
            Join as a client and hire talented freelancers
          </h1>
        </div>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name"
            className="input-field"
            required
          />
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            className="input-field"
            required
          />
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Username"
            className="input-field"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="input-field"
            required
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="input-field"
            required
          />

          <SelectCountry
            onCountrySelect={handleCountrySelect}
            value={formData.location}
          />
          <button type="submit" name="location" className="submit-button mt-10">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};
export default ClientSignup;
