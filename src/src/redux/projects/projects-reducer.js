import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";

import {
  getProjectsRequest,
  getProjectsSuccess,
  getProjectsError,
  addProjectsRequest,
  addProjectsSuccess,
  addProjectsError,
  deleteProjectsRequest,
  deleteProjectsSuccess,
  deleteProjectsError,
} from "./projects-actions";

const itemReducer = createReducer([], {
  [getProjectsSuccess]: (_, { payload }) => payload,
  [addProjectsSuccess]: (state, { payload }) => {
    return [...state, payload];
  },
  [deleteProjectsSuccess]: (state, { payload }) =>
    state.filter(({ _id }) => _id !== payload),
});

const loadingReducer = createReducer(false, {
  [getProjectsRequest]: () => true,
  [getProjectsSuccess]: () => false,
  [getProjectsError]: () => false,
  [addProjectsRequest]: () => true,
  [addProjectsSuccess]: () => false,
  [addProjectsError]: () => false,
  [deleteProjectsRequest]: () => true,
  [deleteProjectsSuccess]: () => false,
  [deleteProjectsError]: () => false,
});

const errorReducer = createReducer(null, {
  [getProjectsError]: (_, { payload }) => payload,
  [getProjectsSuccess]: () => null,
  [addProjectsError]: (_, { payload }) => payload,
  [addProjectsRequest]: () => null,
  [deleteProjectsError]: (_, { payload }) => payload,
  [deleteProjectsRequest]: () => null,
});

export const projectsReducer = combineReducers({
  items: itemReducer,
  loading: loadingReducer,
  error: errorReducer,
});
