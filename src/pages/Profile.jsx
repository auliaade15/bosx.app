import React from "react";
import { FiUser, FiMapPin, FiSettings, FiLogOut, FiActivity } from "react-icons/fi";

export default function Profile() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row gap-6 p-6">
      {/* Sidebar */}
      <aside className="w-full md:w-72 bg-white p-6 rounded-2xl shadow border border-gray-100">
        <div className="flex flex-col items-center mb-6">
          <img
            src="https://i.pinimg.com/736x/f8/bb/55/f8bb55c33cfaba2ee01980e5dea601b5.jpg"
            alt="Admin Avatar"
            className="w-24 h-24 rounded-full mb-2 object-cover"
          />
          <h2 className="text-xl font-bold text-gray-800">Aulia Ade</h2>
          <p className="text-sm text-gray-500">aulia@gmail.com</p>
        </div>


        <ul className="space-y-3">
          <li className="flex items-center gap-2 text-red-600 font-semibold cursor-pointer bg-red-50 p-2 rounded-lg">
            <FiUser />
            <span>Edit Profil</span>
          </li>
          <li className="flex items-center gap-2 text-gray-700 hover:text-red-600 hover:bg-red-50 p-2 rounded-lg cursor-pointer">
            <FiMapPin />
            <span>Alamat Toko</span>
          </li>
          <li className="flex items-center gap-2 text-gray-700 hover:text-red-600 hover:bg-red-50 p-2 rounded-lg cursor-pointer">
            <FiActivity />
            <span>Aktivitas</span>
          </li>
          <li className="flex items-center gap-2 text-gray-700 hover:text-red-600 hover:bg-red-50 p-2 rounded-lg cursor-pointer">
            <FiSettings />
            <span>Pengaturan Sistem</span>
          </li>
          <li className="flex items-center gap-2 text-red-600 cursor-pointer p-2 mt-6 hover:bg-red-50 rounded-lg">
            <FiLogOut />
            <span>Keluar</span>
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col gap-6">
        {/* Header Info Box */}
        <div className="bg-red-600 text-white rounded-2xl p-6 shadow flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-sm">Role</h3>
            <h2 className="text-2xl font-bold">Administrator</h2>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-sm">Jumlah Pengguna</h3>
            <p className="text-2xl font-bold">42</p>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-sm">Toko Aktif</h3>
            <p className="text-2xl font-bold">3</p>
          </div>
        </div>

        {/* Form Edit */}
        <div className="bg-white p-6 rounded-2xl shadow border border-gray-100 max-w-4xl">
          <h2 className="text-xl font-bold mb-4 text-gray-800">Pengaturan Admin</h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-sm font-medium text-gray-700">Nama Depan</label>
              <input
                type="text"
                defaultValue="Aulia"
                className="w-full mt-1 border border-gray-300 focus:border-red-500 focus:ring-1 focus:ring-red-500 p-2 rounded-lg transition"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Nama Belakang</label>
              <input
                type="text"
                defaultValue="Ade"
                className="w-full mt-1 border border-gray-300 focus:border-red-500 focus:ring-1 focus:ring-red-500 p-2 rounded-lg transition"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                defaultValue="aulia@swalayan.com"
                disabled
                className="w-full mt-1 border border-gray-200 bg-gray-100 cursor-not-allowed p-2 rounded-lg"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Nomor Telepon</label>
              <input
                type="text"
                defaultValue="081234567890"
                className="w-full mt-1 border border-gray-300 focus:border-red-500 focus:ring-1 focus:ring-red-500 p-2 rounded-lg transition"
              />
            </div>
          </form>

          <div className="text-right mt-6">
            <button className="bg-red-600 hover:bg-red-700 text-white font-medium px-6 py-2 rounded-lg transition">
              Simpan Perubahan
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
