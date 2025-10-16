import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Search as SearchIcon } from "lucide-react";

export default function Search() {
  const [query, setQuery] = useState("");

  const products = [
    { id: 1, name: "Custom Jersey", image: "/img/produk1.png" },
    { id: 2, name: "Tote Bag Printing", image: "/img/produk3.png" },
    { id: 3, name: "Custom Hijab Syar'i", image: "/img/produk2.png" },
    { id: 4, name: "Sling & Waist Bag", image: "/img/produk4.png" },
    { id: 5, name: "Pouch & Laptop Case", image: "/img/produk5.png" },
    { id: 6, name: "Custom Kaos Polo", image: "/img/produk6.png" },
    { id: 7, name: "Custom Kaos DTF", image: "/img/produk7.png" },
    { id: 8, name: "Custom Kemeja / Seragam", image: "/img/produk8.png" },
    { id: 9, name: "Custom Hijab Segi 4", image: "/img/produk9.png" },
    { id: 10, name: "Custom Gamis Printing", image: "/img/produk10.png" },
    { id: 11, name: "Custom Hijab Bergo", image: "/img/produk11.png" },
    { id: 12, name: "Custom Mukena Printing", image: "/img/produk12.png" },
  ];

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <section className="min-h-screen bg-[#0b0b0b] text-white px-8 py-20 flex flex-col items-center">
      {/* Judul */}
      <h1 className="text-5xl font-extrabold text-[#FFD700] mb-12 text-center drop-shadow-[0_0_15px_rgba(255,215,0,0.5)] tracking-wide">
        Pencarian Produk 🔍
      </h1>

      {/* Input Pencarian */}
      <div className="relative w-full max-w-2xl mb-10">
        <input
          type="text"
          placeholder="Ketik nama produk yang ingin kamu cari..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full px-6 py-4 rounded-full bg-[#1a1a1a] text-gray-100 text-lg outline-none border-2 border-[#2a2a2a] focus:border-[#FFD700] focus:ring-4 focus:ring-[#FFD700]/30 shadow-[0_0_20px_rgba(255,215,0,0.15)] placeholder-gray-500 transition duration-300"
        />
        <button className="absolute right-2.5 top-2.5 bg-[#FFD700] text-black px-6 py-2.5 rounded-full font-semibold hover:bg-yellow-400 transition flex items-center gap-2 shadow-[0_0_10px_rgba(255,215,0,0.4)]">
          <SearchIcon size={18} />
          Cari
        </button>
      </div>

      {/* Jika belum mencari, tampilkan pesan kosong */}
      {!query && (
        <p className="text-gray-400 mt-16 text-center text-lg italic">
          Ketik nama produk di atas untuk mulai mencari ✨
        </p>
      )}

      {/* Hasil pencarian */}
      {query && (
        <>
          <p className="text-gray-400 mb-10 text-center text-lg">
            Menampilkan hasil untuk{" "}
            <span className="text-[#FFD700] font-semibold">"{query}"</span>
          </p>

          <div className="w-full max-w-7xl">
            {filtered.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 animate-fadeIn">
                {filtered.map((product) => (
                  <Link
                    to={`/products/${product.id}`}
                    key={product.id}
                    className="group bg-gradient-to-b from-[#151515] to-[#0f0f0f] rounded-2xl border border-[#2a2a2a] overflow-hidden hover:border-[#FFD700]/60 hover:shadow-[0_0_25px_rgba(255,215,0,0.3)] transform hover:-translate-y-2 transition-all duration-300"
                  >
                    <div className="relative">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="p-5 text-center">
                      <h2 className="text-xl font-semibold text-white group-hover:text-[#FFD700] transition duration-300">
                        {product.name}
                      </h2>
                      <p className="text-gray-400 text-sm mt-2 opacity-80 group-hover:opacity-100">
                        Produk premium by Skupy Digital Printing
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <p className="text-gray-400 text-center mt-10 text-lg">
                Tidak ditemukan produk dengan nama{" "}
                <span className="text-[#FFD700]">"{query}"</span> 😢
              </p>
            )}
          </div>
        </>
      )}

      {/* Tombol kembali */}
      <div className="mt-20">
        <Link
          to="/products"
          className="bg-[#FFD700] text-black font-semibold px-10 py-3 rounded-full hover:bg-yellow-400 transition shadow-[0_0_15px_rgba(255,215,0,0.4)]"
        >
          ← Kembali ke Produk
        </Link>
      </div>
    </section>
  );
}
