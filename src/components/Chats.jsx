import React from "react";
import Userchat from "../img/yasser.jpg";
const Chats = () => {

  return (
    <div className="chats">
      <div className="userChat">
        <img src={Userchat} alt="" />
        <div className="userChatInfo">
          <span>Ahmed</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="userChat">
        <img src={Userchat} alt="" />
        <div className="userChatInfo">
          <span>Ahmed</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="userChat">
        <img src={Userchat} alt="" />
        <div className="userChatInfo">
          <span>Ahmed</span>
          <p>Hello</p>
        </div>
      </div>
    </div>
  );
};

export default Chats;
