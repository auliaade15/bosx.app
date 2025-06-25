import React, { useState, useEffect } from "react";
import { reviewsAPI } from "../services/reviewsAPI";
import AlertBox from "../components/AlertBox";
import GenericTable from "../components/GenericTable";
import { AiFillDelete } from "react-icons/ai";
import Loading from "../components/Loading";
import EmptyState from "../components/EmptyState";

export default function Reviews() {
  const [dataForm, setDataForm] = useState({
    user: "",
    review_text: "",
    gambar: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [reviews, setReviews] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataForm({ ...dataForm, [name]: value });
  };

  const loadReviews = async () => {
    try {
      setLoading(true);
      setError("");
      const data = await reviewsAPI.fetchReviews();
      setReviews(data);
    } catch (err) {
      setError("Gagal memuat data ulasan.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadReviews();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setSubmitLoading(true);
      setError("");
      setSuccess("");

      await reviewsAPI.createReview(dataForm);
      setSuccess("Review berhasil ditambahkan!");
      setDataForm({ user: "", review_text: "", gambar: "" });
      setTimeout(() => setSuccess(""), 3000);
      loadReviews();
    } catch (err) {
      setError("Gagal menyimpan review.");
    } finally {
      setSubmitLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Yakin ingin menghapus review ini?")) return;
    try {
      setLoading(true);
      await reviewsAPI.deleteReview(id);
      setSuccess("Review berhasil dihapus!");
      setTimeout(() => setSuccess(""), 3000);
      loadReviews();
    } catch (err) {
      setError("Gagal menghapus review.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-blue-800 mb-4">Review Produk</h2>

      {error && <AlertBox type="error">{error}</AlertBox>}
      {success && <AlertBox type="success">{success}</AlertBox>}

      <div className="bg-blue-50 rounded-2xl shadow-lg p-6 mb-8 border border-blue-100">
        <h3 className="text-lg font-semibold text-blue-700 mb-4">
          Tambah Review
        </h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="user"
            value={dataForm.user}
            onChange={handleChange}
            placeholder="Nama User"
            required
            className="w-full p-3 bg-white rounded-2xl border border-blue-200 focus:ring-2 focus:ring-blue-400"
            disabled={submitLoading}
          />
          <textarea
            name="review_text"
            value={dataForm.review_text}
            onChange={handleChange}
            placeholder="Isi review"
            required
            rows="3"
            className="w-full p-3 bg-white rounded-2xl border border-blue-200 resize-none focus:ring-2 focus:ring-blue-400"
            disabled={submitLoading}
          />
          <input
            type="text"
            name="gambar"
            value={dataForm.gambar}
            onChange={handleChange}
            placeholder="URL Gambar Produk"
            required
            className="w-full p-3 bg-white rounded-2xl border border-blue-200 focus:ring-2 focus:ring-blue-400"
            disabled={submitLoading}
          />
          <button
            type="submit"
            disabled={submitLoading}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-2xl transition"
          >
            {submitLoading ? "Mengirim..." : "Simpan Review"}
          </button>
        </form>
      </div>

      {loading ? (
        <Loading />
      ) : (
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mt-10 border border-blue-100">
          <div className="px-6 py-4 bg-blue-100">
            <h3 className="text-lg font-semibold text-blue-800">
              Daftar Review ({reviews.length})
            </h3>
          </div>
          {reviews.length === 0 ? (
            <EmptyState text="Belum ada review." />
          ) : (
            <GenericTable
              columns={["#", "User", "Review", "Gambar", "Aksi"]}
              data={reviews}
              renderRow={(r, index) => (
                <>
                  <td className="px-6 py-4 text-sm">{index + 1}</td>
                  <td className="px-6 py-4 text-sm">{r.user}</td>
                  <td className="px-6 py-4 text-sm max-w-xs">
                    {r.review_text}
                  </td>
                  <td className="px-6 py-4">
                    {r.gambar ? (
                      <img
                        src={r.gambar}
                        alt="review"
                        className="w-16 h-16 object-cover rounded-lg border border-blue-100"
                      />
                    ) : (
                      <span className="text-blue-400 italic">Tidak ada</span>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => handleDelete(r.id)}
                      disabled={loading}
                      title="Hapus"
                    >
                      <AiFillDelete className="text-red-500 text-xl hover:text-red-700 transition" />
                    </button>
                  </td>
                </>
              )}
            />
          )}
        </div>
      )}
    </div>
  );
}
