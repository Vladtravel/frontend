import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";

import {
  addRequest,
  addSuccess,
  addError,
  getRequest,
  getSuccess,
  getError,
  deleteRequest,
  deleteSuccess,
  deleteError,
  nameChange,
} from "./actions";

const itemReducer = createReducer([], {
  [getSuccess]: (_, { payload }) => payload,

  [addSuccess]: (state, { payload }) => {
    return [...state, payload];
  },
  [deleteSuccess]: (state, { payload }) => {
    return state.filter(({ _id }) => _id !== payload);
  },
  [nameChange]: (state, { payload }) => {
    return state.map((item) => {
      if (item._id === payload.currentSprint) {
        item = { ...item, name: payload.name };
      }
      return item;
    });
  },
});
const loadingReducer = createReducer(false, {
  [getRequest]: () => true,
  [getSuccess]: () => false,
  [getError]: () => false,
  [addRequest]: () => true,
  [addSuccess]: () => false,
  [addError]: () => false,
  [deleteRequest]: () => true,
  [deleteSuccess]: () => false,
  [deleteError]: () => false,
});

const errorReducer = createReducer(null, {
  [getError]: (_, { payload }) => payload,
  [getSuccess]: () => null,
  [addError]: (_, { payload }) => payload,
  [addRequest]: () => null,
  [deleteError]: (_, { payload }) => payload,
  [deleteRequest]: () => null,
});

export const sprintReducer = combineReducers({
  items: itemReducer,
  loading: loadingReducer,
  error: errorReducer,
});
