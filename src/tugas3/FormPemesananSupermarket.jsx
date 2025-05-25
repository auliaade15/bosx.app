import InputField from "./components/InputField";
import { useState } from "react";

export default function FormPemesananSupermarket() {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [telepon, setTelepon] = useState("");
  const [alamat, setAlamat] = useState("");
  const [produk, setProduk] = useState("");
  const [jumlah, setJumlah] = useState(0);
  const [metodePembayaran, setMetodePembayaran] = useState("");
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const validate = () => {
    let newErrors = {};
    if (!nama.trim()) newErrors.nama = "Nama wajib diisi";
    if (!email.trim()) newErrors.email = "Email wajib diisi";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      newErrors.email = "Format email tidak valid";
    if (!telepon.trim()) newErrors.telepon = "Nomor telepon wajib diisi";
    if (!alamat.trim()) newErrors.alamat = "Alamat wajib diisi";
    if (!produk) newErrors.produk = "Pilih produk";
    if (jumlah <= 0) newErrors.jumlah = "Jumlah harus lebih dari 0";
    if (!metodePembayaran) newErrors.metodePembayaran = "Pilih metode pembayaran";

    setErrors(newErrors);
    setIsValid(Object.keys(newErrors).length === 0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validate();
    if (isValid) {
      alert("Pesanan berhasil dikirim!");
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-[#FFE4E1] text-[#4B4B4B] font-poppins">
      <div className="bg-[#FFD1DC] p-4 rounded-lg shadow-md w-full max-w-3xl flex flex-col md:flex-row items-center gap-6">
        <div className="w-full md:w-1/2 p-2">
          <h1 className="text-2xl font-bold text-center mb-4">
            Form Pemesanan Supermarket
          </h1>

          <InputField
            label="Nama"
            type="text"
            placeholder="Masukkan Nama"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            onBlur={validate}
            error={errors.nama}
          />

          <InputField
            label="Email"
            type="email"
            placeholder="Masukkan Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={validate}
            error={errors.email}
          />

          <InputField
            label="Nomor Telepon"
            type="text"
            placeholder="Masukkan Nomor Telepon"
            value={telepon}
            onChange={(e) => setTelepon(e.target.value)}
            onBlur={validate}
            error={errors.telepon}
          />

          <InputField
            label="Alamat Pengiriman"
            type="text"
            placeholder="Masukkan Alamat"
            value={alamat}
            onChange={(e) => setAlamat(e.target.value)}
            onBlur={validate}
            error={errors.alamat}
          />

          <div className="mb-2">
            <label className="block text-[#4B4B4B] text-md font-semibold mb-1">
              Produk
            </label>
            <select
              className="w-full p-2 border border-gray-400 rounded-md bg-white text-gray-800"
              value={produk}
              onChange={(e) => setProduk(e.target.value)}
              onBlur={validate}
            >
              <option value="">Pilih Produk</option>
              <option>Beras 5kg</option>
              <option>Minyak Goreng 2L</option>
              <option>Gula Pasir 1kg</option>
              <option>Sayuran Segar</option>
              <option>Buah-buahan</option>
            </select>
            {errors.produk && (
              <p className="text-red-500 text-sm mt-1">{errors.produk}</p>
            )}
          </div>

          <InputField
            label="Jumlah"
            type="number"
            placeholder="Masukkan Jumlah"
            value={jumlah}
            onChange={(e) => setJumlah(Number(e.target.value))}
            onBlur={validate}
            error={errors.jumlah}
          />

          {jumlah > 20 ? (
            <div className="mt-2 p-1 bg-red-100 border-l-4 border-red-500 text-red-700">
              <p className="font-semibold">Jumlah terlalu banyak!</p>
            </div>
          ) : jumlah > 0 ? (
            <div className="mt-2 p-1 bg-green-100 border-l-4 border-green-500 text-green-700">
              <p className="font-semibold">Jumlah pesanan aman</p>
            </div>
          ) : null}

          <div className="mb-2 mt-2">
            <label className="block text-[#4B4B4B] text-md font-semibold mb-1">
              Metode Pembayaran
            </label>
            <select
              className="w-full p-2 border border-gray-400 rounded-md bg-white text-gray-800"
              value={metodePembayaran}
              onChange={(e) => setMetodePembayaran(e.target.value)}
              onBlur={validate}
            >
              <option value="">Pilih Metode Pembayaran</option>
              <option>Transfer Bank</option>
              <option>COD</option>
              <option>E-Wallet</option>
            </select>
            {errors.metodePembayaran && (
              <p className="text-red-500 text-sm mt-1">{errors.metodePembayaran}</p>
            )}
          </div>

          {isValid && (
            <button
              onClick={handleSubmit}
              className="mt-4 w-full bg-[#FF8FAB] text-white py-2 px-4 rounded-md hover:bg-[#FFB6C1] transition"
            >
              Kirim Pesanan
            </button>
          )}
        </div>

        <div className="w-full md:w-1/2 p-2 flex justify-center">
          <img
            className="w-72 h-96 rounded-lg shadow-lg object-cover hover:scale-105 transition-transform duration-300"
            src="https://ik.imagekit.io/tvlk/blog/2024/05/shQ18kYT-image.png?tr=q-70,c-at_max,w-500,h-250,dpr-2"
            alt="Supermarket"
          />
        </div>
      </div>
    </div>
  );
}
