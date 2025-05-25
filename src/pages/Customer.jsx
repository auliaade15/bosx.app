import React from "react";
import customerData from "../Customers.json";
import PageHeader from "../components/PageHeader";
import { NavLink } from "react-router-dom";

export default function CustomerCard() {
  const getLoyaltyBadgeClass = (loyalty) => {
    switch (loyalty.toLowerCase()) {
      case "gold":
        return "bg-yellow-100 text-yellow-800";
      case "silver":
        return "bg-gray-100 text-gray-700";
      case "bronze":
        return "bg-orange-100 text-orange-800";
      default:
        return "bg-gray-200 text-gray-600";
    }
  };

  return (
    <div id="customers-container">
      <PageHeader title="Customers" breadcrumb={["Customers", "Customer List"]}>
        <NavLink
          to="/formcustomers"
          className="bg-hijau text-white px-4 py-2 rounded-lg"
        >
          Add Button
        </NavLink>
      </PageHeader>
      <div className="p-5 grid sm:grid-cols-1 md:grid-cols-2 gap-4">
        {customerData.map((item) => (
          <div
            key={item["Customer ID"]}
            className="bg-white rounded-lg shadow-md p-6 flex flex-col space-y-2"
          >
            <h2 className="text-xl font-semibold text-gray-800">
              {item["Customer Name"]}
            </h2>
            <p className="text-gray-600">📧 {item["Email"]}</p>
            <p className="text-gray-600">📞 {item["Phone"]}</p>
            <span
              className={`inline-block px-3 py-1 rounded-full w-max text-sm font-medium ${getLoyaltyBadgeClass(
                item["Loyalty"]
              )}`}
            >
              🏅 Loyalty: {item["Loyalty"]}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
