import axios from "axios";
import shortid from "shortid";
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
} from "./action";
axios.defaults.baseURL = "https://goitproject.herokuapp.com";

export const fetchTasks =
  ({ currentProjects, currentSprint }) =>
  async (dispatch) => {
    dispatch(getRequest());
    axios
      .get(`api/projects/${currentProjects}/sprints/${currentSprint}`)
      .then(({ data }) => {
        console.log(data);
        dispatch(getSuccess(data.data.tasks));
      })
      .catch((error) => dispatch(getError(error.message)));
  };
export const addTask =
  ({ name, hours, currentProjects, currentSprint }) =>
  (dispatch) => {
    const task = {
      name,
      sheduledHours: hours,
    };
    console.log(task);
    dispatch(addRequest(task));

    axios
      .post(
        `api/projects/${currentProjects}/sprints/${currentSprint}/tasks`,
        task
      )
      .then(({ data }) => {
        console.log(data.data.tasks, "data.data.tasks");
        dispatch(addSuccess(data.data.tasks));
      })
      .catch((error) => dispatch(addError(error.message)));
  };

export const deleteTask =
  ({ currentProjects, currentSprint, _id }) =>
  (dispatch) => {
    dispatch(deleteRequest());

    axios
      .delete(
        `api/projects/${currentProjects}/sprints/${currentSprint}/tasks/${_id}`
      )
      .then(() => {
        dispatch(deleteSuccess(_id));
      })
      .catch((error) => dispatch(deleteError(error.message)));
  };
