import React from "react";
import NavBar from "../NavBar";
import SideBar from "../Sidebar";
export default function labtest() {
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
          <div>Labtest</div>
        </div>
      </div>
    </div>
  );
}
