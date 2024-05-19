import {
  ERROR_MESSAGE_GETTER,
  GET_USER_ACCESSTOKEN_GETTER,
  IS_USER_AUTHENTICATED_GETTER,
} from "@/store/storeConstants";

export default {
  [ERROR_MESSAGE_GETTER]: (state) => {
    return state.errorMessage;
  },
  [GET_USER_ACCESSTOKEN_GETTER]: (state) => {
    return state.accessToken;
  },
  [IS_USER_AUTHENTICATED_GETTER]: (state) => {
    return !!state.accessToken;
  },
};
