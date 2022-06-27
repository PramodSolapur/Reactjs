import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import NavBar from "./NavBar";
import Products from "./Products";
import Featured from "./Featured";
import NewProducts from "./NewProducts";
import OrderSummary from "./OrderSummary";
import Users from "./Users";
import UserDetails from "./UserDetails";
import Admin from "./Admin";
import Error from "./Error";
import Login from "./Login";
import { AuthProvider } from "./auth";
import ProtectedRoute from "./ProtectedRoute";

const ReactRouter = () => {
  return (
    <AuthProvider>
      <NavBar />
      <div className="content">
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="about" element={<About />} />
          <Route path="order-summary" element={<OrderSummary />} />
          <Route path="products" element={<Products />}>
            <Route index element={<Featured />} />
            <Route path="featured" element={<Featured />} />
            <Route path="newProducts" element={<NewProducts />} />
          </Route>
          {/* <Route element={<ProtectedRoute />}> */}
          {/* Not wroking above code */}
          <Route path="users" element={<Users />}>
            <Route path=":userId" element={<UserDetails />} />
            <Route path="admin" element={<Admin />} />
          </Route>
          {/* </Route> */}
          <Route path="login" element={<Login />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </AuthProvider>
  );
};

export default ReactRouter;
