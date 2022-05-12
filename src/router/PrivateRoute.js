import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
export default function PrivateRoute({ navigateToPath }) {
  const isUserLoggedIn = useSelector((state) => state.auth.isUserLoggedin);
  return isUserLoggedIn ? navigateToPath : <Navigate replace to="/login" />;
}
