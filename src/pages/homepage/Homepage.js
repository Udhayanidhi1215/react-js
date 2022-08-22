import React from "react";
// import Layout from '../../components/layout/Layout'
import Sidebar from "../../components/sidebar/Sidebar";

const Homepage = () => {
  const getData = (getData) => {
    alert(getData);
  };
  return (
    // < Layout data="Home" color="red">
    //     <div className='home'>
    //         <h1 className>WELCOME</h1>

    //     </div>

    // </Layout>
    <Sidebar getData={getData} />
  );
};

export default Homepage;
