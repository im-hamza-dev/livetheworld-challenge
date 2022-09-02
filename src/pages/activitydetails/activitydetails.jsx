import React from "react";
import "./activitydetails.scss";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import ActivityImages from "../../components/activityimages/activityimages";
import NearbyActivityCard from "../../components/nearbyactivitycard/nearbyactivitycard";
import { useEffect } from "react";
import { useState } from "react";
import LoginModal from "../../components/loginmodal/loginmodal";

const ActivityDetails = () => {
  const [authenticated, setAuthenticated] = useState(true);
  let { activity_slug } = useParams();
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
  useEffect(() => {
    let token = localStorage.getItem("JWT");
    console.log(token);
    if (token) {
      console.log("get activity data...");
    } else {
      setAuthenticated(false);
    }
  }, []);
  return (
    <>
      <div className="activity-page-wrapper">
        <ActivityImages />
        <div className="activity-content-wrapper">
          <h1 className="activity-content-heading">
            CASTLE OF GERALD THE DEVIL
          </h1>
          <div className="activity-content-labels-wrapper">
            <div>Sightseeing</div>
            <div>COVID Proof</div>
            <div>Sightseeing</div>
            <div>COVID Proof</div>
            <div>Sightseeing</div>
            <div>COVID Proof</div>
          </div>
          <p className="activity-content-shortdesc">
            The Castle of Gerald the Devil is one landmark you should photo
            while walking around Ghent’s city centre. It’s got a whole lot of
            range. The castle has been a monastery, an asylum, and more.
          </p>
          <p className="activity-content-longdesc">
            Castle of Gerald the Devil is a 13th century Gothic castle. Ghent is
            full of history and fascinating old buildings, but this castle is
            unique in appearance and its past. Have a quick look while you’re
            strolling around Ghent’s city centre. You can’t go inside the
            castle, so this is more of a photo spot for your trip than a thing
            to do. Ghent has a couple of castles. Gravensteen is the most
            well-known castle of Ghent, as it housed the Counts of Flanders, but
            it's older and more medieval in style. Don’t miss out on seeing this
            lesser known, but still impressive castle in the heart of the city.
            Castle of Gerald the Devil is named after a knight, Geeraard Vilain.
            He went by the nickname Geeraard de Duivel (“Gerard the Devil”).
            Supposedly, this was based on his appearance. Gerard the Devil had
            dark hair and dark complexion. We think he might’ve just been a bit
            of an edgelord. Hidden History: Castle of Gerald the Devil has been
            used for a bunch of stuff. It housed knights, weapons, monks, school
            kids, and more throughout Ghent’s long history. In the 1600s, the
            castle became a madhouse and prison where patients were locked away
            and suffered terrible mistreatment. Visit Museum Dr. Guislain to see
            the inside of Ghent’s darker history You can’t go inside, so this
            castle is just a photo spot. It was supposed to be used to store
            Ghent’s city archives, but that plan didn’t work out so now it’s up
            for sale. Maybe someday you’ll get to go in and explore, but for now
            settle for snapping up photos of this Gothic castle.
          </p>
          <div>Map here</div>
          <div className="activity-nearby-wrapper">
            <h2>Recommended Activities Nearby</h2>
            <Slider {...settings}>
              <NearbyActivityCard />
              <NearbyActivityCard />
              <NearbyActivityCard />
              <NearbyActivityCard />
              <NearbyActivityCard />
              <NearbyActivityCard />
              <NearbyActivityCard />
            </Slider>
          </div>
        </div>
      </div>
      <LoginModal showLogin={!authenticated} handleLogin={setAuthenticated} />
    </>
  );
};
export default ActivityDetails;
