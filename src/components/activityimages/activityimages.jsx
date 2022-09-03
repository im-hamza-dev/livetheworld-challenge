import React from "react";
import { useEffect } from "react";
import "./activityimages.scss";
import Slider from "react-slick";
import AppServices from "../../service/appservice";
import { useState } from "react";

const ActivityImages = ({ imagesData, favorite, activityId, setFavorite }) => {
  const [isLoading, setIsLoading] = useState(false);
  const settings = {
    className: "slider variable-width",
    dots: false,
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    lazyload: true,
  };

  const toggleFavorite = () => {
    setIsLoading(true);
    let query = {
      activityId: activityId, // ID OF ACTIVITY TO ADD
      tripId: 0, // ID OF YOUR FAVORITE TRIP WHICH YOU RECEIVED IN TRIPS API
      tripType: "favorite",
    };
    if (favorite) {
      //remove from favorite
      AppServices.removeFrontendTripsFavorites(query)
        .then((res) => {
          console.log("Remove Favorite: ", res);
          setIsLoading(false);
          if (res.status === 200) {
            setFavorite(false);
          }
        })
        .catch((err) => console.log(err));
    } else {
      //add to favorite
      AppServices.addFrontendTripsFavorites(query)
        .then((res) => {
          console.log("Add Favorite: ", res);
          setIsLoading(false);
          if (res.status === 200) {
            setFavorite(true);
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div>
      <div className="activity-save-btn-wrapper">
        <button className="activity-save-btn" onClick={() => toggleFavorite()}>
          {isLoading ? "..." : favorite ? "Saved" : "Save"}
        </button>
      </div>
      <Slider {...settings}>
        {imagesData?.map((imageItem, index) => (
          <div key={index} className="carousel-img-wrapper">
            <img src={imageItem.url} alt={imageItem.name} loading=" lazy" />
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default ActivityImages;
