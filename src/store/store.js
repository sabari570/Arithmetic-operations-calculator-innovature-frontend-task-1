import { createStore } from "vuex";
import auth from "./modules/auth/index.js";
import { SHOW_LOADING_SPINNER_MUTATION } from "./storeConstants.js";

const store = createStore({
  modules: {
    auth,
  },
  state() {
    return {
      showLoading: false,
    };
  },
  mutations: {
    [SHOW_LOADING_SPINNER_MUTATION](state, payload) {
      state.showLoading = payload;
    },
  },
});

export default store;
