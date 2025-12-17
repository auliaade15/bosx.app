import React, { useEffect, useState } from "react";
import { Trash2, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) setCart(JSON.parse(storedCart));
  }, []);

  const handleRemove = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("Keranjang masih kosong 🛒");
      return;
    }

    const message = cart
      .map((item, i) => `${i + 1}. ${item.name} - ${item.quantity}x`)
      .join("\n");

    const whatsappMessage = encodeURIComponent(
      `Halo! Saya ingin memesan:\n${message}\n\nTotal item: ${cart.length}`
    );

    window.open(
      `https://wa.me/6281255577705?text=${whatsappMessage}`,
      "_blank"
    );
  };

  return (
    <div className="min-h-screen bg-[#1F2937] text-white pt-24 px-6 md:px-16">
      <h1 className="text-3xl font-bold mb-6 border-b border-gray-600 pb-2">
        Keranjang Belanja 🛒
      </h1>

      {cart.length === 0 ? (
        <div className="text-center mt-20">
          <ShoppingBag size={60} className="mx-auto text-gray-500 mb-4" />
          <p className="text-gray-300 text-lg">Keranjang kamu masih kosong</p>

          <Link
            to="/products"
            className="mt-6 inline-block bg-[#14B8A6] text-black px-6 py-2 rounded-lg font-semibold hover:bg-[#2DD4BF] transition"
          >
            Lihat Produk
          </Link>
        </div>
      ) : (
        <>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cart.map((item) => (
              <div
                key={item.id}
                className="bg-[#111827] rounded-lg p-4 border border-[#374151] shadow-lg hover:shadow-xl transition"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover rounded-md mb-3 border border-[#374151]"
                />
                <h2 className="text-lg font-semibold text-white">
                  {item.name}
                </h2>
                <p className="text-gray-300 text-sm mt-1 line-clamp-2">
                  {item.detail}
                </p>
                <p className="text-[#14B8A6] mt-2 font-medium">
                  Jumlah: {item.quantity}
                </p>

                <div className="flex justify-between items-center mt-4">
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="flex items-center space-x-1 text-red-400 hover:text-red-300 transition"
                  >
                    <Trash2 size={18} />
                    <span>Hapus</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
            <button
              onClick={handleCheckout}
              className="bg-[#14B8A6] text-black font-semibold px-8 py-3 rounded-lg hover:bg-[#2DD4BF] transition"
            >
              Checkout via WhatsApp
            </button>

            <Link
              to="/products"
              className="border border-[#14B8A6] text-[#14B8A6] font-semibold px-8 py-3 rounded-lg hover:bg-[#14B8A6] hover:text-black transition"
            >
              Kembali ke Produk
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
