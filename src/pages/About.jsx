import React, { useEffect } from "react";
import { Instagram, Facebook, Youtube } from "lucide-react"; // ✅ Tambah ikon YouTube

const About = () => {
  useEffect(() => {
    // Hapus script lama TikTok (biar gak duplikat)
    const oldScript = document.querySelector(
      'script[src="https://www.tiktok.com/embed.js"]'
    );
    if (oldScript) oldScript.remove();

    // Tambahkan script TikTok baru
    const script = document.createElement("script");
    script.src = "https://www.tiktok.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#111] to-[#1A1A1A] text-white flex flex-col items-center justify-center px-6 py-16">
      {/* Judul */}
      <h1 className="text-4xl font-bold text-[#FFD700] mb-4 text-center tracking-wide">
        About Skupy Digital Printing
      </h1>

      {/* Garis */}
      <div className="w-24 h-1 bg-[#FFD700] mb-6 rounded-full"></div>

      {/* Deskripsi */}
      <p className="text-gray-300 max-w-2xl text-center leading-relaxed text-lg mb-10">
        <span className="text-[#FFD700] font-semibold">
          Skupy Digital Printing
        </span>
        &nbsp;adalah mitra terpercaya untuk kebutuhan printing berkualitas
        tinggi — mulai dari sublimasi, DTF, hingga produk custom. Kami memadukan
        <span className="text-white font-medium"> kreativitas </span>
        dan <span className="text-white font-medium"> teknologi </span>
        untuk mewujudkan ide-ide unik Anda menjadi nyata.
      </p>

      {/* Embed TikTok */}
      <div className="flex justify-center w-full mb-10">
        <blockquote
          className="tiktok-embed border border-[#FFD700]/70 rounded-xl shadow-[0_0_15px_rgba(255,215,0,0.3)]"
          cite="https://www.tiktok.com/@skupydigitalprinting/video/7468581120649547013"
          data-video-id="7468581120649547013"
          style={{
            maxWidth: "325px",
            minWidth: "325px",
          }}
        >
          <section>Loading TikTok...</section>
        </blockquote>
      </div>

      {/* Media Sosial */}
      <div className="flex flex-wrap items-center justify-center space-x-8 mt-4">
        {/* Instagram */}
        <a
          href="https://www.instagram.com/skupy.digitalprinting?igsh=MWs0NWE1ZHAyejQ2Nw=="
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-gray-300 hover:text-[#FFD700] transition-all duration-300"
        >
          <Instagram size={24} />
          <span className="font-semibold">Instagram</span>
        </a>

        {/* Facebook */}
        <a
          href="https://www.facebook.com/share/1AMiCYqmak/?mibextid=wwXIfr"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-gray-300 hover:text-[#FFD700] transition-all duration-300"
        >
          <Facebook size={24} />
          <span className="font-semibold">Facebook</span>
        </a>

        {/* YouTube */}
        <a
          href="https://www.youtube.com/@SkupyPrinting" // 🔁 Ganti dengan link channel YouTube kamu
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-gray-300 hover:text-[#FFD700] transition-all duration-300"
        >
          <Youtube size={24} />
          <span className="font-semibold">YouTube</span>
        </a>
      </div>
    </div>
  );
};

export default About;
