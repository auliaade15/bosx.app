import React, { useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import AlertBox from "../components/AlertBox";
import GenericTable from "../components/GenericTable";
import { productAPI } from "../services/productAPI";
import Loading from "../components/Loading";
import EmptyState from "../components/EmptyState";

export default function Product() {
  const [products, setProducts] = useState([]);
  const [dataForm, setDataForm] = useState({
    nama: "",
    harga: "",
    stock: "",
    status: "",
  });
  const [loadingFetch, setLoadingFetch] = useState(false);
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    let newValue =
      name === "harga" || name === "stock" ? parseInt(value) : value;
    setDataForm({ ...dataForm, [name]: newValue });
  };

  const loadProducts = async () => {
    try {
      setLoadingFetch(true);
      const data = await productAPI.fetchProduct();
      setProducts(data);
    } catch (err) {
      setError("Gagal memuat data produk.");
    } finally {
      setLoadingFetch(false);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoadingSubmit(true);
      setError("");
      await productAPI.createProduct(dataForm);
      setSuccess("Produk berhasil ditambahkan!");
      setDataForm({ nama: "", harga: "", stock: "", status: "" });
      setTimeout(() => setSuccess(""), 3000);
      loadProducts();
    } catch (err) {
      setError("Gagal menyimpan produk.");
    } finally {
      setLoadingSubmit(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Hapus produk ini?")) return;
    try {
      setLoadingFetch(true);
      await productAPI.deleteProduct(id);
      setSuccess("Produk berhasil dihapus!");
      setTimeout(() => setSuccess(""), 3000);
      loadProducts();
    } catch (err) {
      setError("Gagal menghapus produk.");
    } finally {
      setLoadingFetch(false);
    }
  };

  if (loadingFetch) return <Loading />;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Produk</h2>

      {error && <AlertBox type="error">{error}</AlertBox>}
      {success && <AlertBox type="success">{success}</AlertBox>}

      <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Tambah Produk
        </h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="nama"
            value={dataForm.nama}
            onChange={handleChange}
            placeholder="Nama Produk"
            required
            className="w-full p-3 bg-gray-50 rounded-2xl border border-gray-200"
            disabled={loadingSubmit}
          />
          <input
            name="harga"
            value={dataForm.harga}
            onChange={handleChange}
            placeholder="Harga"
            required
            type="number"
            className="w-full p-3 bg-gray-50 rounded-2xl border border-gray-200"
            disabled={loadingSubmit}
          />
          <input
            name="stock"
            value={dataForm.stock}
            onChange={handleChange}
            placeholder="Stok"
            required
            type="number"
            className="w-full p-3 bg-gray-50 rounded-2xl border border-gray-200"
            disabled={loadingSubmit}
          />
          <input
            name="status"
            value={dataForm.status}
            onChange={handleChange}
            placeholder="Status (Tersedia / Habis)"
            required
            className="w-full p-3 bg-gray-50 rounded-2xl border border-gray-200"
            disabled={loadingSubmit}
          />
          <button
            type="submit"
            disabled={loadingSubmit}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-2xl"
          >
            {loadingSubmit ? "Menyimpan..." : "Simpan Produk"}
          </button>
        </form>
      </div>

      <div className="bg-white rounded-2xl shadow-lg overflow-hidden mt-10">
        <div className="px-6 py-4">
          <h3 className="text-lg font-semibold">
            Daftar Produk ({products.length})
          </h3>
        </div>
        {products.length === 0 ? (
          <EmptyState text="Belum ada produk." />
        ) : (
          <GenericTable
            columns={["#", "Nama", "Harga", "Stok", "Status", "Aksi"]}
            data={products}
            renderRow={(p, index) => (
              <>
                <td className="px-6 py-4">{index + 1}</td>
                <td className="px-6 py-4">{p.nama}</td>
                <td className="px-6 py-4">Rp {p.harga}</td>
                <td className="px-6 py-4">{p.stock}</td>
                <td className="px-6 py-4">{p.status}</td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => handleDelete(p.id)}
                    disabled={loadingSubmit}
                    title="Hapus"
                  >
                    <AiFillDelete className="text-red-500 text-xl hover:text-red-700" />
                  </button>
                </td>
              </>
            )}
          />
        )}
      </div>
    </div>
  );
}
