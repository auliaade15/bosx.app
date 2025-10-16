import React, { useState } from "react";

const Collection = () => {
  const products = [
    {
      id: 1,
      name: "Custom Jersey",
      category: "Apparel",
      image: "/img/produk1.png",
      desc: "Desain jersey sesuai keinginanmu dengan bahan premium.",
    },
    {
      id: 2,
      name: "Custom Kaos DTF",
      category: "Apparel",
      image: "/img/produk7.png",
      desc: "Kaos DTF printing dengan warna tajam dan tahan lama.",
    },
    {
      id: 3,
      name: "Custom Kaos Polo",
      category: "Apparel",
      image: "/img/produk6.png",
      desc: "Kaos polo custom dengan bordir atau sablon DTF premium.",
    },
    {
      id: 4,
      name: "Custom Kemeja / Seragam",
      category: "Apparel",
      image: "/img/produk8.png",
      desc: "Kemeja dan seragam profesional untuk perusahaan atau event.",
    },
    {
      id: 5,
      name: "Custom Hijab Syar'i",
      category: "Hijab",
      image: "/img/produk2.png",
      desc: "Hijab syar'i dengan motif dan bahan lembut premium.",
    },
    {
      id: 6,
      name: "Custom Hijab Segi 4",
      category: "Hijab",
      image: "/img/produk9.png",
      desc: "Hijab segi empat dengan bahan lembut dan motif printing.",
    },
    {
      id: 7,
      name: "Custom Hijab Bergo",
      category: "Hijab",
      image: "/img/produk11.png",
      desc: "Hijab bergo praktis dengan desain custom elegan.",
    },
    {
      id: 8,
      name: "Sling & Waist Bag",
      category: "Accessories",
      image: "/img/produk4.png",
      desc: "Tas selempang dan pinggang desain modern dan kuat.",
    },
    {
      id: 9,
      name: "Pouch & Laptop Case",
      category: "Accessories",
      image: "/img/produk5.png",
      desc: "Pouch dan laptop case elegan untuk gaya profesional.",
    },
    {
      id: 10,
      name: "Custom Tote Bag",
      category: "Accessories",
      image: "/img/produk3.png",
      desc: "Tote bag ramah lingkungan dengan desain custom unik.",
    },
    {
      id: 11,
      name: "Custom Gamis Printing",
      category: "Gamis",
      image: "/img/produk10.png",
      desc: "Gamis printing eksklusif dengan bahan adem premium.",
    },
    {
      id: 12,
      name: "Custom Mukena Printing",
      category: "Gamis",
      image: "/img/produk12.png",
      desc: "Mukena printing elegan dengan corak eksklusif dan lembut.",
    },
  ];

  const categories = ["All", "Apparel", "Hijab", "Accessories", "Gamis"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#0c0c0c] via-[#111] to-[#1a1a1a] text-white flex flex-col items-center justify-center px-6 py-20">
      <div className="text-center mb-10">
        <h1 className="text-5xl font-bold text-[#FFD700] mb-3 tracking-wide drop-shadow-[0_0_12px_rgba(255,215,0,0.3)]">
          Our Collections
        </h1>
        <div className="w-28 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto rounded-full mb-5"></div>
        <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed text-lg">
          Pilih kategori produk yang kamu inginkan, lalu temukan berbagai koleksi
          eksklusif dengan desain dan kualitas terbaik dari{" "}
          <span className="text-[#FFD700] font-semibold">Skupy</span>.
        </p>
      </div>

      {/* Tombol Kategori */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-6 py-2 rounded-full font-semibold border transition-all duration-300 ${
              activeCategory === cat
                ? "bg-gradient-to-r from-yellow-400 to-yellow-600 text-black border-yellow-500 shadow-lg shadow-yellow-500/30"
                : "border-[#FFD700]/30 text-[#FFD700] hover:border-[#FFD700] hover:shadow-yellow-400/30"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid Produk */}
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl w-full transition-all duration-500 ${
          filteredProducts.length === 0 ? "opacity-50" : "opacity-100"
        }`}
      >
        {filteredProducts.map((item) => (
          <div
            key={item.id}
            className="group bg-gradient-to-b from-[#1a1a1a] to-[#141414] rounded-2xl border border-[#FFD700]/20 shadow-lg shadow-black/40 overflow-hidden hover:scale-[1.03] hover:border-[#FFD700]/60 transition-all duration-500"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
            />
            <div className="p-6 text-center">
              <h3 className="text-2xl font-semibold text-[#FFD700] mb-2">
                {item.name}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <p className="text-gray-500 mt-10 text-center">
          Tidak ada produk dalam kategori ini.
        </p>
      )}
    </section>
  );
};

export default Collection;
