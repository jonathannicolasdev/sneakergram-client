import axios from "axios";

const register = (user) => {
  return async (dispatch) => {
    dispatch({ type: "REGISTER_START" });

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/users/register`,
        user
      );

      dispatch({
        type: "REGISTER_SUCCESS",
        payload: response.data.message,
      });
    } catch (error) {
      dispatch({
        type: "REGISTER_FAILURE",
        payload: error,
      });
    }
  };
};

export default register;
