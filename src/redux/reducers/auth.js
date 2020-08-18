const initialState = {
  authenticated: false,
  token: null,
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case "SET_AUTHENTICATED_TRUE":
      return {
        ...state,
        authenticated: true,
        token: action.payload.token,
        decodedToken: action.payload.decodedToken,
      };
    case "SET_AUTHENTICATED_FALSE":
      return {
        authenticated: false,
      };
    default:
      return initialState;
  }
};

export default auth;
