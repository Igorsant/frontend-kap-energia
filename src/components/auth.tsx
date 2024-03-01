import { Outlet, Navigate } from "react-router-dom";

export const Auth = () => {
  const token = localStorage.getItem("auth");
  return token ? (
    <>
      <Navigate to="/checkout" />
      <Outlet />
    </>
  ) : (
    <Navigate to="/login" />
  );
};
