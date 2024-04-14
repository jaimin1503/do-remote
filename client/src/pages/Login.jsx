import "../components/styles.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

export default function Login() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    setError("");
    // Send a POST request to the server
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/user/login`,
        formData,
        { withCredentials: true }
      );
      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        navigate("/db");
        toast.success(`Welcome ${formData.identifier}`, {
          duration: 4000,
          position: "top-right",
        });
      } else {
        setError("An error occurred. Please try again later.");
        toast.error("An error occurred. Please try again.", {
          duration: 4000,
          position: "top-right",
        });
      }
    } catch (error) {
      if (error.response && error.response.data.message) {
        setError(error.response.data.message);
      } else {
        setError("An error occurred. Please try again later.");
      }
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      window.location.href = "/db";
    }
  });

  return (
    <>
      <div className=" w-fit mx-auto md:border-2 max-w-lg border-blue-300 rounded-2xl p-10 mt-[15%]">
        <h1 className="text-3xl sm:text-4xl text-center mb-10">
          Login to Do-remote
        </h1>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <form onSubmit={handleSubmit}>
          <input
            className="input-field"
            placeholder="Username or Email"
            onChange={handleChange}
            name="identifier"
            value={formData.identifier || ""}
            type="text"
          />
          <input
            className="input-field"
            type="password"
            placeholder="Password"
            onChange={handleChange}
            name="password"
            value={formData.password || ""}
            required
          />
          <button type="submit" className="submit-button">
            Continue
          </button>
        </form>
        <div className=" text-center">
          <p className=" my-8 w-full border-b leading-[.1em]">
            <span className=" bg-white px-2 text-gray-600">or</span>
          </p>
        </div>
        <div className="flex justify-center items-center mt-5">
          <p className="text-lg text-gray-600">Don't have an account?</p>
          <a href="/welcome" className="text-blue-500 ml-2">
            Sign up
          </a>
        </div>
      </div>
    </>
  );
}
