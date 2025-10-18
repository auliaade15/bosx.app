import "./assets copy/tailwind.css";
import { Route, Routes, useLocation } from "react-router-dom";
import React, { Suspense } from "react";
import Loading from "./components/Loading";

// Halaman utama
import Products from "./pages/Products";
import Collection from "./pages/Collection";
import Testimonials from "./pages/Testimonials";
import About from "./pages/About";
import ProductsDetail from "./pages/ProductsDetail";
import Cart from "./pages/Cart"; // ✅ Halaman keranjang
import Search from "./pages/Search"; // ✅ Halaman pencarian

// Lazy load komponen besar
const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const MainLayout = React.lazy(() => import("./layouts/MainLayout"));
const AuthLayout = React.lazy(() => import("./layouts/AuthLayout"));
const Login = React.lazy(() => import("./pages/auth/Login"));
const Register = React.lazy(() => import("./pages/auth/Register"));
const Forgot = React.lazy(() => import("./pages/auth/Forgot"));
const Navbar = React.lazy(() => import("./components/Navbar"));

export default function App() {
  const location = useLocation();
  const hideNavbarRoutes = ["/login", "/register", "/forgot"];
  const shouldShowNavbar = !hideNavbarRoutes.includes(location.pathname);

  return (
    <Suspense fallback={<Loading />}>
      {/* Navbar muncul di semua halaman kecuali halaman auth */}
      {shouldShowNavbar && <Navbar />}

      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductsDetail />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/search" element={<Search />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
