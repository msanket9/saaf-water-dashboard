import React from "react";
import NavBar from "../NavBar";
import SideBar from "../Sidebar";
import "./Home.css";
function Home() {
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
          <div class="top_content">
            <div class="map">map</div>
            <div class="summary">summary</div>
          </div>
          <div class="graphs">
            <div class="graph_div"></div>
            <div class="graph_div"></div>
            <div class="graph_div"></div>
            <div class="graph_div"></div>
            <div class="graph_div"></div>
          </div>
          <div class="history">history</div>
        </div>
      </div>
    </div>
  );
}

export default Home;
