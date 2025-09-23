import React from "react";

export default function Signup(){
  return (
    <div className="py-16 px-6">
      <div className="max-w-lg mx-auto bg-white p-8 rounded-2xl shadow-lg">
        <center><h2 className="text-2xl font-bold mb-4 text-[#0A1931]">Create Account</h2></center>
        <input placeholder="Full name" className="w-full border rounded px-3 py-2 mb-3" />
        <input placeholder="Email" className="w-full border rounded px-3 py-2 mb-3" />
        <input placeholder="Organisation / ASHA ID (optional)" className="w-full border rounded px-3 py-2 mb-3" />
        <input placeholder="Password" type="password" className="w-full border rounded px-3 py-2 mb-4" />
        <button className="w-full bg-[#0077B6] text-white py-2 rounded-lg">Sign up</button>
      </div>
    </div>
  );
}
