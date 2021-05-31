import React from "react";
import NavBar from "../NavBar";
import SideBar from "../Sidebar";
import "./Home.css";
import LineChart from "../../charts/LineChart";
import MapComponent from "../map/MapComponent";
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
            <button className="messageButton" onClick={closeMessages}>
              Close me
            </button>
          </div>
          <div className="top_content">
            <div className="map">
              <MapComponent />
            </div>
            <div className="summary">summary</div>
          </div>
          <Graphs />
        </div>
      </div>
    </div>
  );
}
export function Graphs() {
  const GraphData = [
    {
      labels: ["1", "2", "20", "80", "10"],
      datasets: [
        {
          label: "TDS",
          fill: "start",
          borderColor: "rgb(0, 199, 79)",
          backgroundColor: "rgb(0, 199, 79)",
          borderWidth: 2,
          pointColor: "#fff",
          pointStrokeColor: "rgb(0, 199, 79)",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgb(0, 199, 79)",
          data: [300, 100, 56, 50, 68, 80],
        },
      ],
    },
    {
      labels: ["1", "2", "20", "80", "10"],
      datasets: [
        {
          label: "TDS",
          fill: "start",
          borderColor: "rgb(0, 199, 79)",
          backgroundColor: "rgb(0, 199, 79)",
          borderWidth: 2,
          pointColor: "#fff",
          pointStrokeColor: "rgb(0, 199, 79)",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgb(0, 199, 79)",
          data: [300, 100, 56, 50, 68, 80],
        },
      ],
    },
    {
      labels: ["1", "2", "20", "80", "10"],
      datasets: [
        {
          label: "TDS",
          fill: "start",
          borderColor: "rgb(0, 199, 79)",
          backgroundColor: "rgb(0, 199, 79)",
          borderWidth: 2,
          pointColor: "#fff",
          pointStrokeColor: "rgb(0, 199, 79)",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgb(0, 199, 79)",
          data: [300, 100, 56, 50, 68, 80],
        },
      ],
    },
    {
      labels: ["1", "2", "20", "80", "10"],
      datasets: [
        {
          label: "TDS",
          fill: "start",
          borderColor: "rgb(0, 199, 79)",
          backgroundColor: "rgb(0, 199, 79)",
          borderWidth: 2,
          pointColor: "#fff",
          pointStrokeColor: "rgb(0, 199, 79)",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgb(0, 199, 79)",
          data: [300, 100, 56, 50, 68, 80],
        },
      ],
    },
    {
      labels: ["1", "2", "20", "80", "10"],
      datasets: [
        {
          label: "TDS",
          fill: "start",
          borderColor: "rgb(0, 199, 79)",
          backgroundColor: "rgb(0, 199, 79)",
          borderWidth: 2,
          pointColor: "#fff",
          pointStrokeColor: "rgb(0, 199, 79)",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgb(0, 199, 79)",
          data: [300, 100, 56, 50, 68, 80],
        },
      ],
    },
  ];
  return (
    <>
      <div className="graphs">
        {GraphData.map((data, index) => {
          return (
            <div className="graph_div" key={index}>
              <LineChart Graphdata={data} />
            </div>
          );
        })}
      </div>
      <div className="history">
        {" "}
        <LineChart Graphdata={GraphData[0]} />{" "}
      </div>
    </>
  );
}
export default Home;
