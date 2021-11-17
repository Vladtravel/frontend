import axios from "axios";
import shortid from "shortid";
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

axios.defaults.baseURL = "https://goitproject.herokuapp.com";

export const fetchProjects = () => async (dispatch) => {
  dispatch(getProjectsRequest());

  axios
    .get("api/projects")
    .then(({ data }) => dispatch(getProjectsSuccess(data)))
    .catch((error) => dispatch(getProjectsError(error.message)));
};

export const addProject =
  ({ name, description }) =>
  (dispatch) => {
    const project = {
      name,
      id: shortid.generate(),
      description,
    };

    dispatch(addProjectsRequest());

    axios
      .post("/projects", project)
      .then(({ data }) => dispatch(addProjectsSuccess(data)))
      .catch((error) => dispatch(addProjectsError(error.message)));
  };

export const deleteProject = (projectId) => (dispatch) => {
  dispatch(deleteProjectsRequest());

  axios
    .delete(`api/project/${projectId}`)
    .then(() => dispatch(deleteProjectsSuccess(projectId)))
    .catch((error) => dispatch(deleteProjectsError(error.message)));
};
