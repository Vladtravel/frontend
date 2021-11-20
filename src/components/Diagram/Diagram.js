// import { useSelector } from "react-redux";
// import tasksSelectors from "../../redux/tasks/tasks-selectors";
// import s from "./Diagram.module.css";
// import { Line } from "react-chartjs-2";
// import _ from "lodash";

// function Diagram({ duration, arrayOfDate }) {
//   const getAll = useSelector(tasksSelectors.getTasks);

//   const sumRedLine = getAll.reduce(function (cnt, getAll) {
//     return cnt + getAll.scheduledHours;
//   }, 0); // Расчет всех часов на выполнение тасок

//   const daysRedLine = () => {
//     let arrRedLine = [];
//     arrRedLine.push(sumRedLine); // создаем первый индекс массива;
//     let currentIndex = sumRedLine; //первый индекс массива 105 сумма всех часов;
//     let sumAllRedLine = sumRedLine / duration; // делим общее количество запланированых часов на кол-во дней спринта

//     for (let i = 0; i <= duration; i += 1) {
//       currentIndex = currentIndex - sumAllRedLine;
//       let typeToNumber = Math.floor(currentIndex * 100) / 100; // обрезаем число до двух знаков после запятой;
//       if (typeToNumber >= 0) {
//         arrRedLine.push(typeToNumber);
//         // пока первый индекс больше 0 пушим в массив числа;
//       }
//     }
//     return arrRedLine;
//   };

//   const daysBlueLine = () => {
//     let arrBlueLine = [];
//     arrBlueLine.push(sumRedLine);
//     let firstIndex = sumRedLine;

//     let multipleHoursWasted = _.groupBy(getAll, "taskDate");

//     const arrOfDate = arrayOfDate();

//     for (let i = 0; i <= arrOfDate.length; i += 1) {
//       if (arrOfDate[i] in multipleHoursWasted) {
//         let date = arrOfDate[i];
//         const totalNumber = multipleHoursWasted[date].reduce((acc, value) => acc + value.spentTime, 0);
//         firstIndex = firstIndex - totalNumber;
//         arrBlueLine.push(firstIndex);
//       }
//     }
//     return arrBlueLine;
//   };

//   const data = {
//     labels: arrayOfDate(),
//     datasets: [
//       {
//         label: "Actual remaining labor in hours",
//         fill: false,
//         lineTension: 0.4,
//         backgroundColor: "rgb(0, 89, 255)",
//         borderColor: "rgb(0, 89, 255)",
//         data: daysBlueLine(),
//       },
//       {
//         label: "Planned remaining work in hours",
//         fill: false,
//         lineTension: 0,
//         backgroundColor: "#ff2c0c",
//         borderColor: "#ff2c0c",
//         data: daysRedLine(),
//       },
//     ],
//   };

//   const chartOptions = {
//     layout: {
//       padding: {
//         left: 20,
//         right: 20,
//         top: 10,
//         bottom: 10,
//       },
//     },
//     elements: {
//       point: {
//         pointStyle: "circle",
//         borderWidth: 1,
//         radius: 2,

//         hoverRadius: 4,
//         hoverBorderWidth: 2,
//         hoverBackgroundColor: "rgba(255, 255, 255, 0.2)",
//       },
//       line: { borderWidth: 2 },
//     },
//     plugins: {
//       title: {
//         display: true,
//         text: "BurnDown Chart (Calendar Team)",
//         color: "#181C27",
//         font: {
//           size: 14,
//           family: "'Montserrat', 'sans-serif'",
//         },
//         padding: 10,
//         position: "top",
//         align: "start",
//       },
//       responsive: true,
//       legend: {
//         display: true,
//         labels: {
//           color: "#181C27",
//           font: {
//             size: 12,
//             family: "'Montserrat', 'sans-serif'",
//           },
//           boxWidth: 5,
//           usePointStyle: true,
//           padding: 10,
//         },
//       },
//     },
//     scales: {
//       y: {
//         display: true,
//         title: {
//           display: true,
//           text: "Man-hours",
//           font: {
//             size: 12,
//             family: "'Montserrat', 'sans-serif'",
//           },
//         },
//         beginAtZero: true,
//         ticks: {
//           font: { size: 10 },
//           color: "#181C27",
//         },
//         grid: {
//           display: true,
//         },
//       },

//       x: {
//         beginAtZero: false,
//         ticks: {
//           font: { size: 10 },
//           color: "#181C27",
//         },
//         grid: {
//           display: false,
//         },
//       },
//     },
//   };

//   return (
//     <div className={s.chartContainer}>
//       <h3>BurnDown Chart (Calendar Team)</h3>
//       <Line data={data} options={chartOptions} />
//     </div>
//   );
// }

// export default Diagram;
