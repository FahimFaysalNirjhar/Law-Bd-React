import React, { useEffect, useState } from "react";
import { Link, useLoaderData, useSearchParams } from "react-router";
import { toast } from "react-toastify";
import { getStoredID } from "../../LocalStorage/LocalStorage";
import {
  Bar,
  BarChart,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Booking = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const data = useLoaderData();

  useEffect(() => {
    if (searchParams.get("booked") === "true") {
      toast.success("Appointment booked successfully with the Lawyer!", {
        toastId: "book-success",
        position: "top-right",
        autoClose: 2500,
        theme: "colored",
      });
      setSearchParams({});
    }
  }, [searchParams, setSearchParams]);

  const [lawyerId] = useState(getStoredID());

  const lawyers = data.filter((lawyer) =>
    lawyerId.includes(lawyer.licenseNumber),
  );

  const COLORS = [
    "#8884d8",
    "#82ca9d",
    "#ffc658",
    "#ff7f7f",
    "#a4de6c",
    "#d0ed57",
    "#83a6ed",
  ];

  const margin = { top: 20, right: 30, left: 20, bottom: 5 };

  const getPath = (x, y, width, height) =>
    `M${x},${y + height}
     C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2},${y}
     C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width},${y + height}
     Z`;

  const chartData = lawyers.map((lawyer) => ({
    name: lawyer.name,
    fee: lawyer.consultationFees,
  }));

  return (
    <div className="pt-10 pb-28">
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
        <div className="max-w-10/12 mx-auto bg-white rounded-2xl shadow-sm">
          <div className="overflow-x-auto">
            <div style={{ minWidth: "500px", height: 400 }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData} margin={margin}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip formatter={(value) => `৳${value}`} />
                  <Bar
                    dataKey="fee"
                    shape={(props) => {
                      const { x, y, width, height, index } = props;
                      if (
                        x == null ||
                        y == null ||
                        width == null ||
                        height == null
                      )
                        return null;
                      return (
                        <path
                          d={getPath(
                            Number(x),
                            Number(y),
                            Number(width),
                            Number(height),
                          )}
                          stroke="none"
                          fill={COLORS[index % COLORS.length]}
                        />
                      );
                    }}
                    label={{
                      position: "top",
                      formatter: (value) => `৳${value}`,
                    }}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Booking;
