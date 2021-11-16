import { createAction } from "@reduxjs/toolkit";

export const getProjectsRequest = createAction("getProjectsRequest");
export const getProjectsSuccess = createAction("getAddProjectsSuccess");
export const getProjectsError = createAction("getProjectsError");

export const addProjectsRequest = createAction("projects/addProjectsRequest");
export const addProjectsSuccess = createAction("projects/addProjectsSuccess");
export const addProjectsError = createAction("projects/addProjectsError");

export const deleteProjectsRequest = createAction(
  "projects/deleteProjectsRequest"
);
export const deleteProjectsSuccess = createAction(
  "projects/deleteProjectsSuccess"
);
export const deleteProjectsError = createAction("projects/deleteProjectsError");

export const filterProject = createAction("projects/changeFilter");
