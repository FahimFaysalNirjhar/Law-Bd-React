import React from "react";
import { useLoaderData, useNavigate, useParams } from "react-router";
import { Link } from "react-router";
import "../../App.css";
import { CgInfo } from "react-icons/cg";
import { addToLocalStorage } from "../../LocalStorage/LocalStorage";

const LawyerDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const lawyer = data.find((lawyer) => lawyer.licenseNumber === id);

  const today = new Date().toLocaleDateString("en-US", { weekday: "long" });

  if (!lawyer) {
    return (
      <div className="bg-[#EFEFEF] min-h-screen flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow p-10 flex flex-col items-center gap-3 max-w-md w-full">
          <div className="text-6xl">🔍</div>
          <h1 className="text-2xl font-bold text-gray-800">No Doctor Found!</h1>
          <p className="text-gray-500 text-center">
            No Lawyer found with this license Number:
          </p>
          <p className="flex items-center gap-2 text-[#0F0F0FB2] font-semibold text-lg">
            <img className="w-[20px]" src="r_logo.svg" alt="" />
            {id}
          </p>
          <Link to="/" className="mt-4 w-full flex justify-center">
            <button className="btn btn-wide text-[#176AE5] rounded-full border border-[#176AE5] hover:bg-[#176AE5] hover:text-white transition-colors">
              View All Lawyers
            </button>
          </Link>
        </div>
      </div>
    );
  }

  const {
    licenseNumber,
    name,
    img,
    expertiseArea,
    availableDays,
    consultationFees,
    experience,
  } = lawyer;

  const availableToday = availableDays.includes(today);
  console.log(availableToday);

  const navigate = useNavigate();

  const handleBookAppoinment = (id) => {
    const success = addToLocalStorage(id);
    if (success) {
      navigate("/booking?booked=true");
    }
  };

  return (
    <div className="px-4 sm:px-6">
      {/* Header Banner */}
      <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#f0f4ff] to-[#e8edf7] rounded-2xl px-6 md:px-12 py-10 shadow-md border border-[#d6e0f5] mt-8 mb-10">
        <div className="flex flex-col items-center gap-3">
          <div className="w-12 h-1 bg-[#176AE5] rounded-full mb-1" />
          <h1 className="font-plus-jakarta-sans text-[#141414] text-2xl sm:text-3xl md:text-4xl font-bold text-center leading-tight">
            Lawyer's Profile Details
          </h1>
          <p className="font-plus-jakarta-sans text-[#141414B3] text-sm sm:text-base text-center max-w-2xl leading-relaxed mt-2">
            Learn more about the lawyer's qualifications, professional
            experience, and areas of legal expertise. This profile provides
            essential information to help you understand the lawyer's
            background, practice specialties, and commitment to client advocacy
            — ensuring you can make confident and informed legal decisions.
          </p>
        </div>
      </div>

      {/* Profile Card */}
      <div className="max-w-4xl mx-auto bg-white rounded-2xl px-6 md:px-10 py-8 shadow-md border border-gray-100 flex flex-col md:flex-row gap-8 mb-12">
        {/* Image */}
        <div className="w-full md:w-[260px] flex-shrink-0 rounded-2xl overflow-hidden self-start shadow-sm">
          <img
            src={img}
            alt={name}
            className="w-full h-[280px] md:h-full object-cover object-top"
          />
        </div>

        {/* Info */}
        <div className="flex-1 flex flex-col gap-4">
          {/* Experience Badge */}
          <div>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold text-[#176AE5] border border-[#176AE533] bg-[#176AE50D] whitespace-nowrap">
              {experience} experience
            </span>
          </div>

          {/* Name & Expertise */}
          <div>
            <h1 className="font-plus-jakarta-sans font-bold text-2xl sm:text-3xl text-[#141414]">
              {name}
            </h1>
            <p className="text-[#0F0F0F99] font-plus-jakarta-sans text-base sm:text-lg font-medium mt-1">
              {expertiseArea}
            </p>
          </div>

          {/* Reg No */}
          <div className="flex items-center gap-2 border-b-2 border-dashed border-[#0F0F0F22] pb-4">
            <span className="text-[#0F0F0FB2] font-semibold text-base">
              Reg No:
            </span>
            <img className="w-5" src="/r_logo.svg" alt="" />
            <span className="text-[#0F0F0FB2] font-semibold text-base">
              {licenseNumber}
            </span>
          </div>

          {/* Availability */}
          <div>
            <span className="font-plus-jakarta-sans text-[#0F0F0F] font-bold block mb-2">
              Availability
            </span>
            <div className="flex flex-wrap gap-2">
              {availableDays.map((day, idx) => (
                <span
                  key={idx}
                  className="text-[#FFA000] font-plus-jakarta-sans text-sm font-medium rounded-full border border-[#FFA00033] bg-[#FFA0001A] py-1.5 px-4"
                >
                  {day}
                </span>
              ))}
            </div>
          </div>

          {/* Consultation Fee */}
          <div className="mt-auto pt-4 border-t border-gray-100">
            <p className="font-plus-jakarta-sans text-[#0F0F0F] font-bold text-base sm:text-lg">
              Consultation Fee:{" "}
              <span className="text-[#0EA106] text-xl font-bold">
                {consultationFees} TK
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-2xl mx-auto rounded-2xl px-6 md:px-10 py-8 shadow-md mb-10 border border-gray-100">
        {/* Title */}
        <h1 className="font-plus-jakarta-sans text-[#141414] text-2xl md:text-3xl font-bold text-center border-b-2 border-dashed border-[#0F0F0F33] pb-4">
          Book an Appointment
        </h1>

        {/* Availability Row */}
        <div className="flex flex-wrap justify-between items-center gap-3 py-4 border-b-2 border-dashed border-[#0F0F0F33]">
          <h2 className="font-plus-jakarta-sans text-[#0F0F0F] text-lg font-bold">
            Availability
          </h2>
          {availableToday ? (
            <p className="font-plus-jakarta-sans text-sm font-medium text-[#09982F] rounded-full border border-[#09982F33] bg-[#09982F1A] px-4 py-1 flex gap-1 items-center justify-center">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>{" "}
              Lawyer Available Today
            </p>
          ) : (
            <p className="font-plus-jakarta-sans text-sm font-medium text-[#FF4D6D] rounded-full border border-[#FF4D6D33] bg-[#FF4D6D1A] px-4 py-1 flex justify-center items-center gap-1">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
              Lawyer Is Not Available Today
            </p>
          )}
        </div>

        {/* Body — only shown when available */}
        {availableToday && (
          <div className="mt-4">
            {/* Notice Banner */}
            <div className="flex items-start gap-2 rounded-xl bg-[#FFA0001A] text-[#FFA000] px-4 py-2 text-sm font-medium leading-snug">
              <CgInfo className="text-lg shrink-0 mt-0.5" />
              <span>
                Due to high client demand, we are currently accepting
                consultation appointments for today only. We appreciate your
                understanding and cooperation.
              </span>
            </div>

            {/* Book Button */}
            <div className="text-center mt-6">
              <button
                onClick={() => handleBookAppoinment(licenseNumber)}
                className="btn btn-wide text-[#176AE5] rounded-full border border-[#176AE5] hover:bg-[#176AE5] hover:text-white transition-colors duration-200"
              >
                Book Appointment Now
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LawyerDetails;
