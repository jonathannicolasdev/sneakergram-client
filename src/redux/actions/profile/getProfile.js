import axios from "axios";

const getProfile = (username) => {
  return async (dispatch) => {
    dispatch({ type: "GET_PROFILE_START" });

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
