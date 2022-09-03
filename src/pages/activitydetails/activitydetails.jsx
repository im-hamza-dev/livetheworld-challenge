import React from "react";
import "./activitydetails.scss";
import { useParams, useHistory } from "react-router-dom";
import Slider from "react-slick";
import ActivityImages from "../../components/activityimages/activityimages";
import NearbyActivityCard from "../../components/nearbyactivitycard/nearbyactivitycard";
import { useEffect } from "react";
import { useState } from "react";
import AppServices from "../../service/appservice";
import LoginModal from "../../components/loginmodal/loginmodal";
import ActivityMap from "../../components/activitymap/activitymap";
import UserDetails from "../../components/userdetails/userdetails";

const ActivityDetails = () => {
  const [authenticated, setAuthenticated] = useState(true);
  const [activityDetail, setActivityDetail] = useState(null);
  const [favorite, setFavorite] = useState(false);
  const [nearbyActivties, setNearbyActivities] = useState(null);
  const [favoriteList, setFavoriteList] = useState(null);

  let history = useHistory();
  let { activity_slug } = useParams();
  const settings = {
    className: "slider variable-width",
    dots: false,
    infinite: false,
    centerMode: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    lazyload: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    let token = localStorage.getItem("JWT");
    console.log(token);
    if (!token || token === "undefined") {
      console.log(token);
      setAuthenticated(false);
    } else {
      fetchActivity();
    }
  }, [authenticated, activity_slug]);

  const fetchActivity = () => {
    let query = {
      activitySlug: activity_slug,
    };
    setFavorite(false);
    let activityIdTemp;
    setNearbyActivities(null);
    AppServices.getActivityDetail(query)
      .then((res) => {
        console.log("Detail: ", res);
        setActivityDetail(res.data);
        activityIdTemp = res?.data?.id;
        let query = {
          activityId: res.data.id,
        };
        AppServices.getNearbyActivities(query)
          .then((nearbyResp) => {
            console.log("Nearby: ", nearbyResp);
            setNearbyActivities(nearbyResp?.data);
          })
          .catch((err) => {
            console.log(err);
          });
        AppServices.getFrontendTrips()
          .then((tripsResp) => {
            let favoriteActivities = tripsResp?.data?.find(
              (trip) => trip.type === "favorite"
            )?.activities;
            setFavoriteList(favoriteActivities);
            console.log("Favorite Trips: ", favoriteActivities);
            let favoriteExist = favoriteActivities?.findIndex(
              (favorite) => favorite.id === activityIdTemp
            );
            if (favoriteExist >= 0) {
              setFavorite(true);
            }
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
        history.push("/");
      });
  };
  const formatText = (content) => {
    content?.split("**").forEach((text) => {
      content = text.replace(`**${text}**`, `<b>${text}</b>`);
    });
    return content;
  };
  return (
    <>
      <div
        className={`activity-page-wrapper fadein ${
          !authenticated ? "bgcolored" : ""
        }`}
        id="activity-page"
      >
        {activityDetail && (
          <>
            <UserDetails />
            <ActivityImages
              imagesData={activityDetail?.images}
              favorite={favorite}
              activityId={activityDetail?.id}
              setFavorite={setFavorite}
            />
          </>
        )}
        <div className="activity-content-wrapper">
          <h1 className="activity-content-heading">{activityDetail?.name}</h1>
          <div className="activity-content-labels-wrapper">
            {activityDetail?.labels.map((label, index) => (
              <div key={index}>{label.name}</div>
            ))}
          </div>
          <p
            className="activity-content-shortdesc"
            dangerouslySetInnerHTML={{
              __html: activityDetail?.description_short,
            }}
          />

          <p
            className="activity-content-longdesc"
            dangerouslySetInnerHTML={{
              __html: formatText(activityDetail?.description_long),
            }}
          />

          {activityDetail && (
            <ActivityMap
              currentActivityLocation={[
                activityDetail?.longitude,
                activityDetail?.latitude,
              ]}
            />
          )}
          <div className="activity-nearby-wrapper">
            {nearbyActivties && (
              <>
                <h2>Recommended Activities Nearby</h2>
                <Slider {...settings}>
                  {nearbyActivties?.map((nearbyActivity, index) => (
                    <NearbyActivityCard
                      key={index}
                      nearbyActivity={nearbyActivity}
                      favoriteList={favoriteList}
                      setFavoriteList={setFavoriteList}
                    />
                  ))}
                </Slider>
              </>
            )}
          </div>
        </div>
      </div>
      <LoginModal
        showLogin={!authenticated}
        setAuthenticated={setAuthenticated}
      />
    </>
  );
};
export default ActivityDetails;
