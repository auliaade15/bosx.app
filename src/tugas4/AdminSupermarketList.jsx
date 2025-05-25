import React, { useState } from 'react';
import data from './supermarket.json';

const AdminSupermarketList = () => {
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [filterCity, setFilterCity] = useState('');

  const cities = [...new Set(data.map((item) => item.location.city))];

  const filtered = data
    .filter((s) =>
      s.name.toLowerCase().includes(search.toLowerCase())
    )
    .filter((s) =>
      filterCity ? s.location.city === filterCity : true
    )
    .sort((a, b) => {
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      if (sortBy === 'type') return a.type.localeCompare(b.type);
      return 0;
    });

  return (
    <div className="min-h-screen bg-pink-100 text-gray-800 p-4 sm:p-8 font-sans">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-pink-700">
        Daftar Supermarket
      </h1>

      <div className="flex flex-col sm:flex-row flex-wrap gap-4 mb-6 justify-center items-center">
        <input
          type="text"
          placeholder="🔍 Masukkan supermarket yang dicari..."
          className="px-4 py-2 rounded-md border border-pink-300 bg-white text-black w-[250px]"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="px-4 py-2 rounded-md border border-pink-300 bg-white text-black"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="">🔽 Urutkan</option>
          <option value="name">Nama</option>
          <option value="type">Tipe</option>
        </select>
        <select
          className="px-4 py-2 rounded-md border border-pink-300 bg-white text-black"
          value={filterCity}
          onChange={(e) => setFilterCity(e.target.value)}
        >
          <option value="">🌍 Asal</option>
          {cities.map((city, idx) => (
            <option key={idx} value={city}>{city}</option>
          ))}
        </select>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-separate border-spacing-y-4">
          <thead className="bg-pink-300 text-gray-800 rounded-md">
            <tr className="text-left">
              <th className="px-4 py-2">No</th>
              <th className="px-4 py-2">Gambar</th>
              <th className="px-4 py-2">Nama</th>
              <th className="px-4 py-2">Tipe</th>
              <th className="px-4 py-2">Jam Buka</th>
              <th className="px-4 py-2">Asal</th>
              <th className="px-4 py-2">Telepon</th>
              <th className="px-4 py-2">Manager</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((s, index) => (
              <tr key={s.id} className="bg-white text-gray-800 rounded-lg shadow">
                <td className="px-4 py-3 font-medium">{index + 1}</td>
                <td className="px-4 py-3">
                  <img
                    src={s.photo}
                    alt={s.name}
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-md object-cover"
                  />
                </td>
                <td className="px-4 py-3 font-semibold">{s.name}</td>
                <td className="px-4 py-3">{s.type}</td>
                <td className="px-4 py-3">{s.openHours}</td>
                <td className="px-4 py-3">{s.location.city}</td>
                <td className="px-4 py-3">{s.contact.phone}</td>
                <td className="px-4 py-3">{s.manager.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminSupermarketList;
