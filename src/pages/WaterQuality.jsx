import React from "react";

const samples = [
  { id: 'w1', location: 'Handpump - Sadiya', turbidity: 'High', pH: 6.2, bacteria: 'Detected' },
  { id: 'w2', location: 'Community well - Dhemaji', turbidity: 'Medium', pH: 7.1, bacteria: 'Not detected' }
];

export default function WaterQuality(){
  return (
    <div className="py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <center><h2 className="text-2xl font-bold mb-6">Water Quality Samples</h2></center>
        <div className="grid gap-4">
          {samples.map(s => (
            <div key={s.id} className="bg-white p-4 rounded-2xl shadow flex justify-between items-center">
              <div>
                <div className="font-semibold text-[#1A3D63]">{s.location}</div>
                <div className="text-sm text-gray-600">pH: {s.pH} • Turbidity: {s.turbidity}</div>
              </div>
              <div className={`px-3 py-2 rounded font-semibold ${s.bacteria === 'Detected' ? 'bg-[#FF6B35] text-white' : 'bg-[#B3CFE5] text-[#0A1931]'}`}>
                {s.bacteria}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
