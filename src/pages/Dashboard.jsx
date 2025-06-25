// src/pages/Dashboard.jsx

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";
import { useEffect, useState } from "react";
import axios from "axios";
import { BsFillExclamationDiamondFill } from "react-icons/bs";

const salesData = [
  { name: "01", last6days: 400, lastWeek: 240 },
  { name: "02", last6days: 300, lastWeek: 139 },
  { name: "03", last6days: 200, lastWeek: 980 },
  { name: "04", last6days: 278, lastWeek: 390 },
  { name: "05", last6days: 189, lastWeek: 480 },
  { name: "06", last6days: 239, lastWeek: 380 },
];

const pieData = [
  { name: "Afternoon", value: 40 },
  { name: "Evening", value: 32 },
  { name: "Morning", value: 28 },
];

const COLORS = ["#5D5FEF", "#A0A3FF", "#D1D3FF"];

export default function Dashboard() {
  const [advice, setAdvice] = useState("");
  const [error, setError] = useState("");

  // penggunaan API
  useEffect(() => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        if (response.status === 200) {
          setAdvice(response.data.slip.advice);
        } else {
          setError("Failed to fetch advice.");
        }
      })
      .catch((err) => {
        setError(err.message || "An unknown error occurred");
      });
  }, []);

  // tampilan error
  const errorInfo = error ? (
    <div className="bg-red-200 mb-5 p-5 text-sm font-light text-gray-600 rounded flex items-center">
      <BsFillExclamationDiamondFill className="text-red-600 me-2 text-lg" />
      {error}
    </div>
  ) : null;

  return (
    <div className="p-6 space-y-6">
      {errorInfo}
      {/* Menampilkan quotes */}
      <div className="bg-white rounded-2xl p-6 shadow-sm text-center">
        <h3 className="font-medium mb-4">Quotes of the day</h3>
        <p className="text-gray-700 italic">"{advice}"</p>
      </div>

      {/* Revenue */}
      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <h2 className="text-gray-500 text-sm">Revenue</h2>
        <div className="text-3xl font-semibold text-[#2D2F39] mt-2">
          IDR 7.852.000
        </div>
        <div className="text-green-500 text-sm mt-1">+2.1% vs last week</div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-3 gap-6">
        {/* Sales Bar Chart */}
        <div className="bg-white rounded-2xl p-6 shadow-sm col-span-2">
          <h3 className="font-medium mb-4">Sales</h3>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={salesData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="last6days" fill="#5D5FEF" />
              <Bar dataKey="lastWeek" fill="#A0A3FF" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Order Time Pie Chart */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h3 className="font-medium mb-4">Order Time</h3>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                innerRadius={50}
                outerRadius={80}
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="text-sm text-center text-gray-500 mt-2">
            Afternoon 40%
          </div>
        </div>
      </div>

      {/* Rating and Most Ordered */}
      <div className="grid grid-cols-2 gap-6">
        {/* Rating */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h3 className="font-medium mb-4">Stock Health</h3>
          <div className="flex gap-4 justify-center">
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-[#A0E3F2] rounded-full flex items-center justify-center text-lg font-bold">
                92%
              </div>
              <div className="mt-2 text-sm">Freshness</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-[#CDB4DB] rounded-full flex items-center justify-center text-lg font-bold">
                85%
              </div>
              <div className="mt-2 text-sm">Packaging</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-[#FDA4AF] rounded-full flex items-center justify-center text-lg font-bold">
                85%
              </div>
              <div className="mt-2 text-sm">Stock Quality</div>
            </div>
          </div>
        </div>

        {/* Best Selling Products */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h3 className="font-medium mb-4">Best Selling Products</h3>
          <ul className="space-y-3">
            <li className="flex justify-between">
              <span>Beras</span>
              <span>IDR 150.000</span>
            </li>
            <li className="flex justify-between">
              <span>Minyak</span>
              <span>IDR 20.000</span>
            </li>
            <li className="flex justify-between">
              <span>Tepung</span>
              <span>IDR 10.000</span>
            </li>
            <li className="flex justify-between">
              <span>Gula</span>
              <span>IDR 18.000</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="bg-base-300 text-base-content">
            <tr>
              <th>No</th>
              <th>Nama Produk</th>
              <th>Kategori</th>
              <th>Harga</th>
              <th>Stok</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr className="bg-base-200">
              <th>1</th>
              <td>Minyak Goreng Bimoli 1L</td>
              <td>Sembako</td>
              <td>Rp18.000</td>
              <td>120</td>
            </tr>
            {/* row 2 */}
            <tr>
              <th>2</th>
              <td>Beras Sania 5kg</td>
              <td>Sembako</td>
              <td>Rp65.000</td>
              <td>75</td>
            </tr>
            {/* row 3 */}
            <tr className="bg-base-200">
              <th>3</th>
              <td>Sabun Cuci Piring Sunlight 750ml</td>
              <td>Kebutuhan Rumah</td>
              <td>Rp14.500</td>
              <td>98</td>
            </tr>
          </tbody>
        </table>
      </div>

      <ul className="list bg-base-100 rounded-box shadow-md">
        <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">
          Produk Terlaris Minggu Ini
        </li>

        <li className="list-row flex items-center justify-between gap-4 p-2 border-b">
          <div>
            <img
              className="size-10 rounded-box"
              src="https://th.bing.com/th/id/OIP._NPxQSnRU5UUbZIp9VIAxgHaHa?w=163&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
              alt="Minyak Goreng"
            />
          </div>
          <div className="flex-1">
            <div>Minyak Goreng</div>
            <div className="text-xs uppercase font-semibold opacity-60">
              Bimoli
            </div>
          </div>
          <button className="btn btn-square btn-ghost" title="Lihat Detail">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-[1.2em]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
              />
            </svg>
          </button>
          <button
            className="btn btn-square btn-ghost"
            title="Tambah ke Keranjang"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-[1.2em]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.34 2.68A1 1 0 007 17h10m-6 4a1 1 0 100-2 1 1 0 000 2zm6 0a1 1 0 100-2 1 1 0 000 2z"
              />
            </svg>
          </button>
        </li>

        <li className="list-row flex items-center justify-between gap-4 p-2 border-b">
          <div>
            <img
              className="size-10 rounded-box"
              src="https://th.bing.com/th/id/OIP.QVYNJf5UpTJJKQ3GF675KQHaHa?w=179&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
              alt="Beras"
            />
          </div>
          <div className="flex-1">
            <div>Beras 5 kg</div>
            <div className="text-xs uppercase font-semibold opacity-60">
              Sania
            </div>
          </div>
          <button className="btn btn-square btn-ghost" title="Lihat Detail">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-[1.2em]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
              />
            </svg>
          </button>
          <button
            className="btn btn-square btn-ghost"
            title="Tambah ke Keranjang"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-[1.2em]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.34 2.68A1 1 0 007 17h10m-6 4a1 1 0 100-2 1 1 0 000 2zm6 0a1 1 0 100-2 1 1 0 000 2z"
              />
            </svg>
          </button>
        </li>

        <li className="list-row flex items-center justify-between gap-4 p-2">
          <div>
            <img
              className="size-10 rounded-box"
              src="https://th.bing.com/th/id/OIP.IZHE1osgzXL06CrtTWspqQHaHa"
              alt="Sabun Cuci"
            />
          </div>
          <div className="flex-1">
            <div>Sabun Cuci Piring</div>
            <div className="text-xs uppercase font-semibold opacity-60">
              Sunlight
            </div>
          </div>
          <button className="btn btn-square btn-ghost" title="Lihat Detail">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-[1.2em]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
              />
            </svg>
          </button>
          <button
            className="btn btn-square btn-ghost"
            title="Tambah ke Keranjang"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-[1.2em]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.34 2.68A1 1 0 007 17h10m-6 4a1 1 0 100-2 1 1 0 000 2zm6 0a1 1 0 100-2 1 1 0 000 2z"
              />
            </svg>
          </button>
        </li>
      </ul>
    </div>
  );
}
