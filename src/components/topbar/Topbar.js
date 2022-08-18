import React from "react";
import "./topbar.css";

const Topbar = (props) => {
  return (
    <div className="topbar">
      <h3 style={{ color:props.textcolor }}>{props.data1}</h3>
      {/* <h3 style={{ color: "yellow" }}>{props.data2}</h3>
      <h3 style={{ color: "white" }}>{props.data3}</h3> */}
    </div>
  );
};
export default Topbar;
