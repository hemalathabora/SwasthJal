import React from "react";
import ReportForm from "../components/ReportForm";

export default function ReportSymptoms(){
  const onSubmit = (payload) => {
    // For prototype: just alert and console.log
    console.log("REPORT", payload);
    alert("Report submitted (demo). Saved locally.");
  };

  return (
    <div className="py-12 px-6">
      <div className="max-w-3xl mx-auto">
        <center><h2 className="text-2xl font-bold mb-4 text-[#0A1931]">Report Symptoms</h2>
        <p className="text-gray-600 mb-6">Help us detect outbreaks early by reporting symptoms and water conditions in your area.</p>
        </center><ReportForm onSubmit={onSubmit} />
      </div>
    </div>
  );
}
