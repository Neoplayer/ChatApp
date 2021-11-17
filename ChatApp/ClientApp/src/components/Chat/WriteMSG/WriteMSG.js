import React from "react";
import "./WriteMSG.scss";
import { SendOutlined } from "@ant-design/icons";
const WriteMSG = () => {
  return (
    <div className="msg-writter-wrapper">
      <textarea className="text-msg" name="text"></textarea>
      <button onClick={() => console.log("SENDING MSG")}>
        <SendOutlined />
      </button>
    </div>
  );
};

export default WriteMSG;
