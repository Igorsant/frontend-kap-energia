import { Outlet, Navigate } from "react-router-dom";

export const AutoLogin = () => {
  const token = localStorage.getItem("auth");
  return token ? <Navigate to="/checkout" /> : <Outlet />;
};
