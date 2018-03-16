import React from "react";
import "./god-label.css";

const GodLabel = ({ name, onSelect }) => {
  return (
    <div className="god-label" onClick={onSelect}>
      {name}
    </div>
  );
};

export { GodLabel };
