import React, { useEffect } from "react";
import { useSearchParams } from "react-router";
import { toast } from "react-toastify";

const Booking = () => {
  const [searchParams, setSearchParams] = useSearchParams();

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

  return <div></div>;
};

export default Booking;
