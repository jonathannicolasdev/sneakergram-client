import jwtDecode from "jwt-decode";

export const decodeToken = (token) => {
  try {
    const decodedToken = jwtDecode(token);
    if (decodedToken) return decodedToken;
  } catch (error) {
    console.error(error);
  }
};
