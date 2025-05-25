import React from 'react';
import supplierData from '../supplier.json'; // <-- ini kalau file JSON yaa

const Suppliers = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Suppliers</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 border-b">ID</th>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Email</th>
              <th className="py-2 px-4 border-b">Phone</th>
              <th className="py-2 px-4 border-b">Address</th>
              <th className="py-2 px-4 border-b">Products</th>
            </tr>
          </thead>
          <tbody>
            {supplierData.map((supplier) => (
              <tr key={supplier.id}>
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
