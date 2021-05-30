import React from "react";
import ReactMapGL from "react-map-gl";

export default function MapComponent() {
  let [viewport, setViewport] = React.useState({
    latitude: 15.2993,
    longitude: 74.1240,
    zoom: 6,
    width: 500,
    height: 500
  });

  return (
    <div style={{ padding: 0, margin: 0 }}>
      <ReactMapGL
        mapboxApiAccessToken={
          "pk.eyJ1IjoibXNhbmtldDkiLCJhIjoiY2twYXo5bW5wMDJnMTJycnRoYjBseGtwNCJ9.P_dFx_rfgoALAEvtRm7iuQ"
        }
        {...viewport}
        onViewportChange={(viewport) => setViewport(viewport)}
      />
    </div>
  );
}