import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Auth } from "../../api/user";
import Context from "../../Context/Context";
import styles from "./login.module.scss";

const Login = () => {
  let navigate = useNavigate();
  const { User, setUser } = useContext(Context);

  const [user, setuser] = useState({
    firstName: null,
    id: -1,
    lastName: null,
    token: "",
    username: "",
  });

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

  useEffect(() => {
    if (User.token !== "" && User.id !== -1) {
      localStorage.setItem("token", User.token);
      navigate("/chat");
    }
  }, [User]);

  const SubmitUser = async (e) => {
    e.preventDefault();
    let email = e.currentTarget.elements.email.value;
    let password = e.currentTarget.elements.password.value;
    const res = await Auth(email, password);
    if(res.message === undefined){
      setUser(res);
      navigate("/chat");
    }
    else{
      console.log('error');
    }

    // setuser(res);
    // e.preventDefault();
    // // setEmail(e.currentTarget.elements.email.value);
    // // setPassword(e.currentTarget.elements.password.value);
    // localStorage.setItem("email", e.currentTarget.elements.email.value);
    // localStorage.setItem("password", e.currentTarget.elements.password.value);
  };

  // delete
  const Clicked = async () => {
    const res = await Auth();
    setuser(res);
  };

  return (
    <div className={styles.AuthformWrapper}>
      <form onSubmit={SubmitUser}>
        <h1>Введите почту и пароль</h1>
        <div className={styles.mailpassWrapper}>
          <div>
            <label>Email:</label>
            <input
              type="text"
              placeholder="email@gmail.com"
              autoComplete="email"
              id="email"
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
          onClick={() => navigate("registration")}
          type="button"
          className={styles.registerRedirect}
        >
          Новый пользователь?
        </button>
      </form>

      <button className={styles.btnAuth} onClick={Clicked}>
        AUTH FROM API
      </button>
    </div>
  );
};

export default Login;
