// import react
import { useState } from "react";
// import styles
import s from "../styles/auth.module.css";
// import next
import Link from "next/link";
import Head from "next/head";
// import framer
import { motion } from "framer-motion";
// import redux
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { login } from "../redux/actions/authUsers";
// import components
import Input from "../components/input/Input";
import Home from ".";

const Login = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    registration(username, email, password);
    const dispatch = useDispatch();
  };

  const inAuth = useSelector((state) => state.user.isAuth);
  return (
    <div>
      <Head>
        <title>Books shop</title>
        <link rel="icon" href="/title.png" />
      </Head>

      <div className={s.container}>
        <motion.div
          className={s.contant__container}
          initial={{ x: "-200px", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 3 }}
        >
          <Link href="/">
            <a>
              <div className={s.logo}>Авторизация</div>
            </a>
          </Link>
          <form onSubmit={() => dispatch(login(username, email, password))}>
            <div className={s.group}>
              <span className={s.label}>Введите ваше имя</span>
              <Input
                className={s.input}
                type="text"
                value={username}
                setValue={setUsername}
              />
              <span className={s.highlight}></span>
              <span className={s.bar}></span>
            </div>

            <div className={s.group}>
              <span className={s.label}>Введите ваш Gmail</span>
              <Input
                className={s.input}
                type="text"
                value={email}
                setValue={setEmail}
              />
              <span className={s.highlight}></span>
              <span className={s.bair}></span>
            </div>
            <div className={s.group}>
              <span className={s.label}>Введите ваш пароль</span>
              <Input
                value={password}
                setValue={setPassword}
                className={s.input}
                type="password"
                required
              />
              <span className={s.highlight}></span>
              <span className={s.bair}></span>
            </div>

            <button className={s.button}>
              <p
                className={s.button__text}
                onClick={() => dispatch(login(username, email, password))}
              >
                Войти
              </p>
            </button>

            <Link href="/Registration">
              <a>
                <h1 className={s.registr__text}> У вас нет аккаунта ?</h1>
              </a>
            </Link>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
