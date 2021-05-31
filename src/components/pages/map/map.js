import React from "react";
import NavBar from "../NavBar";
import SideBar from "../Sidebar";
import MapComponent from "./MapComponent";

export default function map() {
  return (
    <div className="container">
      <div className="nav">
        <NavBar />
      </div>
      <div className="main_content">
        <div className="sidebar">
          <SideBar />
        </div>
        <div className="inner_content">
          <div className="message">message</div>
          <div className="maps_main"><MapComponent/></div>
        </div>
      </div>
    </div>
  );
}
