import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import styles
import s from "./SecondSlider.module.css";

// import required modules
import { FreeMode, Pagination } from "swiper";

// import ImagesBooks
import Image from "next/image";
import KvantWorld from "/public/kvantovyeMiry.png";
import PostgreSql from "/public/postgreSqlIznutry.png";
import Js from "/public/poznakomtesJS.png";
import algoritmy from "/public/AlgorithSamiyKratkiyCours.png";
import Linux from "/public/bibliyaLinux.png";

export default function SecondSlider() {
  return (
    <>
      <h1 className={s.title__swiper}>Книги 2022</h1>
      <Swiper
        slidesPerView={4}
        // spaceBetween={-20}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
        id={s.swiper}
      >
        <SwiperSlide className={s.slider}>
          <Image src={KvantWorld} alt="img" width={311} height={450} />

          <p className={s.name__book}>
            Квантовые миры и возникновение пространства-времени
          </p>
          <span className={s.author__book}>Шон Кэрролл</span>
          <div className={s.price}>1000 сом</div>
        </SwiperSlide>
        <SwiperSlide className={s.slider}>
          <Image src={PostgreSql} alt="img" width={311} height={450} />
          <p className={s.name__book}>PostgreSQL изнутри</p>
          <span className={s.author__book}>Егор Рогов</span>
          <div className={s.price}>1000 сом</div>
        </SwiperSlide>
        <SwiperSlide className={s.slider}>
          <Image src={Js} alt="img" width={311} height={450} />
          <p className={s.name__book__long}>Познакомьтесь, JavaScript</p>
          <span className={s.author__book}>Кайл Симпсон</span>
          <div className={s.price}>1000 сом</div>
        </SwiperSlide>
        <SwiperSlide className={s.slider}>
          <Image src={algoritmy} alt="img" width={311} height={450} />
          <p className={s.name__book__long}>
            Алгоритмы. Самый краткий и понятный курс"
          </p>
          <span className={s.author__book}>Панос Луридас</span>
          <div className={s.price}>1000 сом</div>
        </SwiperSlide>
        <SwiperSlide className={s.slider}>
          <Image src={Linux} alt="img" width={311} height={450} />
          <p className={s.name__book}>Библия Linux. 10-е издание</p>
          <span className={s.author__book}>Негус Кристофер</span>
          <div className={s.price}>1000 сом</div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
