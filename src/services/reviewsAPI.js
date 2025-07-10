// Import library axios untuk melakukan HTTP request
import axios from "axios";

// URL endpoint REST API Supabase (table: reviews)
const API_URL = "https://iunfuggxwfqqbdhpjuef.supabase.co/rest/v1/Reviews";

// API Key yang digunakan untuk otentikasi ke Supabase
const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml1bmZ1Z2d4d2ZxcWJkaHBqdWVmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA4MzM2NTIsImV4cCI6MjA2NjQwOTY1Mn0.RlUys65WokFLdtHGQMJtAuFpLt8YQ0H7_r9evsJBJAg";

// Header default untuk semua request
const baseHeaders = {
  apikey: API_KEY, // API Key
  Authorization: `Bearer ${API_KEY}`, // Token Bearer untuk otorisasi Supabase
  "Content-Type": "application/json", // Tipe konten yang dikirim (JSON)
};

// Objek `reviewsAPI` yang berisi fungsi-fungsi untuk berinteraksi dengan tabel reviews
export const reviewsAPI = {
  // Fungsi untuk mengambil semua data review dari Supabase
  async fetchReviews() {
    const response = await axios.get(API_URL, { headers: baseHeaders }); // GET request ke endpoint reviews
    return response.data; // Mengembalikan data review dalam bentuk array
  },

  // Fungsi untuk menambahkan review baru
  async createReview(data) {
    const response = await axios.post(
      API_URL, // Endpoint tujuan POST
      [data], // ← Supabase REST API mengharuskan data dikirim dalam bentuk array
      {
        headers: {
          ...baseHeaders, // Gunakan header dasar
          Prefer: "return=representation", // ← WAJIB: supaya Supabase mengembalikan data yang disimpan
        },
      }
    );
    return response.data; // Mengembalikan data hasil create (berupa objek review)
  },

  // Fungsi untuk menghapus review berdasarkan ID
  async deleteReview(id) {
    const response = await axios.delete(`${API_URL}?id=eq.${id}`, {
      headers: baseHeaders, // Kirim header default
    });
    return response.data; // Mengembalikan hasil (biasanya kosong / metadata)
  },
};
