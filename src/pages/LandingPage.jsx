import React, { useState } from "react";
import { Link } from "react-router-dom";
import Marquee from "../components/Marquee";
import Carousel from "../components/Carousel";

const heroSlides = [
  "/src/assets/hero-water-monitoring.jpg",
  "/src/assets/community-reporting.jpg",
  "/src/assets/water-lab.jpg",
];

// Card data for carousel
const whyCards = [
  {
    img: "/src/assets/community-reporting.jpg",
    title: "Community Reporting",
    desc: "Simple reporting for ASHA & villagers, offline capable.",
  },
  {
    img: "/src/assets/water-lab.jpg",
    title: "AI Predictions",
    desc: "ML models detect outbreaks using health + water data.",
  },
  {
    img: "/src/assets/hero-water-monitoring.jpg",
    title: "Real-time Monitoring",
    desc: "IoT sensors and manual tests for turbidity, pH & bacteria.",
  },
  {
    img: "/src/assets/iot_sampling.png",
    title: "IoT Water Sampling",
    desc: "Automated water sample collection from wells & rivers using IoT sensors and ground teams.",
  },
  {
    img: "/src/assets/alerts.png", // Add a relevant image for alerts
    title: "Instant Alerts",
    desc: "Get real-time alerts about water safety and disease risks directly to your device.",
  },
  {
    img: "/src/assets/awareness.png", // Add a relevant image for awareness
    title: "Community Awareness",
    desc: "Spreading knowledge and best practices to prevent water-borne diseases in rural areas.",
  },
];

const VISIBLE_CARDS = 3;

export default function LandingPage() {
  const [cardIndex, setCardIndex] = useState(0);

  // Calculate the cards to display
  const visibleCards = [];
  for (let i = 0; i < VISIBLE_CARDS; i++) {
    visibleCards.push(whyCards[(cardIndex + i) % whyCards.length]);
  }

  const handlePrev = () => {
    setCardIndex((prev) =>
      (prev - 1 + whyCards.length) % whyCards.length
    );
  };

  const handleNext = () => {
    setCardIndex((prev) => (prev + 1) % whyCards.length);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative">
        <div className="relative h-[70vh]">
          <img
            src={heroSlides[0]}
            alt="hero"
            className="w-full h-full object-cover brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1931]/60 to-[#4A7FA7]/30"></div>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-6 max-w-4xl">
              <div className="inline-block px-4 py-2 bg-white/10 rounded-full mb-6 text-white">
                AI-powered Health Monitoring
              </div>
              <h1 className="text-white text-4xl md:text-6xl font-extrabold leading-tight mb-4">
                Smart Water-Borne{" "}
                <span className="text-[#B3CFE5]">Disease Monitoring</span>
              </h1>
              <p className="text-white max-w-2xl mx-auto mb-6 opacity-90">
                Protecting North East India with AI-powered outbreak prediction,
                real-time water monitoring, and community-driven reporting.
              </p>
              <div className="flex gap-4 justify-center">
                <Link
                  className="px-6 py-3 rounded-xl bg-[#4A7FA7] text-white font-semibold"
                  to="/report"
                >
                  Report Symptoms
                </Link>
                <Link
                  className="px-6 py-3 rounded-xl bg-white/20 text-white border border-white/30"
                  to="/alerts"
                >
                  View Alerts
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alert Marquee placed here (between Hero and Why Choose Us) */}
      <Marquee text="Alert: High risk detected in Sadiya — Boil water before drinking" />

      {/* Why Choose Us Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <center>
            <h2 className="text-3xl font-bold text-[#0A1931] mb-6">
              Why choose us?
            </h2>
          </center>
          {/* Carousel with 3 cards and arrows */}
          <div className="flex items-center justify-center gap-4 relative">
            {/* Left Arrow */}
            <button
              onClick={handlePrev}
              className="bg-[#4A7FA7] hover:bg-[#356086] text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg"
              aria-label="Previous card"
            >
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M16 19l-8-7 8-7" />
              </svg>
            </button>
            {/* Cards */}
            <div className="flex gap-8">
              {visibleCards.map((card, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-2xl card-hover w-[320px] flex-shrink-0 transition-all duration-300"
                >
                  <img
                    src={card.img}
                    alt=""
                    className="w-full h-40 object-cover rounded mb-4"
                  />
                  <h3 className="font-semibold text-[#1A3D63] mb-2">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 text-base leading-relaxed break-words">
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>
            {/* Right Arrow */}
            <button
              onClick={handleNext}
              className="bg-[#4A7FA7] hover:bg-[#356086] text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg"
              aria-label="Next card"
            >
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M8 5l8 7-8 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-6 bg-[#B3CFE5]/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-2xl text-center">
            <div className="text-3xl font-bold text-[#1A3D63]">95%</div>
            <div className="text-gray-700">Prediction accuracy</div>
          </div>
          <div className="p-6 bg-white rounded-2xl text-center">
            <div className="text-3xl font-bold text-[#1A3D63]">10K+</div>
            <div className="text-gray-700">Communities protected</div>
          </div>
          <div className="p-6 bg-white rounded-2xl text-center">
            <div className="text-3xl font-bold text-[#1A3D63]">24/7</div>
            <div className="text-gray-700">Real-time monitoring</div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Join the movement</h3>
          <p className="text-gray-700 mb-6">
            Help protect rural communities from water-borne illnesses by
            reporting issues and following advisories.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              to="/signup"
              className="px-6 py-3 bg-[#4A7FA7] text-white rounded-lg"
            >
              Get Started
            </Link>
            <Link
              to="/alerts"
              className="px-6 py-3 bg-white/20 text-[#0A1931] rounded-lg"
            >
              See live alerts
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
