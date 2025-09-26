import React, { useState } from "react";

export default function ReportForm({ onSubmit }) {
  const [village, setVillage] = useState("");
  const [symptoms, setSymptoms] = useState([]);
  const [water, setWater] = useState("clean");

  const toggle = (s) => {
    setSymptoms((prev) => (prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]));
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg max-w-2xl mx-auto">
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Village / Location</label>
        <input
          value={village}
          onChange={(e) => setVillage(e.target.value)}
          placeholder="e.g., Sadiya"
          className="mt-1 w-full border rounded px-3 py-2"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Symptoms (tap to toggle)</label>
        <div className="flex flex-wrap gap-2 mt-2">
          {["diarrhea", "vomiting", "fever", "jaundice", "stomach pain"].map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => toggle(s)}
              className={`px-3 py-2 rounded-full border ${symptoms.includes(s) ? "bg-[#4A7FA7] text-white" : "bg-[#F6FAFD]"}`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700">Water quality</label>
        <select
          value={water}
          onChange={(e) => setWater(e.target.value)}
          className="mt-1 w-full border rounded px-3 py-2"
        >
          <option value="clean">Clean</option>
          <option value="turbid">Turbid</option>
          <option value="foul">Foul smell</option>
        </select>
      </div>

      <div className="flex justify-between items-center">
        <button
          onClick={() => {
            if (!village) {
              alert("Add village");
              return;
            }
            onSubmit({ village, symptoms, water });
          }}
          className="px-5 py-2 rounded-lg bg-[#0077B6] text-white font-semibold hover:scale-105 transition"
        >
          Submit Report
        </button>
        <div className="text-sm text-gray-500">Offline save enabled (demo)</div>
      </div>
    </div>
  );
}
