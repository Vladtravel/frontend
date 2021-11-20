import { useState } from "react";
import IconBtn from "../../components/iconButton";
import ArrowBtn from "../../components/ArrowBtn/ArrowBtn";
import FastAccessTemplate from "../../components/fastAccessTemplate/fastAccessTemplate";
import Pagination from "../../components/Pagimation";
import CurrentTime from "../../components/CurrentTime/CurrentTime";
import Task from "../../components/Task/Task";
import Title from "../../components/Title/Title";
import Icons from "../../components/icons";
import s from "./tasksView.module.css";
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 100];
const arr3 = [1, 2, 3, 4];
function TasksView(params) {
  const [page, setPage] = useState(1);
  const tasksInOnePage = 5;
  const totalPages = Math.ceil(arr.length / tasksInOnePage);
  
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
              <IconBtn name="add" />
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
