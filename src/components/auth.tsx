import { Outlet, Navigate } from "react-router-dom";

export const Auth = () => {
  const token = localStorage.getItem('auth');
  return token ? <Outlet /> : <Navigate to="/login" />;
};
