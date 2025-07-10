import React from "react";
import { useParams, Link } from "react-router-dom";
import customerData from "../Customers.json";

export default function CustomerDetail() {
  const { id } = useParams();
  const customer = customerData.find((c) => String(c["Customer ID"]) === id);

  const getLoyaltyBadgeClass = (loyalty) => {
    switch (loyalty.toLowerCase()) {
      case "gold":
        return "bg-yellow-100 text-yellow-800";
      case "silver":
        return "bg-red-100 text-red-700";
      case "bronze":
        return "bg-orange-100 text-orange-800";
      default:
        return "bg-gray-200 text-gray-600";
    }
  };

  if (!customer) {
    return (
      <div className="p-6 text-red-600 text-center text-lg">
        ❌ Customer dengan ID {id} tidak ditemukan.
        <div className="mt-4">
          <Link
            to="/customers"
            className="text-red-600 hover:underline hover:text-red-800"
          >
            ← Kembali ke daftar customer
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg mt-8">
      <h1 className="text-3xl font-bold text-red-700 mb-6 border-b pb-2">
        🧾 Detail Customer
      </h1>
      <div className="space-y-4 text-gray-700">
        <p>
          <span className="font-semibold text-gray-900">👤 Nama:</span>{" "}
          {customer["Customer Name"]}
        </p>
        <p>
          <span className="font-semibold text-gray-900">📧 Email:</span>{" "}
          {customer["Email"]}
        </p>
        <p>
          <span className="font-semibold text-gray-900">📞 Phone:</span>{" "}
          {customer["Phone"]}
        </p>
        <p>
          <span className="font-semibold text-gray-900">🏅 Loyalty:</span>{" "}
          <span
            className={`px-3 py-1 rounded-full text-sm font-medium ${getLoyaltyBadgeClass(
              customer["Loyalty"]
            )}`}
          >
            {customer["Loyalty"]}
          </span>
        </p>
      </div>

      <div className="mt-6">
        <Link
          to="/customers"
          className="inline-block bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded transition"
        >
          ← Kembali ke Daftar Customers
        </Link>
      </div>
    </div>
  );
}
