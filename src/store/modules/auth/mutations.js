import {
  ERROR_MESSAGE_MUTATION,
  SET_USER_DATA_MUTATION,
} from "@/store/storeConstants";

export default {
  [ERROR_MESSAGE_MUTATION](state, errorMessage) {
    state.errorMessage = errorMessage;
  },

  [SET_USER_DATA_MUTATION](state, payload) {
    state.username = payload.username;
    state.accessToken = payload.accessToken;
    state.refreshToken = payload.refreshToken;
  },
};
