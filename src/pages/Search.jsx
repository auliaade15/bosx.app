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
    <section className="min-h-screen bg-[#0b0b0b] text-white px-6 py-20 flex flex-col items-center">
      {/* Judul */}
      <h1 className="text-4xl md:text-5xl font-bold text-[#FFD700] mb-10 text-center tracking-wide">
        Pencarian Produk
      </h1>

      {/* Input Pencarian */}
      <div className="relative w-full max-w-2xl mb-12">
        <input
          type="text"
          placeholder="Cari produk yang kamu inginkan..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full px-6 py-4 rounded-full bg-[#1a1a1a] text-gray-100 text-lg outline-none border border-[#2a2a2a] focus:border-[#FFD700] focus:ring-2 focus:ring-[#FFD700]/30 transition"
        />
        <button className="absolute right-3 top-2.5 bg-[#FFD700] text-black px-6 py-2.5 rounded-full font-medium hover:bg-yellow-400 transition flex items-center gap-2">
          <SearchIcon size={18} />
          Cari
        </button>
      </div>

      {/* Jika belum mencari */}
      {!query && (
        <p className="text-gray-400 mt-10 text-center text-base italic">
          Ketik nama produk di atas untuk mulai mencari ✨
        </p>
      )}

      {/* Hasil pencarian */}
      {query && (
        <>
          <p className="text-gray-400 mb-8 text-center text-base">
            Menampilkan hasil untuk{" "}
            <span className="text-[#FFD700] font-medium">"{query}"</span>
          </p>

          <div className="w-full max-w-6xl">
            {filtered.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filtered.map((product) => (
                  <Link
                    to={`/products/${product.id}`}
                    key={product.id}
                    className="group bg-[#151515] rounded-xl border border-[#2a2a2a] overflow-hidden hover:border-[#FFD700]/50 hover:shadow-lg hover:shadow-[#FFD700]/20 transition-all duration-300"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="p-5 text-center">
                      <h2 className="text-lg font-semibold text-white group-hover:text-[#FFD700] transition">
                        {product.name}
                      </h2>
                      <p className="text-gray-400 text-sm mt-2">
                        Produk premium by Skupy
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <p className="text-gray-400 text-center mt-8 text-base">
                Tidak ditemukan produk dengan nama{" "}
                <span className="text-[#FFD700]">"{query}"</span> 😢
              </p>
            )}
          </div>
        </>
      )}

      {/* Tombol kembali */}
      <div className="mt-16">
        <Link
          to="/products"
          className="bg-[#FFD700] text-black font-medium px-8 py-3 rounded-full hover:bg-yellow-400 transition"
        >
          ← Kembali ke Produk
        </Link>
      </div>
    </section>
  );
}
