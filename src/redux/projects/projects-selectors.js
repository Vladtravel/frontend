import { createSelector } from "@reduxjs/toolkit";

export const getAllProjects = (state) => state.projects.items;
export const getFilter = (state) => state.projects.filter;
export const getLoading = (state) => state.projects.loading;
export const getError = (state) => state.projects.error;

export const getVisibleProjects = createSelector(
  [getAllProjects, getFilter],
  (allProjects, filter) => {
    const normalizedFilter = filter.toLowerCase();

    return allProjects.filter((project) =>
      project.name.toLowerCase().includes(normalizedFilter)
    );
  }
);
