import React from 'react';
import { Navigate } from "react-router-dom";

const ProtectedRouteElement = ({ element, loggedIn  }) => {
  return (
    loggedIn ? element : <Navigate to="/" />
)}

export default ProtectedRouteElement; 