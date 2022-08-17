import React from "react";

//component
import Topbar from "../topbar/Topbar";
import Sidebar from "../sidebar/Sidebar";

const Layout = ({ children, data, data1, data2 }) => {
  return (
    <div style={{ display: "flex", width: "100%" }}>
      <div>
        <Sidebar />
      </div>
      <div>
        <Topbar data1={data} data2={data1} data3={data2} />
        {children}
      </div>
    </div>
  );
};

export default Layout;
