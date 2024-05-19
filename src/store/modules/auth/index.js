import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

export default {
  namespaced: true,
  state() {
    return {
      errorMessage: '',
      username: '',
      accessToken: '',
      refreshToken: '',
    };
  },
  getters,
  mutations,
  actions,
};
