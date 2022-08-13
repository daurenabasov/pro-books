import React from "react";
// import next
import Image from "next/image";

// impor frame-motion
import { motion } from "framer-motion";
// import styles
import s from "./About.module.css";

//import images
import firstImg from "../../../public/firstAboutImg.png";
import secondImg from "../../../public/secondAboutImg.png";

const About = () => {
  return (
    <div>
      <div id={s.about__container}>
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 1 }}
          className={s.about__title}
        >
          About us
        </motion.div>
        <motion.div
          className={s.about__text}
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          <span style={{ color: "#b240ff" }}>О нас //</span>
          Мы начинающая компания развивающие <br />
          поколения IT-технологий
        </motion.div>
        <div className={s.image__container}>
          <div className={s.fisrt__image__contant}>
            <motion.div
              className={s.second__img}
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 1 }}
            >
              <Image
                id={s.second__img}
                src={secondImg}
                alt="img"
                width={258.55}
                height={470.09}
              />
            </motion.div>

            <div className={s.about__firstText}>
              Book-shop не только предлагает новинки и бестселлеры на любой
              вкус, но и помогает определиться с выбором. Для этого на сайте
              публикуются списки книг от известных людей, тематические подборки,
              рейтинги, обзоры и отзывы реальных покупателей.
            </div>
            <div>
              <motion.div
                className={s.vertical__title}
                initial={{ opacity: 0, x: 200 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 1 }}
              >
                We create <br /> the future
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
