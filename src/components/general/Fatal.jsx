import React from "react";
import "../../css/general.css";

const Fatal = ({ error }) => {
  return <div className="error">{error}</div>;
};

export default Fatal;
