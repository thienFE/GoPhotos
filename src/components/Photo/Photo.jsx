import React, { useEffect, useState } from "react";
import PhotoItem from "./PhotoItem";
import { connect } from "react-redux";
import { getPhotos } from "../../store/actions/photoActions";
import PropTypes from "prop-types";
import notfound from "../../assets/images/notfound.png";

import "./Photo.scss";
import OnTopScroll from "../OnTopScroll/OnTopScroll";

function Photo({ photos, getPhotos, keyword }) {
  const [isData, setIsData] = useState(false);
  const [isOnTop, setIsOnTop] = useState(false);
  useEffect(() => {
    getPhotos();
  }, [getPhotos]);
  useEffect(() => {
    setIsData(false);
  }, [keyword]);

  window.onscroll = () => {
    if (window.scrollY >= 540) {
      setIsOnTop(true)
    } else {
      setIsOnTop(false)
    }
  }

  return (
    <div className="photo-container">
      {photos.map((photo) => {
        if (photo.title.toUpperCase().search(keyword.toUpperCase()) !== -1) {
          isData || setIsData(true);
          return (
            <PhotoItem
              key={photo.id}
              url={photo.url}
              title={photo.title}
              id={photo.id}
            />
          );
        }
        return null;
      })}
      {isData || <img className="not-found" src={notfound} alt="not-found" />}
      {isOnTop && <OnTopScroll />}
    </div>
  );
}

Photo.propTypes = {
  photos: PropTypes.array.isRequired,
  keyword: PropTypes.string.isRequired,
  getPhotos: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  photos: state.photos.photos,
  keyword: state.keyword.keyword,
});

export default connect(mapStateToProps, { getPhotos })(Photo);
