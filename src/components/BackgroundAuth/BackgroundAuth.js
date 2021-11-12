import React from "react";
import s from "../BackgroundAuth/BackgroundAuth.module.css";

import picture1 from "./images/Picture 1.svg";
import picture2 from "./images/Picture 2.svg";
import picture3 from "./images/Picture 3.svg";
import picture4 from "./images/Picture 4.svg";
import picture5 from "./images/Picture 5.svg";
import picture6 from "./images/Picture 6.svg";
import orange from "./images/Orange.svg";
import white from "./images/White.svg";

const BackgroundAuth = () => {
  return (
    <div className={s.backgroundAuth_wrapper}>
      <img src={picture1} alt="white-ellipse" className={s.picture1} />
      <img src={picture2} alt="orange-ellipse" className={s.picture2} />
      <img src={picture3} alt="whire-ellipse" className={s.picture3} />
      <img src={picture4} alt="white-ellipse" className={s.picture4} />
      <img src={picture5} alt="orange-ellipse" className={s.picture5} />
      <img src={picture6} alt="orange-ellipse" className={s.picture6} />
      <img src={white} alt="ellipse" className={s.white} />
      <img src={orange} alt="ellipse" className={s.orange} />
    </div>
  );
};

export default BackgroundAuth;
