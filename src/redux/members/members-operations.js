import axios from "axios";

import { 
    addMemeberToProjectRequest,
     addMemeberToProjectSucces, 
     addMemeberToProjectError,
     fetchMembersRequest,
     fetchMembersSucces,
     fetchMembersError,
    } from "./members-actions";

axios.defaults.baseURL = "https://goitproject.herokuapp.com";

const addMemberOperation = email => async dispatch => {
    
    dispatch(addMemeberToProjectRequest());

    axios
    .post("api/projects", email)
    .then((email) => dispatch(addMemeberToProjectSucces(email)))
    .catch((error) => dispatch(addMemeberToProjectError(error.message)))
}
    

const updateMemberList = ({ email, id }) => async dispatch => {
    dispatch(fetchMembersRequest());

    axios
    .get(`api/projects/${id}`, email)
    .then((email) => dispatch(fetchMembersSucces(email)))
    .catch((error) => dispatch(fetchMembersError(error.message)))
    }

const operations = {
    addMemberOperation,
    updateMemberList,
};

export default operations;