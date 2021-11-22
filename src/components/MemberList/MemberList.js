import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouteMatch } from "react-router-dom";
import operations from "../../redux/members/members-operations";
import selectors from "../../redux/selectors";

import s from "./MemberList.module.css";

const MemberList = () => {
  // const [email, setEmail] = useState("");
  // const [validEmail, setValidEmail] = useState("valid");

  // const { projectId } = useParams();
  // const dispatch = useDispatch();

  // const handleInputChange = (event) => setEmail(event.currentTarget.value);

  // const projects = useSelector(projectsSelectors.getAllProjects);
  // const currentUser = useSelector(authSelectors.getUserEmail);

  // // Витягуємо масив owners поточного проекту
  // const owners = projects.find(({ id }) => id === projectId).owners;

  // // Фільтруємо масив owners, залишаємо тільки команду (видаляємо поточного користувача)
  // const team = owners.filter((owner) => owner !== currentUser);

  // const reset = () => {
  //   setEmail("");
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();

  //   const alreadyExist = team.includes(email);

  //   if (!email) {
  //     setValidEmail("noEmail");

  //     return;
  //   } else if (alreadyExist) {
  //     setValidEmail("alreadyExist");

  //     return;
  //   } else {
  //     setValidEmail("valid");
  //   }

  //   dispatch(projectsOperations.addPeople(projectId, { email }));
  //   reset();
  // };

  const owners = useSelector(selectors.getVisibleOwners);

  console.log(owners);

  const { url } = useRouteMatch();

  const currentProjectId = url.split("/")[2];
  console.log(currentProjectId);

  const dispatch = useDispatch();

  console.log(
    useEffect(() => dispatch(operations.fetchProjectById(currentProjectId)), [currentProjectId, dispatch])
  );

  //   const foundProject = projects.find((project) => url.split("/")[2].includes(project.id));

  //   useEffect(() => dispatch(operations.updateMemberList({ owners, id })), [dispatch, id, owners]);

  return (
    <>
      {owners ? (
        <ul className={s.membersList}>
          {owners.map(({ email }) => (
            <li key={email} className={s.membersItem}>
              <p>{email}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Ви ще не додали жодного користувача</p>
      )}
    </>
  );
};

export default MemberList;
