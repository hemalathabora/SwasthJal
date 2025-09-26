import React, { useEffect, useState } from "react";
import ReportForm from "../components/ReportForm";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useNavigate } from "react-router-dom";

// Fake IoT readings for demo
const fakeReadings = [
  { turbidity: 30, ph: 7.1, bacteria: "None", risk: "Safe" },
  { turbidity: 55, ph: 6.5, bacteria: "E.coli Detected", risk: "Risk" },
  { turbidity: 70, ph: 6.2, bacteria: "E.coli High", risk: "High Risk" },
  { turbidity: 25, ph: 7.0, bacteria: "None", risk: "Safe" },
];

export default function ReportSymptoms() {
  const navigate = useNavigate();

  const handleSubmit = (data) => {
    // Get existing reports or empty array
    const prev = JSON.parse(localStorage.getItem("allReports") || "[]");
    // Add new report
    prev.push(data);
    // Save back to localStorage
    localStorage.setItem("allReports", JSON.stringify(prev));
    navigate("/alerts");
  };

  const [index, setIndex] = useState(0);
  const [logs, setLogs] = useState([]);
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % fakeReadings.length);

      const reading = fakeReadings[(index + 1) % fakeReadings.length];
      const timestamp = new Date().toLocaleTimeString();

      let action = "";
      if (reading.risk === "Safe") {
        action = "✅ Safe water. No action required.";
      } else if (reading.risk === "Risk") {
        action =
          "⚠️ ML Model predicts contamination risk. Authorities alerted.";
      } else {
        action =
          "🚨 High Risk detected! Water blocked. Purification initiated.";
      }

      setLogs((prev) => [
        { time: timestamp, ...reading, action },
        ...prev,
      ]);

      setChartData((prev) => [
        ...prev.slice(-7), // keep last 7 points
        { time: timestamp, turbidity: reading.turbidity },
      ]);
    }, 5000);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <div className="py-12 px-6 bg-gradient-to-br from-blue-50 via-white to-green-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-[#0A1931] mb-2">
            Report Symptoms & Monitor Water
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Help us detect outbreaks early by reporting symptoms in your
            household. IoT sensors in your area provide live water monitoring
            for better predictions.
          </p>
        </div>

        {/* Grid: Form + Monitoring */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Report Form */}
          <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition">
            <h3 className="text-xl font-semibold mb-4 text-green-700">
            <center> Citizen Report Form</center>
            </h3>
            <ReportForm onSubmit={handleSubmit} />
          </div>

          {/* Live IoT Tracking */}
          <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition">
            <h3 className="text-xl font-semibold mb-4 text-blue-700">
              <center>Live Monitoring — Sadiya Handpump</center> 
            </h3>

            {/* Current Reading Cards */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="p-4 bg-blue-50 rounded-lg shadow text-center">
                <p className="text-sm text-gray-600">Turbidity</p>
                <p className="text-xl font-bold text-blue-700">
                  {fakeReadings[index].turbidity} NTU
                </p>
              </div>
              <div className="p-4 bg-indigo-50 rounded-lg shadow text-center">
                <p className="text-sm text-gray-600">pH</p>
                <p className="text-xl font-bold text-indigo-700">
                  {fakeReadings[index].ph}
                </p>
              </div>
              <div className="p-4 bg-red-50 rounded-lg shadow text-center">
                <p className="text-sm text-gray-600">Bacteria</p>
                <p className="text-md font-bold text-red-600">
                  {fakeReadings[index].bacteria}
                </p>
              </div>
              <div
                className={`p-4 rounded-lg shadow text-center ${
                  fakeReadings[index].risk === "Safe"
                    ? "bg-green-50 text-green-700"
                    : fakeReadings[index].risk === "Risk"
                    ? "bg-yellow-50 text-yellow-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                <p className="text-sm text-gray-600">Status</p>
                <p className="text-lg font-bold">
                  {fakeReadings[index].risk === "Safe"
                    ? "✅ Safe"
                    : fakeReadings[index].risk === "Risk"
                    ? "⚠️ Risk"
                    : "🚨 High Risk"}
                </p>
              </div>
            </div>

            {/* Live Turbidity Chart */}
            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <h4 className="text-sm font-semibold mb-2">
                Turbidity Trend (Last few readings)
              </h4>
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="time" hide />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="turbidity"
                    stroke="#2563eb"
                    strokeWidth={3}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Event Timeline */}
            <h4 className="font-semibold mb-2">⏱️ Event Timeline</h4>
            <ul className="space-y-2 text-sm max-h-52 overflow-y-auto">
              {logs.map((log, i) => (
                <li
                  key={i}
                  className="p-3 border rounded bg-gray-50 flex justify-between hover:bg-gray-100 transition"
                >
                  <div>
                    <p className="font-semibold">{log.action}</p>
                    <p className="text-gray-600 text-xs">
                      Turbidity: {log.turbidity}, pH: {log.ph}, Bacteria:{" "}
                      {log.bacteria}
                    </p>
                  </div>
                  <span className="text-gray-500 text-xs">{log.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}