import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// Supabase API config
const API_URL = "https://qfmewlqgxlsifxwctcms.supabase.co/rest/v1/customer";
const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFmbWV3bHFneGxzaWZ4d2N0Y21zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk5NzA2MjYsImV4cCI6MjA2NTU0NjYyNn0.tzbBhfOp8OAK2JADi05NiLY7s67oaR-K41BJ2QD7x5E";

const headers = {
  apikey: API_KEY,
  Authorization: `Bearer ${API_KEY}`,
  "Content-Type": "application/json",
  Prefer: "return=representation",
};

export default function FormCustomer() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    customer_name: "",
    email: "",
    phone: "",
    loyalty: "Silver",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post(API_URL, [formData], { headers });
      alert("✅ Customer berhasil ditambahkan!");
      navigate("/customers");
    } catch (error) {
      alert("❌ Gagal menambahkan customer.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow rounded-lg mt-6">
      <h2 className="text-2xl font-bold text-red-700 mb-4">Tambah Customer</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="nama"
          placeholder="Nama Customer"
          value={formData.customer_name}
          onChange={handleChange}
          required
          className="w-full p-3 border border-red-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-3 border border-red-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
        />
        <input
          type="text"
          name="no telp"
          placeholder="Nomor Telepon"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full p-3 border border-red-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
        />
        <select
          name="loyalty"
          value={formData.loyalty}
          onChange={handleChange}
          className="w-full p-3 border border-red-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
        >
          <option value="Gold">Gold</option>
          <option value="Silver">Silver</option>
          <option value="Bronze">Bronze</option>
        </select>
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition"
        >
          {loading ? "Menyimpan..." : "Simpan Customer"}
        </button>
      </form>
    </div>
  );
}
