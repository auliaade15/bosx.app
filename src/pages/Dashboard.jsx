// src/pages/Dashboard.jsx

import { BarChart, Bar, XAxis, YAxis, Tooltip, PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const salesData = [
  { name: '01', last6days: 400, lastWeek: 240 },
  { name: '02', last6days: 300, lastWeek: 139 },
  { name: '03', last6days: 200, lastWeek: 980 },
  { name: '04', last6days: 278, lastWeek: 390 },
  { name: '05', last6days: 189, lastWeek: 480 },
  { name: '06', last6days: 239, lastWeek: 380 },
];

const pieData = [
  { name: 'Afternoon', value: 40 },
  { name: 'Evening', value: 32 },
  { name: 'Morning', value: 28 },
];

const COLORS = ['#5D5FEF', '#A0A3FF', '#D1D3FF'];

export default function Dashboard() {
  return (
    <div className="p-6 space-y-6">
      
      {/* Revenue */}
      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <h2 className="text-gray-500 text-sm">Revenue</h2>
        <div className="text-3xl font-semibold text-[#2D2F39] mt-2">IDR 7.852.000</div>
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
              <Pie data={pieData} dataKey="value" innerRadius={50} outerRadius={80}>
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="text-sm text-center text-gray-500 mt-2">Afternoon 40%</div>
        </div>
      </div>

      {/* Rating and Most Ordered */}
      <div className="grid grid-cols-2 gap-6">
        {/* Rating */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h3 className="font-medium mb-4">Stock Health</h3>
          <div className="flex gap-4 justify-center">
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-[#A0E3F2] rounded-full flex items-center justify-center text-lg font-bold">92%</div>
              <div className="mt-2 text-sm">Freshness</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-[#CDB4DB] rounded-full flex items-center justify-center text-lg font-bold">85%</div>
              <div className="mt-2 text-sm">Packaging</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-[#FDA4AF] rounded-full flex items-center justify-center text-lg font-bold">85%</div>
              <div className="mt-2 text-sm">Stock Quality</div>
            </div>
          </div>
        </div>

        {/* Most Ordered Food */}
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

    </div>
  );
}
