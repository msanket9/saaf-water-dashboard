import React from "react";
import { NavLink } from "react-router-dom";
import DashboardTwoToneIcon from "@material-ui/icons/DashboardTwoTone";
import TimelineIcon from "@material-ui/icons/Timeline";
import MapTwoToneIcon from "@material-ui/icons/MapTwoTone";
import OpacityTwoToneIcon from "@material-ui/icons/OpacityTwoTone";
export default function SideBar() {
  return (
    <>
      <NavLink exact activeClassName="active" to="/dashboard">
        <DashboardTwoToneIcon /> <h3>Dashboard</h3>
      </NavLink>
      <NavLink activeClassName="active" to="/charts">
        <TimelineIcon /><h3>Charts</h3> 
      </NavLink>
      <NavLink activeClassName="active" to="/maps">
        <MapTwoToneIcon /> <h3>Maps</h3>
      </NavLink>
      <NavLink activeClassName="active" to="/labtest">
        <OpacityTwoToneIcon /> <h3>Lab Test</h3>
      </NavLink>
    </>
  );
}
