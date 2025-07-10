import React from "react";
import { useNavigate } from "react-router-dom";

export default function ErrorPage({ code, description, image }) {
  const navigate = useNavigate();
  return (
    <div className="h-screen bg-white flex items-center justify-center relative overflow-hidden px-4">
      {/* Background curves */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-red-200 rounded-full opacity-70 z-0 blur-2xl"></div>
      <div className="absolute -bottom-24 -right-20 w-96 h-96 bg-red-300 rounded-full opacity-70 z-0 blur-2xl"></div>

      {/* Main content */}
      <div className="relative z-10 text-center">
        <h1 className="text-5xl font-bold text-red-700 mb-2">{code}</h1>
        <p className="mb-6 text-lg text-red-500">{description}</p>
        <img
          src={image}
          alt={`${code} Illustration`}
          className="mx-auto mb-6 w-72"
        />
        <button
          onClick={() => navigate("/")}
          className="px-6 py-2 border-2 border-red-600 text-red-600 rounded-full hover:bg-red-600 hover:text-white transition duration-200"
        >
          ⤶ Kembali ke Beranda
        </button>
      </div>
    </div>
  );
}
