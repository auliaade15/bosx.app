// Mengimpor library axios untuk melakukan HTTP request
import axios from "axios";

// URL endpoint dari Supabase REST API untuk tabel 'product'
const API_URL = "https://qyycbygmyufdeowjliqt.supabase.co/rest/v1/supplier";

// API key dari Supabase untuk autentikasi
const API_KEY = import.meta.env.VITE_API_KEY;

// Header standar yang dibutuhkan untuk akses Supabase
const headers = {
  apikey: API_KEY, // API key digunakan untuk otorisasi
  Authorization: `Bearer ${API_KEY}`, // Token Bearer (biasanya sama dengan API key untuk role anon)
  "Content-Type": "application/json", // Format data yang dikirim/diterima adalah JSON
};

// Objek export berisi fungsi-fungsi untuk manipulasi data produk
export const supplierAPI = {
  // Fungsi untuk mengambil semua data produk dari Supabase
  async fetchSupplier() {
    const response = await axios.get(API_URL, { headers }); // Mengirim GET request ke API_URL
    return response.data; // Mengembalikan data dari response
  },

  // Fungsi untuk membuat produk baru di Supabase
  async createSupplier(data) {
    try {
      const response = await axios.post(
        API_URL, // Endpoint tujuan
        [data], // Data harus dalam bentuk array (Supabase menerima banyak data sekaligus)
        {
          headers: {
            ...headers, // Menggabungkan header yang sudah ada
            Prefer: "return=representation", // Supaya Supabase mengembalikan data yang baru disimpan
          },
        }
      );
      return response.data; // Mengembalikan data hasil simpan
    } catch (err) {
      // Menampilkan error di konsol jika terjadi kesalahan saat menyimpan
      console.error("Gagal membuat supplier:", err.response?.data || err.message);
      throw err; // Melempar kembali error agar bisa ditangani di pemanggilnya
    }
  },

  
  // ✅ Fungsi untuk update produk
  async updateSupplier(id, data) {
    try {
      const response = await axios.patch(
        `${API_URL}?id=eq.${id}`,
        data,
        {
          headers: {
            ...headers,
            Prefer: "return=representation",
          },
        }
      );
      return response.data;
    } catch (err) {
      console.error("Gagal update supplier:", err.response?.data || err.message);
      throw err;
    }
  },

  // Fungsi untuk menghapus produk berdasarkan id
  async deleteSupplier(id) {
    try {
      const response = await axios.delete(
        `${API_URL}?id=eq.${id}`, // Query string untuk filter: id = id yang dikirim
        { headers } // Header yang diperlukan untuk otorisasi
      );
      return response.data; // Mengembalikan data hasil delete
    } catch (err) {
      // Menampilkan error di konsol jika gagal menghapus
      console.error("Gagal menghapus supplier:", err.response?.data || err.message);
      throw err; // Melempar error kembali
    }
  },
};
