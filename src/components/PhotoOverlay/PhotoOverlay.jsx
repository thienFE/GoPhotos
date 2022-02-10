import React from "react";
import "./PhotoOverlay.scss";

function PhotoOverlay(props) {
  const { url, title, setDisplayPhoto } = props;
  return (
    <div className="photo-overlay" onClick={() => setDisplayPhoto(false)}>
      <img src={url} alt={title} />
    </div>
  );
}

export default PhotoOverlay;
