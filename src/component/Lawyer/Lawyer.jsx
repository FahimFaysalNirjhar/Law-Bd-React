import React from "react";
import "../../App.css";
import { Link } from "react-router";

const Lawyer = ({ lawyer }) => {
  const { img, experience, name, expertiseArea, licenseNumber } = lawyer;

  return (
    <div className="flex flex-col sm:flex-row gap-5 bg-white rounded-2xl shadow-[0_2px_16px_rgba(0,0,0,0.07)] p-5 w-full transition-shadow duration-300 hover:shadow-[0_4px_24px_rgba(0,0,0,0.11)]">
      {/* Image */}
      <figure className="flex-shrink-0 mx-auto sm:mx-0 h-[180px] w-[180px] md:h-[200px] md:w-[200px] overflow-hidden rounded-xl">
        <img
          className="w-full h-full object-cover object-top"
          src={img}
          alt={name}
        />
      </figure>

      {/* Content */}
      <div className="flex flex-col justify-between flex-1 min-w-0 text-center sm:text-left">
        {/* Top section */}
        <div>
          {/* Badges */}
          <div className="flex flex-wrap justify-center sm:justify-start gap-2 mb-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-[#09982F] border border-[#09982F33] bg-[#09982F0D] whitespace-nowrap leading-none">
              <span className="w-1.5 h-1.5 rounded-full bg-[#09982F] animate-pulse flex-shrink-0" />
              Available
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold text-[#176AE5] border border-[#176AE533] bg-[#176AE50D] whitespace-nowrap leading-none">
              {experience} experience
            </span>
          </div>

          {/* Name */}
          <h2 className="text-[#0F0F0F] text-xl md:text-2xl font-bold leading-tight mb-1 truncate">
            {name}
          </h2>

          {/* Expertise */}
          <p className="text-[#0F0F0F99] text-sm md:text-base font-medium mb-2 truncate">
            {expertiseArea}
          </p>

          {/* License */}
          <div className="inline-flex items-center justify-center sm:justify-start gap-1.5 text-[#0F0F0FB2] text-sm font-semibold">
            <img className="w-4 h-4 flex-shrink-0" src="r_logo.svg" alt="Reg" />
            <span>
              Reg No: <span className="text-[#0F0F0F]">{licenseNumber}</span>
            </span>
          </div>
        </div>

        {/* Button */}
        <div className="mt-5">
          <Link to={`/lawyerdetails/${licenseNumber}`}>
            <button className="w-full sm:w-auto px-8 py-2.5 rounded-full text-sm font-semibold text-[#176AE5] border border-[#176AE5] bg-transparent hover:bg-[#176AE5] hover:text-white transition-colors duration-200">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Lawyer;
