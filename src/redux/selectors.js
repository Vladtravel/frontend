// import { createSelector } from "@reduxjs/toolkit";
// import { useLocation } from "react-router-dom";

const getToken = (state) => state.auth.token;

const isAuthenticated = (state) => state.auth.isAuthenticated;

const getUserEmail = (state) => state.auth.user.email;

const getAllProjects = (state) => state.projects;

const getVisibleOwners = (state) => state.projects.owners

const selectors = {
  getToken,
  isAuthenticated,
  getUserEmail,
  getAllProjects,
  getVisibleOwners,
};

export default selectors;
