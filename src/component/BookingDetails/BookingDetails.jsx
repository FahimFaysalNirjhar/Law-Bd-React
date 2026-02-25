import React from "react";
import { toast } from "react-toastify";

const BookingDetails = ({ lawyer, handleRemoveLawyer }) => {
  const { name, expertiseArea, licenseNumber, consultationFees } = lawyer;

  const handleCancel = () => {
    toast.info("Appointment removed successfully!", {
      position: "top-right",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      theme: "colored",
    });
    setTimeout(() => {
      handleRemoveLawyer(licenseNumber);
    }, 2600);
  };

  return (
    <div>
      <div className="max-w-2xl mx-auto bg-white shadow-sm border border-gray-100 p-6 md:p-8 rounded-2xl mb-4">
        <div className="flex flex-wrap justify-between items-start gap-2 border-b border-dashed border-[#0F0F0F1A] pb-4 mb-4">
          <h1 className="font-plus-jakarta-sans text-[#0F0F0F] text-lg font-bold">
            {name}
          </h1>
          <span className="text-sm font-medium font-plus-jakarta-sans text-[#176AE5] bg-[#176AE51A] border border-[#176AE533] px-3 py-1 rounded-full">
            {expertiseArea}
          </span>
        </div>

        <div className="flex items-center justify-between flex-wrap gap-2">
          <p className="font-plus-jakarta-sans text-[#0F0F0F] font-semibold text-base">
            Consultation Fee:{" "}
            <span className="text-[#09982F]">৳{consultationFees}</span>
          </p>
          <button
            onClick={handleCancel}
            className="btn text-[#FF4D6D] rounded-full border border-[#FF4D6D33] bg-[#FF4D6D1A] hover:bg-[#FF4D6D] hover:text-white transition-colors duration-200 px-6"
          >
            Cancel Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingDetails;
