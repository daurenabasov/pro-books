import axios from "axios";

export const login = (username, email, password) => {
  return async (dispatch) => {
    try {
      const responce = await axios.post(
        `https://285d-212-112-122-214.in.ngrok.io/auth/token/login/`,
        {
          username,
          email,
          password,
        }
      );
      dispatch(setUser(responce.data.user));
      localStorage.setItem("token", responce.data.token);
      console.log("success");
    } catch (error) {
      console.error(error);
    }
  };
};
