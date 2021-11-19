import { createAction } from "@reduxjs/toolkit";

export const addMemeberToProjectRequest = createAction("projects/addMemeberToProjectRequest");
export const addMemeberToProjectSucces = createAction("projects/addMemeberToProjectSucces");
export const addMemeberToProjectError = createAction("projects/addMemeberToProjectError");

export const fetchMembersRequest = createAction("projects/fetchMembersRequest");
export const fetchMembersSucces = createAction("projects/fetchMembersSucces");
export const fetchMembersError = createAction("projects/fetchMembersError");

