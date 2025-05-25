import React from "react";

export default function FormOrders() {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">
        Add New Order
      </h1>
      <form className="space-y-6">
        <div>
          <label
            htmlFor="orderId"
            className="block text-sm font-medium text-gray-700"
          >
            Order ID
          </label>
          <input
            type="number"
            id="orderId"
            name="orderId"
            placeholder="Masukkan Order ID"
            className="mt-1 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label
            htmlFor="customerId"
            className="block text-sm font-medium text-gray-700"
          >
            Customer ID
          </label>
          <input
            type="number"
            id="customerId"
            name="customerId"
            placeholder="Masukkan Customer ID"
            className="mt-1 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label
            htmlFor="status"
            className="block text-sm font-medium text-gray-700"
          >
            Status
          </label>
          <select
            id="status"
            name="status"
            className="mt-1 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="Completed">Completed</option>
            <option value="Pending">Pending</option>
            <option value="Cancelled">Cancelled</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="totalPrice"
            className="block text-sm font-medium text-gray-700"
          >
            Total Price
          </label>
          <input
            type="text"
            id="totalPrice"
            name="totalPrice"
            placeholder="Masukkan Total Price"
            className="mt-1 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label
            htmlFor="orderDate"
            className="block text-sm font-medium text-gray-700"
          >
            Order Date
          </label>
          <input
            type="date"
            id="orderDate"
            name="orderDate"
            className="mt-1 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-400 text-white py-3 rounded-lg hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
