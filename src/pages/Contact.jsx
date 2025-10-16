import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#111] to-[#1A1A1A] text-white flex flex-col items-center justify-center px-6 py-20">
      <h1 className="text-4xl font-bold text-[#FFD700] mb-4 text-center tracking-wide">
        Contact Us
      </h1>
      <div className="w-24 h-1 bg-[#FFD700] mb-8 rounded-full"></div>
      <p className="text-gray-300 text-center mb-10 max-w-lg leading-relaxed">
        Have a question or need help with a custom design? <br />
        <span className="text-[#FFD700] font-medium">We’d love to hear from you!</span>
      </p>

      <div className="space-y-4 text-center bg-[#1c1c1c] px-8 py-6 rounded-2xl shadow-lg border border-[#FFD700]/40">
        <p className="flex items-center justify-center gap-2">
          <span className="text-[#FFD700] text-lg">📧</span> skupydigitalprinting@gmail.com
        </p>
        <p className="flex items-center justify-center gap-2">
          <span className="text-[#FFD700] text-lg">📞</span> 0812-5557-7705
        </p>
        <p className="flex items-center justify-center gap-2">
          <span className="text-[#FFD700] text-lg">📍</span> Jakarta, Indonesia
        </p>
      </div>

      <p className="text-gray-500 text-sm mt-10">
        © {new Date().getFullYear()} Skupy Digital Printing. All rights reserved.
      </p>
    </div>
  );
};

export default Contact;
