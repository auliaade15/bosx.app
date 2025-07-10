import React from "react";
import customerData from "../Customers.json";
import PageHeader from "../components/PageHeader";
import { NavLink, Link } from "react-router-dom";

export default function CustomerCard() {
  const getLoyaltyBadgeClass = (loyalty) => {
    switch (loyalty.toLowerCase()) {
      case "gold":
        return "bg-yellow-100 text-yellow-800";
      case "silver":
        return "bg-red-100 text-red-700"; // diubah jadi tema merah
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
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition"
        >
          Tambah Customer
        </NavLink>
      </PageHeader>

      <div className="p-5 grid sm:grid-cols-1 md:grid-cols-2 gap-4">
        {customerData.map((item) => (
          <Link
            to={`/customers/${item["Customer ID"]}`}
            key={item["Customer ID"]}
            className="bg-white rounded-xl shadow hover:shadow-lg p-6 flex flex-col space-y-2 hover:bg-red-50 transition"
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
          </Link>
        ))}
      </div>
    </div>
  );
}
