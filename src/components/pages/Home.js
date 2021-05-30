import React from 'react'
import './Home.css';
import LineChart from '../charts/LineChart'
import {SidebarData} from './SidebarData'


function Home() {
  return (
    <div class="container">
    <div class="nav">nav</div>
    <div class="main_content">
      <div class="sidebar">
        sidebar
      </div>
      <div class="inner_content">
        <div class="message">
          message
        </div>
        <div class="top_content">
          <div class="map">
            map
          </div>
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
