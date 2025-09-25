import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (
      savedUser &&
      savedUser.email === form.email &&
      savedUser.password === form.password
    ) {
      // Save logged in user in session
      localStorage.setItem("loggedInUser", JSON.stringify(savedUser));

      // Redirect based on role
      if (savedUser.role === "citizen") navigate("/citizen-dashboard");
      else if (savedUser.role === "asha") navigate("/asha-dashboard");
      else if (savedUser.role === "authority") navigate("/health-dashboard");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="py-16 px-6">
      <div className="max-w-md mx-auto bg-white p-8 rounded-2xl shadow-lg">
        <center>
          <h2 className="text-2xl font-bold mb-4 text-[#0A1931]">Login</h2>
        </center>

        <label className="block text-sm">Email</label>
        <input
          name="email"
          className="w-full border rounded px-3 py-2 mb-3"
          onChange={handleChange}
        />

        <label className="block text-sm">Password</label>
        <input
          type="password"
          name="password"
          className="w-full border rounded px-3 py-2 mb-4"
          onChange={handleChange}
        />

        <button
          onClick={handleLogin}
          className="w-full bg-[#4A7FA7] text-white py-2 rounded-lg"
        >
          Sign in
        </button>

        <div className="text-sm text-center mt-4">
          New?{" "}
          <Link to="/signup" className="text-[#0077B6]">
            Create an account
          </Link>
        </div>
      </div>
    </div>
  );
}
