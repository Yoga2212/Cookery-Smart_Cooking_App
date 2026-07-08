import React from "react";
import { useNavigate } from "react-router-dom";

function ItemDescription() {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate("/home")}>Go Home</button>
    </div>
  );
}

export default ItemDescription;
