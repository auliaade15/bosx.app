import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ShoppingCart, Search } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Collection", path: "/collection" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "About Us", path: "/about" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 w-full bg-[#0d0d0d] text-white py-3 z-50 border-b border-[#1f1f1f]/70 shadow-lg">
      <div className="w-full flex items-center justify-between px-6 md:px-12">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img
            src="/skupy logo.jpg"
            alt="Skupy Logo"
            className="w-10 h-10 rounded-md border border-[#FFD700]/80 shadow-[0_0_8px_rgba(255,215,0,0.4)]"
          />
          <span className="text-xl font-bold tracking-tight whitespace-nowrap">
            <span className="text-[#FFD700]">Skupy</span>{" "}
            <span className="text-gray-100">Digital Printing</span>
          </span>
        </Link>

        {/* Menu Tengah */}
        <ul className="hidden md:flex space-x-10">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className={`transition-all duration-200 font-semibold tracking-wide ${
                  location.pathname === item.path
                    ? "text-[#FFD700] border-b-2 border-[#FFD700] pb-1"
                    : "text-gray-300 hover:text-[#FFD700]"
                }`}
              >
                {item.name.toUpperCase()}
              </Link>
            </li>
          ))}
        </ul>

        {/* Icon kanan */}
        <div className="flex items-center space-x-5">
          <button
            onClick={() => navigate("/cart")}
            className="hover:text-[#FFD700] transition duration-200"
            title="Keranjang Belanja"
          >
            <ShoppingCart size={22} />
          </button>
          <button
            onClick={() => navigate("/search")}
            className="hover:text-[#FFD700] transition duration-200"
            title="Cari Produk"
          >
            <Search size={22} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
