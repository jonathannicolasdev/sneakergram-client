const initialState = {
  isLoading: false,
  error: null,
  data: null,
};

const profile = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PROFILE_START":
      return {
        ...state,
        isLoading: true,
        error: null,
        data: null,
      };
    case "GET_PROFILE_SUCCESS":
      return {
        ...state,
        isLoading: false,
        error: null,
        data: action.payload,
      };
    case "GET_PROFILE_FAILURE":
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

export default profile;
