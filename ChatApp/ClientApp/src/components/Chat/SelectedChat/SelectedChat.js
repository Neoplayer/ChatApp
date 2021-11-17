import React, { useEffect, useRef } from "react";
import { useParams } from "react-router";
import WriteMSG from "../WriteMSG/WriteMSG";
import "./SelectedChat.scss";

const currentUser = "Даня Гений";

const json1 = [
  {
    Body: "Привет!",
    SenderName: "Паша Красава",
    DateTime: "07.11.2021",
  },
  {
    Body: "ЙО!",
    SenderName: "Даня Гений",
    DateTime: "07.11.2021",
  },
  {
    Body: "Когда закроем сем?",
    SenderName: "Паша Красава",
    DateTime: "09.11.2021",
  },
  {
    Body: "Я в своем познании настолько преисполнился, что я как будто бы уже сто триллионов миллиардов лет проживаю на триллионах и триллионах таких же планет, как эта Земля, мне этот мир абсолютно понятен, и я здесь ищу только одного - покоя, умиротворения и вот этой гармонии, от слияния с бесконечно вечным, от созерцания великого фрактального подобия и от вот этого замечательного всеединства существа, бесконечно вечного, куда ни посмотри, хоть вглубь - бесконечно малое, хоть ввысь - бесконечное большое, понимаешь?",
    SenderName: "Даня Гений",
    DateTime: "11.11.2021",
  },
  {
    Body: "Понял..",
    SenderName: "Паша Красава",
    DateTime: "13.11.2021",
  },
];
const json2 = [
  {
    Body: "Привет!",
    SenderName: "ДАМИР ПИРАТ",
    DateTime: "07.11.2021",
  },
  {
    Body: "Друтути",
    SenderName: "БУРДА",
    DateTime: "07.11.2021",
  },
  {
    Body: "А ты знаешь кто взломал игру quizlet и начал спамить что Дамир - Пират?",
    SenderName: "ДАМИР ПИРАТ",
    DateTime: "07.11.2021",
  },
  {
    Body: "Хмм",
    SenderName: "БУРДА",
    DateTime: "07.11.2021",
  },
  {
    Body: "Не не, я хз, спроси у Паши, мб он знает",
    SenderName: "БУРДА",
    DateTime: "07.11.2021",
  },
  {
    Body: "ОК :(",
    SenderName: "ДАМИР ПИРАТ",
    DateTime: "07.11.2021",
  },
];

const SelectedChat = () => {
  const reff = useRef(null);
  let { id } = useParams();
  console.log(id);

  const currentChat = id % 2 === 1 ? json1 : json2;
  const Allmessage = currentChat.map((msg, i) => {
    const MSGFRMCURUSR = msg.SenderName === currentUser;
    return (
      <div key={i} className={`msg ${MSGFRMCURUSR ? "right" : "left"}`}>
        <span className="msg-user">{msg.SenderName}</span>
        <p>{msg.Body}</p>
        <span className="msg-date">{msg.DateTime}</span>
      </div>
    );
  });

  useEffect(() => {
    reff.current.scrollTop = reff.current.scrollHeight + 100;
  }, []);

  return (
    <>
      <div ref={reff} className="selectedChat">
        {Allmessage}
      </div>
      <WriteMSG />
    </>
  );
};

export default SelectedChat;
