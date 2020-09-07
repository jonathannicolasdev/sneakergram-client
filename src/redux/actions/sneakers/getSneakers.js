import axios from "axios";

const getSneakers = () => {
  return async (dispatch) => {
    dispatch({ type: "GET_SNEAKERS_START" });

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
