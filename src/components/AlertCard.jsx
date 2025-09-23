import React from "react";

export default function AlertCard({ a }) {
  const color = a.risk > 70 ? "bg-[#FF6B35]" : a.risk > 40 ? "bg-[#FFD580]" : "bg-[#B3CFE5]";
  return (
    <div className="bg-white rounded-xl p-4 shadow card-hover border">
      <div className="flex items-start justify-between">
        <div>
          <div className="text-sm text-gray-500">{a.time}</div>
          <div className="text-lg font-semibold text-[#0A1931]">{a.village}</div>
          <div className="text-sm mt-2 text-gray-700">{a.advice}</div>
        </div>
        <div className={`text-white font-bold px-3 py-2 rounded-lg ${color} ml-4 text-center`}>
          {a.risk}%
          <div className="text-xs">Risk</div>
        </div>
      </div>
    </div>
  );
}
