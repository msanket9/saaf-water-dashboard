import React from "react";
import { NavLink } from "react-router-dom";
import DashboardTwoToneIcon from "@material-ui/icons/DashboardTwoTone";
import TimelineIcon from "@material-ui/icons/Timeline";
import MapTwoToneIcon from "@material-ui/icons/MapTwoTone";
import OpacityTwoToneIcon from "@material-ui/icons/OpacityTwoTone";
export default function SideBar() {
  return (
    <>
      <NavLink activeClassName="active" to="/dashboard">
        <DashboardTwoToneIcon /> Dashboard
      </NavLink>
      <NavLink activeClassName="active" to="/charts">
        <TimelineIcon /> Charts
      </NavLink>
      <NavLink activeClassName="active" to="/maps">
        <MapTwoToneIcon /> Maps
      </NavLink>
      <NavLink activeClassName="active" to="/labtest">
        <OpacityTwoToneIcon /> Labtest
      </NavLink>
    </>
  );
}
