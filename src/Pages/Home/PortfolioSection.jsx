import React, { useState } from "react";

const tabs = [
  { label: "Web Design & Development", value: "web" },
  { label: "Brand Identity", value: "brand" },
  { label: "Marketing Strategies", value: "marketing" },
];

export default function PortfolioSection() {
  const [activeTab, setActiveTab] = useState("web");

  return (
    <section className="w-full min-h-screen bg-white flex flex-col px-4 md:px-16 py-4">
      {/* Top Bar */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <div className="flex items-center space-x-2">
            <span className="text-yellow-400 text-xl">*</span>
            <span className="text-yellow-600 font-semibold text-sm">Our Work Speaks</span>
          </div>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">Portfolio</h2>
        </div>
        <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 px-6 rounded-full transition-all text-base">
          View All Work
        </button>
      </div>

      {/* Tabs */}
      <div className="flex gap-8 border-b border-transparent mb-4 mt-3">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setActiveTab(tab.value)}
            className={`relative pb-1 px-2 text-base md:text-lg font-semibold focus:outline-none transition-colors ${
              activeTab === tab.value
                ? "text-neutral-900"
                : "text-gray-400"
            }`}
          >
            {tab.label}
            {activeTab === tab.value && (
              <span className="absolute left-0 right-0 -bottom-1 h-[3px] bg-yellow-400 rounded"></span>
            )}
          </button>
        ))}
      </div>

      <div className="w-full md:max-w-3xl h-64 md:h-80 border-2 border-yellow-400 rounded-xl mx-auto mt-4 flex justify-center items-center">
 
      </div>
    </section>
  );
}
