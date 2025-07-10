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
    // Tambahkan Guest Page sebagai item biasa
    {
      name: "Guest Page",
      path: "https://url-projectuas.vercel.app/",
      external: true,
    },
  ];

  return (
    <aside className="w-64 h-screen bg-[#F8F9FD] p-6 flex flex-col">
      {/* Logo dan Nama Brand */}
      <div className="flex items-center gap-3 mb-10">
        <img
          src="/budiman.png"
          alt="Logo"
          className="w-10 h-10 object-contain rounded-full"
        />
        <span className="text-2xl font-bold text-red-600">
          Budiman Swalayan
        </span>
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
              className="flex items-center px-4 py-2 rounded-lg text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-red-600 transition-all"
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
                    ? "bg-red-100 text-red-600"
                    : "text-gray-500 hover:bg-gray-100 hover:text-red-600"
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
        className="mt-auto bg-red-100 rounded-lg p-4 text-center text-sm text-red-700"
        onClick={() => alert("Ingin Kembali?")}
      >
        Kembali ke Home
      </button>
    </aside>
  );
};

export default Sidebar;
