import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import styles
import s from "./thirdSlider.module.css";

// import required modules
import { FreeMode, Pagination } from "swiper";

// import ImagesBooks
import Image from "next/image";
import Algorith from "/public/grokaem-algoritmy.png";
import C from "/public/izuchaemCPlusPlusCheresIgry.png";
import RealWorldPy from "/public/RealWorldPythonAHackersGuidetoSolvingProblemwithCode.png";
import BestPracticePy from "/public/pythonBestPracticeandInstruments.png";
import UdalenniyServer from "/public/udalenniyServer.png";

export default function App() {
  return (
    <>
      <h1 className={s.title__swiper}>Популярные книги</h1>
      <Swiper
        slidesPerView={4}
        spaceBetween={-20}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
        id={s.swiper}
      >
        <SwiperSlide className={s.slider}>
          <Image src={Algorith} alt="img" width={311} height={450} />

          <p className={s.name__book}>Грокаем алгоритмы</p>
          <span className={s.author__book}>АДИТЬЯ БХАРГАВА</span>
          <div className={s.price}>1000 сом</div>
        </SwiperSlide>
        <SwiperSlide className={s.slider}>
          <Image src={C} alt="img" width={311} height={450} />
          <p className={s.name__book}>Изучаем С++</p>
          <span className={s.author__book}>Доусон Майкл</span>
          <div className={s.price}>1000 сом</div>
        </SwiperSlide>
        <SwiperSlide className={s.slider}>
          <Image src={RealWorldPy} alt="img" width={311} height={450} />
          <p className={s.name__book__long}>
            Real-World Python: A Hacker's Guide to Solving Problems with Code
          </p>
          <span className={s.author__book}>Ли Воган</span>
          <div className={s.price}>1000 сом</div>
        </SwiperSlide>
        <SwiperSlide className={s.slider}>
          <Image src={BestPracticePy} alt="img" width={311} height={450} />
          <p className={s.name__book__long}>
            Python Лучшие практики и инструменты
          </p>
          <span className={s.author__book}>МИХАИЛ ЯВОРСКИ,ТАРЕК ЗИАДЕ</span>
          <div className={s.price}>1000 сом</div>
        </SwiperSlide>
        <SwiperSlide className={s.slider}>
          <Image src={UdalenniyServer} alt="img" width={311} height={450} />
          <p className={s.name__book}>
            Удаленный сервер своими руками. <br /> От азов до практической
            работы
          </p>
          <span className={s.author__book}>Левицкий Н. Д.</span>
          <div className={s.price}>1000 сом</div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
