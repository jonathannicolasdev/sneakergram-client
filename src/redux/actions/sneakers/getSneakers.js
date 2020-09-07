import axios from "axios";

import sleep from "../../../utils/sleep";

const getSneakers = () => {
  return async (dispatch) => {
    dispatch({ type: "GET_SNEAKERS_START" });
    await sleep();

    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/sneakers`
      );

      dispatch({
        type: "GET_SNEAKERS_SUCCESS",
        payload: response.data.sneakers,
      });
    } catch (error) {
      dispatch({
        type: "GET_SNEAKERS_FAILURE",
        payload: error,
      });
    }
  };
};

export default getSneakers;
