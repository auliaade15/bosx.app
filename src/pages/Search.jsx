import React, { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";

export default function SearchPage({ products }) {
  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState([]);

  // Filter otomatis
  useEffect(() => {
    if (!query) return setFiltered([]);

    const result = products.filter((p) =>
      p.name.toLowerCase().includes(query.toLowerCase())
    );

    setFiltered(result);
  }, [query, products]);

  return (
    <section className="min-h-screen bg-[#1E242D] text-white px-6 py-20 flex flex-col items-center">
      {/* Judul */}
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-10 text-center tracking-wide">
        Pencarian Produk
      </h1>

      {/* Input */}
      <div className="relative w-full max-w-2xl mb-12">
        <input
          type="text"
          placeholder="Cari produk yang kamu inginkan..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full px-6 py-4 rounded-full bg-[#111827] text-gray-100 text-lg outline-none border border-[#334155]
          focus:border-[#14B8A6] focus:ring-2 focus:ring-[#14B8A6]/30 transition"
        />

        <button
          className="absolute right-3 top-2.5 bg-[#14B8A6] text-white px-6 py-2.5 rounded-full font-medium 
          hover:bg-[#0d9b8b] transition flex items-center gap-2"
        >
          <Search size={18} />
          Cari
        </button>
      </div>

      {/* Jika belum mencari */}
      {!query && (
        <p className="text-gray-400 mt-10 text-center text-base italic">
          Ketik nama produk di atas untuk mulai mencari ✨
        </p>
      )}

      {/* Hasil */}
      {query && (
        <>
          <p className="text-gray-400 mb-8 text-center text-base">
            Menampilkan hasil untuk{" "}
            <span className="text-[#14B8A6] font-medium">"{query}"</span>
          </p>

          <div className="w-full max-w-6xl">
            {filtered.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filtered.map((product) => (
                  <Link
                    to={`/products/${product.id}`}
                    key={product.id}
                    className="group bg-[#111827] rounded-xl border border-[#1E293B] overflow-hidden
                    hover:border-[#14B8A6]/50 hover:shadow-[0_0_15px_rgba(20,184,166,0.25)]
                    transition-all duration-300"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="p-5 text-center">
                      <h2 className="text-lg font-semibold text-white group-hover:text-[#14B8A6] transition">
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
                <span className="text-[#14B8A6]">"{query}"</span> 😢
              </p>
            )}
          </div>
        </>
      )}

      {/* Tombol kembali */}
      <div className="mt-16">
        <Link
          to="/"
          className="px-8 py-3 rounded-full font-medium transition
          border border-[#14B8A6] text-[#14B8A6]
          hover:bg-[#0f2f2d]"
        >
          ← Kembali ke Beranda
        </Link>
      </div>
    </section>
  );
}
