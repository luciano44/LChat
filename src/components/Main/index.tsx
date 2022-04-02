import "./style.scss";
import React from "react";

type Props = { children: React.ReactNode };

function index({ children }: Props) {
  return <div className="main">{children}</div>;
}

export default index;
