import { useState } from "react";
import "./styles.css";
import SelectCountry from "./SelectCountry";
import { sendOtp } from "../pages/SendOtp";
import { useDispatch } from "react-redux";
import { setLoading, setsignupdata } from "../reducers/authReducer";
import { useNavigate } from "react-router-dom";

const SignupForm = ({ role }) => {
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch(setLoading(true));
    dispatch(setsignupdata(formData));
    dispatch(sendOtp(formData.email, navigate));
    console.log("inside handle submit", formData);
    dispatch(setLoading(false));
  };

  return (
    <>
      <div className=" w-fit mx-auto md:border-2 border-blue-300 rounded-2xl p-10 md:p-20 md:mt-10">
        <div className=" flex justify-center items-center">
          <h1 className=" text-2xl sm:text-3xl pb-10 font-medium text-center">
            {role === "client"
              ? "Join as a client and hire talented freelancers"
              : "Join as a freelancer and get hired"}
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
export default SignupForm;
