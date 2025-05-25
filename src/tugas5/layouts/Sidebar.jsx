import {
    MdDashboard,
    MdInventory,
    MdCategory,
    MdLocalShipping,
    MdSettings,
    MdPeopleAlt
  } from "react-icons/md";
  import { FaBoxOpen } from "react-icons/fa";
  import { RiProductHuntLine } from "react-icons/ri";
  
  export default function Sidebar() {
    return (
      <div
        id="sidebar"
        className="flex min-h-screen w-90 flex-col bg-white p-10 shadow-lg"
      >
        {/* Logo */}
        <div id="sidebar-logo" className="flex flex-col">
          <span
            id="logo-title"
            className="font-poppins-extrabold text-[48px] text-gray-900"
          >
            Gomart
            <b id="logo-dot" className="text-hijau">.</b>
          </span>
          <span id="logo-subtitle" className="font-semibold text-gray-400">
            Supermarket Admin Dashboard
          </span>
        </div>
  
        {/* List Menu */}
        <div id="sidebar-menu" className="mt-10">
          <ul id="menu-list" className="space-y-3">
            <li>
              <div className="menu-item">
                <MdDashboard className="mr-4 text-xl" />
                Dashboard
              </div>
            </li>
            <li>
              <div className="menu-item">
                <RiProductHuntLine className="mr-4 text-xl" />
                Produk
              </div>
            </li>
            <li>
              <div className="menu-item">
                <MdCategory className="mr-4 text-xl" />
                Kategori
              </div>
            </li>
            <li>
              <div className="menu-item">
                <MdInventory className="mr-4 text-xl" />
                Inventaris
              </div>
            </li>
            <li>
              <div className="menu-item">
                <MdLocalShipping className="mr-4 text-xl" />
                Pengiriman
              </div>
            </li>
            <li>
              <div className="menu-item">
                <MdPeopleAlt className="mr-4 text-xl" />
                Pengguna
              </div>
            </li>
            <li>
              <div className="menu-item">
                <MdSettings className="mr-4 text-xl" />
                Pengaturan
              </div>
            </li>
          </ul>
        </div>
  
        {/* Footer */}
        <div id="sidebar-footer" className="mt-auto">
          <div
            id="footer-card"
            className="bg-hijau p-4 rounded-lg shadow-lg mb-8 flex items-center justify-between"
          >
            {/* Text & Button */}
            <div id="footer-text" className="text-white text-sm space-y-3">
              <span>Kelola data toko mu di sini!</span>
              <div
                id="add-menu-button"
                className="bg-white text-gray-600 text-xs font-semibold rounded-md px-4 py-2 flex items-center w-fit cursor-pointer shadow"
              >
                + Kelola
              </div>
            </div>
  
            {/* Avatar */}
            <img
              id="footer-avatar"
              className="w-14 h-14 rounded-full mt-15"
              src="https://avatar.iran.liara.run/public/28"
              alt="avatar"
            />
          </div>
  
          {/* Footer Info */}
          <span id="footer-brand" className="font-semibold text-gray-400 text-sm block">
            Supermarket Admin 
          </span>
          <p
            id="footer-copyright"
            className="font-light text-gray-400 text-xs mt-1"
          >
            &copy; 2025 All Rights Reserved
          </p>
        </div>
      </div>
    );
  }
  
  // Tambahkan styling umum untuk menu item
  const menuItemStyles = `
  .menu-item {
    display: flex;
    align-items: center;
    padding: 1rem;
    font-weight: 500;
    color: #4B5563;
    border-radius: 0.75rem;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  }
  .menu-item:hover {
    background-color: #bbf7d0; /* green-200 */
    color: #16a34a; /* hijau */
    font-weight: 800;
  }
  `;
  
  // Inject CSS langsung
  if (typeof document !== "undefined") {
    const style = document.createElement("style");
    style.textContent = menuItemStyles;
    document.head.appendChild(style);
  }
  