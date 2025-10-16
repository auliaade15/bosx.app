import React from "react";
import { useParams, Link } from "react-router-dom";

export default function ProductsDetail() {
  const { id } = useParams();

  const products = [
    {
      id: 1,
      name: "Custom Jersey",
      description: "Desain jersey sesuai keinginanmu dengan bahan premium.",
      image: "/img/produk1.png",
      detail:
        "Desain jersey sesuai keinginanmu dengan bahan premium dan hasil printing tajam. Cocok untuk tim, komunitas, atau event spesial.",
    },
    {
      id: 2,
      name: "Tote Bag Printing",
      description: "Tote bag unik dan ramah lingkungan dengan desain custom.",
      image: "/img/produk3.png",
      detail:
        "Tote bag ramah lingkungan dengan desain custom yang mencerminkan gaya unikmu. Kuat, stylish, dan serbaguna.",
    },
    {
      id: 3,
      name: "Custom Hijab Syar'i",
      description:
        "Hijab syar'i dengan motif dan warna sesuai seleramu, nyaman dipakai dan elegan.",
      image: "/img/produk2.png",
      detail:
        "Hijab Syar’i dengan motif eksklusif dan bahan lembut premium. Nyaman digunakan seharian dengan tampilan elegan.",
    },
    {
      id: 4,
      name: "Sling & Waist Bag",
      description:
        "Tas selempang dan pinggang dengan desain modern dan bahan tahan lama untuk gaya kasualmu.",
      image: "/img/produk4.png",
      detail:
        "Tas selempang dan pinggang dengan desain modern serta bahan tahan lama, cocok untuk aktivitas harian.",
    },
    {
      id: 5,
      name: "Pouch & Laptop Case",
      description:
        "Pouch dan case laptop elegan untuk melindungi barangmu dengan tampilan stylish.",
      image: "/img/produk5.png",
      detail:
        "Pouch dan laptop case custom untuk tampilan stylish dan perlindungan maksimal barang-barangmu.",
    },
    {
      id: 6,
      name: "Custom Kaos Polo",
      description:
        "Kaos polo dengan desain bordir atau sablon custom, cocok untuk seragam atau promosi.",
      image: "/img/produk6.png",
      detail:
        "Kaos polo custom dengan bordir atau sablon DTF premium. Cocok untuk seragam kantor atau promosi brand.",
    },
    {
      id: 7,
      name: "Custom Kaos DTF",
      description:
        "Kaos DTF printing dengan warna tajam dan tahan lama, ideal untuk bisnis atau komunitas.",
      image: "/img/produk7.png",
      detail:
        "Kaos printing DTF warna tajam dan tahan lama. Ideal untuk bisnis, komunitas, atau koleksi pribadi.",
    },
    {
      id: 8,
      name: "Custom Kemeja / Seragam",
      description:
        "Kemeja dan seragam custom profesional untuk perusahaan, organisasi, atau event.",
      image: "/img/produk8.png",
      detail:
        "Kemeja dan seragam custom profesional untuk perusahaan, sekolah, atau event besar.",
    },
    {
      id: 9,
      name: "Custom Hijab Segi 4",
      description:
        "Hijab segi empat dengan bahan lembut dan motif printing sesuai keinginanmu.",
      image: "/img/produk9.png",
      detail:
        "Hijab segi empat dengan bahan lembut dan desain printing eksklusif sesuai selera.",
    },
    {
      id: 10,
      name: "Custom Gamis Printing",
      description:
        "Gamis printing eksklusif dengan corak unik dan bahan yang nyaman dipakai seharian.",
      image: "/img/produk10.png",
      detail:
        "Gamis printing eksklusif dengan motif elegan dan bahan adem, nyaman dipakai sepanjang hari.",
    },
    {
      id: 11,
      name: "Custom Hijab Bergo",
      description:
        "Hijab bergo praktis dengan desain dan warna sesuai keinginanmu, nyaman untuk aktivitas sehari-hari.",
      image: "/img/produk11.png",
      detail:
        "Hijab bergo praktis dengan warna dan desain custom yang elegan dan nyaman untuk aktivitas sehari-hari.",
    },
    {
      id: 12,
      name: "Custom Mukena Printing",
      description:
        "Mukena dengan desain printing elegan dan bahan lembut yang nyaman untuk beribadah.",
      image: "/img/produk12.png",
      detail:
        "Mukena printing elegan dengan corak eksklusif dan bahan lembut yang nyaman untuk ibadah.",
    },
  ];

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <section className="min-h-screen bg-[#111] text-white flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold text-[#FFD700] mb-4">
          Produk tidak ditemukan 😢
        </h2>
        <Link
          to="/products"
          className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-6 py-3 rounded-xl font-semibold shadow-md hover:shadow-yellow-400/50 hover:scale-105 transition-all"
        >
          Kembali ke Produk
        </Link>
      </section>
    );
  }

  const handleOrder = () => {
    const message = `Halo, saya tertarik dengan produk *${product.name}*. Bisa dibantu proses pemesanannya?`;
    window.open(
      `https://wa.me/6281255577705?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existing = cart.find((item) => item.id === product.id);
    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${product.name} telah ditambahkan ke keranjang 🛒`);
  };

  return (
    <section className="min-h-screen bg-[#0e0e0e] text-white flex flex-col items-center justify-center px-6 py-20">
      <div className="max-w-3xl bg-[#1a1a1a] p-10 rounded-3xl shadow-2xl border border-[#FFD700]/20 text-center">
        <img
          src={product.image}
          alt={product.name}
          className="w-80 h-80 object-cover mx-auto rounded-2xl mb-6 border border-[#FFD700]/30 shadow-lg shadow-yellow-600/10"
        />
        <h1 className="text-4xl font-bold mb-3 text-[#FFD700] tracking-wide drop-shadow-md">
          {product.name}
        </h1>
        <p className="text-lg mb-8 text-gray-300 leading-relaxed">
          {product.detail}
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
          <button
            onClick={handleAddToCart}
            className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-7 py-3 rounded-xl font-semibold hover:scale-105 shadow-md hover:shadow-yellow-400/40 transition-all duration-300"
          >
            🛒 Tambah ke Keranjang
          </button>

          <button
            onClick={handleOrder}
            className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-7 py-3 rounded-xl font-semibold hover:scale-105 shadow-md hover:shadow-yellow-400/40 transition-all duration-300"
          >
            💬 Pesan via WhatsApp
          </button>

          <Link
            to="/products"
            className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-7 py-3 rounded-xl font-semibold hover:scale-105 shadow-md hover:shadow-yellow-400/40 transition-all duration-300"
          >
            ← Kembali
          </Link>
        </div>
      </div>
    </section>
  );
}
