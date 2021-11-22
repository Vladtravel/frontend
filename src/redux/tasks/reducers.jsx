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
  hoursChange,
} from "./action";

const itemReducer = createReducer([], {
  [getSuccess]: (_, { payload }) => payload,

  [addSuccess]: (_, { payload }) => payload,
  [deleteSuccess]: (state, { payload }) => {
    return state.filter(({ _id }) => _id !== payload);
  },
  [hoursChange]: (_, { payload }) => {
    return payload;
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

export const tasksReducer = combineReducers({
  items: itemReducer,
  loading: loadingReducer,
  error: errorReducer,
});
