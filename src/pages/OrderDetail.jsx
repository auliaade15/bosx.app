import { useParams, Link } from "react-router-dom";
import orderData from "../Orders.json";

export default function OrderDetail() {
  const { id } = useParams();
  const order = orderData.find((item) => String(item["Order ID"]) === id);

  const getStatusBadgeClass = (status) => {
    switch (status.toLowerCase()) {
      case "completed":
        return "bg-green-100 text-green-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "cancelled":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-200 text-gray-600";
    }
  };

  if (!order) {
    return (
      <div className="p-6 text-red-600 text-center text-lg">
        ❌ Order dengan ID {id} tidak ditemukan.
        <div className="mt-4">
          <Link
            to="/orders"
            className="text-blue-600 hover:underline hover:text-blue-800"
          >
            ← Kembali ke daftar order
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg mt-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-2">
        🧾 Detail Order #{order["Order ID"]}
      </h1>

      <div className="space-y-4 text-gray-700 text-base">
        <p>
          <span className="font-semibold text-gray-900">👤 Customer ID:</span>{" "}
          {order["Customer ID"]}
        </p>
        <p>
          <span className="font-semibold text-gray-900">📅 Order Date:</span>{" "}
          {order["Order Date"]}
        </p>
        <p>
          <span className="font-semibold text-gray-900">💳 Total Price:</span>{" "}
          {order["Total Price"]}
        </p>
        <p>
          <span className="font-semibold text-gray-900">📦 Status:</span>{" "}
          <span
            className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getStatusBadgeClass(
              order["Status"]
            )}`}
          >
            {order["Status"]}
          </span>
        </p>
      </div>

      <div className="mt-6">
        <Link
          to="/orders"
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition"
        >
          ← Kembali ke Daftar Orders
        </Link>
      </div>
    </div>
  );
}
