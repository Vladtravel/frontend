import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";

import {
    addMemeberToProjectRequest,
    addMemeberToProjectSucces,
    addMemeberToProjectError,
} from "./members-actions";


const memberReducer =  createReducer([], {
    [addMemeberToProjectSucces]: (state, action) => [...state, action.payload],
  });

const errorMemberReducer = createReducer(null, {
    [addMemeberToProjectError]: () => null,
})

  export const membersReducer = combineReducers({
      members: memberReducer,
      error: errorMemberReducer,
  })