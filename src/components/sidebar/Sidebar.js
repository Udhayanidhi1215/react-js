import React from "react";
import "./sidebar.css";
// import { Link } from "react-router-dom";
// import img from "../../assets/images/boy.jpg";

const Sidebar = () => {
  const data = "WELCOME";
  const getData = (getData) => {
    alert(getData);
  };
  return (
    <div className="test">
      {" "}
      `
      {/* <img src={img} alt="Boy" className="img"></img>
      <ul className="side">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/login">Contact</Link>
        </li>
      </ul> */}
      <button onClick={() => getData(data)}>Enter</button>
    </div>
  );
};

export default Sidebar;
