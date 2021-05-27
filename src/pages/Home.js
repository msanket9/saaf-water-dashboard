import React from 'react'
import './Home.css';

function Home() {
  return (
    <div class="container">
      <nav>Navbar</nav>
      <div id="main-content">
        <div id="sidebar">Sidebar</div>
        <div id="inner-content">
          <div id="map">Map</div>
          <div id="summary">Summany</div>
          <div id="tds">TDS</div>
          <div id="turbidity">Turbidity</div>
          <div id="ph">pH</div>
          <div id="ec">EC</div>
          <div id="temp">Temperature</div>
          <div id="history">History</div>
        </div>
      </div>
    </div>
  );
}

export default Home;
