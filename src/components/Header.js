import React from "react";
import "./Header.css";
import PersonIcon from "@mui/icons-material/Person";
import { IconButton } from "@mui/material";
import ForumIcon from "@mui/icons-material/Forum";

const Header = () => {
  return (
    <div className="header">
      <IconButton>
        <PersonIcon fontSize="Large" className="header__icon" />
      </IconButton>
      <img src="https://1000logos.net/wp-content/uploads/2018/07/Tinder-logo.png" alt="" className="header__logo" />
      <IconButton>
        <ForumIcon fontSize="Large" className="header__icon" />
      </IconButton>
    </div>
  );
};

export default Header;
