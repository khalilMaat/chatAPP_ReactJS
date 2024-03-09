import React from "react";
import Avatar from "../img/khalil.jpg"

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo">Hacker Chat</div>
            <div className="user">
                <img src={Avatar} alt="" />
                <span>Khalil</span>
                <button>logout</button>
            </div>
        </div>
    );
}
export default Navbar;