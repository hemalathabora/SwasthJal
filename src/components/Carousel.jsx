import React, { useEffect, useState } from "react";

export default function Carousel({ items = [] }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI(n => (n + 1) % items.length), 4000);
    return () => clearInterval(t);
  }, [items.length]);

  if (!items.length) return null;
  return (
    <div className="rounded-2xl overflow-hidden">
      {items.map((it, idx) => (
        <div key={idx} className={`carousel-item ${idx === i ? 'show' : ''}`}>
          <img src={it} alt={`slide-${idx}`} className="w-full h-64 object-cover" />
        </div>
      ))}
    </div>
  );
}
