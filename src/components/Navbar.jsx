import { NavLink } from "react-router-dom";
import { Shirt } from "lucide-react";

export default function Navbar() {
  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-[#2A2D34] border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LEFT BRAND */}
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-[#2FC2A5]/10">
            <Shirt size={22} className="text-[#2FC2A5]" />
          </div>
          <h1 className="text-xl font-bold tracking-wide text-[#2FC2A5]">
            Bosx Apparel Custom Jersey
          </h1>
        </div>

        {/* RIGHT MENU */}
        <ul className="flex items-center gap-10 text-lg font-medium text-white">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-[#2FC2A5] border-b-2 border-[#2FC2A5] pb-1"
                : "hover:text-[#2FC2A5] transition"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/custom"
            className={({ isActive }) =>
              isActive
                ? "text-[#2FC2A5] border-b-2 border-[#2FC2A5] pb-1"
                : "hover:text-[#2FC2A5] transition"
            }
          >
            Custom
          </NavLink>

          <NavLink
            to="/collection"
            className={({ isActive }) =>
              isActive
                ? "text-[#2FC2A5] border-b-2 border-[#2FC2A5] pb-1"
                : "hover:text-[#2FC2A5] transition"
            }
          >
            Collection
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-[#2FC2A5] border-b-2 border-[#2FC2A5] pb-1"
                : "hover:text-[#2FC2A5] transition"
            }
          >
            About
          </NavLink>
        </ul>

      </nav>
    </header>
  );
}
