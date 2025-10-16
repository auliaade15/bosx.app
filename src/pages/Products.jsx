import React from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Custom Jersey",
      description: "Desain jersey sesuai keinginanmu dengan bahan premium.",
      image: "/img/produk1.png",
    },
    {
      id: 2,
      name: "Tote Bag Printing",
      description: "Tote bag unik dan ramah lingkungan dengan desain custom.",
      image: "/img/produk3.png",
    },
    {
      id: 3,
      name: "Custom Hijab Syar'i",
      description:
        "Hijab syar'i dengan motif dan warna sesuai seleramu, nyaman dipakai dan elegan.",
      image: "/img/produk2.png",
    },
    {
      id: 4,
      name: "Sling & Waist Bag",
      description:
        "Tas selempang dan pinggang dengan desain modern dan bahan tahan lama untuk gaya kasualmu.",
      image: "/img/produk4.png",
    },
    {
      id: 5,
      name: "Pouch & Laptop Case",
      description:
        "Pouch dan case laptop elegan untuk melindungi barangmu dengan tampilan stylish.",
      image: "/img/produk5.png",
    },
    {
      id: 6,
      name: "Custom Kaos Polo",
      description:
        "Kaos polo dengan desain bordir atau sablon custom, cocok untuk seragam atau promosi.",
      image: "/img/produk6.png",
    },
    {
      id: 7,
      name: "Custom Kaos DTF",
      description:
        "Kaos DTF printing dengan warna tajam dan tahan lama, ideal untuk bisnis atau komunitas.",
      image: "/img/produk7.png",
    },
    {
      id: 8,
      name: "Custom Kemeja / Seragam",
      description:
        "Kemeja dan seragam custom profesional untuk perusahaan, organisasi, atau event.",
      image: "/img/produk8.png",
    },
    {
      id: 9,
      name: "Custom Hijab Segi 4",
      description:
        "Hijab segi empat dengan bahan lembut dan motif printing sesuai keinginanmu.",
      image: "/img/produk9.png",
    },
    {
      id: 10,
      name: "Custom Gamis Printing",
      description:
        "Gamis printing eksklusif dengan corak unik dan bahan yang nyaman dipakai seharian.",
      image: "/img/produk10.png",
    },
    {
      id: 11,
      name: "Custom Hijab Bergo",
      description:
        "Hijab bergo praktis dengan desain dan warna sesuai keinginanmu, nyaman untuk aktivitas sehari-hari.",
      image: "/img/produk11.png",
    },
    {
      id: 12,
      name: "Custom Mukena Printing",
      description:
        "Mukena dengan desain printing elegan dan bahan lembut yang nyaman untuk beribadah.",
      image: "/img/produk12.png",
    },
  ];

  return (
    <div className="min-h-screen bg-[#111] text-white flex flex-col items-center py-20 px-6">
      <h1 className="text-4xl font-extrabold text-[#FFD700] mb-3">
        Our Products
      </h1>
      <p className="text-gray-400 text-center max-w-2xl mb-12">
        Jelajahi berbagai produk custom terbaik dari kami — dari jersey, tote
        bag, hingga merchandise unik lainnya yang bisa kamu sesuaikan dengan
        gaya dan kebutuhanmu.
      </p>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 max-w-7xl w-full">
        {products.map((item) => (
          <div
            key={item.id}
            className="bg-[#1a1a1a] rounded-2xl shadow-lg border border-[#FFD700]/30 hover:border-[#FFD700] hover:shadow-[#FFD700]/40 transition-all duration-300"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-56 object-cover rounded-t-2xl hover:scale-105 transition-transform duration-300"
            />
            <div className="p-5 text-center">
              <h3 className="text-xl font-semibold text-[#FFD700]">
                {item.name}
              </h3>
              <p className="text-gray-400 text-sm mt-2">{item.description}</p>

              {/* Tombol menuju halaman detail */}
              <Link
                to={`/products/${item.id}`}
                className="inline-block mt-5 bg-[#FFD700] text-black font-semibold px-6 py-2 rounded-full hover:bg-yellow-400 transition-all"
              >
                Lihat Detail
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
