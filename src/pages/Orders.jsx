import React from "react";
import orderData from "../Orders.json";
import PageHeader from "../components/PageHeader";
import { NavLink, Link } from "react-router-dom";

export default function OrderCard() {
  return (
    <div id="orders-container">
      <PageHeader title="Orders" breadcrumb={["Orders", "Order List"]}>
        <NavLink to="/formorders" className="bg-hijau text-white px-4 py-2 rounded-lg">
          Add Order
        </NavLink>
      </PageHeader>

      <div className="p-5 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {orderData.map((order) => (
          <Link
            key={order["Order ID"]}
            to={`/orders/${order["Order ID"]}`}
            className="bg-white rounded-lg shadow-md p-6 flex flex-col space-y-2 hover:bg-gray-100 transition"
          >
            <h2 className="text-xl font-semibold">Order #{order["Order ID"]}</h2>
            <p>Customer ID: {order["Customer ID"]}</p>
            <p>Date: {order["Order Date"]}</p>
            <p>Total: {order["Total Price"]}</p>
            <span
              className={`px-3 py-1 text-sm rounded-full font-medium w-max ${
                order["Status"] === "Completed"
                  ? "bg-green-100 text-green-800"
                  : order["Status"] === "Pending"
                  ? "bg-yellow-100 text-yellow-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {order["Status"]}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
