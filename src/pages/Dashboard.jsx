import React from "react";
import { hotspots, stats } from "../services/mockData";
import StatCard from "../components/StatCard";
import { Link } from "react-router-dom";

export default function Dashboard(){
  return (
    <div className="py-12 px-6">
      <div className="max-w-7xl mx-auto grid gap-8">
        <center><h2 className="text-2xl font-bold">Health Dashboard</h2></center>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <StatCard title="Prediction Accuracy" value={`${stats.accuracy}%`} />
          <StatCard title="Communities Protected" value={`${stats.communities}`} />
          <StatCard title="Monitoring" value={stats.monitoring} />
        </div>

        <div className="bg-white rounded-2xl p-6 shadow">
          <h3 className="font-semibold mb-4">Hotspots</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {hotspots.map(h => (
              <div key={h.id} className="p-4 rounded-xl border bg-[#F6FAFD]">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="font-bold text-[#1A3D63]">{h.village}</div>
                    <div className="text-sm text-gray-600">Reports: {h.reports}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-[#0077B6]">{h.risk}%</div>
                    <Link to={`/hotspot/${h.id}`} className="text-sm text-[#4A7FA7]">Details →</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
