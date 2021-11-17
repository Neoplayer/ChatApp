import { useState } from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import Login from "./components/Auth/Login/Login";
import LogOut from "./components/Auth/LogOut/LogOut";
import Registration from "./components/Auth/Registration/Registration";
import ChatPage from "./components/Chat/ChatPage";
import SelectedChat from "./components/Chat/SelectedChat/SelectedChat";
import Context from "./components/Context/Context";
import Header from "./components/Header/Header";
import PersonalAccountPape from "./components/Personal Account/PersonalAccountPape";
import "./fonts/Roboto/Roboto.css";

const App = () => {
  // const requestOptions = {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify({ username: "Admin", password: "1234" }),
  // };

  // const headers = {
  //   Authorization:
  //     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJuYmYiOjE2MzY4MjE4NzUsImV4cCI6MTYzNzQyNjY3NCwiaWF0IjoxNjM2ODIxODc1fQ.a1oc01VwIvrJjpcqbRgzrA9JCaiKtoIXxahT6_9AY0w",
  // };

  // fetch("http://172.18.47.81:5000/Users/authenticate", requestOptions)
  //   .then((response) => response.json())
  //   .then((res) => console.log(res));

  const [User, setUser] = useState({
    id: -1,
    firstName: null,
    lastName: null,
    username: "",
    token: "",
    message: "",
  });
  console.log("User", User);
  const contx = { User, setUser };

  return (
    <Context.Provider value={contx}>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Login />} />
          <Route path="registration" element={<Registration />} />
          <Route path="chat" element={<ChatPage />}>
            <Route path=":id" element={<SelectedChat />} />
          </Route>
          <Route path="account" element={<PersonalAccountPape />} />
          <Route path="logout" element={<LogOut />} />
          <Route path="account" element={<PersonalAccountPape />} />
        </Route>
      </Routes>
    </Context.Provider>
  );
};

export default App;
