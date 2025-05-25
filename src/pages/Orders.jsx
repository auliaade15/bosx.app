import React from "react";
import orderData from "../Orders.json";
import PageHeader from "../components/PageHeader";
import { NavLink } from "react-router-dom";

export default function OrderCard() {
  return (
    <div id="orders-container">
      <PageHeader title="Orders" breadcrumb={["Orders", "Order List"]}>
        <NavLink
          to="/formorders"
          className="bg-hijau text-white px-4 py-2 rounded-lg"
        >
          Add Button
        </NavLink>
      </PageHeader>
      <div className="p-5 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {orderData.map((order) => (
          <div
            key={order["Order ID"]}
            className="bg-white rounded-lg shadow-md p-6 flex flex-col space-y-2"
          >
            <h2 className="text-xl font-semibold text-gray-800">
              Order #{order["Order ID"]}
            </h2>
            <p className="text-gray-600">
              👤 Customer ID: {order["Customer ID"]}
            </p>
            <p className="text-gray-600">📅 Date: {order["Order Date"]}</p>
            <p className="text-gray-600">💳 Total: {order["Total Price"]}</p>
            <span
              className={`inline-block px-3 py-1 rounded-full w-max text-sm font-medium
            ${
              order["Status"] === "Completed"
                ? "bg-green-100 text-green-800"
                : order["Status"] === "Pending"
                ? "bg-yellow-100 text-yellow-800"
                : "bg-red-100 text-red-800"
            }
          `}
            >
              Status: {order["Status"]}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
