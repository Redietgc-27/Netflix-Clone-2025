import React, { useEffect, useState } from "react";
import Styles from "./Header.module.css";
import NetflixLogo from "../../assets/images/image-13-1024x277.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={Styles.headerOuterContainer}>
      <div className={Styles.headerContainer}>
        <div className={Styles.headerLeft}>
          <img
            src={NetflixLogo}
            alt="Netflix Logo"
            width="100"
            onClick={toggleMenu}
          />
        </div>
        <ul className={`${Styles.navLinks} ${menuOpen ? Styles.active : ""}`}>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>Latest</li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>
        <div className={Styles.headerRight}>
          <ul>
            <li>
              <SearchIcon />
            </li>
            <li>
              <NotificationsNoneIcon />
            </li>
            <li>
              <AccountBoxIcon />
            </li>
            <li>
              <ArrowDropDownIcon />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
