import React, { useEffect, useState } from "react";
import "./nearbyactivitycard.scss";
import { useHistory } from "react-router-dom";
import AppServices from "../../service/appservice";

const NearbyActivityCard = ({
  nearbyActivity,
  favoriteList,
  setFavoriteList,
}) => {
  let history = useHistory();
  let [isLoading, setIsLoading] = useState(false);
  let [favorite, setFavorite] = useState(false);

  const gotoNearbyActivity = () => {
    document
      .getElementById("activity-page")
      .scrollIntoView({ behavior: "smooth" });
    history.push(`/${nearbyActivity?.slug}`);
  };

  useEffect(() => {
    console.log("calling useEffect", nearbyActivity?.id);
    if (nearbyActivity?.id) {
      console.log("calling useEffect inside", nearbyActivity?.id);

      let favoriteExist = favoriteList?.findIndex(
        (favorite) => favorite.id === nearbyActivity?.id
      );
      if (favoriteExist >= 0) {
        console.log("Nearby Items: ", nearbyActivity?.id);
        setFavorite(true);
      }
    }
  }, []);

  const toggleFavorite = () => {
    setIsLoading(true);
    let query = {
      activityId: nearbyActivity?.id, // ID OF ACTIVITY TO ADD
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
            setFavoriteList(res?.data[0]?.activities);
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
            setFavoriteList(res?.data[0]?.activities);
            setFavorite(true);
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div
      className="nearby-activity-card"
      id={`nearby-activity-${nearbyActivity?.id}`}
    >
      <div className="nearby-activity-card-cover">
        <div className="nearby-activity-card-btn-wrapper">
          <button onClick={() => toggleFavorite()}>
            {isLoading ? "..." : favorite ? "Saved" : "Save"}
          </button>
        </div>
        <img
          src={nearbyActivity?.images[0].small}
          alt={nearbyActivity?.images[0].name}
          loading=" lazy"
        />
      </div>
      <div className="nearby-activity-card-text-wrapper">
        <div className="nearby-activity-card-heading">
          {nearbyActivity?.name}
        </div>
        <p
          className="nearby-activity-card-desc"
          dangerouslySetInnerHTML={{
            __html: nearbyActivity?.description_short,
          }}
        />
        <div
          className="nearby-activity-card-readmore"
          onClick={() => gotoNearbyActivity()}
        >
          Read More
        </div>
      </div>
    </div>
  );
};
export default NearbyActivityCard;
