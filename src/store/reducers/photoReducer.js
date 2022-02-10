import { GET_PHOTO } from "../types";

const initialState = {
  photos: [],
};

const photoReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PHOTO:
      return {
        ...state,
        photos: action.payload,
      };

    default:
      return state;
  }
};

export default photoReducer;
