import React, { useState } from "react";

export default function Settings() {
  const [storeName, setStoreName] = useState("Budiman Swalayan");
  const [openingHours, setOpeningHours] = useState("07:00 - 22:00");
  const [paymentMethods, setPaymentMethods] = useState({
    cash: true,
    qris: true,
    debit: false,
    transfer: true,
  });
  const [notif, setNotif] = useState("");

  const handleTogglePayment = (method) => {
    setPaymentMethods((prev) => ({
      ...prev,
      [method]: !prev[method],
    }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    setNotif("✅ Pengaturan berhasil disimpan.");
    setTimeout(() => setNotif(""), 3000);
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 px-4">
      <div className="bg-white border border-red-200 rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-red-700 mb-6 text-center">
          Pengaturan Admin Supermarket
        </h1>

        {notif && (
          <div className="bg-green-50 border border-green-300 text-green-800 px-4 py-3 rounded mb-6 text-center">
            {notif}
          </div>
        )}

        <form onSubmit={handleSave} className="space-y-6">
          {/* Nama Toko */}
          <div>
            <label className="block text-sm font-semibold text-red-700 mb-1">
              Nama Toko
            </label>
            <input
              type="text"
              value={storeName}
              onChange={(e) => setStoreName(e.target.value)}
              className="w-full border border-red-300 rounded-lg p-3 focus:ring-2 focus:ring-red-400"
              required
            />
          </div>

          {/* Jam Operasional */}
          <div>
            <label className="block text-sm font-semibold text-red-700 mb-1">
              Jam Operasional
            </label>
            <input
              type="text"
              value={openingHours}
              onChange={(e) => setOpeningHours(e.target.value)}
              placeholder="Contoh: 07:00 - 22:00"
              className="w-full border border-red-300 rounded-lg p-3 focus:ring-2 focus:ring-red-400"
              required
            />
          </div>

          {/* Metode Pembayaran */}
          <div>
            <label className="block text-sm font-semibold text-red-700 mb-2">
              Metode Pembayaran Aktif
            </label>
            <div className="grid grid-cols-2 gap-2">
              {Object.keys(paymentMethods).map((method) => (
                <label
                  key={method}
                  className="flex items-center space-x-2 text-red-700"
                >
                  <input
                    type="checkbox"
                    checked={paymentMethods[method]}
                    onChange={() => handleTogglePayment(method)}
                    className="text-red-600"
                  />
                  <span className="capitalize">{method}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Tombol Simpan */}
          <div className="text-center pt-4">
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 font-semibold rounded-lg transition"
            >
              Simpan Pengaturan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
