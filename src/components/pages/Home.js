import React from 'react'
import './Home.css';
import LineChart from '../charts/LineChart'
import {SidebarData} from './SidebarData'


function Home() {
  return (
    <div className="container">
      <nav>Navbar</nav>
      <div id="main-content">
      <div className="sidebar">
        <ul className="SidebarList" >
          {SidebarData.map((val, key)=>{
            return (
            <li key = {key}
            className = "row"
            id={window.location.pathname === val.link ? "active" : ""}
            onClick={() => {window.location.pathname = val.link}}>
                {" "}
                <div id= "icon">{val.icon}</div>{" "}
                <div id = "title">{val.title}</div>{" "}
              </li>
            )
          })}
        </ul>
      </div>
        <div id="inner-content">
          <div id="map">Map</div>
          <div id="summary">Summary</div>
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
