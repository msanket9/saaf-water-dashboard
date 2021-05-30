import React from "react";
import NavBar from "../NavBar";
import SideBar from "../Sidebar";
import { Graphs } from "../home/Home";
export default function charts() {
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
          <Graphs />
        </div>
      </div>
    </div>
  );
}
