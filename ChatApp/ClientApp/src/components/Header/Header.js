import React, { useContext, useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import Context from "../Context/Context";
import "./Header.scss";

const Header = () => {
  // const currentMail = localStorage.getItem("email");
  // const currentPass = localStorage.getItem("password");
  const [Linker, setLinker] = useState([]);
  
  const {User} = useContext(Context)
  
  let location = useLocation();
  
  useEffect(() => {
    const currentToken = localStorage.getItem("token");
    if (User.id === -1 || User.token === "" || currentToken === null) {
      setLinker([
        {
          url: "/",
          name: "Авторизация",
        },
        {
          url: "/registration",
          name: "Регистрация",
        },
      ]);
    } else {
      setLinker([
        {
          url: "/chat",
          name: "Чат",
        },
        {
          url: "/account",
          name: "Личный Кабинет",
        },
        {
          url: "/logout",
          name: "Выйти",
        },
      ]);
    }
  }, [location.pathname]);

  return (
    <>
      <nav className="head">
        {Linker.map((link, index) => {
          return (
            <NavLink
              className={({ isActive }) =>
                isActive ? "activeLink" : "nonActiveLink"
              }
              key={index}
              to={link.url}
            >
              {link.name}
            </NavLink>
          );
        })}
      </nav>
      <Outlet />
    </>
  );
};

export default Header;
