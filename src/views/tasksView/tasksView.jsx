import { useState } from "react";
import IconBtn from "../../components/iconButton";
import ArrowBtn from "../../components/ArrowBtn/ArrowBtn";
import FastAccessTemplate from "../../components/fastAccessTemplate/fastAccessTemplate";
import Pagination from "../../components/Pagimation";
import CurrentTime from "../../components/CurrentTime/CurrentTime";
// import Task from "../../components/Task/Task";
import Title from "../../components/Title/Title";
// import Loader from "react-loader-spinner";

import Icons from "../../components/icons";
import s from "./tasksView.module.css";
import TaskButtonAdd from "../../components/TasksModal";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchTasks,
  deleteTask,
  taskHourChange,
} from "../../redux/tasks/operation";
import { useRouteMatch } from "react-router-dom";
import { getAllSprints } from "../../redux/sprint/selectors";
import { getAllTasks} from "../../redux/tasks/selectors";
function TasksView(params) {
  const [page, setPage] = useState(1);
  const getTasks = useSelector(getAllTasks);
  // console.log(getTasks, "Tasks");
  // const loader = useSelector(getLoading);
  const sprints = useSelector(getAllSprints);
  // const error = useSelector(getError);
  const dispatch = useDispatch();
  const { url } = useRouteMatch();
  const currentProjects = url.split("/")[2];
  const currentSprint = url.split("/")[4];
  const currentSprintDuration = sprints.find(
    (e) => e._id === currentSprint
  ).duration;
  const currentSprintCreateDate = sprints.find(
    (e) => e._id === currentSprint
  ).createdAt;
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
  return (
    <div className={s.wrapper}>
      <div className={s.sideBar}>
        <div className={s.ArrowBtn}>
          <ArrowBtn />
        </div>
        <div className={s.sprintsWrapper}>
          <ul>
            {Array.isArray(sprints) &&
              sprints.map(({ name, _id }) => (
                <li className={s.sprint} key={_id}>
                  <FastAccessTemplate
                    key={_id}
                    setPage={setPage}
                    sprintName={name}
                    id={_id}
                    current={currentSprint}
                  />
                </li>
              ))}
          </ul>
        </div>
        <div className={s.btnWrapper}>
          <IconBtn name="add" />

          <p className={s.addSprintText}>Створити спринт</p>
        </div>
      </div>
      <div>
        <div className={s.mainWrapper}>
          <div className={s.firstLvl}>
            <div className={s.PaginationWrapper}>
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
            </div>
            <div>
              <CurrentTime currentDate={currentDate} />
            </div>
          </div>

          <div className={s.secondLvl}>
            <div className={s.titleWrapper}>
              <Title />
            </div>

            <div className={s.btnCreateTaskWrapper}>
              <TaskButtonAdd className={"container"} />
              <p className={s.secondLevelText}>Створити задачу</p>
            </div>
          </div>

          <div className={s.lvlSeard}>
            <ul className={s.list}>
              <li className={s.listItem}>
                <p className={s.text}>Задача</p>
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
              <li className={s.icon}>
                <Icons name="search" />
              </li>
            </ul>
          </div>
          <div>
            <ul>
              {Array.isArray(getTasks) &&
                visibleTasks.map(
                  ({ name, sheduledHours, _id, spendedHours }) => {
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
                        )
                        <button
                          onClick={() =>
                            onClick({ currentProjects, currentSprint, _id })
                          }
                        >
                          DELETE
                        </button>
                      </li>
                    );
                  }
                )}
            </ul>
          </div>
        </div>
      </div>
      {/* 
      <Pagination
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
      <IconBtn name="add" />
      */}
    </div>
  );
}
export default TasksView;
