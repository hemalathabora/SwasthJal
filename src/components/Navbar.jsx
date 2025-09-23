import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar(){
  const [open, setOpen] = useState(false);
  return (
    <header className="bg-gradient-to-r from-[#0A1931] to-[#1A3D63] text-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-md bg-[#4A7FA7] flex items-center justify-center shadow">
            <span className="text-white font-bold">💧</span>
          </div>
          <div>
            <div className="font-extrabold text-lg">SwasthJal 💦</div>
            <div className="text-xs opacity-80">Monitoring & Early Warning</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link to="/" className="hover:text-[#B3CFE5]">Home</Link>
          <Link to="/report" className="hover:text-[#B3CFE5]">Report</Link>
          <Link to="/alerts" className="hover:text-[#B3CFE5]">Alerts</Link>
          <Link to="/awareness" className="hover:text-[#B3CFE5]">Awareness</Link>
          <Link to="/water-quality" className="hover:text-[#B3CFE5]">Water</Link>
          <Link to="/dashboard" className="hover:text-[#B3CFE5]">Dashboard</Link>
          <Link to="/login" className="ml-2 px-3 py-1 rounded-lg bg-[#B3CFE5] text-[#0A1931] font-semibold">Login</Link>
        </nav>

        <button onClick={() => setOpen(v => !v)} className="md:hidden">
          <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
            <path d="M4 7h16M4 12h16M4 17h16" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden px-6 pb-6 bg-[#0A1931]">
          <Link to="/" className="block py-2 text-white">Home</Link>
          <Link to="/report" className="block py-2 text-white">Report</Link>
          <Link to="/alerts" className="block py-2 text-white">Alerts</Link>
          <Link to="/awareness" className="block py-2 text-white">Awareness</Link>
          <Link to="/water-quality" className="block py-2 text-white">Water</Link>
          <Link to="/dashboard" className="block py-2 text-white">Dashboard</Link>
          <Link to="/login" className="block py-2 mt-2 bg-[#B3CFE5] text-[#0A1931] px-3 py-2 rounded">Login</Link>
        </div>
      )}
    </header>
  );
}
