import React, { useState } from "react";
import initialSuppliers from "../supplier.json";

const Suppliers = () => {
  const [suppliers, setSuppliers] = useState(initialSuppliers);
  const [newSupplier, setNewSupplier] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    products: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewSupplier((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddSupplier = (e) => {
    e.preventDefault();
    if (!newSupplier.name || !newSupplier.email) {
      alert("Nama dan Email wajib diisi.");
      return;
    }

    const newId =
      suppliers.length > 0 ? suppliers[suppliers.length - 1].id + 1 : 1;
    const supplierToAdd = { id: newId, ...newSupplier };
    setSuppliers([...suppliers, supplierToAdd]);

    // Reset form
    setNewSupplier({
      name: "",
      email: "",
      phone: "",
      address: "",
      products: "",
    });
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Suppliers</h1>

      {/* FORM TAMBAH SUPPLIER */}
      <form
        onSubmit={handleAddSupplier}
        className="bg-white p-6 rounded-2xl shadow-md mb-6 border border-red-100"
      >
        <h2 className="text-lg font-semibold text-red-600 mb-4">
          Tambah Supplier
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            value={newSupplier.name}
            onChange={handleChange}
            placeholder="Nama Supplier"
            className="border border-red-300 p-3 rounded-xl focus:ring-2 focus:ring-red-400"
            required
          />
          <input
            type="email"
            name="email"
            value={newSupplier.email}
            onChange={handleChange}
            placeholder="Email"
            className="border border-red-300 p-3 rounded-xl focus:ring-2 focus:ring-red-400"
            required
          />
          <input
            type="text"
            name="phone"
            value={newSupplier.phone}
            onChange={handleChange}
            placeholder="Telepon"
            className="border border-red-300 p-3 rounded-xl focus:ring-2 focus:ring-red-400"
          />
          <input
            type="text"
            name="address"
            value={newSupplier.address}
            onChange={handleChange}
            placeholder="Alamat"
            className="border border-red-300 p-3 rounded-xl focus:ring-2 focus:ring-red-400"
          />
          <input
            type="text"
            name="products"
            value={newSupplier.products}
            onChange={handleChange}
            placeholder="Produk yang Disuplai"
            className="border border-red-300 p-3 rounded-xl focus:ring-2 focus:ring-red-400 col-span-1 md:col-span-2"
          />
        </div>
        <button
          type="submit"
          className="mt-6 bg-red-600 text-white px-6 py-3 rounded-2xl hover:bg-red-700 transition"
        >
          Tambah Supplier
        </button>
      </form>

      {/* TABEL SUPPLIER */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-red-100 text-red-700">
              <th className="py-2 px-4 border-b">ID</th>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Email</th>
              <th className="py-2 px-4 border-b">Phone</th>
              <th className="py-2 px-4 border-b">Address</th>
              <th className="py-2 px-4 border-b">Products</th>
            </tr>
          </thead>
          <tbody>
            {suppliers.map((supplier) => (
              <tr key={supplier.id} className="hover:bg-red-50">
                <td className="py-2 px-4 border-b">{supplier.id}</td>
                <td className="py-2 px-4 border-b">{supplier.name}</td>
                <td className="py-2 px-4 border-b">{supplier.email}</td>
                <td className="py-2 px-4 border-b">{supplier.phone}</td>
                <td className="py-2 px-4 border-b">{supplier.address}</td>
                <td className="py-2 px-4 border-b">{supplier.products}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Suppliers;
