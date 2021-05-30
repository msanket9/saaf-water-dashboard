import React from "react";
import NavBar from "../NavBar";
import SideBar from "../Sidebar";
export default function map() {
  return (
    <div class="container">
      <div class="nav">
        <NavBar />
      </div>
      <div class="main_content">
        <div class="sidebar">
          <SideBar />
        </div>
        <div class="inner_content">
          <div class="message">message</div>
          <div>Maps</div>
        </div>
      </div>
    </div>
  );
}
