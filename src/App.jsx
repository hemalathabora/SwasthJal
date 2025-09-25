import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ReportSymptoms from "./pages/ReportSymptoms";
import Alerts from "./pages/Alerts";
import Awareness from "./pages/Awareness";
import WaterQuality from "./pages/WaterQuality";
import AshaDashboard from "./pages/AshaDashboard";
import HotspotDetails from "./pages/HotspotDetails";
import HealthDashboard from "./pages/HealthDashboard";
import CitizenDashboard from "./pages/CitizenDashboard";
export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F6FAFD] text-[#0A1931]">
      <Navbar />
      <main className="flex-auto">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/report" element={<ReportSymptoms />} />
          <Route path="/alerts" element={<Alerts />} />
          <Route path="/awareness" element={<Awareness />} />
          <Route path="/water-quality" element={<WaterQuality />} />
          <Route path="/citizen-dashboard" element={<CitizenDashboard />} />
        <Route path="/asha-dashboard" element={<AshaDashboard />} />
        <Route path="/health-dashboard" element={<HealthDashboard />} />
   <Route path="/hotspot/:id" element={<HotspotDetails />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
