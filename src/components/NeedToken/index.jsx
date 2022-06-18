import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export default function NeedToken() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = sessionStorage.getItem("jwt");
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  return <Outlet />;
}
