import React from "react";
import { useNavigate } from "react-router-dom";

export default function ErrorPage({ code, description, image }) {
  const navigate = useNavigate();
  return (
    <div className="h-screen bg-white flex items-center justify-center relative overflow-hidden px-4">
      {/* Background curves */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-biru rounded-full opacity-90 z-0"></div>
      <div className="absolute -bottom-24 -right-20 w-96 h-96 bg-biru rounded-full opacity-90 z-0"></div>

      {/* Main content */}
      <div className="relative z-10 text-center">
        <h1 className="text-4xl font-bold mb-2">{code}</h1>
        <p className="mb-6 text-lg">{description}</p>
        <img
          src={image}
          alt={`${code} Illustration`}
          className="mx-auto mb-6 w-72"
        />
        <button
          onClick={() => navigate("/")}
          className="px-5 py-2 border-2 border-black rounded-full hover:bg-black hover:text-white transition duration-200"
        >
          ⤶ Go Home
        </button>
      </div>
    </div>
  );
}
