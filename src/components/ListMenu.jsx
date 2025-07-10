import { BiMessageSquareError } from "react-icons/bi";
import { BiError } from "react-icons/bi";
import { BiErrorCircle } from "react-icons/bi";
import { AiFillHeart } from "react-icons/ai";
import { FaList } from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";

export default function ListMenu() {
  const menuClass = ({ isActive }) =>
    `flex cursor-pointer items-center rounded-xl p-4  space-x-2
      ${
        isActive
          ? "text-hijau bg-green-200 font-extrabold"
          : "text-gray-600 hover:text-hijau hover:bg-green-200 hover:font-extrabold"
      }`;
  return (
    <div id="sidebar-menu" className="mt-10">
      <ul id="menu-list" className="space-y-3">
        <li>
          <NavLink id="menu-1" to="/" className={menuClass}>
            <MdSpaceDashboard className="mr-4 text-xl" />
            Dashboard
          </NavLink>
        </li>

        <li>
          <NavLink id="menu-2" to="orders" className={menuClass}>
            <FaList className="mr-4 text-xl" />
            Orders
          </NavLink>
        </li>

        <li>
          <NavLink id="menu-3" to="customers" className={menuClass}>
            <AiFillHeart className="mr-4 text-xl" />
            Customers
          </NavLink>
        </li>

        <li>
          <NavLink id="menu-4" to="product" className={menuClass}>
            <AiFillHeart className="mr-4 text-xl" />
            Product
          </NavLink>
        </li>

        <li>
          <NavLink id="menu-5" to="reviews" className={menuClass}>
            <AiFillHeart className="mr-4 text-xl" />
            Reviews
          </NavLink>
        </li>

        <li>
          <NavLink id="menu-5" to="artikel" className={menuClass}>
            <AiFillHeart className="mr-4 text-xl" />
            Artikel
          </NavLink>
        </li>
        {/* 
        <li>
          <NavLink id="menu-5" to="prediksi" className={menuClass}>
            <AiFillHeart className="mr-4 text-xl" />
            Prediksi
          </NavLink>
        </li> */}

        {/* 
        <li>
          <NavLink id="menu-6" to="error400" className={menuClass}>
            <BiErrorCircle className="mr-4 text-xl" />
            Error 400
          </NavLink>
        </li>
        <li>
          <NavLink id="menu-7" to="error401" className={menuClass}>
            <BiError className="mr-4 text-xl" />
            Error 401
          </NavLink>
        </li>
        <li>
          <NavLink id="menu-8" to="error403" className={menuClass}>
            <BiMessageSquareError className="mr-4 text-xl" />
            Error 403
          </NavLink>
        </li> */}
      </ul>
    </div>
  );
}
