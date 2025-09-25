import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "leaflet/dist/leaflet.css";

const outbreakData = [
  { date: "Mon", cases: 10 },
  { date: "Tue", cases: 25 },
  { date: "Wed", cases: 40 },
  { date: "Thu", cases: 30 },
  { date: "Fri", cases: 50 },
];

const interventions = [
  { id: 1, village: "Majuli", action: "Water chlorination", date: "2025-09-20" },
  { id: 2, village: "Silchar", action: "Medical camp deployed", date: "2025-09-22" },
];

const contaminatedSources = [
  {
    id: 1,
    location: "Majuli Riverbank",
    issue: "High Bacteria (E.coli)",
    status: "Unsafe",
    action: "Chlorination in progress",
  },
  {
    id: 2,
    location: "Silchar Well",
    issue: "Turbidity > 70 NTU",
    status: "Warning",
    action: "Temporary Closure",
  },
];

export default function HealthDashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-10">
        Health Department Dashboard
      </h1>

      {/* Top Grid: Map + Chart */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Hotspot Map */}
        <div className="bg-white rounded-xl shadow p-4">
          <h2 className="text-lg font-semibold mb-4">Hotspot Map</h2>
          <div className="w-full h-[350px]">
            <MapContainer
              center={[26.2, 92.9]}
              zoom={7}
              style={{ height: "320px", width: "100%" }}
              className="rounded-lg shadow border"
            >
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

              {/* Example Markers */}
              <Marker position={[26.2, 92.9]}>
                <Popup>
                  <div>
                    <h3 className="font-bold text-red-600">Majuli</h3>
                    <p>🚨 High Risk</p>
                    <p>50 Cases | Turbidity: 70 NTU</p>
                  </div>
                </Popup>
              </Marker>

              <Marker position={[24.8, 92.7]}>
                <Popup>
                  <div>
                    <h3 className="font-bold text-yellow-600">Silchar</h3>
                    <p>⚠️ Warning</p>
                    <p>25 Cases | Turbidity: 40 NTU</p>
                  </div>
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>

        {/* Outbreak Trends Chart */}
        <div className="bg-white rounded-xl shadow p-4">
          <h2 className="text-lg font-semibold mb-4">Outbreak Trends</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={outbreakData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="cases"
                stroke="#2563eb"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Bottom Grid: Interventions + Resources */}
      <div className="grid lg:grid-cols-2 gap-6 mt-6">
        {/* Interventions Table */}
        <div className="bg-white rounded-xl shadow p-4">
          <h2 className="text-lg font-semibold mb-4">Interventions Tracker</h2>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2 border">Village</th>
                <th className="p-2 border">Action</th>
                <th className="p-2 border">Date</th>
              </tr>
            </thead>
            <tbody>
              {interventions.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="p-2 border">{item.village}</td>
                  <td className="p-2 border">{item.action}</td>
                  <td className="p-2 border">{item.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Resource Allocation */}
        <div className="bg-white rounded-xl shadow p-4">
          <h2 className="text-lg font-semibold mb-4">Resource Allocation</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg shadow text-center">
              <p className="text-2xl font-bold text-blue-700">25</p>
              <p className="text-gray-600">Health Workers</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg shadow text-center">
              <p className="text-2xl font-bold text-green-700">200+</p>
              <p className="text-gray-600">Medicine Kits</p>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg shadow text-center">
              <p className="text-2xl font-bold text-yellow-700">120</p>
              <p className="text-gray-600">Water Test Kits</p>
            </div>
            <div className="bg-red-50 p-4 rounded-lg shadow text-center">
              <p className="text-2xl font-bold text-red-700">5</p>
              <p className="text-gray-600">Mobile Camps</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contaminated Water Sources */}
      <div className="bg-white rounded-xl shadow p-4 mt-6">
        <h2 className="text-lg font-semibold mb-4">
          Contaminated Water Sources
        </h2>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 border">Location</th>
              <th className="p-2 border">Issue</th>
              <th className="p-2 border">Status</th>
              <th className="p-2 border">Action Taken</th>
            </tr>
          </thead>
          <tbody>
            {contaminatedSources.map((src) => (
              <tr key={src.id} className="hover:bg-gray-50">
                <td className="p-2 border">{src.location}</td>
                <td className="p-2 border">{src.issue}</td>
                <td
                  className={`p-2 border font-semibold ${
                    src.status === "Unsafe"
                      ? "text-red-600"
                      : src.status === "Warning"
                      ? "text-yellow-600"
                      : "text-green-600"
                  }`}
                >
                  {src.status}
                </td>
                <td className="p-2 border">{src.action}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
