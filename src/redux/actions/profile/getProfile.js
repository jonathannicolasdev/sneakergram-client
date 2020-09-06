import axios from "axios";

import sleep from "../../../utils/sleep";

const getProfile = (username) => {
  return async (dispatch) => {
    dispatch({ type: "GET_PROFILE_START" });
    await sleep();

    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/users/${username}`
      );

      dispatch({
        type: "GET_PROFILE_SUCCESS",
        payload: response.data.user,
      });
    } catch (error) {
      dispatch({
        type: "GET_PROFILE_FAILURE",
        payload: error,
      });
    }
  };
};

export default getProfile;
