// import next
import Image from "next/image";
import banner from "../../../public/logoBunner.png";
// import styles
import s from "./banner.module.css";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div className={s.banner}>
      <motion.h1
        className={s.banner__title}
        initial={{ y: -200, opacity: 0 }}
        transition={{ duration: 1, delay: 1 }}
        animate={{ y: 0, opacity: 5 }}
      >
        It's not a bug, it's a feature
      </motion.h1>
      <motion.div
        id={s.banner__container}
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 5 }}
        transition={{ delay: 0.4, duration: 1 }}
      >
        <div className={s.banner__logo}>
          <Image
            className={s.banner__image}
            src={banner}
            alt="image"
            width={405}
            height={120}
          />
        </div>
        <div className={s.banner__text}>
          Ничего не может быть приятнее, как жить в уединении, <br />{" "}
          наслаждаться зрелищем природы <br /> и почитать иногда какую-нибудь
          книгу.
        </div>
      </motion.div>
    </div>
  );
};

export default Banner;
