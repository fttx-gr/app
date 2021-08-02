export const state = () => ({
  loggedIn: null,
  user: null
});

export const mutations = {
  setAuthState: (state, auth) => (state.loggedIn = auth),
  setUser: (state, user) => (state.user = user)
};
