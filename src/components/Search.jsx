import React from "react";
import Userchat from "../img/yasser.jpg";

const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">

        <input type="text" placeholder="Find user" />

      </div>
      <div className="userChat">
        <img src={Userchat} alt="" />
        <div className="userChatInfo">
          <span>ahmed</span>
        </div>
      </div>
    </div>
  );
};
export default Search;
