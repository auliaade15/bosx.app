import {
    FaShoppingCart,
    FaTruck,
    FaBan,
    FaDollarSign,
    FaPlus,
  } from "react-icons/fa";
  import PageHeader from "../components/PageHeader";
  import {
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
  } from "recharts";
  
  export default function Dashboard() {
    // Dummy data grafik
    const data = [
      { name: "Jan", orders: 40 },
      { name: "Feb", orders: 55 },
      { name: "Mar", orders: 65 },
      { name: "Apr", orders: 50 },
      { name: "May", orders: 70 },
      { name: "Jun", orders: 80 },
    ];
  
    // Dummy data customer
    const customers = [
        { id: 1, name: "Rina Maulida", email: "rina@email.com", orders: 8, totalSpent: "Rp. 850.000" },
        { id: 2, name: "Dedi Pratama", email: "dedi@email.com", orders: 4, totalSpent: "Rp. 420.000" },
        { id: 3, name: "Novi Ananda", email: "novi@email.com", orders: 6, totalSpent: "Rp. 610.000" },
        { id: 4, name: "Rizky Fauzan", email: "rizky@email.com", orders: 5, totalSpent: "Rp. 540.000" },
      ];
  
    return (
      <div id="dashboard-container" className="bg-gray-100 min-h-screen">
        {/* Page Header */}
        <PageHeader
          title="Supermarket"
          breadcrumb="Dashboard"
          currentPage="Order List"
          buttonLabel="Tambah Produk"
        />
  
        {/* Dashboard Stats Cards */}
        <div className="p-5 grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div className="flex items-center space-x-5 bg-white rounded-lg shadow-md p-4">
            <div className="bg-green-500 text-white rounded-full p-4 text-2xl">
              <FaShoppingCart />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold">86</span>
              <span className="text-gray-500">Total Orders</span>
            </div>
          </div>
  
          <div className="flex items-center space-x-5 bg-white rounded-lg shadow-md p-4">
            <div className="bg-blue-500 text-white rounded-full p-4 text-2xl">
              <FaTruck />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold">195</span>
              <span className="text-gray-500">Total Delivered</span>
            </div>
          </div>
  
          <div className="flex items-center space-x-5 bg-white rounded-lg shadow-md p-4">
            <div className="bg-red-500 text-white rounded-full p-4 text-2xl">
              <FaBan />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold">47</span>
              <span className="text-gray-500">Total Canceled</span>
            </div>
          </div>
  
          <div className="flex items-center space-x-5 bg-white rounded-lg shadow-md p-4">
            <div className="bg-yellow-500 text-white rounded-full p-4 text-2xl">
              <FaDollarSign />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold">Rp.230 Juta</span>
              <span className="text-gray-500">Total Revenue</span>
            </div>
          </div>
        </div>
  
        {/* Grafik Order Per Bulan */}
        <div className="p-5">
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Grafik Order Per Bulan
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={data}>
                <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="orders"
                  stroke="#10B981"
                  strokeWidth={3}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
  
          {/* Tabel Customer */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-800">
                Daftar Customer
              </h2>
              <button className="flex items-center bg-green-500 text-white px-4 py-2 rounded-lg shadow hover:bg-green-600 transition">
                <FaPlus className="mr-2" />
                Tambah Customer
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="table-auto w-full border-collapse">
                <thead>
                  <tr className="bg-gray-200 text-left">
                    <th className="p-3 border">#</th>
                    <th className="p-3 border">Nama</th>
                    <th className="p-3 border">Email</th>
                    <th className="p-3 border">Total Orders</th>
                    <th className="p-3 border">Total Belanja</th>
                  </tr>
                </thead>
                <tbody>
                  {customers.map((customer, index) => (
                    <tr
                      key={customer.id}
                      className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                    >
                      <td className="p-3 border">{customer.id}</td>
                      <td className="p-3 border">{customer.name}</td>
                      <td className="p-3 border">{customer.email}</td>
                      <td className="p-3 border">{customer.orders}</td>
                      <td className="p-3 border">{customer.totalSpent}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
  
        </div>
      </div>
    );
  }
  