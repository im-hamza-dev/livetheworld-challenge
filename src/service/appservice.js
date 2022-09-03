import axiosInstance from "./baseService";

export default class AppServices {
  static login = (query) => {
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

  static getActivityDetail = (query) => {
    const targetUrl = `/frontend/activities/slug/${query.activitySlug}`;
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

  static getFrontendTrips = () => {
    const targetUrl = `/frontend/trips`;
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

  static getNearbyActivities = (query) => {
    const targetUrl = `/frontend/activities/nearby/${query.activityId}`;
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

  static addFrontendTripsFavorites = (query) => {
    const targetUrl = `/frontend/trips/add_activity`;
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

  static removeFrontendTripsFavorites = (query) => {
    const targetUrl = `/frontend/trips/remove_activity`;
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
