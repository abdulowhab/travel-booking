import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import { Language } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header-icon"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png"
          alt=""
        />
      </Link>
      <div className="header-center">
        <input type="text" placeholder="Start your search" />
        <SearchIcon />
      </div>
      <div className="header-right">
        <p>Become a host</p>
        <Language />
        <div className="profile">
          <MenuIcon className="burger-icon" />
          <Avatar className="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
