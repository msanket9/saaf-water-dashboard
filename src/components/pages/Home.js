import React from 'react'
import './Home.css';
import LineChart from '../charts/LineChart'

function Home() {
  return (
    <div class="container">
      <nav>Navbar</nav>
      <div id="main-content">
        <div id="sidebar">Sidebar</div>
        <div id="inner-content">
          <div id="map">Map</div>
          <div id="summary">Summany</div>
          <div id="tds" ><LineChart/></div>
          <div id="turbidity"><LineChart/></div>
          <div id="ph"><LineChart/></div>
          <div id="ec"><LineChart/></div>
          <div id="temp"><LineChart/></div>
          <div id="history"><LineChart/></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
