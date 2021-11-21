import { createAction } from "@reduxjs/toolkit";

export const getRequest = createAction("tasks/getRequest");
export const getSuccess = createAction("tasks/getAddSuccess");
export const getError = createAction("tasks/getError");

export const addRequest = createAction("tasks/addRequest");
export const addSuccess = createAction("tasks/addSuccess");
export const addError = createAction("tasks/addError");

export const deleteRequest = createAction("tasks/deleteRequest");
export const deleteSuccess = createAction("tasks/deleteSuccess");
export const deleteError = createAction("tasks/deleteError");
