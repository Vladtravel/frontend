import { useState } from "react";
import ProjectItem from "../ProjectItem";
import ProjectButtonAdd from "./ProjectButtonAdd/ProjectButtonAdd";
import AnalyticsButton from "../Diagram/AnalyticsButton";
import ModalBackdrop from "../Diagram/ModalBackdrop";
import Diagram from "../Diagram/Diagram";

const backdropStyles = {
  overflowX: "scroll",
};

const ProjectList = () => {
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

  // const [arrayDate, setArrayDate] = useState(doArrayOfDate(currentSprint.startDate, currentSprint.endDate));

  return (
    <>
      <ProjectButtonAdd text={"Проекти"} description={" Створити проект"} className={"container"} />

      <ProjectItem />

      {/* {showDiagram && (
        <ModalBackdrop onClose={btnCloseDiagram} style={backdropStyles}>
          <Diagram
            duration={currentSprint.duration}
            arrayOfDate={() => doArrayOfDate(currentSprint.startDate, currentSprint.endDate)}
          />
        </ModalBackdrop>
      )} */}

      {/* Кнопка аналітки */}
      {/* {tasks.length > 0 && ( */}
      <AnalyticsButton onClick={buttonHandlerDiagram} />
      {/* )} */}
    </>
  );
};

export default ProjectList;
