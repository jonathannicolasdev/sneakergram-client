import axios from "axios";

import sleep from "../../../utils/sleep";
import { decodeToken } from "../../../utils/jsonwebtoken";

const login = (user) => {
  return async (dispatch) => {
    dispatch({ type: "LOGIN_START" });
    await sleep();

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/users/login`,
        user
      );

      const token = response.data.token;
      const decodedToken = decodeToken(token);

      dispatch({
        type: "LOGIN_SUCCESS",
        payload: {
          token,
          decodedToken,
        },
      });
    } catch (error) {
      dispatch({
        type: "LOGIN_FAILURE",
        payload: error,
      });
    }
  };
};

export default login;
