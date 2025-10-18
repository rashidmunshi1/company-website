import client1 from "../../assets/images/Home/client-1.png";
import client2 from "../../assets/images/Home/client-2.png";
import client3 from "../../assets/images/Home/client-3.png";
import { useState } from "react";

const testimonials = [
  {
    name: "Darlene Robertson",
    text: "Lorem Ipsum is simply dummy text ...",
    img: client1,
  },
  {
    name: "Theresa Webb",
    text: "Lorem Ipsum is simply dummy text ...",
    img: client2,
  },
  {
    name: "Cameron Williamson",
    text: "Lorem Ipsum is simply dummy text ...",
    img: client3,
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(1);

  const prev = () =>
    setActive((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  const next = () =>
    setActive((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));

  return (
    <div className="pt-4 pb-12 bg-white">
      <div className="text-center">
        <p className="font-semibold text-yellow-500">Client Testimonials</p>
        <h2 className="text-3xl font-bold mt-2 mb-10">What Our Clients Say</h2>
      </div>

      {/* Cards */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-6">
        {testimonials.map((testimonial, i) => (
          <div
            key={testimonial.name}
            className={`
              relative bg-white rounded-xl px-6 pt-8 pb-6 w-80 shadow-md border 
              min-h-[280px] flex flex-col items-center 
              transition-transform duration-500
              ${i < active ? "-rotate-6" : ""}
              ${i > active ? "rotate-6" : ""}
              ${i === active ? "border-yellow-400 border-2" : "border-gray-200"}
              ${i !== active ? "opacity-75 scale-95" : ""}
            `}
          >
            {/* Image inside card */}
            <div className="flex justify-center mb-4">
              <img
                src={testimonial.img}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full border-4 border-white shadow-md object-cover"
              />
            </div>

            <h4 className="font-bold text-xl mb-2 text-center">
              {testimonial.name}
            </h4>

            <div className="flex mb-3 justify-center">
              {Array(5)
                .fill(0)
                .map((_, idx) => (
                  <span key={idx} className="text-yellow-400 text-lg">
                    ★
                  </span>
                ))}
            </div>

            <p className="text-sm text-gray-500 text-center">
              {testimonial.text}
            </p>
          </div>
        ))}
      </div>

      {/* Dots + Buttons */}
      <div className="flex flex-col items-center mt-10">
        <div className="flex gap-2 mb-2">
          {testimonials.map((_, i) => (
            <span
              key={i}
              className={`w-3 h-3 rounded-full inline-block ${
                i === active ? "bg-yellow-400" : "bg-gray-200"
              }`}
            />
          ))}
        </div>

        <div className="flex gap-4 mt-2">
          <button
            className="w-10 h-10 rounded-full border bg-white text-xl flex items-center justify-center hover:bg-yellow-50"
            onClick={prev}
            aria-label="Previous"
          >
            ←
          </button>
          <button
            className="w-10 h-10 rounded-full border bg-gray-800 text-white text-xl flex items-center justify-center hover:bg-gray-700"
            onClick={next}
            aria-label="Next"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}
