const logout = () => {
  return async (dispatch) => {
    dispatch({ type: "LOGOUT" });
  };
};

export default logout;
