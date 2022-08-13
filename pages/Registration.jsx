// import styles
import s from "/styles/registration.module.css";
// import framer-motion
import { motion } from "framer-motion";
// import next
import Link from "next/link";

// import Components
import Input from "../components/input/Input";

// import react
import { useState } from "react";

// import redux components
import { registration } from "../redux/actions/user";

const Auth = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    registration(username, email, password);
  };

  return (
    <>
      <div className={s.container}>
        <motion.div
          className={s.contant__container}
          initial={{ x: "-200px", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 3 }}
        >
          <Link href="/">
            <a>
              <div className={s.logo}>Регистрация</div>
            </a>
          </Link>
          <form onSubmit={handleSubmit}>
            <div className={s.group}>
              <span className={s.label}>Введите ваше имя</span>
              <Input
                value={username}
                setValue={setUsername}
                type="text"
                placeholder=""
              />

              <span className={s.highlight}></span>
              <span className={s.bar}></span>
            </div>

            <div className={s.group}>
              <span className={s.label}>Введите ваш Gmail</span>

              <Input
                value={email}
                setValue={setEmail}
                type="email"
                placeholder=""
              />

              <span className={s.highlight}></span>
              <span className={s.bair}></span>
            </div>
            <div className={s.group}>
              <span className={s.label}>Введите ваш пароль</span>

              <Input
                value={password}
                setValue={setPassword}
                type="password"
                placeholder=""
              />

              <span className={s.highlight}></span>
              <span className={s.bair}></span>
            </div>

            <button className={s.button}>
              <p className={s.button__text}>Войти</p>
            </button>

            <Link href="/Auth">
              <a>
                <h1 className={s.registr__text}> У вас есть аккаунт ?</h1>
              </a>
            </Link>
          </form>
        </motion.div>
      </div>
    </>
  );
};

export default Auth;
