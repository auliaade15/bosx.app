import React from "react";

export default function PageHeader({ title, breadcrumb, children }) {
  return (
    <div
      id="pageheader-container"
      className="flex items-center justify-between p-4"
    >
      <div id="pageheader-left" className="flex flex-col">
        <span id="page-title" className="text-3xl font-semibold">
          {title}
        </span>
        <Breadcrumb breadcrumb={breadcrumb} />
      </div>
      <div id="action-button">{children}</div>
    </div>
  );
}

function Breadcrumb({ breadcrumb }) {
  //jika breadcrumb string
  if (typeof breadcrumb === "string") {
    return (
      <div
        id="breadcrumb-links"
        className="flex items-center font-medium space-x-2 mt-2"
      >
        <span className="text-gray-500">{breadcrumb}</span>
      </div>
    );
  }

  //jika breadcrumb array
  if (Array.isArray(breadcrumb)) {
    return (
      <div
        id="breadcrumb-links"
        className="flex items-center font-medium space-x-2 mt-2"
      >
        {breadcrumb.map((item, index) => (
          <div
            key={index}
            className="flex items-center space-x-2 text-gray-500"
          >
            <span>{item}</span>
            {index < breadcrumb.length - 1 && <span>/</span>}
          </div>
        ))}
      </div>
    );
  }

  return null;
}
