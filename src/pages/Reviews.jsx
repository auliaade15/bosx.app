import React, { useState, useEffect } from "react";
import { AiFillDelete } from "react-icons/ai";
import { reviewsAPI } from "../services/reviewsAPI";

export default function Reviews() {
  const [dataForm, setDataForm] = useState({
    nama: "",
    ulasan: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [reviews, setReviews] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataForm((prev) => ({ ...prev, [name]: value }));
  };

  const loadReviews = async () => {
    try {
      setLoading(true);
      const data = await reviewsAPI.fetchReviews();
      setReviews(data);
    } catch {
      setError("Gagal memuat data review.");
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
      setDataForm({ nama: "", ulasan: "" });
      setShowModal(false);
      loadReviews();
    } catch {
      setError("Gagal menyimpan review.");
    } finally {
      setSubmitLoading(false);
      setTimeout(() => setSuccess(""), 3000);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Yakin ingin menghapus review ini?")) return;
    try {
      setLoading(true);
      await reviewsAPI.deleteReview(id);
      setSuccess("Review berhasil dihapus.");
      loadReviews();
    } catch {
      setError("Gagal menghapus review.");
    } finally {
      setLoading(false);
      setTimeout(() => setSuccess(""), 3000);
    }
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">
        Manajemen Review
      </h2>

      {error && (
        <div className="bg-red-100 border border-red-300 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}
      {success && (
        <div className="bg-green-100 border border-green-300 text-green-700 px-4 py-3 rounded mb-4">
          {success}
        </div>
      )}

      <button
        onClick={() => setShowModal(true)}
        className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-md mb-6"
      >
        Tambah Review
      </button>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md relative">
            <h3 className="text-xl font-bold mb-4">Tambah Review</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                name="nama"
                value={dataForm.nama}
                onChange={handleChange}
                placeholder="Nama"
                className="w-full p-2 border rounded"
                required
              />
              <textarea
                name="ulasan"
                value={dataForm.ulasan}
                onChange={handleChange}
                placeholder="Isi Ulasan"
                className="w-full p-2 border rounded"
                rows="4"
                required
              />
              <div className="flex justify-end space-x-2 pt-4">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 border rounded hover:bg-gray-100"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                  disabled={submitLoading}
                >
                  {submitLoading ? "Menyimpan..." : "Simpan"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="bg-white shadow-md rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto text-sm">
            <thead className="bg-red-600 text-white">
              <tr>
                <th className="px-6 py-3 text-left font-medium">No</th>
                <th className="px-6 py-3 text-left font-medium">Nama</th>
                <th className="px-6 py-3 text-left font-medium">Ulasan</th>
                <th className="px-6 py-3 text-left font-medium">Aksi</th>
              </tr>
            </thead>
            <tbody className="text-gray-800">
              {reviews.map((r, index) => (
                <tr key={r.id} className="border-t hover:bg-gray-50">
                  <td className="px-6 py-3">{index + 1}</td>
                  <td className="px-6 py-3">{r.nama}</td>
                  <td className="px-6 py-3 whitespace-pre-line max-w-sm">
                    {r.ulasan}
                  </td>
                  <td className="px-6 py-3">
                    <button
                      onClick={() => handleDelete(r.id)}
                      className="text-red-500 hover:text-red-700"
                      title="Hapus Review"
                      disabled={loading}
                    >
                      <AiFillDelete className="text-xl" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {reviews.length === 0 && !loading && (
          <div className="text-center text-gray-500 py-6">
            Belum ada review tersedia.
          </div>
        )}
      </div>
    </div>
  );
}
