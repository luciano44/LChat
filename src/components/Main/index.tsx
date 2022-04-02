import "./style.scss";
import React from "react";

const index: React.FC<{}> = ({ children }) => {
  return <div className="main">{children}</div>;
};

export default index;
