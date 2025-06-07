import "./assets copy/tailwind.css";
import { Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";
import Loading from "./components/Loading";

// import "./assets copy/tailwind.css";
// import Sidebar from "./layouts/Sidebar";
// import Header from "./layouts/Header";
// import Dashboard from "./pages/Dashboard";
// import Orders from "./pages/Orders";
// import Customers from "./pages/Customer";
// import Suppliers from "./pages/Suppliers";
// import NotFound from "./pages/NotFound";
// import Error400 from "./pages/Error400";
// import Error401 from "./pages/Error401";
// import Error403 from "./pages/Error403";
// import FormOrders from "./pages/FormOrders";
// import FormCustomers from "./pages/FormCustomer";

const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Orders = React.lazy(() => import("./pages/Orders"));
const Customers = React.lazy(() => import("./pages/Customer"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const MainLayout = React.lazy(() => import("./layouts/MainLayout"));
const AuthLayout = React.lazy(() => import("./layouts/AuthLayout"));
const Login = React.lazy(() => import("./pages/auth/Login"));
const Register = React.lazy(() => import("./pages/auth/Register"));
const Forgot = React.lazy(() => import("./pages/auth/Forgot"));
const Suppliers = React.lazy(() => import("./pages/Suppliers"));
const Sidebar = React.lazy(() => import("./components/Sidebar"));
const Header = React.lazy(() => import("./components/Header"));
const Error400 = React.lazy(() => import("./pages/Error400"));
const Error401 = React.lazy(() => import("./pages/Error401"));
const Error403 = React.lazy(() => import("./pages/Error403"));
const FormOrders = React.lazy(() => import("./pages/FormOrders"));
const FormCustomers = React.lazy(() => import("./pages/FormCustomer"));
const Quotes = React.lazy(() => import("./pages/Quotes"));

export default function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        < Route element={<MainLayout />}>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/Orders" element={<Orders />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/notfound" element={<NotFound />} />
          <Route path="/error400" element={<Error400 />} />
          <Route path="/error401" element={<Error401 />} />
          <Route path="/error403" element={<Error403 />} />
          <Route path="/suppliers" element={<Suppliers />} />
          <Route path="/quotes" element={<Quotes />} />
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
