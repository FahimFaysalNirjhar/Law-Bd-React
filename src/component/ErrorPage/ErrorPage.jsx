import React from "react";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="min-h-screen bg-[#F9FAFB] flex items-center justify-center p-4">
      <div className="text-center max-w-md w-full">
        {/* 404 */}
        <h1 className="font-plus-jakarta-sans text-[120px] md:text-[160px] font-bold text-[#176AE5] leading-none">
          404
        </h1>

        {/* Message */}
        <h2 className="font-plus-jakarta-sans text-2xl md:text-3xl font-bold text-[#141414] mt-2 mb-3">
          Page Not Found
        </h2>
        <p className="font-plus-jakarta-sans text-[#0F0F0F99] text-base mb-8">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>

        {/* Button */}
        <Link to="/">
          <button className="btn btn-wide text-[#176AE5] rounded-full border border-[#176AE5] hover:bg-[#176AE5] hover:text-white transition-colors duration-200">
            Go Back Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
