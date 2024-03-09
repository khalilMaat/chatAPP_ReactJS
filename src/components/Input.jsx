import React from "react";
import Attch from "../img/attachment.png";
import Img from "../img/image-gallery.png";

const Input = () => {
    return (
        <div className="input">
            <input type="text" placeholder="Type Message..." />
            <div className="send">
                <img src={Attch} alt="" />
                <input type="file" style={{display:"none"}} id="file"/>
                <label htmlFor="file">
                    <img src={Img} alt=""/>
                </label>
                <button>Send</button>
            </div>
        </div>
    );
}
export default Input;