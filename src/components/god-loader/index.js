import React from "react";
import "./god-loader.css";
import loader from "./loader.gif";

const GodLoader = ({ god }) => {
  return (
    <div className="god-loader">
      <img alt="Loading..." src={loader} />
      <div className="loading-text">
        Please wait, we are analyzing the data to check for evidence of the
        existence of <span className="god-name">{god.name}</span>
      </div>
    </div>
  );
};

export { GodLoader };
