// import next
import Link from "next/link";
import { useState } from "react";
import DropDown from "./dropDownMenu/DropDown";
import Image from "next/image";
import Logo from "../../public/logo.png";
// import styles
import s from "./header.module.css";

const Header = () => {
  return (
    <div>
      <header className={s.header}>
        <div className={s.header__logo}>
          <Link href="/">
            <a>
              <Image src={Logo} alt="image" width={136} height={58} />
            </a>
          </Link>
        </div>
        <nav>
          <ul className={s.navigation}>
            <li>
              <Link href="/">
                <a>Главная </a>
              </Link>
            </li>

            <li>
              <DropDown />
            </li>
            <li>
              <Link href="/#about__container">
                <a>О нас</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Контакты</a>
              </Link>
            </li>
          </ul>
        </nav>

        <nav>
          <ul className={s.auth}>
            <li>
              <Link href="/Auth">
                <a>
                  <button className={s.auth__btn}>
                    <p className={s.btn__text}>Sign up</p>
                  </button>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/Registration">
                <a className={s.registr__btn}>Sign in</a>
              </Link>
            </li>
          </ul>

      <div className={s.burger}>
  
      </div>

        </nav>
      </header>
    </div>
  );
};

export default Header;
