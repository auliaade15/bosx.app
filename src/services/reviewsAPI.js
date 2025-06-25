import axios from "axios";

const API_URL = "https://qfmewlqgxlsifxwctcms.supabase.co/rest/v1/reviews";
const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFmbWV3bHFneGxzaWZ4d2N0Y21zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk5NzA2MjYsImV4cCI6MjA2NTU0NjYyNn0.tzbBhfOp8OAK2JADi05NiLY7s67oaR-K41BJ2QD7x5E";

const baseHeaders = {
  apikey: API_KEY,
  Authorization: `Bearer ${API_KEY}`,
  "Content-Type": "application/json",
};

export const reviewsAPI = {
  async fetchReviews() {
    const response = await axios.get(API_URL, { headers: baseHeaders });
    return response.data;
  },

  async createReview(data) {
    const response = await axios.post(
      API_URL,
      [data], // ← Harus dikirim sebagai array!
      {
        headers: {
          ...baseHeaders,
          Prefer: "return=representation", // ← WAJIB agar respon berhasil
        },
      }
    );
    return response.data;
  },

  async deleteReview(id) {
    const response = await axios.delete(`${API_URL}?id=eq.${id}`, {
      headers: baseHeaders,
    });
    return response.data;
  },
};
