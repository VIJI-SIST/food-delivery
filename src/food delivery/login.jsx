import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const FoodDeliveryLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "admin" && password === "admin") {
      alert("Login Successful!");
      navigate("/home");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-orange-500 via-red-500 to-pink-600">
      <div className="bg-white bg-opacity-90 p-10 rounded-3xl shadow-2xl w-96 text-center backdrop-blur-lg border border-yellow-400">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-6 animate-fade-in">
          🍽️ Welcome Back!
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="animate-slide-in">
            <label className="block text-left text-gray-700 font-semibold">Email</label>
            <input
              type="text"
              className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-4 focus:ring-orange-500 transition-all"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="animate-slide-in">
            <label className="block text-left text-gray-700 font-semibold">Password</label>
            <input
              type="password"
              className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-4 focus:ring-orange-500 transition-all"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 text-transparent bg-clip-text border-2 border-yellow-400 py-3 rounded-lg font-semibold text-lg shadow-lg 
            transition-all duration-300 transform hover:scale-110 hover:from-red-600 hover:to-yellow-400 hover:shadow-xl hover:ring-4 hover:ring-yellow-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default FoodDeliveryLogin;
