import React from "react";

export default function StatCard({ title, value }) {
  return (
    <div className="bg-white rounded-2xl p-6 text-center shadow">
      <div className="text-3xl font-bold text-[#1A3D63]">{value}</div>
      <div className="text-sm text-gray-600 mt-1">{title}</div>
    </div>
  );
}
