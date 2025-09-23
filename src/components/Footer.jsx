import React from "react";

export default function Footer(){
  return (
    <footer className="bg-[#1A3D63] text-white mt-12">
      <div className="max-w-7xl mx-auto px-6 py-8 grid md:grid-cols-2 gap-4">
        <div>
          <h4 className="font-bold">SwasthJal 💦</h4>
          <p className="text-sm opacity-80 mt-2">
            © 2025 SwasthJal • Supported by Ministry of Health & Jal Shakti
          </p>
        </div>
        <div className="text-sm text-right opacity-80">
          <div>Contact: healthsupport@project.org</div>
          <div className="mt-1">Designed for North East India</div>
        </div>
      </div>
    </footer>
  );
}
