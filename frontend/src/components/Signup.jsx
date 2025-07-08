import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Signup = () => {
  const [input, setInput] = useState({
    username: "",
    email: "",
    password: "",
    bio: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(
        "http://localhost:5000/api/v1/users/register",
        input,
        { withCredentials: true }
      );
      toast.success(res.data.message || "Signup successful!");
      setLoading(false);
      setTimeout(() => navigate("/login"), 1500);
    } catch (err) {
      toast.error(
        err.response?.data?.message || "Signup failed. Please try again."
      );
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <ToastContainer />
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center mb-6 text-[#6A38C2]">
          Sign Up
        </h2>
        <form className="space-y-4" onSubmit={submitHandler}>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              name="username"
              value={input.username}
              onChange={changeEventHandler}
              placeholder="Enter your username"
              className="mt-2 w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#6A38C2] focus:border-[#6A38C2] transition"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={input.email}
              onChange={changeEventHandler}
              placeholder="Enter your email"
              className="mt-2 w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#6A38C2] focus:border-[#6A38C2] transition"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={input.password}
              onChange={changeEventHandler}
              placeholder="Enter your password"
              className="mt-2 w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#6A38C2] focus:border-[#6A38C2] transition"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Bio
            </label>
            <textarea
              name="bio"
              value={input.bio}
              onChange={changeEventHandler}
              placeholder="Tell us about yourself"
              className="mt-2 w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#6A38C2] focus:border-[#6A38C2] transition"
              rows={3}
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#6A38C2] hover:bg-[#552E9E] text-white font-semibold py-2 rounded-lg transition-all"
          >
            {loading ? "Signing up..." : "Sign Up"}
          </button>
        </form>
        <div className="mt-6 text-center">
          <span className="block text-sm text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-[#6A38C2] hover:underline">
              Login
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Signup;