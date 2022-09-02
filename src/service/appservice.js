import axiosInstance from "./baseService";

export default class AppServices {
  login = (query) => {
    const targetUrl = `/auth/local/`;
    return new Promise((resolve, reject) => {
      axiosInstance["post"](targetUrl, query)
        .then((response) => {
          resolve(response);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };

  getActivityDetail = (query) => {
    const targetUrl = ` /frontend/activities/slug/${query.activitySlug}`;
    return new Promise((resolve, reject) => {
      axiosInstance["get"](targetUrl)
        .then((response) => {
          resolve(response);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };

  getFrontendTrips = (query) => {
    const targetUrl = ` /frontend/trips/${query.activitySlug}`;
    return new Promise((resolve, reject) => {
      axiosInstance["get"](targetUrl)
        .then((response) => {
          resolve(response);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };

  getNearbyActivities = (query) => {
    const targetUrl = ` /frontend/activities/nearby/${query.activitySlug}`;
    return new Promise((resolve, reject) => {
      axiosInstance["get"](targetUrl)
        .then((response) => {
          resolve(response);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };

  addFrontendTripsFavorites = (query) => {
    const targetUrl = ` /frontend/trips/add_activity`;
    return new Promise((resolve, reject) => {
      axiosInstance["put"](targetUrl, query)
        .then((response) => {
          resolve(response);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };

  removeFrontendTripsFavorites = (query) => {
    const targetUrl = ` /frontend/trips/remove_activity`;
    return new Promise((resolve, reject) => {
      axiosInstance["put"](targetUrl, query)
        .then((response) => {
          resolve(response);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
}
