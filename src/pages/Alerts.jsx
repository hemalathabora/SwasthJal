import React from "react";
import AlertCard from "../components/AlertCard";

export default function Alerts() {
  // Read all reports from localStorage
  let reports = [];
  try {
    reports = JSON.parse(localStorage.getItem("allReports")) || [];
  } catch {}

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded-2xl shadow-lg mt-10">
      <center><h2 className="text-2xl font-bold mb-4 text-[#1A3D63]">Alert Details</h2></center>
      {reports.length > 0 ? (
        <div className="space-y-4">
          {reports.map((report, idx) => (
            <AlertCard key={idx} report={report} />
          ))}
        </div>
      ) : (
        <div className="text-gray-500">No report data submitted yet.</div>
      )}
    </div>
  );
}