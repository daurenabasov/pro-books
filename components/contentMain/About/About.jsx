import React from "react";

// import styles
import s from "./About.module.css";

const About = () => {
  return (
    <div>
      <div id={s.about__container}>
        <div className={s.about__title}>About us</div>
        <div className={s.about__text}>
          <span style={{ color: "#b240ff" }}>О нас // </span> Мы начинающая
          компания развивающие <br />
          поколения IT-технологий
        </div>
      </div>
    </div>
  );
};

export default About;
