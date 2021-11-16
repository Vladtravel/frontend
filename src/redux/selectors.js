import { createSelector } from "@reduxjs/toolkit";
import { useLocation } from "react-router-dom";

const getToken = (state) => state.auth.token;

const isAuthenticated = (state) => state.auth.isAuthenticated;

console.log(isAuthenticated);

const getUserEmail = (state) => state.auth.user.email;

const getAllProjects = (state) => state.projects;

const getVisibleMemberList = createSelector([getAllProjects], (projects) => {
  const location = useLocation();
  return projects.find((project) => location.pathname.includes(project.id));
});

const selectors = {
  getToken,
  isAuthenticated,
  getUserEmail,
  getAllProjects,
  getVisibleMemberList,
};

export default selectors;
