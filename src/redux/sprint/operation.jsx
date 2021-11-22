import axios from "axios";
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

axios.defaults.baseURL = "https://goitproject.herokuapp.com";

export const fetchSprint =
  ({ currentProjects }) =>
  async (dispatch) => {
    dispatch(getRequest());

    axios
      .get(`api/projects/${currentProjects}`)
      .then(({ data }) => {
        dispatch(getSuccess(data.data.sprints));
      })
      .catch((error) => dispatch(getError(error.message)));
  };

export const addSprint =
  ({ name, endDate, duration, currentProjects }) =>
  (dispatch) => {
    const sprint = {
      name,
      duration,
      endDate,
    };
    dispatch(addRequest());

    axios
      .post(`api/projects/${currentProjects}/sprints`, sprint)
      .then(({ data }) => {
        // console.log(data);
        dispatch(addSuccess(data.data));
      })
      .catch((error) => dispatch(addError(error.message)));
  };

export const deleteSprint =
  ({ currentProjects, _id }) =>
  (dispatch) => {
    dispatch(deleteRequest());

    axios
      .delete(`api/projects/${currentProjects}/sprints/${_id}`)
      .then(() => {
        dispatch(deleteSuccess(_id));
      })
      .catch((error) => dispatch(deleteError(error.message)));
  };
export const sprintNameChange =
  ({ currentSprint, currentProjects, name }) =>
  (dispatch) => {
    dispatch(deleteRequest());
    const data = {
      name,
    };

    axios.patch(`api/projects/${currentProjects}/sprints/${currentSprint}/name`, data).then(() => {
      // console.log(123);
      dispatch(nameChange(name));
    });
  };
