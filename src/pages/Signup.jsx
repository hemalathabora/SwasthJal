import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "", role: "citizen" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = () => {
    // Save user data in localStorage (mock auth)
    localStorage.setItem("user", JSON.stringify(form));
    navigate("/login"); // Redirect to login after signup
  };

  return (
    <div className="py-16 px-6">
      <div className="max-w-md mx-auto bg-white p-8 rounded-2xl shadow-lg">
        <center>
          <h2 className="text-2xl font-bold mb-4 text-[#0A1931]">Create Account</h2>
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
          className="w-full border rounded px-3 py-2 mb-3"
          onChange={handleChange}
        />

        <label className="block text-sm">Role</label>
        <select
          name="role"
          className="w-full border rounded px-3 py-2 mb-4"
          onChange={handleChange}
        >
          <option value="citizen">Citizen</option>
          <option value="asha">ASHA Worker / Local Clinic</option>
          <option value="authority">Health Authority</option>
        </select>

        <button
          onClick={handleSignup}
          className="w-full bg-[#4A7FA7] text-white py-2 rounded-lg"
        >
          Sign Up
        </button>

        <div className="text-sm text-center mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-[#0077B6]">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
