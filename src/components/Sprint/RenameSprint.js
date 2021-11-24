import React from "react";
import { ReactComponent as AddProject } from "../Modal/IconButton/addProject.svg";
import ModalCreateSprint from "../ModalCreateSprint/ModalCreateSprint";

import Modal from "../Modal/Modal";
import MemberForm from "../MemberForm/MemberForm";
import img from "./Vector.svg";

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
import { getAllProjects } from "../../redux/projects/projects-selectors";
import { projectNameChange } from "../../redux/projects/projects-operations";

const RenameSprint = ({ id, renameSprint }) => {
  const [isNameChaged, setIsNameChaged] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [durr, setDurr] = useState("");
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

  const transformationOfDate = (date) => {
    const dateNew = new Date(date);
    const transformation = new Intl.DateTimeFormat("en-US", {
      month: "long",
      day: "numeric",
    }).format(dateNew);
    const result = {
      day: Number(transformation.split(" ")[1]),
      month: transformation.split(" ")[0].slice(0, 3),
    };
    return result;
  };

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

  console.log(currentProject);

  return (
    <>
      <div className={s.hederSprint__title}>
        <div className={s.hederSprint_box}>
          {isNameChaged ? (
            <div className={s.thumbCurrentProject}>
              <h1 className={s.title}>{currentProject.name}</h1>
              <p className={s.currentProjectDescription}>
                {currentProject.description}
              </p>
            </div>
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

          <button
            className={s.penBtn}
            onClick={() => {
              setIsNameChaged((s) => !s);
            }}
          ></button>
          <div className={s.create_box}>
            <button
              onClick={() => setIsModalOpen(true)}
              aria-label={"create sprint"}
              className={s.create__sprint}
            >
              <AddProject />
            </button>
            <p className={s.text}>Створити спринт</p>
          </div>
        </div>
      </div>

      <div>
        <p className={s.hederSprint__text}>{}</p>
      </div>

      <div className={s.addWrapper}>
        <img src={img} onClick={toggleModal} alt={"addMember"} />
        <button type="button" onClick={toggleModal} className={s.addMemberBtn}>
          Додати людей
        </button>
      </div>

      {sprints.length === 0 && (
        <h2 className={s.emptyList}>
          Ваш проект не має спринтів, скористайтесь кнопкою "Створити спринт"
        </h2>
      )}

      {showModal && (
        <Modal onClose={toggleModal}>
          <MemberForm toggleModal={toggleModal} />
        </Modal>
      )}

      <ul className={s.cards__wrapper}>
        {sprints &&
          sprints.map(({ name, endDate, duration, _id, createdAt }) => {
            const end = transformationOfDate(endDate);
            const begin = transformationOfDate(createdAt);
            return (
              <li key={_id} className={s.single__item}>
                <Link to={`${url}/${_id}`} className={s.link}>
                  <div className={s.single__card}>
                    <h3 className={s.card__header}>{name}</h3>
                    <div className={s.sprint__wrapper}>
                      <div className={s.card__content}>
                        <p className={s.textContentDate}>Дата початку</p>
                        <p className={s.textContent}>
                          {`${begin.day} ${begin.month}`}
                        </p>
                      </div>

                      <div className={s.card__content}>
                        <p className={s.textContentDate}>Дата закінчення</p>
                        <p className={s.textContent}>
                          {end.day} {end.month}
                        </p>
                      </div>

                      <div className={s.card__content}>
                        <p className={s.textContent}>Тривалість</p>
                        <p className={s.textContent}>{duration}</p>
                      </div>
                    </div>
                  </div>
                </Link>
                <button
                  className={s.card__button}
                  onClick={() => onClick(_id)}
                  aria-label="delete"
                ></button>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default RenameSprint;
