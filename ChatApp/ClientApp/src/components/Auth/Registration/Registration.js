import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import styles from "./Registration.module.scss";

const Registration = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const currentMail = localStorage.getItem("email");
    const currentPass = localStorage.getItem("password");
    if (
      currentMail !== null &&
      currentPass !== null &&
      currentMail !== undefined &&
      currentPass !== undefined
    ) {
      navigate("/chat");
      console.log("it user already logIn in system");
    }
    return () => {};
  }, []);

  const SubmitNewUser = (e) => {
    e.preventDefault();
    // setEmail(e.currentTarget.elements.email.value);
    // setPassword(e.currentTarget.elements.password.value);
    localStorage.setItem("email", e.currentTarget.elements.email.value);
    localStorage.setItem("password", e.currentTarget.elements.password.value);
    localStorage.setItem("login", e.currentTarget.elements.login.value);
    navigate("/chat");
  };

  return (
    <div className={styles.regContainer}>
      <form onSubmit={SubmitNewUser}>
        <h1>Регистрация</h1>
        <div className={styles.dataWrapper}>
          <div>
            <label>Email:</label>
            <input
              type="email"
              placeholder="email@gmail.com"
              autoComplete="email"
              id="email"
            />
          </div>
          <div>
            <label>Login:</label>
            <input
              type="text"
              placeholder="user123"
              autoComplete="login"
              id="login"
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              placeholder="*****"
              autoComplete="current-password"
              id="password"
            />
          </div>
        </div>
        <button className={styles.btnsubmit} type="submit">
          Отправить
        </button>
        <button
          onClick={() => navigate("/")}
          type="button"
          className={styles.loginRedirect}
        >
          Вернусть на страницу <br /> авторизации
        </button>
      </form>
    </div>
  );
};

export default Registration;
