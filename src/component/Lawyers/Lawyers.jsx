import React, { useState } from "react";
import "../../App.css";
import { useLoaderData, useNavigation } from "react-router-dom";
import Lawyer from "../Lawyer/Lawyer";

const Lawyers = () => {
  const data = useLoaderData();
  const [showAll, setShowAll] = useState(false);
  const LawyersToShow = showAll ? data : data.slice(0, 6);
  const navigation = useNavigation();

  if (navigation.state === "loading") {
    return (
      <div className="flex justify-center items-center gap-1 min-h-[300px]">
        <span className="loading loading-ball loading-xs text-[#176AE5]"></span>
        <span className="loading loading-ball loading-sm text-[#176AE5]"></span>
        <span className="loading loading-ball loading-md text-[#176AE5]"></span>
        <span className="loading loading-ball loading-lg text-[#176AE5]"></span>
        <span className="loading loading-ball loading-xl text-[#176AE5]"></span>
      </div>
    );
  }

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-16">
      {/* Section Header */}
      <div className="max-w-2xl mx-auto text-center mb-12">
        <h1 className="font-mulish text-3xl sm:text-4xl font-bold text-[#0F0F0F] mb-4">
          Our Best Lawyers
        </h1>
        <p className="text-[#0F0F0F99] text-sm sm:text-base leading-relaxed font-plus-jakarta-sans">
          Our platform connects you with verified, experienced lawyers across
          various specialties — all at your convenience. Whether it's a routine
          consultation or an urgent legal matter, book appointments in minutes
          and receive quality counsel you can trust.
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5 mb-10">
        {LawyersToShow.map((lawyer) => (
          <Lawyer key={lawyer.id} lawyer={lawyer} />
        ))}
      </div>

      {/* Show All Button */}
      {!showAll && data.length > 6 && (
        <div className="flex justify-center">
          <button
            onClick={() => setShowAll(true)}
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-[#0EA106] hover:bg-[#0c8f05] active:scale-95 text-white font-semibold text-sm sm:text-base font-plus-jakarta-sans transition-all duration-200 shadow-md hover:shadow-lg"
          >
            Show All Lawyers
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
      )}
    </section>
  );
};

export default Lawyers;
