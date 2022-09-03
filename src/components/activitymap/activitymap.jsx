import React from "react";
import "./activitymap.scss";
import Marker from "../../assets/images/marker.png";
import GoogleMap from "google-map-react";

const MapMarker = ({ text }) => (
  <div className="activity-map-marker">
    <img src={Marker} alt={`map-marker-${text}`} />
  </div>
);

const ActivityMap = ({ currentActivityLocation }) => {
  return (
    <div className="activity-map-wrapper">
      <GoogleMap
        center={[currentActivityLocation[1], currentActivityLocation[0]]}
        defaultCenter={[currentActivityLocation[1], currentActivityLocation[0]]}
        defaultZoom={15}
      >
        {currentActivityLocation && (
          <MapMarker
            text={"Castle of the Counts"}
            lat={currentActivityLocation[1]}
            lng={currentActivityLocation[0]}
          ></MapMarker>
        )}
      </GoogleMap>
    </div>
  );
};

export default ActivityMap;
