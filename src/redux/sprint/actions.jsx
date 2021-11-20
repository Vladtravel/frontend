import { createAction } from "@reduxjs/toolkit";

export const addRequest = createAction("sprints/addRequest");
export const addSuccess = createAction("sprints/addSuccess");
export const addError = createAction("sprints/addError");

export const getRequest = createAction("sprints/getRequest");
export const getSuccess = createAction("sprints/getAddSuccess");
export const getError = createAction("sprints/getError");

export const deleteRequest = createAction("sprints/deleteRequest");
export const deleteSuccess = createAction("sprints/deleteSuccess");
export const deleteError = createAction("sprints/deleteError");
