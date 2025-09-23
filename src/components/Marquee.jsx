import React from "react";

export default function Marquee({ text }) {
  return (
    <div className="bg-[#B3CFE5] py-2 text-[#0A1931]">
      <div className="max-w-7xl mx-auto px-6 marquee">
        <div>{text} • {text} • {text}</div>
      </div>
    </div>
  );
}
