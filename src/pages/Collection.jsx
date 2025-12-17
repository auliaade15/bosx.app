import React from "react";

const Collection = () => {
  const products = [
    { id: 1, name: "Jersey 1", image: "/img/bosx/1.jpg" },
    { id: 2, name: "Jersey 2", image: "/img/bosx/2.jpg" },
    { id: 3, name: "Jersey 3", image: "/img/bosx/3.jpg" },
    { id: 4, name: "Jersey 4", image: "/img/bosx/4.jpg" },
    { id: 5, name: "Jersey 5", image: "/img/bosx/5.jpg" },
    { id: 6, name: "Jersey 6", image: "/img/bosx/6.jpg" },
    { id: 7, name: "Jersey 7", image: "/img/bosx/7.jpg" },
    { id: 8, name: "Jersey 8", image: "/img/bosx/8.jpg" },
    { id: 9, name: "Jersey 9", image: "/img/bosx/9.jpg" },
    { id: 10, name: "Jersey 10", image: "/img/bosx/10.jpg" },
    { id: 11, name: "Jersey 11", image: "/img/bosx/11.jpg" },
    { id: 12, name: "Jersey 12", image: "/img/bosx/12.jpg" },
    { id: 13, name: "Jersey 13", image: "/img/bosx/13.jpg" },
    { id: 14, name: "Jersey 14", image: "/img/bosx/14.jpg" },
    { id: 15, name: "Jersey 15", image: "/img/bosx/15.jpg" },
    { id: 16, name: "Jersey 16", image: "/img/bosx/16.jpg" },
    { id: 17, name: "Jersey 17", image: "/img/bosx/17.jpg" },
    { id: 18, name: "Jersey 18", image: "/img/bosx/18.jpg" },
    { id: 19, name: "Jersey 19", image: "/img/bosx/19.jpg" },
    { id: 20, name: "Jersey 20", image: "/img/bosx/20.jpg" },
    { id: 21, name: "Jersey 21", image: "/img/bosx/22.jpg" },
    { id: 22, name: "Jersey 22", image: "/img/bosx/23.jpg" },
    { id: 23, name: "Jersey 23", image: "/img/bosx/24.jpg" },
    { id: 24, name: "Jersey 24", image: "/img/bosx/25.jpg" },
    { id: 25, name: "Jersey 25", image: "/img/bosx/26.jpg" },
  ];

  return (
    <div className="min-h-screen bg-[#2A2D34] py-20 px-8 text-white">
      <h1 className="text-4xl font-bold text-center text-[#2FC2A5] mb-4">
        Koleksi Jersey
      </h1>

      <p className="text-center text-gray-300 max-w-2xl mx-auto mb-12">
        Beberapa contoh kumpulan jersey custom eksklusif dengan desain modern,
        bahan premium, dan kualitas sablon terbaik untuk tim, komunitas,
        maupun personal yang pernah kami buat.
      </p>

      {/* PRODUCT GRID */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
        {products.map((item) => (
          <div
            key={item.id}
            className="bg-[#1E2126] rounded-xl shadow hover:shadow-lg transition p-3 border border-[#2FC2A5]/40 cursor-default"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover rounded-lg"
              loading="lazy"
            />
            <h3 className="mt-3 text-center font-medium">{item.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collection;
