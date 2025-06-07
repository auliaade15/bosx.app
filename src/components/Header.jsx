import { FaBell, FaSearch } from "react-icons/fa";
import { FcAreaChart } from "react-icons/fc";
import { SlSettings } from "react-icons/sl";

export default function Header() {
  return (
    <div
      id="header-container"
      className="flex justify-between items-center p-4"
    >
      {/* Search Bar */}
      <div id="search-bar" className="relative w-full max-w-lg">
        <input
          id="search-input"
          type="text"
          placeholder="Cari disini..."
          className="border border-gray-100 p-2 pr-10 bg-white w-full max-w-lg rounded-md outline-none"
        />
        <FaSearch
          id="search-icon"
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-300"
        />
      </div>

      
      <div id="icons-container" className="flex items-center space-x-4">
       
        {/* Profile Section */}
        <div
          id="profile-container"
          className="flex items-center space-x-4 border-l pl-4 border-gray-300"
        >
          <span id="profile-text">
            Hello, <b>Admin Supermarket</b>
          </span>
          <img
            id="profile-avatar"
            src="https://avatar.iran.liara.run/public/28"
            className="w-10 h-10 rounded-full"
          />
        </div>
      </div>
    </div>
  );
}