export default {
  state() {
    return {
      user: {}
    }
  },
  mutations: {
    set_user(state, value) {
      state.user = value;
    }
  },
  getters: {
    email(state) {
      return state.user.email;
    }
  }
}