import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineTextsms } from "react-icons/md";
import { IoNotifications } from "react-icons/io5";
import avatar from "../../assets/avatar.png";
const Navbar = () => {
  return (
    <div className="container navbar">
      <RxHamburgerMenu />
      <ul>
        <li>
          <MdOutlineTextsms />
        </li>
        <li>
          <IoNotifications />
        </li>
        <li>
          <img src={avatar} alt="" />
          <p>
            Nomonjon Parmanov <span>developer</span>
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
