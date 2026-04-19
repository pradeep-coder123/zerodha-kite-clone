import React from "react";

function ProtectedRoute({ children }) {
  let token = localStorage.getItem("token");

  // Check URL token (coming from frontend)
  if (!token) {
    const params = new URLSearchParams(window.location.search);
    const urlToken = params.get("token");

    if (urlToken) {
      localStorage.setItem("token", urlToken);
      token = urlToken;
    }
  }

  if (!token) {
    window.location.href = "http://localhost:3000/login";
    return null;
  }

  return children;
}

export default ProtectedRoute;