import axios from "axios";
import { ADD_KEYWORD, GET_PHOTO } from "../types";

export const getPhotos = () => async (dispatch) => {
  try {
    const response = await axios.get("https://gophotosapp-server.herokuapp.com/photos");
    dispatch({
      type: GET_PHOTO,
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const addKeyword = (keyword) => (dispatch) => {
  dispatch({
    type: ADD_KEYWORD,
    payload: keyword,
  });
};
