import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import actions from "./actions";

const initState = { email: null, password: null };
const user = createReducer(initState, {
  [actions.registerSuccess.type]: (state, action) => action.payload.user,
  [actions.loginSuccess.type]: (state, action) => action.payload.user,
  [actions.logoutSuccess.type]: () => initState,
  [actions.getCurrentUserSuccess.type]: (state, action) => action.payload,
});
const token = createReducer(null, {
  [actions.registerSuccess.type]: (state, action) => action.payload.token,
  [actions.loginSuccess.type]: (state, action) => action.payload.token,
  [actions.logoutSuccess.type]: () => null,
});
const error = createReducer(null, {
  [actions.registerError.type]: (state, action) => action.payload,
  [actions.loginError.type]: (state, action) => action.payload,
  [actions.logoutError.type]: (state, action) => action.payload,
  [actions.getCurrentUserError.type]: (state, action) => action.payload,
});

const isAuthenticated = createReducer(false, {
  // [actions.registerSuccess.type]: () => true,
  [actions.loginSuccess.type]: () => true,
  [actions.getCurrentUserSuccess.type]: () => true,
  [actions.logoutSuccess.type]: () => false,
  [actions.registerError.type]: () => false,
  [actions.loginError.type]: () => false,
  [actions.getCurrentUserError.type]: () => false,
});


// const projects = combineReducers({
  
// });

const auth = combineReducers({
    user,
    isAuthenticated,
    token,
    error,
  });
  
  const reducers = { auth };
  export default reducers;