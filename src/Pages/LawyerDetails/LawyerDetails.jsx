import React from "react";
import { useLoaderData, useParams } from "react-router";
import { Link } from "react-router";
import "../../App.css";

const LawyerDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const lawyer = data.find((lawyer) => lawyer.licenseNumber === id);

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

  const { licenseNumber } = lawyer;
  console.log(licenseNumber);

  return (
    <div>
      <h1>hello</h1>
    </div>
  );
};

export default LawyerDetails;
