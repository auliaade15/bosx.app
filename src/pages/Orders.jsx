import React from "react";
import orderData from "../Orders.json";
import PageHeader from "../components/PageHeader";
import { NavLink, Link } from "react-router-dom";

export default function OrderCard() {
  return (
    <div id="orders-container">
      <PageHeader title="Orders" breadcrumb={["Orders", "Order List"]}>
        <NavLink
          to="/formorders"
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition"
        >
          Add Order
        </NavLink>
      </PageHeader>

      <div className="p-5 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {orderData.map((order) => (
          <Link
            key={order["Order ID"]}
            to={`/orders/${order["Order ID"]}`}
            className="bg-white rounded-xl shadow-md p-6 flex flex-col space-y-2 hover:bg-red-50 transition border border-red-100"
          >
            <h2 className="text-xl font-bold text-red-700">
              Order #{order["Order ID"]}
            </h2>
            <p className="text-sm text-gray-600">
              👤 Customer ID: {order["Customer ID"]}
            </p>
            <p className="text-sm text-gray-600">
              🗓️ Date: {order["Order Date"]}
            </p>
            <p className="text-sm text-gray-600">
              💵 Total: Rp {parseInt(order["Total Price"]).toLocaleString()}
            </p>
            <span
              className={`px-3 py-1 text-sm rounded-full font-medium w-max ${
                order["Status"] === "Completed"
                  ? "bg-green-100 text-green-800"
                  : order["Status"] === "Pending"
                  ? "bg-yellow-100 text-yellow-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              ⛳ {order["Status"]}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
