import React, { useState } from "react";
import PhotoOverlay from "../PhotoOverlay/PhotoOverlay";

function PhotoItem(props) {
  const { url, title } = props;
  const [displayPhoto, setDisplayPhoto] = useState(false);
  return (
    <>
      <div onClick={() => setDisplayPhoto(true)} className="photo-item">
        <img src={url} alt={title} />
        <div className="name">{title}</div>
      </div>
      {displayPhoto && (
        <PhotoOverlay
          title={title}
          url={url}
          setDisplayPhoto={setDisplayPhoto}
        />
      )}
    </>
  );
}

export default PhotoItem;
