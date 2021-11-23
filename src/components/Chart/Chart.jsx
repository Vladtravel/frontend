import React from "react";

import { Line } from "react-chartjs-2";

import { useSelector } from "react-redux";
import { useRouteMatch } from "react-router-dom";
import { getAllTasks } from "../../redux/tasks/selectors";
import { getAllSprints } from "../../redux/sprint/selectors";

function Chart() {
  const { url } = useRouteMatch();
  const currentSprintId = url.split("/")[4];
  const sprints = useSelector(getAllSprints);
  const tasks = useSelector(getAllTasks);
  const currentSprint = sprints.find((e) => e._id === currentSprintId);
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
  const sprintDuration = currentSprint.duration;
  let labels = [];
  let totalHoursForDay = [];
  let totalHoursForDayInRealLife = [];
  for (let i = 0; i < sprintDuration; i++) {
    const date = new Date(currentSprint.createdAt);
    date.setDate(date.getDate() + i);
    const totalDays =
      (date.getMonth() + 1) * 30 + date.getFullYear() * 365 + date.getDate();
    const tasksCreatedAtThisDate = tasks.filter((e) => {
      const date = new Date(e.createdAt);
      const totalDaysInThisTasks =
        (date.getMonth() + 1) * 30 + date.getFullYear() * 365 + date.getDate();
      if (totalDaysInThisTasks === totalDays) {
        return e;
      }
      return false;
    });
    const totalHours = tasksCreatedAtThisDate.reduce(function (
      accumulator,
      currentValue
    ) {
      return accumulator + currentValue.sheduledHours;
    },
    0);
    const totalHoursInRealLife = tasksCreatedAtThisDate.reduce(function (
      accumulator,
      currentValue
    ) {
      return accumulator + currentValue.spendedHours;
    },
    0);
    totalHoursForDayInRealLife.push(totalHoursInRealLife);
    totalHoursForDay.push(totalHours);
    const format = transformationOfDate(date);
    const result = `${format.day} ${format.month}`;
    labels.push(result);
  }
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "My  Chart",
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: "Should hours ",
        data: totalHoursForDay,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Hours in life",
        data: totalHoursForDayInRealLife,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };
  console.log(tasks);

  return (
    <div>
      <Line options={options} data={data} />
    </div>
  );
}
export default Chart;
