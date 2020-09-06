import axios from "axios";
import sleep from "../../../utils/sleep";

const register = (user) => {
  return async (dispatch) => {
    dispatch({ type: "REGISTER_START" });
    await sleep();

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
