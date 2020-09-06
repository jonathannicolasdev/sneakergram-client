const initialState = {
  isLoading: false,
  error: null,
  data: null,
};

const login = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        ...state,
        isLoading: true,
        error: null,
        data: null,
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        isLoading: false,
        error: null,
        authenticated: true,
        token: action.payload.token,
        decodedToken: action.payload.decodedToken,
      };
    case "LOGIN_FAILURE":
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

export default login;
