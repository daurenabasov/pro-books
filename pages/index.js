import Head from "next/head";
import Header from "../components/header/Header";
import styles from "../styles/Home.module.css";
import Banner from "../components/contentMain/Banner/Banner";
import Slider from "../components/contentMain/Slider/Slider";
import SecondSlider from "../components/contentMain/SecondSlider/SecondSlider";
import ThirdSlider from "../components/contentMain/ThirdSlider/ThirdSlider";
import About from "../components/contentMain/About/About";
import Footer from "../components/footer/Footer";
// import { useSelector } from "react-redux";

export default function Home() {
  return ( 
    <>
      <Head>
        <title>Book shop</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <div className="wrapper">
        <Banner />
        <Slider />
        <SecondSlider />
        <ThirdSlider />
        <About />
        <Footer />
      </div>
    </>
  );
}
