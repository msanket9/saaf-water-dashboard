import React from "react";
import "./map.css";


export default function MapComponent() {

  return (
      <div className="embed-container">
        <iframe width="100%" 
                height="100%" 
                frameborder="0" 
                scrolling="no" 
                marginheight="0" 
                marginwidth="0" 
                title="Saaf-Water" 
                src="//www.arcgis.com/apps/Embed/index.html?webmap=fbadf2d08dd141aa8fbfe60a227e189b&extent=73.6904,14.9614,74.7046,15.5324&zoom=true&previewImage=false&scale=true&search=true&searchextent=true&disable_scroll=true&theme=light">
        </iframe>
      </div>
  );
}
