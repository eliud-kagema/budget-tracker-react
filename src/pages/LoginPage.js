import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginAction } from "../redux/actions/authActions";
import { FaLock, FaUserAlt } from "react-icons/fa";

const LoginPage = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginAction(credentials.email, credentials.password));
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-teal-500 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">Login to Your Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="email" className="text-lg text-gray-700 mb-2 block">Email</label>
            <div className="flex items-center border border-gray-300 rounded-md">
              <FaUserAlt className="text-gray-500 mx-2" />
              <input
                type="email"
                id="email"
                name="email"
                value={credentials.email}
                onChange={handleInputChange}
                className="flex-1 p-3 outline-none"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="text-lg text-gray-700 mb-2 block">Password</label>
            <div className="flex items-center border border-gray-300 rounded-md">
              <FaLock className="text-gray-500 mx-2" />
              <input
                type="password"
                id="password"
                name="password"
                value={credentials.password}
                onChange={handleInputChange}
                className="flex-1 p-3 outline-none"
                placeholder="Enter your password"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white py-3 px-8 rounded-md shadow-lg hover:bg-blue-700 transition duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
