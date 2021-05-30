import React from "react";
import NavBar from "../NavBar";
import SideBar from "../Sidebar";
import "./Home.css";
import LineChart from '../../charts/LineChart'
import MapComponent from "../map/MapComponent"


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
            <div class="map"><MapComponent/></div>
            <div class="summary">summary</div>
          </div>
          <Graphs/>

        </div>
      </div>
    </div>
  );
}
export function Graphs() {
  return (
    <>
      <div class="graphs">
        <div class="graph_div"> <LineChart /> </div>
        <div class="graph_div"> <LineChart /> </div>
        <div class="graph_div"> <LineChart /> </div>
        <div class="graph_div"> <LineChart /> </div>
        <div class="graph_div"> <LineChart /> </div>
      </div>
      <div class="history"> <LineChart /> </div>
    </>
  );
}
export default Home;
