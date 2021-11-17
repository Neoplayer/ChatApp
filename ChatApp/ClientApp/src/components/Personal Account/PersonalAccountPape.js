import React from "react";
import styles from "./PersonalAccountPape.module.scss";
import { Progress } from "antd";

const PersonalAccountPape = () => {
  return (
    <div className={styles.accountWrapper}>
      <div className={styles.personalData}>
        <h1>Личный кабинет</h1>

        <div className={styles.dataWrapper}>
          <div className={styles.userfriendlypers}>
            <h2>На данный момент ваш рейтинг состовляет</h2>
            <Progress
              type="circle"
              strokeColor={{
                "0%": "#108ee9",
                "100%": "#87d068",
              }}
              percent={80}
              format={(per) => {
                if (per === 100) {
                  return "100%!";
                } else {
                  return `${per}%`;
                }
              }}
            />
            <h4>
              Результирующий процент прямо пропорционально зависит от вашей
              манеры общения
            </h4>
          </div>

          <div className={styles.userinfo}>
            <span>
              <h3>ФИО</h3>
              <p>Василий Великий</p>
            </span>
            <span>
              <h3>Email</h3>
              <p>vasok322@gmail.com</p>
            </span>
            <span>
              <h3>Login</h3>
              <p>HaHaITsVasok</p>
            </span>
            <span>
              <h3>Дата рождения</h3>
              <p>01.01.2005</p>
            </span>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PersonalAccountPape;
