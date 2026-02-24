import React from "react";
import CountUp from "react-countup";

const stats = [
  {
    icon: "success-lawyer.png",
    alt: "lawyer",
    end: 199,
    label: "Total Lawyers",
  },
  {
    icon: "success-review.png",
    alt: "reviews",
    end: 467,
    label: "Total Reviews",
  },
  {
    icon: "success-client.png",
    alt: "client",
    end: 1900,
    label: "Cases Initiated",
  },
  { icon: "success-staffs.png", alt: "staffs", end: 300, label: "Total Staff" },
];

const Countdown = () => {
  return (
    <div>
      <h1 className="font-plus-jakarta-sans text-4xl font-bold text-center text-[#0F0F0F]">
        We Provide Best Medical Services
      </h1>
      <p className="text-center font-plus-jakarta-sans my-6 p-3">
        Our platform connects you with verified, experienced doctors across
        various specialties — all at your convenience.{" "}
      </p>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-5xl mx-auto px-4 pb-20">
        {stats.map(({ icon, alt, end, label }) => (
          <div
            key={label}
            className="flex flex-col gap-3 items-start p-5 rounded-2xl border border-[#0F0F0F26] bg-[#0F0F0F0D]"
          >
            <figure className="w-12 h-12 flex-shrink-0">
              <img
                src={icon}
                alt={alt}
                className="w-full h-full object-contain"
              />
            </figure>
            <div>
              <h2 className="font-plus-jakarta-sans font-extrabold text-3xl sm:text-4xl text-[#0F0F0F]">
                <CountUp
                  end={end}
                  duration={5}
                  enableScrollSpy
                  scrollSpyOnce
                  suffix="+"
                />
              </h2>
              <p className="text-[#0F0F0F99] font-plus-jakarta-sans text-sm sm:text-base font-semibold mt-1">
                {label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Countdown;
