import s from "/styles/registration.module.css";
import { motion } from "framer-motion";
import Link from "next/link";

const Auth = () => {
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
            <div className={s.group}>
              <input className={s.input} type="password" required />
              <span className={s.highlight}></span>
              <span className={s.bair}></span>
              <label className={s.label}>Repeat password</label>
            </div>

            <button className={s.button}>
              <p className={s.button__text}>Войти</p>
            </button>

            <Link href="/Auth">
              <a>
                <h1 className={s.registr__text}> У вас нет аккаунта ?</h1>
              </a>
            </Link>
          </form>
        </motion.div>
      </div>
    </>
  );
};

export default Auth;
