import React from "react";
import ReactMapGL from "react-map-gl";

export default function MapComponent() {
  let [viewport, setViewport] = React.useState({
    width: "100%",
    height: "100%",
    latitude: 15.2993,
    longitude: 74.124,
    zoom: 6,
  });

  return (
    <ReactMapGL
      mapboxApiAccessToken={
        "pk.eyJ1IjoibXNhbmtldDkiLCJhIjoiY2twYXo5bW5wMDJnMTJycnRoYjBseGtwNCJ9.P_dFx_rfgoALAEvtRm7iuQ"
      }
      {...viewport}
      onViewportChange={(viewport) => setViewport(viewport)}
    />
  );
}
