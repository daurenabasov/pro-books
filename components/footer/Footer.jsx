// import next
import Image from "next/image";
import Link from "next/link";
// import image
import Logo from "../../public/logoBunner.png";
// import framer-motion
import { motion } from "framer-motion";
//import styles
import s from "./footer.module.css";

const Footer = () => {
  return (
    <div>
      <motion.footer
        id={s.footer__container}
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 1 }}
      >
        <div className={s.footer__logo}>
          <Image src={Logo} alt="img" width={405} height={120} />
        </div>
        <div className={s.footer__links}>
          <nav>
            <ul className={s.about}>
              <h1>
                <Link href="#about__container">
                  <a>About</a>
                </Link>
              </h1>
              <li>
                <Link href="https://github.com/daurenabasov/books-shop">
                  <a>Github repo</a>
                </Link>
              </li>
              <li>Slack</li>
            </ul>
          </nav>

          <nav>
            <ul className={s.about}>
              <h1>Learning Platform</h1>
              <li>Home</li>
              <li>Courses</li>
              <li>Free Workshops</li>
              <li>Blog</li>
              <li>About</li>
            </ul>
          </nav>

          <nav>
            <ul className={s.about}>
              <h1>Telephone</h1>
              <li><a href="">+996709275847</a>
              </li>
              <li><a href="">+996703920343</a>
              </li>
            </ul>
          </nav>
          <nav>
            <ul className={s.about}>
              <h1>Template</h1>
              <li>Instructions</li>
              <li>Style Guide</li>
              <li>Licenses</li>
              <li>Changelog</li>
            </ul>
          </nav>
        </div>
        <span className={s.footer__title}>© Books-shop 2022</span>
      </motion.footer>
    </div>
  );
};
export default Footer;
