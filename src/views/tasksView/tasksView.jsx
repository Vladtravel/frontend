import { useState } from "react";
// import IconBtn from "../../components/iconButton";

import IconButton from "../../components/Modal/IconButton";
import { ReactComponent as IconAddProject } from "../../components/Modal/IconButton/addProject.svg";
// import ProjectButtonAdd from "../../components/ProjectList/ProjectButtonAdd";
import ModalCreateSprint from "../../components/ModalCreateSprint";

import Chart from "../../components/Chart";

import ArrowBtn from "../../components/ArrowBtn/ArrowBtn";
import FastAccessTemplate from "../../components/fastAccessTemplate/fastAccessTemplate";
import Pagination from "../../components/Pagimation";
import CurrentTime from "../../components/CurrentTime/CurrentTime";
// import Task from "../../components/Task/Task";
import Title from "../../components/Title/Title";
// import Loader from "react-loader-spinner";

import Icons from "../../components/icons";
import AnalyticsButton from "../../components/Diagram/AnalyticsButton";
import s from "./tasksView.module.css";
import TaskButtonAdd from "../../components/TasksModal";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTasks, deleteTask, taskHourChange } from "../../redux/tasks/operation";
import { addSprint } from "../../redux/sprint/operation";
import { useRouteMatch } from "react-router-dom";
import { getAllSprints } from "../../redux/sprint/selectors";

// import { getAllTasks, getLoading, getError } from "../../redux/tasks/selectors";

import { getAllTasks } from "../../redux/tasks/selectors";

