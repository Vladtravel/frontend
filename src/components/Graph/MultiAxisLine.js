import React from 'react';
import { Line } from 'react-chartjs-2';
import { useEffect } from "react";
import { createPortal } from "react-dom";
import { ReactComponent as Close } from "../Modal/IconButton/+.svg";
import s from './Graph.module.css';
const modalRoot = document.querySelector("#modal-root");


const data = {
  labels: [1,2,3,4,5,6],
  datasets: [
    {
      label: 'Актуальные оставшиеся трудозатраты в часах',
      data: [12, 19, 3, 5, 2, 3],
      fill: false,
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgba(255, 99, 132, 0.2)',
      yAxisID: 'y-axis-1',
    },
    {
      label: 'Запланированные оставшиеся трудозатраты',
      data: [1, 2, 1, 1, 2, 2],
      fill: false,
      backgroundColor: 'rgb(54, 162, 235)',
      borderColor: 'rgba(54, 162, 235, 0.2)',
      yAxisID: 'y-axis-2',
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        type: 'linear',
        display: true,
        position: 'left',
        id: 'y-axis-1',
      },
      {
        type: 'linear',
        display: true,
        position: 'right',
        id: 'y-axis-2',
        gridLines: {
          drawOnArea: false,
        },
      },
    ],
  },
};

const MultiAxisLine = () => (
  <>
    <div className='header'>
      <h1 className='title'>Burndown Chart (Calendar Team)</h1>
    </div>
    <Line data={data} options={options} />
    <Close />
  </>
);

export default function Modal({  onClose }) {
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
  });

  const handleKeyDown = (e) => {
    if (e.code === "Escape") {
      onClose();
    }
  };

  const handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return createPortal(
    <div className={s.grBackdrop} onClick={handleBackdropClick}>
      <div className={s.grContent}><MultiAxisLine/></div>
    
    </div>,
    modalRoot
  );
}