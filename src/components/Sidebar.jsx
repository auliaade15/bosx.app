import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const menus = [
    { name: "Dashboard", path: "/" },
    { name: "Orders", path: "/orders" },
    { name: "Customers", path: "/customers" },
    { name: "Suppliers", path: "/suppliers" },
    { name: "Product", path: "/product" },
    { name: "Reviews", path: "/reviews" },
    { name: "Error 400", path: "/error400" },
    { name: "Error 401", path: "/error401" },
    { name: "Error 403", path: "/error403" },
  ];

  return (
    <aside className="w-64 h-screen bg-[#F8F9FD] p-6 flex flex-col">
      <div className="text-2xl font-bold mb-10">
        <span className="text-blue-600">Budiman Swalayan</span>
      </div>

      <nav className="flex flex-col gap-3">
        {menus.map((menu, idx) => (
          <NavLink
            key={idx}
            to={menu.path}
            className={({ isActive }) =>
              `flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                isActive
                  ? "bg-blue-100 text-blue-600"
                  : "text-gray-500 hover:bg-gray-100 hover:text-blue-600"
              }`
            }
          >
            {menu.name}
          </NavLink>
        ))}
      </nav>

      <div className="mt-auto bg-blue-100 rounded-lg p-4 text-center text-sm text-blue-700">
        Organize here!
      </div>
    </aside>
  );
};

export default Sidebar;
