const initialState = {
  isLoading: false,
  error: null,
  data: null,
};

const sneakers = (state = initialState, action) => {
  switch (action.type) {
    case "GET_SNEAKERS_START":
      return {
        ...state,
        isLoading: true,
        error: null,
        data: null,
      };
    case "GET_SNEAKERS_SUCCESS":
      return {
        ...state,
        isLoading: false,
        error: null,
        data: action.payload,
      };
    case "GET_SNEAKERS_FAILURE":
      return {
        ...state,
        isLoading: false,
        data: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default sneakers;
