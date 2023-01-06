import React from "react";
import { useNavigate } from "react-router-dom";

function PageNotFound() {
  const navigate = useNavigate();

  setTimeout(() => {
    navigate("/");
  }, 2000);

  return (
    <div>
      <h1>Página no encontrada</h1>
      <small>Te estamos redirigiendo a la homepage...</small>
    </div>
  );
}

export default PageNotFound;
