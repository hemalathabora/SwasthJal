import React from "react";

const tips = [
  { t: "Boil water for 5 minutes before drinking" },
  { t: "Use ORS for diarrhea and seek health help" },
  { t: "Wash hands with soap before eating" },
  { t: "Keep drinking water sources covered" }
];

export default function Awareness(){
  return (
    <div className="py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <center><h2 className="text-2xl font-bold mb-6">Awareness & Hygiene</h2></center>
        <div className="grid sm:grid-cols-2 gap-6">
          {tips.map((p, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow card-hover">
              <h3 className="font-semibold text-[#1A3D63] mb-2">Tip</h3>
              <p className="text-gray-700">{p.t}</p>
              <div className="mt-4">
                <button className="px-4 py-2 rounded bg-[#4A7FA7] text-white">Play audio</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
