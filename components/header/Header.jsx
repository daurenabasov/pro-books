// import next
import Link from "next/link";
import Image from "next/image";
// import react
import { useState } from "react";
// import components
import Catalog from '../../pages/Catalog'
// import images
import Logo from "../../public/logo.png";
// import styles
import s from "./header.module.css";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/reducers/userReducer";
import Burger from "../Burger/Burger";

const Header = () => {
  const inAuth = useSelector((state) => state.user.sAuth);
  const dispatch = useDispatch();
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
              <Link href="/Catalog"><a>Каталог</a></Link>
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
          {!inAuth ? (
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
          ) : (
            <>
              <button
                className={s.auth__btn}
                onClick={() => dispatch(logout())}
              >
                <p className={s.btn__text}>log out</p>
              </button>
            </>
          )}

          <div className={s.burger}>
            <Burger />

          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
