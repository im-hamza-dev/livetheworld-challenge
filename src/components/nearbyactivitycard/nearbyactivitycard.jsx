import React from "react";
import "./nearbyactivitycard.scss";
import Sample1 from "../../assets/images/1.jpg";
import { useHistory } from "react-router-dom";

const NearbyActivityCard = () => {
  let history = useHistory();
  const gotoNearbyActivity = () => {
    history.push("/belfry-of-ghent");
  };

  return (
    <div className="nearby-activity-card">
      <div className="nearby-activity-card-cover">
        <div className="nearby-activity-card-btn-wrapper">
          <button>Save</button>
        </div>
        <img src={Sample1} alt="nearby-activity-cover" />
      </div>
      <div className="nearby-activity-card-text-wrapper">
        <div className="nearby-activity-card-heading">Patershol</div>
        <p className="nearby-activity-card-desc">
          A small but cute neighbourhood with cobblestone streets and
          independent shops. Close to Gravensteen (Castle of the Counts) that
          makes a historic atmosphere ...
        </p>
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
