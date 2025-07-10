import axios from "axios";

// URL endpoint REST API Supabase (table: articles)
const API_URL = "https://qyycbygmyufdeowjliqt.supabase.co/rest/v1/articles";

// API Key untuk otentikasi Supabase
const API_KEY = import.meta.env.VITE_API_KEY;

// Header default untuk Supabase
const baseHeaders = {
  apikey: API_KEY,
  Authorization: `Bearer ${API_KEY}`,
  "Content-Type": "application/json",
};

export const articlesAPI = {
  // Ambil semua artikel
  async fetchArticles() {
    try {
      const response = await axios.get(API_URL, { headers: baseHeaders });
      return response.data;
    } catch (error) {
      console.error("Fetch articles error:", error);
      throw error; // biar bisa ditangkap di komponen
    }
  },
  
  // Ambil artikel by id
  async fetchArticleById(id) {
    const response = await axios.get(`${API_URL}?id=eq.${id}`, {
      headers: baseHeaders,
    });
    return response.data?.[0] ?? null;
  },

  // Tambah artikel baru
  async createArticle(data) {
    const response = await axios.post(
      API_URL,
      [data],
      {
        headers: {
          ...baseHeaders,
          Prefer: "return=representation",
        },
      }
    );
    return response.data?.[0];
  },

  // Update artikel by id
  async updateArticle(id, data) {
    const response = await axios.patch(
      `${API_URL}?id=eq.${id}`,
      data,
      {
        headers: {
          ...baseHeaders,
          Prefer: "return=representation",
        },
      }
    );
    return response.data?.[0];
  },

  // Hapus artikel by id
  async deleteArticle(id) {
    const response = await axios.delete(`${API_URL}?id=eq.${id}`, {
      headers: baseHeaders,
    });
    return response.data;
  },
};
