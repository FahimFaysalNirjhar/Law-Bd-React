import React from "react";
import "../../App.css";
import { LuCalendarHeart } from "react-icons/lu";

const Post = ({ post }) => {
  const { question, answer, date } = post;
  return (
    <div className="p-2">
      <div className="max-w-2xl mx-auto rounded-2xl bg-white border border-gray-100 shadow-sm p-6 md:p-8 mb-4">
        {/* Question */}
        <h1 className="font-plus-jakarta-sans text-[#141414] text-lg md:text-xl font-bold border-b-2 border-dashed border-[#0F0F0F1A] pb-4 mb-4">
          {question}
        </h1>

        {/* Answer */}
        <div className="border-b-2 border-dashed border-[#0F0F0F1A] pb-4 mb-4">
          <span className="inline-block text-xs font-semibold text-[#176AE5] bg-[#176AE51A] border border-[#176AE533] px-3 py-1 rounded-full mb-3">
            Answer
          </span>
          <p className="font-plus-jakarta-sans text-[#0F0F0F99] text-base leading-relaxed">
            {answer}
          </p>
        </div>

        {/* Date */}
        <div className="flex items-center gap-2 text-[#0F0F0F99] font-plus-jakarta-sans text-sm font-medium">
          <LuCalendarHeart size={16} className="text-[#176AE5] shrink-0" />
          <p>Added at {date}</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
