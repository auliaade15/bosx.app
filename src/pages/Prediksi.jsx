import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Chart as ChartJS,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(Tooltip, Legend, CategoryScale, LinearScale, BarElement);

export default function Prediksi() {
  const [produkTerlaris, setProdukTerlaris] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://9d98888b94d5.ngrok-free.app/prediksi") // 🔁 GANTI dengan URL NGROK kamu
      .then((res) => {
        if (Array.isArray(res.data)) {
          setProdukTerlaris(res.data);
        } else {
          console.error("Data bukan array:", res.data);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Gagal ambil data:", err);
        setLoading(false);
      });
  }, []);

  const barData = {
    labels: produkTerlaris.map((p) => p.Nama_Produk || "Tidak diketahui"),
    datasets: [
      {
        label: "Jumlah Produk Terjual",
        data: produkTerlaris.map((p) => p.Jumlah_Produk || 0),
        backgroundColor: [
          "#4ade80", "#60a5fa", "#facc15", "#fb923c", "#f472b6", "#a78bfa",
        ],
        borderWidth: 1,
      },
    ],
  };

  const barOptions = {
    indexAxis: "y",
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: "#1e3a8a",
        titleColor: "#fff",
        bodyColor: "#facc15",
      },
    },
    scales: {
      x: {
        ticks: { color: "#4b5563" },
        grid: { color: "#e5e7eb" },
      },
      y: {
        ticks: { color: "#1e3a8a" },
        grid: { display: false },
      },
    },
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg border border-green-100">
      <h2 className="text-3xl font-bold mb-8 text-center text-green-700">
        📊 Rekomendasi Produk Terlaris - Budiman Swalayan
      </h2>

      {loading ? (
        <p className="text-center text-gray-500">Memuat data produk terlaris...</p>
      ) : produkTerlaris.length > 0 ? (
        <div className="text-center">
          <h4 className="text-lg font-semibold mb-4 text-gray-700">
            Daftar Produk Paling Laku Minggu Ini
          </h4>
          <Bar data={barData} options={barOptions} />
        </div>
      ) : (
        <p className="text-center text-red-500">⚠️ Tidak ada data produk laris.</p>
      )}
    </div>
  );
}
