import React from "react";
import { ReactComponent as AddProject } from "../Modal/IconButton/addProject.svg";
import ModalCreateSprint from "../ModalCreateSprint/ModalCreateSprint";
import s from "./SingleSprint.module.css";
import {
  addSprint,
  fetchSprint,
  deleteSprint,
} from "../../redux/sprint/operation";
import { useRouteMatch, Link } from "react-router-dom";
import Loader from "react-loader-spinner";

import { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  getError,
  getAllSprints,
  getLoading,
} from "../../redux/sprint/selectors";

const RenameSprint = ({ id, renameSprint }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [endDate, setEndDate] = useState(new Date());
  const currentData = new Date();
  const [name, setName] = useState("");
  const { url } = useRouteMatch();
  const currentProjects = url.split("/")[2];

  const error = useSelector(getError);
  const loader = useSelector(getLoading);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSprint({ currentProjects }));
  }, [currentProjects, dispatch]);
  const duration =
    (endDate.getFullYear() - currentData.getFullYear()) * 365 +
    (endDate.getUTCMonth() - currentData.getUTCMonth()) * 30 +
    endDate.getUTCDate() -
    currentData.getUTCDate();
  const sprints = useSelector(getAllSprints);

  const data = {
    currentProjects,
    name,
    endDate,
    duration,
  };
  const onSubmit = (data) => {
    const { name, endDate, duration, currentProjects } = data;
    return dispatch(addSprint({ name, endDate, duration, currentProjects }));
  };
  const onClick = (_id) => {
    const data = { _id, currentProjects };
    dispatch(deleteSprint(data));
  };

  if (error) {
    return <h2 className={s.error}>Что-то пошло не так </h2>;
  }
  if (loader) {
    return <Loader type="Circles" color="#FF6B08" className={s.loader} />;
  }
  return (
    <>
      {isModalOpen && (
        <ModalCreateSprint
          onSubmit={onSubmit}
          data={data}
          value={name}
          setName={setName}
          setIsModalOpen={setIsModalOpen}
          setEndDate={setEndDate}
          endDate={endDate}
        />
      )}
      <div className={s.hederSprint__title}>
        <h2 className={s.hederSprint}>Project 1</h2>
        <button
          className={s.penBtn}
          type="sabmit"
          aria-label="rename"
          onClick={renameSprint}
        ></button>
        <button
          onClick={() => setIsModalOpen(true)}
          aria-label={"create sprint"}
          className={s.create__sprint}
        >
          <AddProject />
        </button>
        <p className={s.text}>Створити спринт</p>
      </div>
      <ul>
        {sprints &&
          sprints.map(({ name, endDate, duration, _id }) => {
            return (
              <li key={_id} className={s.list}>
                <Link to={`${url}/${_id}`} className={s.link}>
                  <div>
                    <h3>{name}</h3>
                    <p>{endDate}</p>
                    <p>{duration}</p>
                  </div>
                </Link>
                <button onClick={() => onClick(_id)} aria-label="delete">
                  DELETE
                </button>
              </li>
            );
          })}
      </ul>
      );
      <div>
        <p className={s.hederSprint__text}>
          Короткий опис проекту, якщо він є, розміщуєтсья тут. Ширина тектового
          блоку
        </p>
      </div>
    </>
  );

  // return (
  //     <>
  //         <div className={s.hederSprint__title}>
  //         <div>
  //             <input tupe="text" naame="" placeholder="" value=""></input>
  //             <label></label>
  //         </div>
  //         <button className={s.penBtn} type="sabmit" aria-label="rename"
  //               onClick={renameSprint}>
  //             </button>
  //             <button
  //               // onClick={toggleModal}
  //               aria-label={"create sprint"}
  //               className={s.create__sprint}
  //             >
  //               <AddProject />
  //             </button>
  //             <p className={s.text}>Створити спринт</p>
  //           </div>

  //         <div>
  //           <p className={s.hederSprint__text}>Короткий опис проекту, якщо він є, розміщуєтсья тут. Ширина тектового блоку</p>
  //         </div>
  //         </>
  //     )
};

export default RenameSprint;
