import React, { useEffect, useState } from "react";
import { Link, useLoaderData, useSearchParams } from "react-router";
import { toast } from "react-toastify";
import { getStoredID } from "../../LocalStorage/LocalStorage";

const Booking = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const data = useLoaderData();

  useEffect(() => {
    if (searchParams.get("booked") === "true") {
      toast.success("Appointment booked successfully with the Lawyer!", {
        toastId: "book-success", // ✅ prevents duplicate
        position: "top-right",
        autoClose: 2500,
        theme: "colored",
      });

      setSearchParams({});
    }
  }, [searchParams, setSearchParams]);

  const [lawyerId, setLawyerId] = useState(getStoredID());

  const lawyers = data.filter((lawyer) =>
    lawyerId.includes(lawyer.licenseNumber),
  );

  return (
    <div className=" pt-10 pb-28">
      {lawyers.length === 0 ? (
        <div className="flex p-2 items-center justify-center min-h-screen">
          <div className="bg-[#EFEFEF] rounded-2xl shadow p-10 flex flex-col items-center gap-3 max-w-md w-full text-center">
            <div className="text-6xl">📋</div>
            <h1 className="text-2xl font-bold text-gray-800">
              No Appointments Booked!
            </h1>
            <p className="text-gray-500">
              You have not booked any appointments yet.
            </p>
            <Link to="/" className="mt-4 w-full flex justify-center">
              <button className="btn btn-wide text-[#176AE5] rounded-full border border-[#176AE5] hover:bg-[#176AE5] hover:text-white transition-colors">
                Book an Appointment
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Booking;
