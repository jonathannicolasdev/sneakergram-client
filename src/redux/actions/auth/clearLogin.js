const clearLogin = () => {
  return async (dispatch) => {
    dispatch({ type: "CLEAR_LOGIN_ERROR" });
  };
};

export default clearLogin;
