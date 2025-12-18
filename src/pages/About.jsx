import React, { useEffect } from "react";
import { Instagram, Facebook, Youtube } from "lucide-react";

const About = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    const timer = setTimeout(() => {
      if (window.instgrm) {
        window.instgrm.Embeds.process();
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#2A2D34] text-white flex flex-col items-center px-6 py-20">
      {/* TITLE */}
      <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 text-center">
        About Bosx Apparel Custom Jersey
      </h1>

      <div className="w-24 h-1 bg-[#2FC2A5] mb-6 rounded-full shadow-[0_0_12px_rgba(47,194,165,0.6)]"></div>

      <p className="text-gray-300 max-w-2xl text-center leading-relaxed text-lg mb-12">
        <span className="text-[#2FC2A5] font-semibold">
          Skupy Digital Printing
        </span>{" "}
        adalah partner terbaik untuk kebutuhan printing berkualitas tinggi —
        mulai dari sublimasi, DTF, hingga berbagai produk custom premium.
      </p>

      {/* INSTAGRAM EMBED */}
      <div className="flex justify-center w-full mb-14">
        <blockquote
          className="instagram-media border border-[#2FC2A5]/40 rounded-xl shadow-[0_0_18px_rgba(47,194,165,0.3)]"
          data-instgrm-permalink="https://www.instagram.com/reel/DM9_i-xvnr_/?utm_source=ig_web_copy_link"
          data-instgrm-version="14"
          style={{
            maxWidth: "325px",
            minWidth: "325px",
            borderRadius: "16px",
            background: "#1E2126",
          }}
        ></blockquote>
      </div>

      {/* SOCIAL MEDIA */}
      <div className="flex flex-wrap items-center justify-center gap-10 mt-4">
        <a
          href="https://www.instagram.com/skupy.digitalprinting"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-gray-300 hover:text-[#2FC2A5] transition-all duration-300"
        >
          <Instagram size={24} />
          <span className="font-semibold">Instagram</span>
        </a>

        <a
          href="https://www.facebook.com/share/1AMiCYqmak/?mibextid=wwXIfr"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-gray-300 hover:text-[#2FC2A5] transition-all duration-300"
        >
          <Facebook size={24} />
          <span className="font-semibold">Facebook</span>
        </a>

        <a
          href="https://www.youtube.com/@SkupyPrinting"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-gray-300 hover:text-[#2FC2A5] transition-all duration-300"
        >
          <Youtube size={24} />
          <span className="font-semibold">YouTube</span>
        </a>
      </div>
    </div>
  );
};

export default About;
