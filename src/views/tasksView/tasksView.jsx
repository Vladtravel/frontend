import { useState } from "react";
import IconBtn from "../../components/iconButton";
import ArrowBtn from "../../components/ArrowBtn/ArrowBtn";
import FastAccessTemplate from "../../components/fastAccessTemplate/fastAccessTemplate";
import Pagination from "../../components/Pagimation";
import CurrentTime from "../../components/CurrentTime/CurrentTime";
import Task from "../../components/Task/Task";
import Title from "../../components/Title/Title";
import Loader from "react-loader-spinner";

import Icons from "../../components/icons";
import s from "./tasksView.module.css";
import TaskButtonAdd from "../../components/TasksModal";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTasks, deleteTask } from "../../redux/tasks/operation";
import { useRouteMatch } from "react-router-dom";

import { getAllTasks, getLoading, getError } from "../../redux/tasks/selectors";
const arr3 = [1, 2, 3, 4];
function TasksView(params) {
  const [page, setPage] = useState(1);
  const tasksInOnePage = 2;
  const getTasks = useSelector(getAllTasks);
  console.log(getTasks, "getTasks");
  let visibleTasks = [];
  const loader = useSelector(getLoading);
  const error = useSelector(getError);
  const dispatch = useDispatch();
  const { url } = useRouteMatch();
  const currentProjects = url.split("/")[2];
  const currentSprint = url.split("/")[4];
  const totalPages = Math.ceil(getTasks.length / tasksInOnePage);
  useEffect(() => {
    const data = { currentProjects, currentSprint };
    dispatch(fetchTasks(data));
  }, [currentProjects, currentSprint, dispatch]);

  const onClick = (data) => {
    console.log(data);
    dispatch(deleteTask(data));
  };

  return (
    <div className={s.wrapper}>
      <div className={s.sideBar}>
        <div className={s.ArrowBtn}>
          <ArrowBtn />
        </div>
        <div className={s.sprintsWrapper}>
          <ul>
            {arr3.map((e, i) => (
              <li className={s.sprint} key={i}>
                <FastAccessTemplate
                  key={i}
                  sprintName="Sprint Burndown Chart 3"
                  id="1"
                  current="1"
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
              {getTasks && (
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
              )}
            </div>
            <div>
              <CurrentTime />
            </div>
          </div>
          <div className={s.secondLvl}>
            <div className={s.titleWrapper}>
              <Title />
            </div>
            <div className={s.btnCreateTaskWrapper}>
              <TaskButtonAdd className={"container"} />
              <p className={s.secondLevelText}>Создать задачу</p>
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
                getTasks.map(({ name, sheduledHours, _id }) => {
                  return (
                    <li id={_id} key={_id}>
                      <p>{name}</p>
                      <q>
                        duration <span>{sheduledHours}</span>
                      </q>
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
