import React, { useState } from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";

export default function AdminArticles() {
  const [articles, setArticles] = useState([
    { id: 1, title: "Artikel Pertama", author: "Admin", date: "2025-07-06" },
    {
      id: 2,
      title: "Tips Belanja Online",
      author: "Admin",
      date: "2025-07-05",
    },
  ]);

  const [form, setForm] = useState({
    title: "",
    author: "",
  });

  const [editingId, setEditingId] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingId) {
      setArticles(
        articles.map((item) =>
          item.id === editingId ? { ...item, ...form } : item
        )
      );
      setEditingId(null);
    } else {
      const newArticle = {
        id: Date.now(),
        title: form.title,
        author: form.author,
        date: new Date().toISOString().split("T")[0],
      };
      setArticles([...articles, newArticle]);
    }
    setForm({ title: "", author: "" });
  };

  const handleEdit = (article) => {
    setForm({ title: article.title, author: article.author });
    setEditingId(article.id);
  };

  const handleDelete = (id) => {
    if (window.confirm("Yakin ingin menghapus artikel ini?")) {
      setArticles(articles.filter((item) => item.id !== id));
    }
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-red-700 mb-6">Manajemen Artikel</h1>

      <form
        onSubmit={handleSubmit}
        className="mb-8 bg-red-50 border border-red-100 shadow-md rounded-2xl p-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-semibold text-red-700">
              Judul Artikel
            </label>
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              required
              className="mt-1 border border-red-300 w-full p-3 rounded-xl bg-white focus:ring-2 focus:ring-red-400"
            />
          </div>
          <div>
            <label className="block font-semibold text-red-700">Penulis</label>
            <input
              type="text"
              name="author"
              value={form.author}
              onChange={handleChange}
              required
              className="mt-1 border border-red-300 w-full p-3 rounded-xl bg-white focus:ring-2 focus:ring-red-400"
            />
          </div>
        </div>
        <button
          type="submit"
          className="mt-6 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-2xl"
        >
          {editingId ? "Perbarui Artikel" : "Tambah Artikel"}
        </button>
      </form>

      <div className="overflow-x-auto bg-white border border-red-100 shadow-md rounded-2xl">
        <table className="min-w-full divide-y divide-red-200 text-sm text-gray-800">
          <thead className="bg-red-600 text-white">
            <tr>
              <th className="p-4 text-left font-semibold">Judul</th>
              <th className="p-4 text-left font-semibold">Penulis</th>
              <th className="p-4 text-left font-semibold">Tanggal</th>
              <th className="p-4 text-left font-semibold">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-red-50">
            {articles.map((article) => (
              <tr
                key={article.id}
                className="hover:bg-red-50 transition-colors duration-200"
              >
                <td className="p-4">{article.title}</td>
                <td className="p-4">{article.author}</td>
                <td className="p-4">{article.date}</td>
                <td className="p-4 space-x-2">
                  <button
                    onClick={() => handleEdit(article)}
                    className="text-yellow-600 hover:text-yellow-800"
                    title="Edit"
                  >
                    <AiFillEdit size={20} />
                  </button>
                  <button
                    onClick={() => handleDelete(article.id)}
                    className="text-red-600 hover:text-red-800"
                    title="Hapus"
                  >
                    <AiFillDelete size={20} />
                  </button>
                </td>
              </tr>
            ))}
            {articles.length === 0 && (
              <tr>
                <td colSpan="4" className="text-center p-6 text-red-500 italic">
                  Belum ada artikel.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
