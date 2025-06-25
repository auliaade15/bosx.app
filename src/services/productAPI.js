import axios from "axios";

const API_URL = "https://qfmewlqgxlsifxwctcms.supabase.co/rest/v1/product";
const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFmbWV3bHFneGxzaWZ4d2N0Y21zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk5NzA2MjYsImV4cCI6MjA2NTU0NjYyNn0.tzbBhfOp8OAK2JADi05NiLY7s67oaR-K41BJ2QD7x5E";

const headers = {
  apikey: API_KEY,
  Authorization: `Bearer ${API_KEY}`,
  "Content-Type": "application/json",
};

export const productAPI = {
  async fetchProduct() {
    const response = await axios.get(API_URL, { headers });
    return response.data;
  },

  async createProduct(data) {
    // Supabase expects an array of objects
    const response = await axios.post(API_URL, [data], { headers });
    return response.data;
  },

  async deleteProduct(id) {
    const response = await axios.delete(`${API_URL}?id=eq.${id}`, { headers });
    return response.data;
  },
};
