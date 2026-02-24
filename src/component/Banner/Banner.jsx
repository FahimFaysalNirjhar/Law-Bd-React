import React from "react";
import "../../App.css";

const Banner = () => {
  return (
    <div
      className="rounded-3xl bg-no-repeat flex flex-col justify-center items-center"
      style={{
        background: `linear-gradient(180deg, rgba(15,15,15,0) -27.73%, rgba(15,15,15,0.8) 100%), url('/banner-img-1.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100svh",
        width: "91.666667%",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "2rem",
        marginBottom: "2rem",
        padding: "2rem 1.5rem",
      }}
    >
      <h1
        className="text-white font-mulish font-bold text-center w-full"
        style={{
          fontSize: "clamp(1.75rem, 5vw, 3rem)",
          maxWidth: "56rem",
          lineHeight: 1.2,
        }}
      >
        It avoids subjective claims or exaggeration that might raise red flags
        legally
      </h1>
      <p
        className="text-white font-mulish text-center w-full"
        style={{
          fontSize: "clamp(0.9rem, 2vw, 1.125rem)",
          maxWidth: "56rem",
          marginTop: "1.25rem",
          lineHeight: 1.7,
          opacity: 0.9,
        }}
      >
        Our platform connects you with verified, experienced doctors across
        various specialties — all at your convenience. Whether it's a routine
        checkup or urgent consultation, book appointments in minutes and receive
        quality care you can trust.
      </p>
    </div>
  );
};

export default Banner;
