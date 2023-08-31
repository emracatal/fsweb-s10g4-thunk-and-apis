import axios from "axios";

export const GET_FAVS_FROM_LS = "GET_FAVS_FROM_LS";
export const FAV_ADD = "FAV_ADD";
export const FAV_REMOVE = "FAV_REMOVE";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_LOADING = "FETCH_LOADING";
export const FETCH_ERROR = "FETCH_ERROR";

export const getFavsFromLocalStorage = () => {
  return { type: GET_FAVS_FROM_LS };
};

export const addFav = (info) => {
  return { type: FAV_ADD, payload: info };
};

export const removeFav = (item) => {
  return { type: FAV_REMOVE, payload: item };
};

export const fetchAnother = () => (dispatch) => {
  dispatch({ type: FETCH_LOADING });

  return axios
    .get("https://dog.ceo/api/breeds/image/random")
    .then(function (response) {
      dispatch({ type: FETCH_SUCCESS, payload: response.data.message });
      console.log(response);
    })
    .catch(function (error) {
      dispatch({ type: FETCH_ERROR, payload: error.message });
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
};
