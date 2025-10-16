import React, { useState } from "react";
import { FiSearch, FiBell, FiChevronDown } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Header() {
  const [openProfile, setOpenProfile] = useState(false);

  return (
    <header className="w-full flex items-center justify-between px-4 py-2 bg-white shadow-sm relative z-30">
      {/* Search */}
      <div className="flex items-center w-1/3 bg-green-50 rounded-md px-3 py-2">
        <input
          type="text"
          placeholder="Search"
          className="flex-1 bg-transparent outline-none text-sm text-green-700 placeholder-green-400"
        />
        <FiSearch className="text-green-400" />
      </div>

      {/* Brand + Notif + Profile */}
      <div className="flex items-center gap-4">
        {/* Brand */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-lg text-green-600">
            🛒
          </div>
          <span className="text-sm font-medium text-green-700">
            Thewa Admin
          </span>
        </div>

        {/* Notification */}
        <button className="relative">
          <FiBell className="text-green-600 text-xl" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full"></span>
        </button>

        {/* Profile */}
        <div className="relative">
          <button
            onClick={() => setOpenProfile(!openProfile)}
            className="flex items-center gap-2 focus:outline-none"
          >
            <img
              src="https://i.pinimg.com/736x/f8/bb/55/f8bb55c33cfaba2ee01980e5dea601b5.jpg"
              alt="profile"
              className="w-10 h-10 rounded-full border border-green-300"
            />
            <FiChevronDown className="text-green-600" />
          </button>

          {openProfile && (
            <div className="absolute right-0 mt-2 w-40 bg-white border border-green-100 shadow-lg rounded-md py-2 z-50">
              <Link
                to="/profile"
                className="block px-4 py-2 text-sm text-green-700 hover:bg-green-50"
                onClick={() => setOpenProfile(false)}
              >
                My Profile
              </Link>
              <Link
                to="/settings"
                className="block px-4 py-2 text-sm text-green-700 hover:bg-green-50"
                onClick={() => setOpenProfile(false)}
              >
                Settings
              </Link>
              <button
                className="block w-full text-left px-4 py-2 text-sm text-green-700 hover:bg-green-50"
                onClick={() => {
                  setOpenProfile(false);
                  // tambahkan fungsi logout jika ada
                }}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
