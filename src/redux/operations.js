import axios from "axios";
import actions from "./actions";

// axios.defaults.baseURL = "https://connections-api.herokuapp.com";

axios.defaults.baseURL = "https://goitproject.herokuapp.com/";

const token = {
  set(token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common["Authorization"] = ``;
  },
};

const register = (credential) => (dispatch) => {
  // dispatch(actions.registerRequest());
  axios
    .post("/users/signup", credential)
    .then((res) => {
      dispatch(actions.registerSuccess(res.data));
    })
    .catch((error) => dispatch(actions.registerError(error.message)));
};
const logIn = (credential) => (dispatch) => {
  dispatch(actions.loginRequest());
  axios
    .post("/users/login", credential)
    .then((res) => {
      token.set(res.data.token);
      dispatch(actions.loginSuccess(res.data));
    })
    .catch((error) => dispatch(actions.loginError(error.message)));
};
const logOut = () => (dispatch) => {
  dispatch(actions.logoutRequest());

  axios
    .post("/users/logout")
    .then((res) => {
      token.unset();
      dispatch(actions.logoutSuccess(res.data));
    })
    .catch((error) => dispatch(actions.logoutError(error.message)));
};

const getCurrentUser = () => (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();
  if (!persistedToken) return;
  token.set(persistedToken);
  dispatch(actions.getCurrentUserRequest());
  axios
    .get("/users/current")
    .then((res) => {
      dispatch(actions.getCurrentUserSuccess(res.data.user));
    })
    .catch((error) => dispatch(actions.getCurrentUserError(error.message)));
};

const repeatEmailVerify = (email) => (dispatch) => {
  axios.post("/users/verify", email);
};

const getUsers = () => (dispatch) => {
  axios.get("/users/all").then((res) => {
    dispatch(actions.getUsersSuccess(res.data.data));
  });
};

const operations = {
  register,
  logIn,
  logOut,
  getCurrentUser,
  repeatEmailVerify,
  getUsers,
};

export default operations;
