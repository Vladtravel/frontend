import axios from "axios";
// import { useRouteMatch } from "react-router-dom";

import { 
    addMemeberToProjectRequest,
     addMemeberToProjectSucces, 
     addMemeberToProjectError,
     fetchMembersRequest,
     fetchMembersSucces,
     fetchMembersError,
    } from "./members-actions";

axios.defaults.baseURL = "https://goitproject.herokuapp.com";

const addMemberOperation = value => async (dispatch) => {
    // const { url } = useRouteMatch();
    const owners = {
        email: value.email,
        currentProjectId: value.currentProjectId,
    }
    dispatch(addMemeberToProjectRequest());

    // try {
    //    const { value } = await axios.post(`api/projects/${owners.currentProjectId}/owners`, owners);
    //    dispatch(addMemeberToProjectSucces({value.owners}))
    // } catch (error) {
    //    dispatch(addMemeberToProjectError(error));
    // }

   axios
  .post(`api/projects/${owners.currentProjectId}/owners`, owners)
  .then(({ data }) => { console.log(data.data.email); dispatch(addMemeberToProjectSucces(data.data.email))})
  .catch((error) => dispatch(addMemeberToProjectError(error.message)))
  
}


const fetchProjectById = currentProjectId =>  dispatch => {
    console.log(currentProjectId)
    dispatch(fetchMembersRequest());

    axios
    .get(`api/projects/${currentProjectId}`,)
    .then(() => dispatch(fetchMembersSucces(currentProjectId)))
    .catch((error) => dispatch(fetchMembersError(error.message)))
    }

const operations = {
    addMemberOperation,
    fetchProjectById,
};

export default operations;