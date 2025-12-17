import { useState } from "react";

export default function CustomJersey() {
  const [nama, setNama] = useState("");
  const [tipe, setTipe] = useState("");
  const [ukuran, setUkuran] = useState("");
  const [catatan, setCatatan] = useState("");
  const [error, setError] = useState("");

  const kirimWhatsApp = () => {
    if (!nama || !tipe || !ukuran) {
      setError("Nama, tipe jersey, dan ukuran wajib diisi.");
      return;
    }

    setError("");

    const nomor = "6281255577705";
    const pesan = `
Halo, saya ingin custom jersey.

Nama: ${nama}
Tipe Jersey: ${tipe}
Ukuran: ${ukuran}
Catatan Tambahan: ${catatan || "-"}
    `;

    const url = `https://wa.me/${nomor}?text=${encodeURIComponent(pesan)}`;
    window.open(url, "_blank");
  };

  const isDisabled = !nama || !tipe || !ukuran;

  return (
    <div className="pt-28 pb-20 px-6 min-h-screen bg-[#1A1D20] text-white">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-[#2FC2A5] mb-4">
          Custom Jersey
        </h1>
        <p className="text-gray-300 mb-10">
          Isi data berikut untuk custom jersey dengan desain sesuai keinginanmu!
        </p>

        <div className="space-y-6">
          {/* Nama */}
          <div>
            <label className="block text-gray-300 mb-1">
              Nama <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              className="w-full p-3 rounded-lg bg-[#2A2D34] border border-white/10 outline-none"
              placeholder="Masukkan nama"
            />
          </div>

          {/* Tipe Jersey */}
          <div>
            <label className="block text-gray-300 mb-1">
              Tipe Jersey <span className="text-red-400">*</span>
            </label>
            <select
              value={tipe}
              onChange={(e) => setTipe(e.target.value)}
              className="w-full p-3 rounded-lg bg-[#2A2D34] border border-white/10 outline-none"
            >
              <option value="">Pilih Tipe Jersey</option>
              <option value="Futsal">Futsal</option>
              <option value="Sepak Bola">Sepak Bola</option>
              <option value="Badminton">Badminton</option>
              <option value="Basket">Basket</option>
            </select>
          </div>

          {/* Ukuran */}
          <div>
            <label className="block text-gray-300 mb-1">
              Ukuran <span className="text-red-400">*</span>
            </label>
            <select
              value={ukuran}
              onChange={(e) => setUkuran(e.target.value)}
              className="w-full p-3 rounded-lg bg-[#2A2D34] border border-white/10 outline-none"
            >
              <option value="">Pilih Ukuran</option>
              <optgroup label="Ukuran Normal">
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
                <option value="XXL">XXL</option>
              </optgroup>
              <optgroup label="Ukuran Jumbo">
                <option value="3XL">3XL</option>
                <option value="4XL">4XL</option>
                <option value="5XL">5XL</option>
              </optgroup>
            </select>
          </div>

          {/* Catatan */}
          <div>
            <label className="block text-gray-300 mb-1">
              Catatan Tambahan
            </label>
            <textarea
              value={catatan}
              onChange={(e) => setCatatan(e.target.value)}
              className="w-full p-3 rounded-lg bg-[#2A2D34] h-28 border border-white/10 outline-none"
              placeholder="Contoh: warna utama biru, tambah nama punggung..."
            />
          </div>
        </div>

        {/* ERROR MESSAGE */}
        {error && (
          <p className="text-red-400 mt-6 text-center font-medium">
            {error}
          </p>
        )}

        {/* BUTTON */}
        <button
          onClick={kirimWhatsApp}
          disabled={isDisabled}
          className={`mt-10 w-full px-7 py-3 text-lg font-semibold rounded-lg transition
          ${
            isDisabled
              ? "bg-gray-500 cursor-not-allowed text-gray-200"
              : "bg-[#2FC2A5] hover:bg-[#27A98E] text-[#1A1D20]"
          }`}
        >
          Kirim ke WhatsApp
        </button>
      </div>
    </div>
  );
}
