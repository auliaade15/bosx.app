import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const menus = [
    { name: "Dashboard", path: "/" },
    { name: "Orders", path: "/orders" },
    { name: "Customers", path: "/customers" },
    { name: "Suppliers", path: "/suppliers" },
    { name: "Product", path: "/product" },
    { name: "Reviews", path: "/reviews" },
    { name: "Artikel", path: "/artikel" },
    // {
    //   name: "Guest Page",
    //   path: "https://url-projectuas.vercel.app/",
    //   external: true,
    // },
  ];

  return (
    <aside className="w-64 h-screen bg-[#F8F9FD] p-6 flex flex-col">
      {/* Logo dan Nama Brand */}
      <div className="flex items-center gap-3 mb-10">
        <img
          src="/skupy logo.jpg"
          alt="Logo"
          className="w-10 h-10 object-contain rounded-full"
        />
        <span className="text-2xl font-bold text-green-600">Skupy</span>
      </div>

      {/* Navigasi Menu */}
      <nav className="flex flex-col gap-3 mb-6">
        {menus.map((menu, idx) =>
          menu.external ? (
            <a
              key={idx}
              href={menu.path}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 py-2 rounded-lg text-sm font-medium text-gray-500 hover:bg-green-100 hover:text-green-600 transition-all"
            >
              {menu.name}
            </a>
          ) : (
            <NavLink
              key={idx}
              to={menu.path}
              className={({ isActive }) =>
                `flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  isActive
                    ? "bg-green-100 text-green-600"
                    : "text-gray-500 hover:bg-green-100 hover:text-green-600"
                }`
              }
            >
              {menu.name}
            </NavLink>
          )
        )}
      </nav>

      {/* Tombol Kembali */}
      <button
        className="mt-auto bg-green-100 rounded-lg p-4 text-center text-sm text-green-700 hover:bg-green-200 transition-all"
        onClick={() => alert("Ingin Kembali?")}
      >
        Kembali ke Home
      </button>
    </aside>
  );
};

export default Sidebar;