function TasksView(params) {
  const [page, setPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const getTasks = useSelector(getAllTasks);
  const [endDate, setEndDate] = useState(null);
  const [duration, setDuration] = useState(null);
  const [name, setName] = useState("");

  // const loader = useSelector(getLoading);
  const sprints = useSelector(getAllSprints);
  // const error = useSelector(getError);
  const dispatch = useDispatch();
  const { url } = useRouteMatch();
  const currentProjects = url.split("/")[2];
  const currentSprint = url.split("/")[4];


  const currentSprintDuration = sprints.find((e) => e._id === currentSprint).duration;
  const currentSprintCreateDate = sprints.find((e) => e._id === currentSprint).createdAt;

  const [currentDate, setCurrentDate] = useState(currentSprintCreateDate);

  useEffect(() => {
    const data = { currentProjects, currentSprint };
    dispatch(fetchTasks(data));
  }, [currentProjects, currentSprint, dispatch]);

  const visibleTasks = getTasks.filter((e) => {
    const data1 = new Date(e.createdAt);
    const date2 = new Date(currentDate);

    if (
      data1.getDate() === date2.getDate() &&
      data1.getMonth() === date2.getMonth() &&
      data1.getFullYear() === date2.getFullYear()
    ) {
      return e;
    }
    return false;
  });


  const onClick = (data) => {
    dispatch(deleteTask(data));
  };

  const onBlur = (data) => {
    dispatch(taskHourChange(data));
  };

  const onSubmit = (data) => {
    dispatch(addSprint(data));
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const data = {
    name,
    duration,
    endDate,
    currentProjects,
  };

  const [showDiagram, setShowDiagram] = useState(false);

  const buttonHandlerDiagram = () => {
    setShowDiagram(true);
  };

  const btnCloseDiagram = () => {
    setShowDiagram(false);
  };

  const doArrayOfDate = (startDate, endDate) => {
    let start = new Date(startDate),
      end = new Date(endDate),
      array = [];

    for (let q = start; q <= end; q.setDate(q.getDate() + 1)) {
      array.push(q.toLocaleDateString());
    }
    return array;
  };

  return (
    <>
      <div className={s.container}>
        <div className={s.taskSidebar}>
          <ArrowBtn />


          <ul className={s.item}>

            {Array.isArray(sprints) &&
              sprints.map(({ name, _id }) => (
                <li className={s.sprint} key={_id}>
                  <FastAccessTemplate
                    setCurrentDate={setCurrentDate}
                    currentDate={sprints.find((e) => e._id === _id).createdAt}
                    key={_id}
                    setPage={setPage}
                    sprintName={name}
                    id={_id}
                    current={currentSprint}
                  />
                </li>
              ))}
          </ul>

          <div className={s.menuAdd}>
            <IconButton
              onClick={toggleModal}
              aria-label="create project"
              className={"btnIconAddSideBare"}
            >
              <IconAddProject />
            </IconButton>

            <p className={s.addSprintText}>Створити спринт</p>
          </div>
        </div>

        {showModal && (
          <ModalCreateSprint
            onSubmit={() => onSubmit(data)}
            setIsModalOpen={toggleModal}
            value={name}
            setName={setName}
            data={data}
            endDate={endDate}
            setEndDate={setEndDate}
            duration={duration}
            setDurr={setDuration}
          />
        )}

        <div className={s.taskWrapper}>
          <div className={s.taskHeader}>
            <div className={s.taskContainer}>
              <div className={s.taskPagination}>
                {getTasks && getTasks.length > 0 && (
                  <Pagination
                    page={page}
                    setCurrentDate={setCurrentDate}
                    onNextClick={() => {
                      if (page + 1 > currentSprintDuration) {
                        return currentSprintDuration;
                      }
                      let date = new Date(currentDate);
                      date.setDate(date.getDate() + 1);
                      setCurrentDate(date);
                      setPage((s) => {
                        return s + 1;
                      });
                    }}
                    onPreviousClick={() => {
                      if (page - 1 < 1) {
                        return 1;
                      }
                      let date = new Date(currentDate);
                      date.setDate(date.getDate() - 1);
                      setCurrentDate(date);
                      setPage((s) => {
                        return s - 1;
                      });
                    }}
                    totalPages={currentSprintDuration}
                  />
                )}

                <CurrentTime currentDate={currentDate} />

                <input
                  id="task-name"
                  className={s.input}
                  placeholder=" "
                  type="text"
                  name="name"
                  title="Имя может состоять из букв, цифр, апострофа, тире и пробелов."
                  pattern="^[a-zA-Zа-яА-Я-0-9]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                  // value={name}
                  // onChange={handleInputChange}
                  autoComplete="off"
                />
                <label htmlFor="task-name" className={s.label}>
                  <Icons name="search" className={s.icon} />
                </label>
              </div>
              <div className={s.nameTaskAdd}>
                <Title />

                <TaskButtonAdd />

                <p className={s.secondLevelText}>Створити задачу</p>
              </div>
              <div className={s.headerContainerTask}>
                <ul className={s.list}>
                  <li className={s.listItemTask}>
                    <p className={s.textTask}>Задача</p>
                  </li>
                  <li className={s.listItem}>
                    <p className={s.text}>Запланировано часов</p>
                  </li>
                  <li className={s.listItem}>
                    <p className={s.text}>Потрачено час / день</p>
                  </li>
                  <li className={s.listItem}>
                    <p className={s.text}>Потрачено часов</p>
                  </li>
                  <li>
                    <label htmlFor="task-name" className={s.label}>
                      <Icons name="search" className={s.icon} />
                    </label>
                  </li>
                </ul>
              </div>
            </div>
          </div>


          <ul>
            {Array.isArray(getTasks) &&
              visibleTasks.map(({ name, sheduledHours, _id, spendedHours }) => {
                const isSpendedHoursChange = spendedHours !== 0;

                return (
                  <li id={_id} key={_id}>
                    <p>{name}</p>
                    <q>
                      duration <span>{sheduledHours}</span>
                    </q>
                    {isSpendedHoursChange ? (
                      <p>
                        <span>spendedHours</span>
                        {spendedHours}
                      </p>
                    ) : (
                      <input
                        onBlur={(e) => {
                          const { value } = e.currentTarget;
                          if (value < sheduledHours) {
                            alert("you work not enough");
                            return;
                          }
                          onBlur({
                            currentSprint,
                            currentProjects,
                            currentTask: _id,
                            hours: value,
                          });
                        }}
                        type="number"
                      />
                    )}
                    <button
                      onClick={() =>
                        onClick({ currentProjects, currentSprint, _id })
                      }
                    >
                      DELETE
                    </button>
                  </li>
                );
              })}
          </ul>
          <AnalyticsButton onClick={buttonHandlerDiagram} />
<Chart />
        </div>

        {/* <Pagination
          page={page}
          onNextClick={() =>
            setPage((s) => {
              if (s + 1 > totalPages) {
                return totalPages;
              }
              return s + 1;
            })
          }
          onPreviousClick={() =>
            setPage((s) => {
              if (s - 1 < 1) {
                return 1;
              }
              return s - 1;
            })
          }
          totalPages={totalPages}
        />
        <CurrentTime />
        <Task />
        <IconBtn name="add" /> */}
      </div>
    </>
  );
}
export default TasksView;
