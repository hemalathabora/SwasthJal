import React from "react";

export default function AlertCard({ report }) {
  if (!report) return null;
  return (
    <div className="border rounded-xl p-4 bg-[#F6FAFD]">
      <div className="mb-2">
        <span className="font-semibold">Village / Location:</span> {report.village}
      </div>
      <div className="mb-2">
        <span className="font-semibold">Symptoms:</span>{" "}
        {report.symptoms.length > 0 ? report.symptoms.join(", ") : "None"}
      </div>
      <div className="mb-2">
        <span className="font-semibold">Water Quality:</span> {report.water}
      </div>
    </div>
  );
}
