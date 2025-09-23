import React from "react";
import { alerts } from "../services/mockData";
import AlertCard from "../components/AlertCard";

export default function Alerts(){
  return (
    <div className="py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <center><h2 className="text-2xl font-bold mb-6">Active Alerts</h2></center>
        <div className="grid gap-4">
          {alerts.map(a => <AlertCard key={a.id} a={a} />)}
        </div>
      </div>
    </div>
  );
}
