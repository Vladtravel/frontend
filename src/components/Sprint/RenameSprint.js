import React from "react";
import { ReactComponent as AddProject } from "../Modal/IconButton/addProject.svg";
import ModalCreateSprint from "../ModalCreateSprint/ModalCreateSprint";

import Modal from "../Modal/Modal";
import AddMember from "../MemberForm/MemberForm";
import img from "./Vector.svg";

import s from "./SingleSprint.module.css";

import { addSprint, fetchSprint, deleteSprint } from "../../redux/sprint/operation";
import { useRouteMatch, Link } from "react-router-dom";
import Loader from "react-loader-spinner";

import { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getError, getAllSprints, getLoading } from "../../redux/sprint/selectors";
import { getAllProjects } from "../../redux/projects/projects-selectors";
import { projectNameChange } from "../../redux/projects/projects-operations";

const RenameSprint = ({ id, renameSprint }) => {
  const [isNameChaged, setIsNameChaged] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [durr, setDurr] = useState();
  const [endDate, setEndDate] = useState(new Date());
  const currentData = new Date();
  const [name, setName] = useState("");
  const { url } = useRouteMatch();
  const currentProjects = url.split("/")[2];

  const projects = useSelector(getAllProjects);

  const currentProject = projects.find((e) => e._id === currentProjects);
  const [text, setText] = useState(currentProject.name);

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

  const toggleModal = (e) => {
    setShowModal(!showModal);
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

  const onNameChange = (data) => {
    return dispatch(projectNameChange(data));
  };

  return (
    <>
      {isNameChaged ? (
        <h1 className={s.title}>{currentProject.name}</h1>
      ) : (
        <input
          value={text}
          onChange={(e) => {
            const { value } = e.currentTarget;
            setText(value);
          }}
          onBlur={() => {
            const data = {
              currentProject: currentProjects,
              name: text,
            };
            onNameChange(data);
            setIsNameChaged((s) => !s);
          }}
          type="text"
        />
      )}
      {isModalOpen && (
        <ModalCreateSprint
          onSubmit={onSubmit}
          data={data}
          value={name}
          setName={setName}
          setIsModalOpen={setIsModalOpen}
          setEndDate={setEndDate}
          endDate={endDate}
          setDurr={setDurr}
          duration={durr}
        />
      )}
      <div className={s.hederSprint__title}>
        {/* <h2 className={s.hederSprint}>{currentProject.name}</h2> */}
        <button
          className={s.penBtn}
          onClick={() => {
            setIsNameChaged((s) => !s);
          }}
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

      <div>
        <p className={s.hederSprint__text}>
          Короткий опис проекту, якщо він є, розміщуєтсья тут. Ширина тектового блоку
        </p>
      </div>

      <div className={s.addWrapper}>
        <img src={img} onClick={toggleModal} alt={"addMember"} />
        <button type="button" onClick={toggleModal} className={s.addMemberBtn}>
          Додати людей
        </button>
      </div>

      {showModal && (
        <Modal onClose={toggleModal}>
          <AddMember toggleModal={toggleModal} />
        </Modal>
      )}

      <ul className={s.cards__wrapper}>
        {sprints &&
          sprints.map(({ name, endDate, duration, _id }) => {
            return (
              <div key={_id} className={s.container__sprints}>
                
                <li key={_id} className={s.single__item}>
                  <Link to={`${url}/${_id}`} className={s.link}>
                    <div className={s.single__card}>
                      <h3 className={s.card__header}>{name}</h3>
                      <div className={s.sprint__wrapper}>
                        <p className={`${s.card__content} ${s.card__content_header}`}>Дата початку</p>
                        <p className={`${s.card__content} ${s.card__content_info}`}>{"23 Jun"}</p>
                        <p className={`${s.card__content} ${s.card__content_header}`}>Дата закінчення</p>
                        <p className={`${s.card__content} ${s.card__content_info}`}>{"12 Jun"}</p>
                        <p className={`${s.card__content} ${s.card__content_header}`}>Тривалість</p>
                        <p
                          className={`${s.card__content} ${s.card__content_info} ${s.card__content_duration}`}
                        >
                          {duration}
                        </p>
                      </div>
                    </div>
                  </Link>
                  <button
                    className={s.card__button}
                    onClick={() => onClick(_id)}
                    aria-label="delete"
                  ></button>
                </li>
              </div>
            );
          })}
      </ul>
    </>
  );
};

export default RenameSprint;
