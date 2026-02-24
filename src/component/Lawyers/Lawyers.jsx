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
      <div className="flex justify-center items-center mt-28">
        <span className="loading loading-ball loading-xs"></span>
        <span className="loading loading-ball loading-sm"></span>
        <span className="loading loading-ball loading-md"></span>
        <span className="loading loading-ball loading-lg"></span>
        <span className="loading loading-ball loading-xl"></span>
      </div>
    );
  }

  return (
    <div className="p-2 pt-16 pb-16 md:pt-0">
      <h1 className="font-mulish text-4xl font-bold text-center text-[#0F0F0F]">
        Our Best Lawyers
      </h1>
      <p className="max-w-4xl mx-auto text-center font-plus-jakarta-sans mt-8">
        Our platform connects you with verified, experienced Lawyers across
        various specialties — all at your convenience. Whether it's a routine
        checkup or urgent consultation, book appointments in minutes and receive
        quality care you can trust.
      </p>
      <div className="max-w-10/12 mx-auto mt-6 mb-12 grid grid-cols-1 lg:grid-cols-2  gap-6">
        {LawyersToShow.map((lawyer) => (
          <Lawyer key={lawyer.id} lawyer={lawyer}></Lawyer>
        ))}
      </div>
      {!showAll && data.length > 6 && (
        <div className="text-center">
          <button
            onClick={() => setShowAll(true)}
            className="btn rounded-full bg-[#0EA106]  text-white font-plus-jakarta-sans md:text-xl md:py-6 md:px-8"
          >
            Show All Lawyer
          </button>
        </div>
      )}
    </div>
  );
};

export default Lawyers;
