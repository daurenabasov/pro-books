import s from "../styles/auth.module.css";
import Link from "next/link";
import Head from "next/head";
import { motion } from "framer-motion";

const Login = () => {
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
              <div className={s.logo}>Books</div>
            </a>
          </Link>
          <form>
            <div className={s.group}>
              <input className={s.input} type="text" required />
              <span className={s.highlight}></span>
              <span className={s.bar}></span>
              <label className={s.label}>Name</label>
            </div>

            <div className={s.group}>
              <input className={s.input} type="text" required />
              <span className={s.highlight}></span>
              <span className={s.bair}></span>
              <label className={s.label}>Email</label>
            </div>
            <div className={s.group}>
              <input className={s.input} type="password" required />
              <span className={s.highlight}></span>
              <span className={s.bair}></span>
              <label className={s.label}>Password</label>
            </div>

            <button className={s.button}>
              <p className={s.button__text}>Войти</p>
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
