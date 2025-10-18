// ServicesSection.jsx

import webImg from "../../assets/images/Home/service-1.jpg";
import brandImg from "../../assets/images/Home/service-2.jpg";
import marketingImg from "../../assets/images/Home/service-3.jpg";

import React, { useState } from "react";


const services = [
  {
    title: "Web Design & Development",
    description:
      "Custom-built, mobile-first websites that are fast, functional, and visually stunning.",
    bg: "bg-neutral-800",
    text: "text-white",
    iconBg: "bg-yellow-400",
    iconText: "text-black",
    image: webImg,
  },
  {
    title: "Brand Identity",
    description:
      "From logos to brand guidelines, we help you build a brand that tells your story.",
    bg: "bg-white",
    text: "text-black",
    iconBg: "bg-neutral-800",
    iconText: "text-white",
    image: brandImg,
  },
  {
    title: "Marketing Strategies",
    description:
      "We align your business goals with data-driven marketing plans to boost your reach and ROI.",
    bg: "bg-white",
    text: "text-black",
    iconBg: "bg-neutral-800",
    iconText: "text-white",
    image: marketingImg,
  },
];

export default function ServiceSection() {
  const [activeIndex, setActiveIndex] = useState(0); // First box active by default

  return (
    <section className="py-12 px-4">
      {/* Section Header */}
      <div className="mb-6 flex items-center gap-2 justify-center">
        <span className="text-yellow-400 font-bold text-lg">✶ What We Do</span>
      </div>

      <h2 className="text-3xl font-bold text-center mb-2">Our Services</h2>
      <p className="text-center mb-10 text-gray-500">
        Creative solutions that move your brand forward.
      </p>

      {/* Service Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {services.map((item, idx) => {
          const isActive = activeIndex === idx;

          return (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`group rounded-xl overflow-hidden relative flex flex-col justify-between w-full text-left transition-all duration-300 transform ${
                item.bg
              } ${item.text} shadow-sm border-2 ${
                isActive
                  ? "border-yellow-400 scale-[1.02]"
                  : "border-transparent hover:scale-[1.02] hover:border-yellow-400"
              }`}
            >
              {/* Top Content */}
              <div className="p-6 flex flex-col gap-2 flex-grow">
                <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                <hr
                  className={`border-t ${
                    item.bg === "bg-white"
                      ? "border-gray-300"
                      : "border-gray-600"
                  } my-2`}
                />
                <p className="text-sm mb-8">{item.description}</p>
              </div>

              {/* Image Below */}
              <img
                src={item.image}
                alt={item.title}
                className={`w-full h-44 object-cover transition-all duration-300 ${
                  isActive
                    ? "brightness-110 scale-105"
                    : "group-hover:brightness-110 group-hover:scale-105"
                }`}
              />

              {/* Arrow Icon */}
              <div
                className={`absolute top-6 right-6 w-10 h-10 ${item.iconBg} ${item.iconText} rounded-full flex items-center justify-center text-xl shadow-md transition-transform duration-300 ${
                  isActive
                    ? "rotate-45 scale-110"
                    : "group-hover:rotate-45 group-hover:scale-110"
                }`}
              >
                <span>&#8594;</span>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}
