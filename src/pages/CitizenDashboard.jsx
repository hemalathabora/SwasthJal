import React from "react";
import { Link } from "react-router-dom";

const waterStatus = {
  village: "Majuli",
  status: "Unsafe",
  turbidity: "70 NTU",
  ph: "6.2",
  bacteria: "E.coli Detected",
};

const myReports = [
  { id: 1, date: "2025-09-24", symptoms: ["Fever", "Diarrhea"] },
  { id: 2, date: "2025-09-20", symptoms: ["Stomach Pain"] },
];

const tips = [
  "Always boil water before drinking.",
  "Wash hands with soap regularly.",
  "Store water in clean covered containers.",
  "Avoid open defecation near water bodies.",
];

export default function CitizenDashboard() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <div className="max-w-5xl mx-auto space-y-8">
        <h1 className="text-2xl font-bold text-center text-blue-700">
          Citizen Dashboard
        </h1>

        {/* Water Status */}
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-lg font-semibold mb-4 text-blue-600">
            Water Safety Status — {waterStatus.village}
          </h2>
          <div
            className={`p-4 rounded-lg ${
              waterStatus.status === "Unsafe"
                ? "bg-red-50 border border-red-400"
                : waterStatus.status === "Warning"
                ? "bg-yellow-50 border border-yellow-400"
                : "bg-green-50 border border-green-400"
            }`}
          >
            <p className="font-bold text-lg">
              {waterStatus.status === "Unsafe"
                ? "🚨 Unsafe Water"
                : waterStatus.status === "Warning"
                ? "⚠️ Warning"
                : "✅ Safe"}
            </p>
            <p className="text-sm text-gray-600">
              Turbidity: {waterStatus.turbidity} | pH: {waterStatus.ph} |{" "}
              {waterStatus.bacteria}
            </p>
          </div>
        </div>

        {/* My Reports */}
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-lg font-semibold mb-4 text-green-600">
            My Recent Reports
          </h2>
          {myReports.length ? (
            <ul className="space-y-3">
              {myReports.map((r) => (
                <li
                  key={r.id}
                  className="p-3 border rounded-lg bg-gray-50 flex justify-between"
                >
                  <span>{r.date}</span>
                  <span className="font-semibold">
                    {r.symptoms.join(", ")}
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500 text-sm">
              No reports submitted yet. Please report if you feel unwell.
            </p>
          )}
          <div className="mt-4">
            <Link
              to="/report"
              className="px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition"
            >
              Report Symptoms
            </Link>
          </div>
        </div>

        {/* Awareness Tips */}
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-lg font-semibold mb-4 text-indigo-600">
            Health & Hygiene Tips
          </h2>
          <ul className="list-disc ml-5 space-y-2 text-gray-700">
            {tips.map((tip, idx) => (
              <li key={idx}>{tip}</li>
            ))}
          </ul>
        </div>

        {/* Support Contacts */}
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-lg font-semibold mb-4 text-purple-600">
            Nearby Support
          </h2>
          <p className="text-gray-700">
            <strong>ASHA Worker:</strong> Rina Devi (📞 9876543210)
          </p>
          <p className="text-gray-700">
            <strong>Local Clinic:</strong> Majuli Primary Health Center
          </p>
        </div>
      </div>
    </div>
  );
}
