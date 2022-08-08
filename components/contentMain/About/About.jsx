import React from "react";
// import next
import Image from "next/image";

// import styles
import s from "./About.module.css";

//import images
import firstImg from "../../../public/firstAboutImg.png";
import secondImg from "../../../public/secondAboutImg.png";

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
        <div className={s.image__container}>
          <div className={s.fisrt__image__contant}>
            <Image src={secondImg} alt width={258.55} height={470.09} />
            {/* <Image src={secondImg} alt width={258.55} height={470.09} /> */}
            <span className={s.image__title}>Создаём будущее</span>
            <hr className={s.about__line}/> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
