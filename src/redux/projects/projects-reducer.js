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
  nameChange,
  addPeopleRequest,
  addPeopleSuccess,
  addPeopleError,
} from "./projects-actions";

const itemReducer = createReducer([], {
  [getProjectsSuccess]: (_, { payload }) => payload,
  [addProjectsSuccess]: (state, { payload }) => {
    return [...state, payload];
  },
  [deleteProjectsSuccess]: (state, { payload }) => state.filter(({ _id }) => _id !== payload),
  [nameChange]: (state, { payload }) => {
    return state.map((item) => {
      if (item._id === payload.currentProject) {
        item = { ...item, name: payload.name };
      }
      return item;
    });
  },

  [addPeopleSuccess]: (state, { payload }) => {
    state.map((project) =>
      project._id === payload.projectId ? (project.owners = [...project.owners, payload.email]) : project
    );
  },
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
  [addPeopleRequest]: () => true,
  [addPeopleSuccess]: () => false,
});

const errorReducer = createReducer(null, {
  [getProjectsError]: (_, { payload }) => payload,
  [getProjectsSuccess]: () => null,
  [addProjectsError]: (_, { payload }) => payload,
  [addProjectsRequest]: () => null,
  [deleteProjectsError]: (_, { payload }) => payload,
  [deleteProjectsRequest]: () => null,
  [addPeopleError]: (_, { payload }) => payload,
});

export const projectsReducer = combineReducers({
  items: itemReducer,
  loading: loadingReducer,
  error: errorReducer,
});
