const initialState = {
  isLoading: false,
  error: null,
  data: null,
};

const register = (state = initialState, action) => {
  switch (action.type) {
    case "REGISTER_START":
      return {
        ...state,
        isLoading: true,
        error: null,
        data: null,
      };
    case "REGISTER_SUCCESS":
      return {
        ...state,
        isLoading: false,
        error: null,
        data: action.payload,
      };
    case "REGISTER_FAILURE":
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

export default register;
