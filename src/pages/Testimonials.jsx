import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rina Pratama",
      role: "Owner, Rina Boutique",
      message:
        "Hasil cetaknya luar biasa! Warna tajam, kualitas bahan premium, dan pelayanan Skupy cepat banget. Sangat direkomendasikan!",
      image:
        "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Daffa Kurnia",
      role: "Creative Director, DK Studio",
      message:
        "Kerja sama dengan Skupy selalu memuaskan. Desain printing mereka presisi dan pengirimannya selalu tepat waktu.",
      image:
        "https://cdn1-production-images-kly.akamaized.net/wXHfweqWip_n6wLlVsvGuOWv3zw=/1x30:1000x593/469x260/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/4176013/original/034938600_1664506228-shutterstock_704982742.jpg",
    },
    {
      name: "Aulia Sari",
      role: "Marketing Manager, GlowMart",
      message:
        "Suka banget sama hasil bannernya! Tekstur bahan kuat dan tampilan warnanya keren banget untuk promosi outdoor.",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0b0b0b] via-[#141414] to-[#1a1a1a] text-white flex flex-col items-center px-6 py-20">
      {/* Title Section */}
      <h1 className="text-5xl font-extrabold text-[#FFD700] mb-3 text-center drop-shadow-[0_0_15px_rgba(255,215,0,0.4)] animate-pulse">
        What Our Clients Say
      </h1>
      <div className="w-24 h-1 bg-[#FFD700] mb-8 rounded-full shadow-[0_0_10px_rgba(255,215,0,0.6)]"></div>

      <p className="text-gray-400 text-center max-w-2xl mb-14 leading-relaxed">
        Kami bangga menjadi bagian dari perjalanan kreatif klien kami.  
        Berikut beberapa testimoni dari mereka yang telah mempercayakan{" "}
        <span className="text-[#FFD700] font-medium">Skupy Digital Printing</span>.
      </p>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl w-full">
        {testimonials.map((item, i) => (
          <div
            key={i}
            className="group relative bg-[#1a1a1a]/80 border border-[#FFD700]/20 rounded-2xl p-8 shadow-lg hover:shadow-[0_0_25px_rgba(255,215,0,0.3)] transition-all duration-500 hover:border-[#FFD700]/60 backdrop-blur-sm"
          >
            {/* Efek Glow Latar */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#FFD700]/5 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl"></div>

            <div className="flex flex-col items-center text-center relative z-10">
              <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-[#FFD700] mb-4 shadow-[0_0_15px_rgba(255,215,0,0.3)]">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <p className="text-gray-300 italic mb-4 leading-relaxed text-base md:text-lg">
                “{item.message}”
              </p>
              <h3 className="text-[#FFD700] font-semibold text-lg mt-2">
                {item.name}
              </h3>
              <p className="text-gray-500 text-sm">{item.role}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Decorative Bottom Quote */}
      <p className="text-gray-500 text-sm mt-16 italic tracking-wide">
        “Your satisfaction is the best print we can make.”
      </p>
    </div>
  );
};

export default Testimonials;
