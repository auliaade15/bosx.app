import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rina Pratama",
      role: "Owner, Rina Boutique",
      message:
        "Hasil cetaknya luar biasa! Warna tajam, bahan halus, dan pelayanan cepat. Skupy benar-benar profesional!",
      image:
        "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Daffa Kurnia",
      role: "Creative Director, DK Studio",
      message:
        "Desain printing-nya selalu presisi. Warna stabil, hasilnya clean banget. Pengiriman juga tepat waktu.",
      image:
        "https://cdn1-production-images-kly.akamaized.net/wXHfweqWip_n6wLlVsvGuOWv3zw=/1x30:1000x593/469x260/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/4176013/original/034938600_1664506228-shutterstock_704982742.jpg",
    },
    {
      name: "Aulia Sari",
      role: "Marketing Manager, GlowMart",
      message:
        "Kualitas bannernya mantap! Tekstur bahan kuat dan tampilan warnanya keren banget buat promosi outdoor.",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0b1628] via-[#0e1d35] to-[#14294a] text-white flex flex-col items-center px-6 py-20">
      {/* Title Section */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] to-[#60a5fa] mb-4 text-center drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]">
        What Our Clients Say
      </h1>
      <div className="w-20 h-1 bg-gradient-to-r from-[#3b82f6] to-[#60a5fa] mb-10 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.3)]"></div>

      <p className="text-gray-300 text-center max-w-2xl mb-14 leading-relaxed">
        Kami bangga menjadi bagian dari perjalanan kreatif klien kami.  
        Berikut beberapa testimoni dari mereka yang telah mempercayakan{" "}
        <span className="text-[#60a5fa] font-medium">Skupy Digital Printing</span>.
      </p>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl w-full">
        {testimonials.map((item, i) => (
          <div
            key={i}
            className="group relative bg-[#1e2b48]/60 border border-[#3b82f6]/20 rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_0_25px_rgba(59,130,246,0.25)] transition-all duration-500 hover:border-[#3b82f6]/40 backdrop-blur-md"
          >
            <div className="flex flex-col items-center text-center relative z-10">
              <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-[#60a5fa]/70 mb-4 shadow-[0_0_10px_rgba(59,130,246,0.3)]">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <p className="text-gray-200 italic mb-4 leading-relaxed text-base md:text-lg">
                “{item.message}”
              </p>
              <h3 className="text-[#60a5fa] font-semibold text-lg mt-2">
                {item.name}
              </h3>
              <p className="text-gray-400 text-sm">{item.role}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Quote */}
      <p className="text-gray-400 text-sm mt-16 italic tracking-wide">
        “Your satisfaction is our best design.”
      </p>
    </div>
  );
};

export default Testimonials;
