import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";

import {
    addMemeberToProjectRequest,
    addMemeberToProjectSucces,
    addMemeberToProjectError,
    fetchMembersRequest,
    fetchMembersSucces,
    fetchMembersError,
} from "./members-actions";


const memberReducer =  createReducer([], {
    [addMemeberToProjectSucces]: (state, action) => [...state, action.payload],
    [fetchMembersSucces]: (_, action) => action.payload,
  });

const errorMemberReducer = createReducer(null, {
    [addMemeberToProjectError]: (_, action) => action.payload,
    [addMemeberToProjectRequest]: () => null,
    [fetchMembersError]: (_, action) => action.payload,
    [fetchMembersRequest]: () => null,
})

  export const membersReducer = combineReducers({
      members: memberReducer,
      error: errorMemberReducer,
  })