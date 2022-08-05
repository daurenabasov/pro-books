import Head from "next/head";
import Image from "next/image";
import Header from "../components/header/Header";
import styles from "../styles/Home.module.css";
import Banner from "../components/contentMain/Banner/Banner";
import Slider from "../components/contentMain/Slider/Slider";

export default function Home() {
  return (
    <>
      <Header />
      <div className="wrapper">
        <Banner />
        <Slider />
      </div>
    </>
  );
}
