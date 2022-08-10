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
            {/* <Image
              className={s.second__img}
              src={secondImg}
              alt="img"
              width={258.55}
              height={470.09}
            /> */}
            {/* <span className={s.image__title}>Создаём будущее</span> */}
            <div className={s.about__firstText}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              reiciendis et odit. <br /> Placeat eveniet amet saepe fugiat
              tempore quos explicabo, doloremque <br /> aliquam libero dolorum
              voluptatum quod obcaecati harum ex, vitae recubrsandae nisi enim
              iusto labore! Commodi accusantium quasi quidem delectus excepturi,
              veniam et culpa distinctio, sed odit, earum ut ad. Lorem ipsum{" "}
              <br /> dolor sit amet consectetur adipisicing elit. Est iure
              provident autem inventore voluptatum. Praesentium perferendis
              necessitatibus dolore. Repellat expedita cum totam? Expedita,
              magnam excepturi! Beatae unde nulla enim, voluptatem veritatis est
              culpa doloribus, rerum optio tempora sit pariatur. Quaerat!
            </div>
            <div>
              <div className={s.vertical__title}>
                We create <br /> the future
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
