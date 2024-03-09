import React from "react";
import Userchat from "../img/yasser.jpg";
const Message = () => {
    return (
        <div className="message owner">
            <div className="messageInfo">
                <img src={Userchat} alt="" />
                <span>just now</span>
            </div>
            <div className="messageContent">
                <p>Hello i am khalil maatoug from tataouine and i study at tek up ariena</p>
                <img src={Userchat} alt=""/>
            </div>
        </div>
    );
}
export default Message;