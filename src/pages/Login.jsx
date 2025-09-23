import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="py-16 px-6">
      <div className="max-w-md mx-auto bg-white p-8 rounded-2xl shadow-lg">
        <center><h2 className="text-2xl font-bold mb-4 text-[#0A1931]">Login</h2></center>
        <label className="block text-sm">Email</label>
        <input className="w-full border rounded px-3 py-2 mb-3" />
        <label className="block text-sm">Password</label>
        <input type="password" className="w-full border rounded px-3 py-2 mb-4" />
        <button className="w-full bg-[#4A7FA7] text-white py-2 rounded-lg">Sign in</button>
        <div className="text-sm text-center mt-4">New? <Link to="/signup" className="text-[#0077B6]">Create an account</Link></div>
      </div>
    </div>
  );
}
