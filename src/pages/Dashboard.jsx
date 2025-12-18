import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { Star, Users, PenTool } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="font-sans bg-white text-white">
      {/* HERO */}
      <section className="relative bg-[#2A2D34] pt-20 pb-24 overflow-hidden">
        {/* Wave */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg
            viewBox="0 0 1440 320"
            className="w-full h-[130px] fill-[#2FC2A5]"
          >
            <path d="M0,96L48,112C96,128,192,160,288,176C384,192,480,192,576,181.3C672,171,768,149,864,160C960,171,1056,213,1152,213.3C1248,213,1344,171,1392,149.3L1440,128V320H0Z"></path>
          </svg>
        </div>

        <div className="container mx-auto px-6 md:px-16 lg:px-24 grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative z-10">
          {/* TEXT */}
          <div>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
              Custom Jersey
            </h1>

            <p className="text-[#C9C9C9] text-lg mt-4 max-w-md leading-relaxed">
              Tampilkan karakter tim kamu lewat jersey custom dengan kualitas
              premium dan desain bebas.
            </p>

            {/* BUTTON TO CUSTOM PAGE */}
            <NavLink
              to="/custom"
              className="inline-block mt-6 bg-[#2FC2A5] hover:bg-[#27A98E] text-[#1A1D20] px-7 py-3 text-lg font-semibold rounded-lg shadow transition"
            >
              Mulai Custom
            </NavLink>
          </div>

          {/* IMAGE */}
          <motion.img
            src="/img/jersey/DSC09742.JPG"
            alt="Jersey"
            className="w-[280px] md:w-[340px] lg:w-[380px] mx-auto rounded-xl shadow-xl border-4 border-white/20"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 bg-[#2FC2A5] text-[#1A1D20]">
        <h2 className="text-3xl font-bold text-center mb-12">
          Kenapa Pilih Kami
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-10 md:px-24">
          {[
            {
              icon: <Star size={40} />,
              title: "Kualitas Premium",
              desc: "Bahan adem, halus, dan kuat.",
            },
            {
              icon: <PenTool size={40} />,
              title: "Desain Bebas",
              desc: "Bisa buat warna, logo, dan pola custom.",
            },
            {
              icon: <Users size={40} />,
              title: "Dipercaya Banyak Tim",
              desc: "Lebih dari 500+ tim memakai layanan kami.",
            },
          ].map((f, i) => (
            <div
              key={i}
              className="bg-white/90 text-[#1A1D20] p-8 rounded-2xl shadow-md hover:shadow-xl transition text-center"
            >
              <div className="mb-4 flex justify-center">{f.icon}</div>
              <h3 className="font-bold text-xl mb-2">{f.title}</h3>
              <p className="text-sm text-gray-700">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#2A2D34] text-center text-white">
        <h2 className="text-4xl font-extrabold mb-4">Siap Buat Jersey Kamu?</h2>
        <p className="text-[#C9C9C9] mb-8 text-lg">
          Custom dengan kualitas terbaik dan proses mudah.
        </p>

        <NavLink to="/custom">
          <button className="px-10 py-3 bg-[#2FC2A5] hover:bg-[#27A98E] text-[#1A1D20] font-bold rounded-lg shadow">
            Buat Sekarang
          </button>
        </NavLink>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#2A2D34] text-white pt-10 pb-6 md:pt-16 md:pb-8">
        <div className="max-w-7xl mx-auto px-6">
          {/* BRAND */}
          <div className="text-center md:text-left">
            <h2 className="text-xl md:text-3xl font-bold text-[#2FC2A5]">
              Bosx Apparel
            </h2>
            <p className="text-gray-400 text-sm md:text-base mt-2 max-w-xs mx-auto md:mx-0">
              Jersey custom premium untuk tim & komunitas.
            </p>
          </div>

          {/* MENU */}
          <ul className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 text-sm md:text-base text-gray-300 mt-6">
            <li>
              <NavLink to="/products" className="hover:text-[#2FC2A5]">
                Produk
              </NavLink>
            </li>
            <li>
              <NavLink to="/custom" className="hover:text-[#2FC2A5]">
                Custom
              </NavLink>
            </li>
            <li>
              <NavLink to="/collection" className="hover:text-[#2FC2A5]">
                Koleksi
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="hover:text-[#2FC2A5]">
                Tentang
              </NavLink>
            </li>
          </ul>

          {/* CONTACT */}
          <div className="text-center md:text-left mt-6">
            <p className="text-gray-400 text-sm">WhatsApp</p>
            <p className="text-white font-semibold text-base mt-1">
              0812-5557-7705
            </p>
          </div>

          {/* MAP – MOBILE MINIMAL */}
          <div className="mt-6 md:mt-10">
            <div className="w-full md:w-[70%] h-[120px] md:h-[200px] rounded-xl overflow-hidden border border-white/10">
              <iframe
                title="Bosx Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d991.634444602713!2d106.81327112847492!3d-6.192542766330858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f7006d8920df%3A0x3b79af9a4f9bf92!2sBOSX%20APPAREL!5e0!3m2!1sen!2sid!4v1765878725588"
                className="w-full h-full border-0"
                loading="lazy"
              />
            </div>
          </div>

          {/* COPYRIGHT */}
          <div className="border-t border-white/10 mt-6 pt-4 text-center text-xs text-gray-500">
            © {new Date().getFullYear()} Bosx Apparel
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
