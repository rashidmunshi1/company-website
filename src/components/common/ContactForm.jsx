import React from "react";

export default function ContactForm() {
  return (
    <div className="flex flex-col items-center py-12 bg-white min-h-screen">
      <div className="mb-6 text-center">
        <h4 className="text-yellow-500 font-bold text-lg">Contact Us</h4>
        <h2 className="text-3xl font-bold mt-2">Get in Touch</h2>
      </div>
      <form className="w-full max-w-3xl mt-4">
        <div className="flex flex-row gap-8 mb-6">
          <div className="flex-1">
            <label className="block text-lg mb-2">Name</label>
            <input
              type="text"
              placeholder=""
              className="w-full border-b-2 border-gray-300 focus:border-yellow-400 focus:outline-none py-3 text-black bg-transparent"
            />
          </div>
          <div className="flex-1">
            <label className="block text-lg mb-2">Last Name</label>
            <input
              type="text"
              placeholder=""
              className="w-full border-b-2 border-gray-300 focus:border-yellow-400 focus:outline-none py-3 text-black bg-transparent"
            />
          </div>
        </div>
        <div className="flex flex-row gap-8 mb-6">
          <div className="flex-1">
            <label className="block text-lg mb-2">What Are Your Interest</label>
            <select
              className="w-full border-b-2 border-gray-300 focus:border-yellow-400 focus:outline-none py-3 text-black bg-transparent"
            >
              <option value="">Select Interest</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className="flex-1">
            <label className="block text-lg mb-2">Project Budget</label>
            <select
              className="w-full border-b-2 border-gray-300 focus:border-yellow-400 focus:outline-none py-3 text-black bg-transparent"
            >
              <option value="">Select Budget</option>
              {/* Add more options as needed */}
            </select>
          </div>
        </div>
        <div className="mb-6">
          <label className="block text-lg mb-2">Message</label>
          <textarea
            rows={2}
            className="w-full border-b-2 border-gray-300 focus:border-yellow-400 focus:outline-none py-3 text-black bg-transparent resize-none"
          />
        </div>
        <button
          type="submit"
          className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-8 rounded-full transition-all duration-300"
        >
          Send
        </button>
      </form>
    </div>
  );
}
