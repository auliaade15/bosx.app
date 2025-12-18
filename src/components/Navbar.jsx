import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Shirt, Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-[#2FC2A5] border-b-2 border-[#2FC2A5] pb-1"
      : "hover:text-[#2FC2A5] transition";

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-[#2A2D34] border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* BRAND */}
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-[#2FC2A5]/10">
            <Shirt size={22} className="text-[#2FC2A5]" />
          </div>
          <h1 className="text-lg md:text-xl font-bold tracking-wide text-[#2FC2A5]">
            Bosx Apparel
          </h1>
        </div>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-10 text-lg font-medium text-white">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/custom" className={linkClass}>Custom</NavLink>
          <NavLink to="/collection" className={linkClass}>Collection</NavLink>
          <NavLink to="/about" className={linkClass}>About</NavLink>
        </ul>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-6 px-6 pb-6 text-white text-lg font-medium bg-[#2A2D34]">
          <NavLink onClick={() => setOpen(false)} to="/" className={linkClass}>
            Home
          </NavLink>
          <NavLink onClick={() => setOpen(false)} to="/custom" className={linkClass}>
            Custom
          </NavLink>
          <NavLink onClick={() => setOpen(false)} to="/collection" className={linkClass}>
            Collection
          </NavLink>
          <NavLink onClick={() => setOpen(false)} to="/about" className={linkClass}>
            About
          </NavLink>
        </ul>
      </div>
    </header>
  );
}
