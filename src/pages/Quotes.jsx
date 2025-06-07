import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Beranda</h1>
      <nav className="mt-4 flex flex-col gap-2">
        <Link to="/quote">Inspirational Quote</Link>
        <Link to="/menu">Lihat Menu</Link>
      </nav>
    </div>
  );
}
