import React from "react";
import { motion } from "framer-motion";

const Products = () => {
  const jerseys = [
    {
      id: 1,
      name: "Jersey Futsal Custom",
      description:
        "Desain jersey futsalmu sendiri dengan warna, logo, dan nama tim sesuai keinginan.",
      image: "/img/jersey-futsal.png",
    },
    {
      id: 2,
      name: "Jersey Sepeda",
      description:
        "Bahan adem dan ringan, cocok untuk gowes jarak jauh dengan desain full print premium.",
      image: "/img/jersey-sepeda.png",
    },
    {
      id: 3,
      name: "Jersey Esport",
      description:
        "Tampil percaya diri saat turnamen! Jersey esport dengan bahan halus dan warna vivid.",
      image: "/img/jersey-esport.png",
    },
    {
      id: 4,
      name: "Jersey Basket",
      description:
        "Jersey basket dengan bahan dry-fit yang nyaman dan desain sporty modern.",
      image: "/img/jersey-basket.png",
    },
  ];

  return (
    <div className="min-h-screen bg-[#2A2D34] text-white py-24 px-6 flex flex-col items-center">

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-5xl font-extrabold mb-4 text-center"
      >
       Produk Kami
      </motion.h1>

      <div className="w-24 h-1 bg-[#2FC2A5] rounded-full mb-10"></div>

      <p className="text-[#C9C9C9] text-center max-w-2xl mb-14 leading-relaxed">
        Pilihan jersey premium untuk tim, komunitas, dan sekolah. 
        Dibuat dengan bahan terbaik dan warna vivid.
      </p>

      {/* Jersey Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl w-full">
        {jerseys.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 120 }}
            className="bg-white/10 border border-white/20 rounded-2xl p-6 shadow-md hover:shadow-xl hover:border-[#2FC2A5] transition-all duration-300 backdrop-blur-sm"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-48 h-48 rounded-xl overflow-hidden border border-[#2FC2A5]/50 bg-[#1F2126] mb-4 shadow">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              <h3 className="text-xl font-semibold text-white mb-2">
                {item.name}
              </h3>

              <p className="text-[#C9C9C9] text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <p className="text-[#2FC2A5] text-sm mt-16 italic tracking-wide text-center">
        “Jersey premium untuk performa terbaik tim kamu.”
      </p>
    </div>
  );
};

export default Products;
