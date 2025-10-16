import React from "react";
import ErrorPage from "../components/ErrorPage";

export default function Error400() {
  return (
    <div className="min-h-screen bg-[#111] flex flex-col items-center justify-center text-white px-6">
      <ErrorPage
        code="400"
        description="Oops! Ada yang tidak beres dengan permintaanmu. Silakan periksa kembali dan coba lagi."
        image="/400.png"
      />

      <div className="mt-10 text-center">
        <h2 className="text-4xl font-bold text-[#FFD700] mb-3 drop-shadow-[0_0_8px_rgba(255,215,0,0.6)]">
          Halaman Tidak Dapat Ditemukan
        </h2>
        <p className="text-gray-400 mb-8 max-w-lg mx-auto">
          Tenang, kamu bisa kembali ke beranda dan melanjutkan perjalanan
          bersama Skupy.
        </p>

        <a
          href="/"
          className="bg-[#FFD700] text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 transition-all duration-300"
        >
          Kembali ke Beranda
        </a>
      </div>
    </div>
  );
}
