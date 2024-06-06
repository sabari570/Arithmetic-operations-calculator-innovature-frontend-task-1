import router from "@/routes";
import axiosInstance from "@/services/axiosInterceptors";
import {
  AUTO_LOGIN_ACTION,
  ERROR_MESSAGE_MUTATION,
  LOGIN_ACTION,
  LOGOUT_ACTION,
  REGISTER_ACTION,
  SET_USER_DATA_MUTATION,
} from "@/store/storeConstants";

export default {
  async [REGISTER_ACTION](context, payload) {
    try {
      let postData = { username: payload.username, password: payload.password };
      const response = await axiosInstance.post(`/auth/register`, postData);
      if (response.status === 201) {
        router.push("/login");
        context.commit(ERROR_MESSAGE_MUTATION, "");
      }
    } catch (error) {
      console.log("Error while registering user in: ", error.response.data);
      context.commit(ERROR_MESSAGE_MUTATION, error.response.data.error);
    }
  },
  async [LOGIN_ACTION](context, payload) {
    try {
      let postData = { username: payload.username, password: payload.password };
      const response = await axiosInstance.post(`/auth/login`, postData);
      if (response.status === 200) {
        let userData = {
          username: response.data.username,
          accessToken: response.data["access-token"],
          refreshToken: response.data["refresh-token"],
        };
        localStorage.setItem("userData", JSON.stringify(userData));
        context.commit(SET_USER_DATA_MUTATION, userData);
        context.commit(ERROR_MESSAGE_MUTATION, "");
      }
    } catch (error) {
      console.log("Error while logging user in: ", error.response.data);
      context.commit(ERROR_MESSAGE_MUTATION, error.response.data.error);
    }
  },
  async [LOGOUT_ACTION](context) {
    try {
      const response = await axiosInstance.get(`/auth/logout`);
      console.log("Response after logging out user: ", response.data);
      context.commit(ERROR_MESSAGE_MUTATION, "");
    } catch (error) {
      console.log("Error while logging out user: ", error.response.data);
      context.commit(ERROR_MESSAGE_MUTATION, error.response.data.message);
    } finally {
      let userData = {
        username: null,
        accessToken: null,
        refreshToken: null,
      };
      context.commit(SET_USER_DATA_MUTATION, userData);
      localStorage.removeItem("userData");
      router.replace("/login");
    }
  },

  async [AUTO_LOGIN_ACTION](context) {
    let userDataString = localStorage.getItem("userData");
    if (userDataString) {
      let userData = JSON.parse(userDataString);
      context.commit(SET_USER_DATA_MUTATION, userData);
    }
  },
};
