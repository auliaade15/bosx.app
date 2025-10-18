import React from "react";
import { NavLink } from "react-router-dom";

const Dashboard = () => {
  const products = [
    { id: 1, img: "/img/produk1.png", name: "Custom Jersey" },
    { id: 2, img: "/img/produk9.png", name: "Custom Hijab" },
    { id: 3, img: "/img/produk6.png", name: "Custom Kaos Polo" },
    { id: 4, img: "/img/produk8.png", name: "Custom Kemeja" },
  ];

  return (
    <div className="font-sans text-gray-800 bg-[#f8f8f8]">
      {/* Hero Section */}
      <section className="bg-[#1A1A1A] flex flex-col md:flex-row justify-between items-center px-10 md:px-20 py-20 text-white">
        <div className="max-w-lg">
          <p className="uppercase text-sm font-semibold mb-3 text-[#FFD700]">
            New Arrivals
          </p>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-white">
            YOUR PRINTING
            <br />
            <span className="text-[#FFD700] font-normal"> SOLUTION</span>
          </h1>
          <p className="mt-6 italic text-gray-300 text-base">
            Transform your imagination into stunning prints — high quality and
            timeless.
          </p>
          <NavLink to="/products">
            <button className="mt-8 px-8 py-3 bg-[#FFD700] text-black font-semibold rounded hover:bg-white transition duration-300 shadow-lg text-base">
              Shop Now
            </button>
          </NavLink>
        </div>

        <div className="mt-12 md:mt-0 flex justify-center">
          <img
            src="/img/skupy.jpg"
            alt="logo"
            className="w-[550px] md:w-[700px] lg:w-[800px] object-cover rounded-xl shadow-[0_0_25px_rgba(255,215,0,0.6)]"
          />
        </div>
      </section>

      {/* Collection Section */}
      <section className="py-20 bg-white text-center">
        <h2 className="text-3xl font-bold mb-10 text-[#111]">
          Our Collections
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-10">
          {["Custom", "Printing", "Design", "Style"].map((item, i) => (
            <NavLink
              key={i}
              to="/collection"
              className="bg-[#FFD700]/20 border border-[#FFD700] rounded-lg p-10 hover:bg-[#FFD700]/30 transition duration-300 cursor-pointer"
            >
              <h3 className="text-lg font-semibold text-[#111]">{item}</h3>
            </NavLink>
          ))}
        </div>
      </section>

      {/* Popular Products */}
      <section className="py-24 bg-[#111] text-center text-white">
        <h2 className="text-3xl font-bold mb-16 text-[#FFD700] drop-shadow-[0_0_6px_rgba(255,215,0,0.5)]">
          Popular Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 px-12 md:px-20">
          {products.map((item) => (
            <div
              key={item.id}
              className="bg-[#1E1E1E] border border-[#333] rounded-xl overflow-hidden hover:shadow-[0_0_25px_rgba(255,215,0,0.4)] transform hover:-translate-y-2 transition-all duration-500"
            >
              <div className="relative group">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <h3 className="text-[#FFD700] font-semibold text-lg mb-4">
                    {item.name}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Promo Section */}
      <section className="bg-[#FFD700] text-[#111] py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Join Our Newsletter for Exclusive Offers!
        </h2>
        <p className="mb-6 text-[#333] text-base">
          Subscribe and get 10% off on your first order.
        </p>
        <form className="flex justify-center gap-2">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded text-black w-64 border border-[#111] focus:outline-none text-sm"
          />
          <button className="bg-[#111] text-[#FFD700] px-4 py-2 rounded hover:bg-[#333] transition text-sm">
            Subscribe
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-[#0e0e0e] text-gray-300 pt-14 pb-0 px-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10 text-sm">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <img
                src="/img/skupy.jpg"
                alt="Skupy Logo"
                className="w-10 h-10 rounded-md object-cover"
              />
              <h2 className="text-lg font-bold text-white">
                Skupy Digital Printing
              </h2>
            </div>
            <p className="text-gray-400 leading-relaxed text-sm">
              Premium printing & digital design services to bring your brand to
              life with style and quality.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[#FFD700] font-semibold mb-4 text-lg">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <NavLink to="/" className="hover:text-[#FFD700] transition">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/products"
                  className="hover:text-[#FFD700] transition"
                >
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/collection"
                  className="hover:text-[#FFD700] transition"
                >
                  Collection
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/testimonials"
                  className="hover:text-[#FFD700] transition"
                >
                  Testimonials
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className="hover:text-[#FFD700] transition"
                >
                  About Us
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-[#FFD700] font-semibold mb-4 text-lg">
              Our Services
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-[#FFD700] cursor-pointer">
                Custom Printing
              </li>
              <li className="hover:text-[#FFD700] cursor-pointer">
                Branding & Design
              </li>
              <li className="hover:text-[#FFD700] cursor-pointer">
                Merchandise Production
              </li>
              <li className="hover:text-[#FFD700] cursor-pointer">
                Digital Marketing
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[#FFD700] font-semibold mb-4 text-lg">
              Get in Touch
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:skupydigitalprinting@gmail.com"
                  className="hover:text-[#FFD700] transition"
                >
                  📧 skupydigitalprinting@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:081255577705"
                  className="hover:text-[#FFD700] transition"
                >
                  📞 0812-5557-7705
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* ✅ Tambahan: Metode Pembayaran */}
        <div className="mt-10 border-t border-[#333] pt-8 text-center">
          <h3 className="text-[#FFD700] font-semibold text-lg mb-4">
            Metode Pembayaran
          </h3>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-sm text-gray-300">
            <img
              src="/img/bca.png"
              alt="Bank BCA"
              className="w-20 md:w-24 object-contain"
            />
            <div className="text-center md:text-left">
              <p className="font-semibold"> Bank BCA </p>
              <p> A/N : Hardha Perdana </p>
              <p>
                No. Rekening :{" "}
                <span className="text-[#FFD700] font-semibold">
                  2065033222
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="mt-10 border-t border-[#333]">
          <h3 className="text-center text-[#FFD700] font-semibold text-lg pt-6">
            Our Location
          </h3>
          <div className="flex justify-center mt-4">
            <div className="w-[90%] md:w-[70%] h-[180px] rounded-lg overflow-hidden shadow-[0_0_15px_rgba(255,215,0,0.3)] border border-[#FFD700]">
              <iframe
                title="Skupy Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.5377684395035!2d106.8113412747503!3d-6.192544093795079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f703a349134f%3A0x694ad7ee8129e38a!2sSKUPY%20Digital%20Printing!5e0!3m2!1sen!2sid!4v1759908562478!5m2!1sen!2sid"
                width="100%"
                height="100%"
                allowFullScreen=""
                loading="lazy"
                className="border-0"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 py-6 text-center text-sm text-gray-400 font-medium tracking-wide">
          © {new Date().getFullYear()}{" "}
          <span className="text-[#FFD700] font-semibold text-base">
            Skupy Digital Printing
          </span>
          . All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
