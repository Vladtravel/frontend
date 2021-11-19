import axios from "axios";
import shortid from "shortid";

import { 
    addMemeberToProjectRequest,
     addMemeberToProjectSucces, 
     addMemeberToProjectError,
     fetchMembersRequest,
     fetchMembersSucces,
     fetchMembersError,
    } from "./members-actions";

axios.defaults.baseURL = "https://goitproject.herokuapp.com";

const addMemberOperation =( id, email) => async (dispatch) => {
    // const id = await `api/projects/${id}`

    dispatch(addMemeberToProjectRequest());

    axios
    .patch(`api/projects/${id}/owners`, email)
    .then((email) => dispatch(addMemeberToProjectSucces(email.email)))
    .catch((error) => dispatch(addMemeberToProjectError(error.message)))
}


const updateMemberList = ({ email, _id }) => async dispatch => {
    dispatch(fetchMembersRequest());

    axios
    .get(`api/projects/${_id}`, email)
    .then((email) => dispatch(fetchMembersSucces(email)))
    .catch((error) => dispatch(fetchMembersError(error.message)))
    }

const operations = {
    addMemberOperation,
    updateMemberList,
};

export default operations;