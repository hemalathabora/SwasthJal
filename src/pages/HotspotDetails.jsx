import React from "react";
import { hotspots, reports } from "../services/mockData";
import { useParams } from "react-router-dom";

export default function HotspotDetails(){
  const { id } = useParams();
  const spot = hotspots.find(h => h.id === id) || hotspots[0];

  return (
    <div className="py-12 px-6">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-2xl shadow">
        <h2 className="text-2xl font-bold mb-3">{spot.village} — Hotspot Details</h2>
        <div className="text-sm text-gray-600 mb-4">Risk score: <span className="font-bold">{spot.risk}%</span></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold mb-2">Recent Reports</h4>
            <div className="space-y-3">
              {reports.filter(r => r.village === spot.village).length ? reports.filter(r => r.village === spot.village).map(r => (
                <div key={r.id} className="p-3 border rounded">
                  <div className="text-sm text-gray-700">{r.time}</div>
                  <div className="font-semibold">{r.symptoms.join(', ') || 'No symptoms'}</div>
                  <div className="text-xs text-gray-500">Water: {r.water}</div>
                </div>
              )) : <div className="text-gray-500">No reports specific to this hotspot in demo data.</div>}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Suggested Actions</h4>
            <ul className="list-disc ml-5 text-gray-700">
              <li>Deploy chlorine dosing at community well</li>
              <li>Send medical camp and ORS supplies</li>
              <li>Public awareness drive: boil water, handwash</li>
            </ul>
            <div className="mt-6">
              <button className="px-4 py-2 bg-[#4A7FA7] text-white rounded-lg">Send Alert to Community</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
