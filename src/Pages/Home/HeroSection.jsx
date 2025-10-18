import React, { useState } from "react";
import heroImage from "../../assets/images/Home/hero-image.jpg";

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState("web");

  const tabs = [
    { label: "Web Design & Development", value: "web" },
    { label: "Brand Identity", value: "brand" },
    { label: "Marketing Strategies", value: "marketing" },
  ];

  return (
    <section className="bg-[#121212] text-white min-h-screen  mt-10 flex flex-col justify-between overflow-hidden relative">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row justify-between items-start gap-10">
        {/* Left Side */}
        <div className="flex-1">
          <p className="text-sm text-gray-300 mb-3">—— Digital Agency</p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Empowering Your Digital <br />
            <span className="text-[#FFD54A]">Presence with Unmatched Energy</span>
          </h1>

          {/* Tabs */}
          <div className="flex flex-wrap gap-4 mt-10">
            {tabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActiveTab(tab.value)}
                className={`px-6 py-3 rounded-full border transition-all duration-300 ${
                  activeTab === tab.value
                    ? "border-[#FFD54A] text-[#FFD54A] bg-[#1C1C1C]"
                    : "border-transparent bg-[#1A1A1A] hover:border-[#FFD54A]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
            <img
              src={heroImage}
              alt="Creative Agency Illustration"
              className="w-full mt-4 md:w-96 rounded-xl shadow-lg object-contain"
            />
        </div>

        {/* Right Side */}
        <div className="flex-1 flex flex-col items-start md:items-end">
          <p className="max-w-sm text-gray-300 mb-8 text-sm leading-relaxed">
            We combine creativity with cutting-edge technology to amplify your brand's reach. 
            Let your online presence shine with powerful, result-driven strategies.
          </p>

          <div className="bg-[#2E3A59] rounded-2xl p-8 w-full md:w-80 space-y-6">
            <div>
              <p className="text-3xl font-bold text-white">750+</p>
              <p className="text-sm text-gray-300">Project Complete</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">20+</p>
              <p className="text-sm text-gray-300">Year Of Experiences</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">800+</p>
              <p className="text-sm text-gray-300">Happy Customers</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Logos */}
      <div className="bg-[#FFD54A] py-4 flex justify-center flex-wrap gap-12">
        <p className="text-black font-semibold tracking-widest">LOGO</p>
        <p className="text-black font-semibold tracking-widest">IPSUM</p>
        <p className="text-black font-semibold tracking-widest">LOGO HERE</p>
        <p className="text-black font-semibold tracking-widest">LOGO</p>
        <p className="text-black font-semibold tracking-widest">IPSUM</p>
      </div>
    </section>
  );
}
