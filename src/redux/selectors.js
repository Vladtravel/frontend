// import { createSelector } from "@reduxjs/toolkit";

const getToken = (state) => state.auth.token;

const isAuthenticated = (state) => state.auth.isAuthenticated;

console.log(isAuthenticated);

const getUserEmail = (state) => state.auth.user.email;
const selectors = {
    getToken,
    isAuthenticated,
    getUserEmail,
  };
  export default selectors;