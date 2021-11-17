import React from "react";
import { Link, Outlet } from "react-router-dom";
import styles from "./ChatPage.module.scss";
import SelectedChat from "./SelectedChat/SelectedChat";
import WriteMSG from "./WriteMSG/WriteMSG";

const json = [
  {
    name: "GLOBAL",
  },
  {
    name: "COINBASE",
  },
  {
    name: "TESLA",
  },
  {
    name: "CANDIES",
  },
  {
    name: "PEACEFUL",
  },
  {
    name: "TOXIC",
  },
  {
    name: "TOXIC",
  },
  {
    name: "TOXIC",
  },
  {
    name: "TOXIC",
  },
  {
    name: "TOXIC",
  },
  {
    name: "TOXIC",
  },
];

const ChatPage = () => {
  return (
    <div className={styles.chatpageContainer}>
      <div className={styles.fullChatWrapper}>
        <div className={styles.header}>Выберите Чат!</div>
        <div className={styles.chatWrapper}>
          <div className={styles.ChatSelector}>
            {
              json.map((el, i)=>{
                return(
                  <Link key={i} to={`/chat/${i}`} className={styles.ChatLink}>{el.name}</Link>
                )
              })
            }
            </div>
          <div className={styles.ChatCurrent}>
            <Outlet />
            {/* <SelectedChat />
            <WriteMSG /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
