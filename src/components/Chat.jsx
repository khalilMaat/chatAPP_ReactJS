import React from "react";
import Cam from "../img/webcam.png";
import User from "../img/add-user.png";
import More from "../img/more.png";
import Messages from "./Messages";
import Input from "./Input";
const Chat = () => {
    return (
        <div className="chat">
            <div className="chatInfo">
                <span>Yasser</span>
                <div className="chatIcons">
                    <img src={Cam} alt="" />
                    <img src={User} alt="" />
                    <img src={More} alt=""/>
                </div>

            </div>
            <Messages />
            <Input/>
        </div>
    );
}
export default Chat;