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
  nameChange,
  // addPeopleRequest,
  // addPeopleSuccess,
  // addPeopleError,
} from "./projects-actions";

import { deleteRequest, deleteSuccess } from "../sprint/actions.jsx";

axios.defaults.baseURL = "https://goitproject.herokuapp.com";

export const fetchProjects = () => async (dispatch) => {
  dispatch(getProjectsRequest());

  axios
    .get("api/projects")
    .then(({ data }) => dispatch(getProjectsSuccess(data.data)))
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
      .post("api/projects", project)
      .then(({ data }) => dispatch(addProjectsSuccess(data.data.newProject)))
      .catch((error) => dispatch(addProjectsError(error.message)));
  };

export const deleteProject = (projectId) => (dispatch) => {
  dispatch(deleteProjectsRequest());

  axios
    .delete(`api/projects/${projectId}`)
    .then(() => dispatch(deleteProjectsSuccess(projectId)))
    .catch((error) => dispatch(deleteProjectsError(error.message)));
};

export const projectNameChange =
  ({ currentProject, name }) =>
  (dispatch) => {
    dispatch(deleteRequest());
    const data = {
      name,
    };

    axios.patch(`api/projects/${currentProject}/name`, data).then(() => {
      dispatch(nameChange({ currentProject, name }));
      dispatch(deleteSuccess());
    });
  };

// export const addPeople = (projectId, email) => async (dispatch) => {
//   dispatch(projectsActions.addPeopleRequest());

//   try {
//     const { data } = await axios.patch(`/api/projects/${projectId}/invite`, email);

//     const newTeamMember = data.user.email;
//     dispatch(projectsActions.addPeopleSuccess({ newTeamMember, projectId }));
//   } catch ({ message }) {
//     dispatch(projectsActions.addPeopleError(message));

//     if (message === "Request failed with status code 404") {
//       toast.error("User with such email does not exist");
//       return;
//     }
//   }
// };
