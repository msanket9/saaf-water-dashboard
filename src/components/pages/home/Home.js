import React from "react";
import NavBar from "../NavBar";
import SideBar from "../Sidebar";
import "./Home.css";
import LineChart from '../../charts/LineChart'
import MapComponent from "../map/MapComponent"


function Home() {

  function closeMessages() {
    const messages = document.getElementById("messages");
    messages.style.display = "none";
  }

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
          <div className="message" id="messages">
            <button className="messageButton" onClick={closeMessages} >Close me</button>
          </div>
          <div className="top_content">
            <div className="map"><MapComponent/></div>
            <div className="summary">summary</div>
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
      <div className="graphs">
        <div className="graph_div"> <LineChart /> </div>
        <div className="graph_div"> <LineChart /> </div>
        <div className="graph_div"> <LineChart /> </div>
        <div className="graph_div"> <LineChart /> </div>
        <div className="graph_div" id="last-graph"> <LineChart /> </div>
      </div>
      <div className="history"> <LineChart /> </div>
    </>
  );
}
export default Home;
